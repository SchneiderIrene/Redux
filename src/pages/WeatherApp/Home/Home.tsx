import Spiner from "components/Spinner/Spinner"
import {
  ApiError,
  City,
  ErrorBox,
  IconBox,
  IconWeather,
  IconWeatherContainer,
  MessageError,
  SaveDeleteButton,
  SaveDeleteButtonBox,
  Temperatur,
  WeatherBlock,
  WeatherButton,
  WeatherErrorWrapper,
  WeatherInfo,
  WeatherInput,
  WeatherMainWrapper,
  WeatherSearchWrapper,
} from "./styles"
import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  weatherSlice,
  weatherSliceActions,
  weatherSliceSelectors,
} from "store/redux/weather/weatherSlice"
import { ChangeEvent, useState } from "react"

function Home() {
  const [city, setCity] = useState<string>("")
  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value)
  }

  const dispatch = useAppDispatch()
  const data = useAppSelector(weatherSliceSelectors.weather)
  const status = useAppSelector(weatherSliceSelectors.status)
  const error = useAppSelector(weatherSliceSelectors.error)

  const getWeather = () => {
    dispatch(weatherSliceActions.getWeather({ city }))

    setCity("")
  }

  const saveWeather = (id: string) => {
    dispatch(weatherSliceActions.saveWeatherCard(id))
    dispatch(weatherSliceActions.deleteWeatherCardHome(id))
  }

  const deleteError = () => {
    dispatch(weatherSliceActions.deleteError())
  }

  const weatherData = data.map(weather => {
    const tempCelc = () => {
      return `${(Number(weather.weather) - 273.15).toFixed(1)}°`
    }

    const deleteWeatherCardHome = () => {
      dispatch(weatherSliceActions.deleteWeatherCardHome(weather.id))
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
        <SaveDeleteButtonBox>
          <SaveDeleteButton onClick={() => saveWeather(weather.id)}>
            Save
          </SaveDeleteButton>
          <SaveDeleteButton onClick={deleteWeatherCardHome}>
            Delete
          </SaveDeleteButton>
        </SaveDeleteButtonBox>
      </WeatherBlock>
    )
  })

  return (
    <WeatherMainWrapper>
      <WeatherSearchWrapper>
        <WeatherInput
          placeholder="Colorado"
          value={city}
          onChange={onChangeInput}
          disabled={status === "error" || status === "loading"}
        />
        <WeatherButton
          onClick={getWeather}
          disabled={status === "loading" || status === "error"}
        >
          Search
        </WeatherButton>
      </WeatherSearchWrapper>
      {status === "loading" && <Spiner />}
      {weatherData}
      {status === "error" && (
        <WeatherErrorWrapper>
          <ErrorBox>
            <ApiError>API Error: {error.cod}</ApiError>
            <MessageError>{error?.message}</MessageError>
          </ErrorBox>
          <SaveDeleteButton onClick={deleteError}>Delete</SaveDeleteButton>
        </WeatherErrorWrapper>
      )}
    </WeatherMainWrapper>
  )
}

export default Home
