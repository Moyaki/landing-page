// eslint-disable-next-line no-unused-vars
import React from 'react'
import  avatar from '../assets/avatar.png'
import quotationmark from "../assets/quotationMark.png"

const FeedbackCard = () => {
  return (
    <div className='bg-white p-8 rounded-3x1 shadow-xl my-8 mx-2'>
      <div className='flex-justify-between'>
        <div className='flex gap-4'>
            <img src={avatar} />
            <div>
                <h1>Temitope Badmus</h1>
                <p>Frontend Developer</p>
            </div>

        </div>
            <img className='h-8' src={quotationmark} />
      </div>
      <div className='py-8'>
        <h3 className='text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius illo reprehenderit vero suscipit impedit! Accusantium itaque cumque est, facilis obcaecati esse vitae tenetur voluptatem debitis iusto dolorum? Consequatur, doloribus est.</h3>
        </div>
    </div>
  )
}

export default FeedbackCard
