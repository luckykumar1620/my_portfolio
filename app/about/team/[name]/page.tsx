import React from 'react'

type PageProps = {
  params: {
    name: string
  }
}

const dynamicPage = async ({params}:PageProps) => {
    const name=(await params).name
  return ( 
    <div>
      Dynamic page {name}
    </div>
  )
}

export default dynamicPage
