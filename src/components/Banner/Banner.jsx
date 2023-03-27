import React from 'react'
import './banner.css'

const Banner = (props) => {
    return (
        <>
        <div className="banner">
      <h1>{props.Heading}</h1>
      </div>
        </>
    )
}

export default Banner