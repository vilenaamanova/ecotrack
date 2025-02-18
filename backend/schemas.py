from pydantic import BaseModel
from datetime import datetime
from typing import Optional


class WeatherAirQualityBase(BaseModel):
    location: str
    timestamp: datetime
    precipitation: Optional[str] = None
    pr_description: Optional[str] = None
    temp: Optional[float] = None
    feels_like: Optional[float] = None
    pressure: Optional[int] = None
    humidity: Optional[int] = None
    visibility: Optional[int] = None
    wind_speed: Optional[float] = None
    clouds: Optional[int] = None
    country: Optional[str] = None
    city: Optional[str] = None
    aqi: Optional[int] = None
    co: Optional[float] = None
    no: Optional[float] = None
    no2: Optional[float] = None
    o3: Optional[float] = None
    pm10: Optional[float] = None
    pm25: Optional[float] = None
    so2: Optional[float] = None
    nh3: Optional[float] = None


class WeatherAirQualityCreate(WeatherAirQualityBase):
    pass


class WeatherAirQuality(WeatherAirQualityBase):
    id: int

    class Config:
        orm_mode = True
