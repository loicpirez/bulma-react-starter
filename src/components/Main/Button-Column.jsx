import React from 'react'
import { Button } from 'react-bulma-components/full'

// API: https://baconipsum.com/api/?type=meat-and-filler
// Language
// Loading ...
// Success : fetch success
// Error: notification https://github.com/fkhadra/react-toastify#le-style

const ButtonColumn = () => {
  return (
    <React.Fragment>
      <br/>

      <Button
        fullwidth={true}
        color='link'
        loading={false}
        rounded={true}
        onClick={console.log('click')}
      >
      Fetch data online
      </Button>
      <hr/>
      <article className='message is-info'>
        <div className='message-body'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
        </div>
      </article>
    </React.Fragment>
  )
}

export default ButtonColumn
