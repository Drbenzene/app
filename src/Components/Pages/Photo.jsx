import React, {useState, useEffect} from 'react'
import axios from 'axios'


function Photo() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const url= "https://api.imgflip.com/get_memes"
    axios.get(url)
    .then(res => {
      console.log(res.data)
      setPhotos(res.data.data.memes.slice(0, 30))
    })
  })

  return (
    <div style={{display: 'flex', flexWrap: 'wrap', margin: '20px'}}>
      {photos.map(photo => (
        <div >
          <img src={photo.url} alt=""  width="200px" height="200px"/>
        </div>
      ))}
    </div>
  )
}

export default Photo