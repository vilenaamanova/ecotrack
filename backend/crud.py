from sqlalchemy.orm import Session
import models, schemas, requests


def create_weather_air_quality(db: Session, weather_air_quality: schemas.WeatherAirQualityCreate):
    db_weather_air_quality = models.WeatherAirQuality(**weather_air_quality.dict())
    db.add(db_weather_air_quality)
    db.commit()
    db.refresh(db_weather_air_quality)
    return db_weather_air_quality


def get_weather_air_quality(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.WeatherAirQuality).offset(skip).limit(limit).all()


def fetch_weather_data(lat: float, lon: float, api_key: str):
    url = "https://api.openweathermap.org/data/2.5/weather"
    params = {
        "lat": lat,
        "lon": lon,
        "appid": api_key,
        "units": "metric"
    }
    response = requests.get(url, params=params)
    if response.status_code == 200:
        return response.json()
    else:
        raise Exception(f"Failed to fetch weather data: {response.status_code}")


def fetch_air_quality_data(lat: float, lon: float, api_key: str):
    url = "http://api.openweathermap.org/data/2.5/air_pollution"
    params = {
        "lat": lat,
        "lon": lon,
        "appid": api_key,
        "units": "metric"
    }
    response = requests.get(url, params=params)
    if response.status_code == 200:
        return response.json()
    else:
        raise Exception(f"Failed to fetch air quality data: {response.status_code}")
