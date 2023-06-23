// eslint-disable-next-line no-unused-vars
import React from 'react'
import './amg.css'
import Text from '../text/Text'
import Button from '../button/Button'

function Amg(props) {
  return (
    <div className='contAmg'>
      <img src={props.img} alt="" />
      <Button/>
      <div className="bcg"></div>
      <Text/>
    </div>
  )
}

export default Amg