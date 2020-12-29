// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import * as React from 'react'
import { render } from 'react-dom'
import Button from '@material-ui/core/Button'

interface Props {
  name?: string
  text?: string
}

const Hello = (props: Props) => {
  const {
    name = "David",
    text = "Nice to meet you!"
  } = props

  const [count, countUp] = React.useState(0)

  return (
    <>
      <div>Hello {name}! {text}</div>
      <div>count : {count}</div>
      <Button variant="contained" color="primary" onClick={() => countUp(count + 1)}>Button</Button>
    </>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Hello name="Takashi" text="How are you?" />,
    document.body.appendChild(document.createElement('div')),
  )
})
