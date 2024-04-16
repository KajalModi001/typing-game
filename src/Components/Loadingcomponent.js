import React from 'react'
import { Hourglass } from 'react-loader-spinner'

export default function Loadingcomponent() {
  return (
    <div>  
        <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={['white', 'black']}
        />
      </div>
  )
}
