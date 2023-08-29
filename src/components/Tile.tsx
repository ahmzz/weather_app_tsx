import React from 'react'
import Wind from './Icons/Wind'
import Feels from './Icons/Feels'
import Pressure from './Icons/Pressure'
import Pop from './Icons/Pop'
import Visibility from './Icons/Visibility'
import Humidity from './Icons/Humidity'

type Props = {
  icon: 'wind' | 'feels' | 'humidity' | 'visibility' | 'pop' | 'pressure'
  title: string
  info: string | JSX.Element
  desc: string
}

const icons = {
  wind: Wind,
  feels: Feels,
  humidity: Humidity,
  visibility: Visibility,
  pop: Pop,
  pressure: Pressure,
}

const Tile = ({ icon, title, info, desc }: Props): JSX.Element => {
  const Icon = icons[icon]
  return (
    <article className="w-[140px] h-[115px] p-4 text-xs font-bold flex flex-col  justify-between bg-white/20 backdrop-blur-lg rounded drop-shadow-lg mb-2">
      <div className='flex items-center text-sm font-bold'>
      <Icon /> <h4 className='ml-1'>{title}</h4>
      </div>
      <h3 className='mt-2 text-lg'>{info}</h3>
      <p className='text-xs font-bold'>{desc}</p>
    </article>
  )
}

export default Tile
