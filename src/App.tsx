import { ChangeEvent, useEffect, useState } from 'react'
import { OptionType } from './types'
import Search from './components/Search'

const App = (): JSX.Element => {
  const [place, setPlace] = useState<string>('')
  const [options, setOptions] = useState<[]>([])
  const [location,setLocation]=useState<OptionType|null>(null)

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

  const getForecast=(city:OptionType)=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
    .then(res=>res.json())
    .then(data=>console.log(data))
  }

  const onSubmit=()=>{
    if(!location) return

    getForecast(location)
  }

  const onOptionSelect=(option:OptionType)=>{

    setLocation(option)

    
  }

  useEffect(()=>{

    if(location){
      setPlace(location.name)
      setOptions([])
    }

  },[location])

  return (
    <main className="flex justify-center items-center bg-[#001427] h-[100vh] w-full ">

      <Search place={place} options={options} onInputChange={onInputChange} onSubmit={onSubmit} onOptionSelect={onOptionSelect}/>
      
    </main>
  )
}

export default App

//https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
