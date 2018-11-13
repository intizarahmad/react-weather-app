export default {
  getWeatherData : (lat, lon)=>{
    return `${foreCastAPIBaseUrl}${secretKey}${lat},${lon}`;
  }
}