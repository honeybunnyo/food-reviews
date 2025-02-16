import React from 'react'
import { abrilFatface } from './fonts'

const HeadingTwo = ({ content }) => {
  return (
    <h2 className={`text-lg font-bold ${abrilFatface.className}`}>{content} </h2>
  )
}

export default HeadingTwo
