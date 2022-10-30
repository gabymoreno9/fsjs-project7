import React from 'react'
import Photo from './Photo'
import NotFound from './NotFound'

function PhotoGrid(props) {
  // Search results are still loading...
  if (!props.photos) {
    return <ul></ul>
  }
  // Results are loaded but nothing was found
  else if (props.photos.length === 0) {
    return (
      <ul>
        <NotFound />
      </ul>
    )
  }
  // Got some results!
  else {
    return (
      <ul>
        {props.photos.slice(0, 24).map(photo =>
          <Photo key={photo.id} url={`https://farm5.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} />
        )}
        {/*
        <Photo url="https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg" />
        <Photo url="https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg" />
        <Photo url="https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg" />
        <Photo url="https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg" />
        */}
      </ul>
    )
  }
}

export default PhotoGrid