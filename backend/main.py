from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal, engine
import crud, schemas, models
from datetime import datetime
from dotenv import load_dotenv
import os
from fastapi.middleware.cors import CORSMiddleware

load_dotenv()

models.Base.metadata.create_all(bind=engine)

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.post("/weather-air-quality/", response_model=schemas.WeatherAirQualityCreate)
def create_weather_air_quality(weather_air_quality: schemas.WeatherAirQualityCreate, db: Session = Depends(get_db)):
    return crud.create_weather_air_quality(db, weather_air_quality)


@app.get("/weather-air-quality/", response_model=list[schemas.WeatherAirQualityCreate])
def read_weather_air_quality(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return crud.get_weather_air_quality(db, skip=skip, limit=limit)


@app.get("/fetch-weather-air-quality/")
def fetch_and_return_weather_air_quality(lat: float, lon: float):
    try:
        weather_data = crud.fetch_weather_data(lat, lon, os.getenv("OPENWEATHERMAP_API_KEY"))
        air_pollution_data = crud.fetch_air_quality_data(lat, lon, os.getenv("OPENWEATHERMAP_API_KEY"))

        response_data = {
            "location": f"Lat: {lat}, Lon {lon}",
            "timestamp": datetime.now(),
            "weather": {
                "temperature": weather_data["main"]["temp"],
                "feels_like": weather_data["main"]["feels_like"],
                "pressure": weather_data["main"]["pressure"],
                "humidity": weather_data["main"]["humidity"],
                "visibility": weather_data["visibility"],
                "wind_speed": weather_data["wind"]["speed"],
                "clouds": weather_data["clouds"]["all"],
                "precipitation": weather_data["weather"][0]["main"],
                "description": weather_data["weather"][0]["description"],
                "country": weather_data["sys"]["country"],
                "city": weather_data["name"],
            },
            "air_quality": {
                "aqi": air_pollution_data["list"][0]["main"]["aqi"],
                "co": air_pollution_data["list"][0]["components"]["co"],
                "no": air_pollution_data["list"][0]["components"]["no"],
                "no2": air_pollution_data["list"][0]["components"]["no2"],
                "o3": air_pollution_data["list"][0]["components"]["o3"],
                "pm10": air_pollution_data["list"][0]["components"]["pm10"],
                "pm25": air_pollution_data["list"][0]["components"]["pm2_5"],
                "so2": air_pollution_data["list"][0]["components"]["so2"],
                "nh3": air_pollution_data["list"][0]["components"]["nh3"],
            },
        }
        return response_data
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
