import React from 'react'


export default function Records() {

  return (
      <div className='shadow-lg p-5 m-5 rounded-lg md:w-[400px] md:h-[200px]'>
          <h2 className="text-2xl text-deepBlue font-bold">
              Records
          </h2>
          <EmptyRec />
         
    </div>
  )
}

export function EmptyRec() {
    return (
        <div className="flex justify-center items-center">
            <p className="lgBlack">Please add records first</p>
        </div>
    )
}

