import { ChangeEvent } from "react"
import { OptionType } from "../types"

type Props={
  place:string,
  options:[],
  onInputChange: (e:ChangeEvent<HTMLInputElement>)=>void,

  onOptionSelect:(otpion:OptionType)=>void,
  onSubmit:()=>void
}


const Search = ({place,options,onInputChange,onOptionSelect,onSubmit}:Props): JSX.Element => {
  

  return (
    <main className="flex justify-center items-center bg-[#001427] h-[100vh] w-full ">
      <section
        className="bg-[#708D81]  bg-opacity-40 backdrop-blur-lg drop-shadow-md rounded w-full md:max-w-[500px]
        p-4 flex flex-col text-center items-center justify-center md:px-18 lg:px24 h-full lg:h-[500px] text-white"
      >
        <h1 className=" text-4xl font-thin">
          Weather{' '}
          <span className=" font-black  text-[#ffb703] ">Forecast </span>
        </h1>
        <p className=" text-sm mt-3 italic">
          Want to know what is the weather like at your next travel destination?
        </p>

        <div className="relative flex mt-10 md:mt-4">
          <input
            type="text"
            value={place}
            onChange={onInputChange}
            className=" text-[#001427] px-2 py-1 rounded-l-md border bg-[#fff2b2] border-white"
          />

          <ul className=" absolute top-9 bg-[#fff2b2] ml-1 rounded-b-md text-black ">
            {options.map((option: OptionType, index: number) => (
              <li key={option.name + '-' + index}>
                <button onClick={()=>onOptionSelect(option)} className="text-left text-sm w-full hover:bg-[#ffb703] hover:text-black px-2 py-1 cursor-pointer">
                  {option.name}
                </button>
              </li>
            ))}
          </ul>
          <button onClick={onSubmit} className=" text-sm rounded-r-md border bg-[#001427] border-white hover:border-[#ffb703] hover:text-[#ffb703] text-zinc-100 px-2 py cursor-pointer">
            search
          </button>
        </div>
      </section>
    </main>
  )
}

export default Search

//https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
