// eslint-disable-next-line no-unused-vars
import React from 'react'
import Button from '../button/Button'
import Text from '../text/Text'
import './audi.css'


function Audi(props) {
  return (
    <div className='contAudi'>
      <img src={props.img} alt="" />
      <div className="bcgS">
        <Button/>
        <Text/>
      </div>
    </div>
  )
}

export default Audi