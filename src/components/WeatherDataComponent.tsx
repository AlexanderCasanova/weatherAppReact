
import IdataWeather from "./../interfaces/IdataWeather";

interface WeatherComponentProps {
    dataWeather: IdataWeather;
  }

export const WeatherComponent: React.FC<WeatherComponentProps> = ({ dataWeather })=>{
    return (
        <div className="weatherComponent">
          <h2 className="weatherComponent__name">{dataWeather.name}</h2>
          <p className="weatherComponent__data">Temperature: {dataWeather.temp}°C</p>
          <p className="weatherComponent__data">Humidity: {dataWeather.humidity}%</p>
          <p className="weatherComponent__data">Condition: {dataWeather.description}</p>
          <img
            className="weatherComponent__img"
            src={`https://openweathermap.org/img/wn/${dataWeather.linkIcon}@2x.png`}
            alt="Weather Icon"
          />
        </div>
    )
}