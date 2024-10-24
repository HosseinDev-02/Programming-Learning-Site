import React from 'react'

function EmptyTableMsg({title}) {
  return (
    <div className='bg-white rounded-2xl p-4 flex items-center justify-center'>
        <h1 className='text-red-500 font-YekanBakh-Bold text-lg md:text-2xl text-center'>
        {title}
    </h1>
    </div>
  )
}

export default EmptyTableMsg