import React from 'react'

import {Label} from 'semantic-ui-react';



const gridNumber = (props) => {

  let isPressed = props.activeNumbers.indexOf(props.value) !== -1;
  const isPressedStyle = {
    backgroundColor: 'rgb(93, 133, 164)'
  }

  return (
    <Label style={isPressed ? isPressedStyle : null} onClick={() => props.onClick(props.value)} size='massive' as='a'>{props.value}</Label>
  )
}

export default gridNumber;