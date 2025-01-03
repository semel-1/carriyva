import React from 'react'

const Button = (props) => {
  return (
<button
  type="submit"
  className={`bg-primary text-white w-40 h-12 rounded-lg text-medium font-bold ${props.className}`}
>
  {props.text}
</button>
)
}

export default Button