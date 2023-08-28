import { useState, ChangeEvent, useEffect } from "react"
import { OptionType,ForecastType } from "../types"

export const useForecast=()=>{
    const [place, setPlace] = useState<string>('')
  const [options, setOptions] = useState<[]>([])
  const [location, setLocation] = useState<OptionType | null>(null)
  const [forecast, setForecast] = useState<ForecastType | null>(null)

  const getSearchOptions = (value: string) => {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=${
      process.env.REACT_APP_API_KEY
    }
    `)
      .then((res) => res.json())
      .then((data) => setOptions(data))
  }

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPlace(e.target.value.trim())

    if (e.target.value === '') return

    getSearchOptions(e.target.value)
  }

  const getForecast = (city: OptionType) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setForecast(data))
  }

  const onSubmit = () => {
    if (!location) return

    getForecast(location)
  }

  const onOptionSelect = (option: OptionType) => {
    setLocation(option)
  }

  useEffect(() => {
    if (location) {
      setPlace(location.name)
      setOptions([])
    }
  }, [location])


  return {
    place,options,forecast,onInputChange,onOptionSelect,onSubmit
  }

}