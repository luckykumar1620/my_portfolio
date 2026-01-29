import { CodeSquareIcon } from 'lucide-react'
import React from 'react'

const Logo = () => {
  return (
    <div className='flex items-center space-x-2'>
      <div className='bg-blue-800 dark:bg-blue-400 w-10 h-10 rounded-lg flex items-center
      justify-center flex-col'>
        <CodeSquareIcon className='text-white w-6 h-6' />
      </div>
      <h1 className="sm:text-xl hidden sm:block md:text-2xl font-bold
bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
  {"<Lucky.dev/>"}
</h1>
    </div>
  )
}

export default Logo
