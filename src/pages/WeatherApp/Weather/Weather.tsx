import { useAppSelector } from "store/hooks"
import { DeleteButtonAllCards, DeleteButtonWeather, DeleteButtonWeatherBox, WeatherPagesWrapper } from "./styles"
import {
  weatherSliceActions,
  weatherSliceSelectors,
} from "store/redux/weather/weatherSlice"

import {
  WeatherBlock,
  City,
  IconBox,
  IconWeather,
  IconWeatherContainer,
  Temperatur,
  WeatherInfo,
  
} from "../Home/styles"
import { useDispatch } from "react-redux"

function Weather() {
  const saveWeather = useAppSelector(weatherSliceSelectors.savedWeather);
  const dispatch = useDispatch();

 const deleteAllCards = ()=>{
  dispatch(weatherSliceActions.deleteAllCards());
 }
  const weatherCard = saveWeather.map(weather => {

    const deleteWeatherCardWeather = (id: string)=>{
   
   dispatch(weatherSliceActions.deleteWeatherCardWeather(id))
    }
    const tempCelc = () => {
      return `${(Number(weather.weather) - 273.15).toFixed(1)}°`
    }

    return (
      <WeatherBlock key={weather.id}>
        <WeatherInfo>
          <IconWeatherContainer>
            <Temperatur>{tempCelc()}</Temperatur>
            <IconBox>
              <IconWeather
                src={`http://openweathermap.org/img/w/${weather.icon}.png`}
              />
              <IconWeather
                src={`http://openweathermap.org/img/w/${weather.icon}.png`}
              />
              <IconWeather
                src={`http://openweathermap.org/img/w/${weather.icon}.png`}
              />
            </IconBox>
          </IconWeatherContainer>
          <City>{weather.city}</City>
        </WeatherInfo>
        <DeleteButtonWeatherBox>
            <DeleteButtonWeather onClick={()=>deleteWeatherCardWeather(weather.id)}>Delete</DeleteButtonWeather>
        </DeleteButtonWeatherBox>
      </WeatherBlock>
    )
  })

  return (<WeatherPagesWrapper>{weatherCard}
  { weatherCard.length > 0 && (<DeleteButtonAllCards onClick={deleteAllCards}>Delete all cards</DeleteButtonAllCards>)}
  </WeatherPagesWrapper>)
}

export default Weather
