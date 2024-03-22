import React from 'react'
export const HighlightIcon = () => <span style={{fontWeight: 'bold'}}>H</span>
export const HighlightDecorator = (props) => (
  <span style={{backgroundColor: 'yellow'}}>{props.children}</span>
)
