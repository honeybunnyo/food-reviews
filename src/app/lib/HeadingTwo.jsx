import React from 'react'
import { abrilFatface } from './fonts'

const HeadingTwo = ({ content }) => {
  return (
    <h2 className={`text-md font-bold ${abrilFatface.className}`}>{content} </h2>
  )
}

export default HeadingTwo
