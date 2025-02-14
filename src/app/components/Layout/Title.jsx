import React from 'react'
import { abrilFatface } from '../../lib/fonts'

const Title = ({ title }) => {
  return (
    <div className={`absolute p-8 text-white md:text-7xl text-5xl font-bold z-10 h-full w-full flex justify-start items-center ${abrilFatface.className}`}>
      {title}
    </div>
  )
}

export default Title

