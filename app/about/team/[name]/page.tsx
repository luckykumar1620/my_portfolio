import React from 'react'

type PageProps = {
  params: {
    name: string
  }
}

const dynamicPage = async ({params}:PageProps) => {
    const {name} =params
  return ( 
    <div>
      Dynamic page {name}
    </div>
  )
}

export default dynamicPage
