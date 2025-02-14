import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
    <div className='flex flex-col gap-4'>
      <Card title={'Choc chip cookies'} date={'11 February 2025'} url={'cookies'}/>
      <Card title={'Cherry Pie'} date={'17 January 2025'} url={'cherry-pie'}/>
      <Card title={'Tiramisu'} date={'18 January 2025'} url={'tiramisu'}/>
    </div>
  )
}

export default Cards