import Forecast from './components/Forecast'
import Search from './components/Search'
import { useForecast } from './hooks/useForecast'
const App = (): JSX.Element => {
  const { place, options, forecast, onInputChange, onOptionSelect, onSubmit } =
    useForecast()

  return (
    <main className="flex justify-center items-center bg-[#001427] h-[100vh] w-full ">
      {forecast ? (
        <Forecast forecast={forecast}/>
      ) : (
        <Search
          place={place}
          options={options}
          onInputChange={onInputChange}
          onSubmit={onSubmit}
          onOptionSelect={onOptionSelect}
        />
      )}
    </main>
  )
}

export default App

//https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
