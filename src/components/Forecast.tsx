import React from 'react'
import { ForecastType } from '../types'
import Sunrise from './Icons/Sunrise';
import Sunset from './Icons/Sunset';
import { getSunTime } from '../helpers';

type Props = {
    forecast:ForecastType;
    
    
    
}

const Degree=({temp}:{temp:number}):JSX.Element=>(

    <span>
        {temp}<sup>o</sup>
    </span>


)

const Forecast = ({forecast}:Props):JSX.Element => {
    const today=forecast.list[0]
    console.log(forecast);
  return (
    <div  className='w-full md:max-w-[500px] py-4 md:py-4 md:px-10 lg:px-24 h-full lg:h-auto bg-white  bg-opacity-20
     backdrop-blur-ls rounded drop-shadow-lg'>
        <div className=' mx-auto w-[300px]'>
            <section className='text-center'>
                <h2 className=' text-2xl  text-white '>{forecast.name}, <span className='font-thin'>{forecast.country}</span> </h2>
                <h1 className='text-4xl font-extrabold text-white'>
                    <Degree temp={Math.round(today.main.temp)}/>
                </h1>
                <p className='text-sm'>{today.weather[0].main} {today.weather[0].description}</p>
                <p className='text-sm'>H:<Degree temp={Math.ceil(today.main.temp_max)}/>{' '}
                L:<Degree temp={Math.floor(today.main.temp_min)}/>
                </p>
                
            </section>

            <section className='flex overflow-x-scroll mt-2 pb-2 mb-5'>
                {forecast.list.map((item,i)=>(
                    <div key={i} className=' inline-block text-center w-[50px]  flex-shrink-0'>
                        <p className='text-sm'>{i===0?'Now': new Date(item.dt*1000).getHours()}</p>
                        <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="" />
                        <p className='text-sm font-bold'><Degree temp={Math.round(item.main.temp)}/></p>
                    </div>
                ))}
            </section>

            <section className='flex justify-between'>
                <div className='w-[140px] text-xs font-bold flex flex-col items-center bg-white/20 backdrop-blur-lg rounded drop-shadow-lg py-4 mb-5'>
                    <Sunrise/> <span className='mt-2'>{getSunTime(forecast.sunrise)}</span>
                </div>
                <div className='w-[140px] text-xs font-bold flex flex-col items-center bg-white/20 backdrop-blur-lg rounded drop-shadow-lg py-4 mb-5'>
                    <Sunset/> <span className='mt-2'>{getSunTime(forecast.sunset)}</span>
                </div>
            </section>
        </div>
     </div>
  )
}

export default Forecast