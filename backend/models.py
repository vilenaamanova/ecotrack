from sqlalchemy import Column, Integer, String, Float, DateTime, JSON
from database import Base


class WeatherAirQuality(Base):
    __tablename__ = "weather"
    id = Column(Integer, primary_key=True, index=True)
    location = Column(String, index=True)
    timestamp = Column(DateTime)
    precipitation = Column(String)
    pr_description = Column(String)
    temp = Column(Float)
    feels_like = Column(Float)
    pressure = Column(Integer)
    humidity = Column(Integer)
    visibility = Column(Integer)
    wind_speed = Column(Float)
    clouds = Column(Integer)
    country = Column(String)
    city = Column(String)
    aqi = Column(Integer)
    co = Column(Float)
    no = Column(Float)
    no2 = Column(Float)
    o3 = Column(Float)
    pm10 = Column(Float)
    pm25 = Column(Float)
    so2 = Column(Float)
    nh3 = Column(Float)
