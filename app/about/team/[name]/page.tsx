import React from 'react'

const dynamicPage = async ({params}) => {
    const name=(await params).name
  return ( 
    <div>
      Dynamic page {name}
    </div>
  )
}

export default dynamicPage
