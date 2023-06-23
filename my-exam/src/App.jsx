// eslint-disable-next-line no-unused-vars
import React from 'react'
import './App.css'
import Amg from './components/comp_1/Amg'


import Audi from './components/comp_2/Audi'
import image1 from './assets/Bitmap.png'
import image2 from './assets/Bitmap (1).png'
import image3 from './assets/Bitmap (2).png'
import image4 from './assets/Bitmap (3).png'
import image5 from './assets/Bitmap (4).png'

function App() {
  return (
    <>
    <div className="container">
      <Amg img={image1}/>
      {/* <div className="blocks"> */}
        <div className="block">
          <Audi img={image2}/>
          <Audi img={image3}/>
        </div>
        <div className="block blockf">
          <Audi img={image4}/>
          <Audi img={image5}/>
        </div>
      {/* </div> */}
    </div>
    </>
  )
}

export default App
