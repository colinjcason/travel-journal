import React from 'react'

const Card = ({ title, location, googleMapsUrl, startDate, endDate, description, imageUrl }) => {
  return (
    <div className='card-container'>
      <img src={imageUrl} alt='location' className='location-image' />
      <div className='card-info'>
        <div className='card-location'>
          <img src='../images/location-pin.png' alt='pin' />
          <p>{location}</p>
          <a href={googleMapsUrl} target='_blank' rel="noreferrer">View on Google Maps</a>
        </div>
        <h1>{title}</h1>
        <h6>{startDate} - {endDate}</h6>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Card