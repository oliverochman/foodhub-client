import React from 'react'
import FlashMessage from 'react-flash-message'
import { Message, Header } from 'semantic-ui-react'

const AlertMessage = (props) => {
  return (
    <FlashMessage duration={4000} >
      <Message size="small" style={{ color: props.error ? 'red' : 'green' }}>
        <Header
          as='p'
          id="response-message"
          style={{ color: props.error ? 'red' : 'green', textAlign: 'center' }}>
          {props.message}
        </Header>
      </Message>
    </FlashMessage>
  )
}

export default AlertMessage