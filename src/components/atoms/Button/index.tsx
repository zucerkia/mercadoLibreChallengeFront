import React from 'react'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className: string
}
const Button = ({ children, className, ...attr }: Props) => {
  return (
    <button
      className={`rounded bg-meli-blue text-white py-2 ${className}`}
      {...attr}
    >
      {children}
    </button>
  )
}

export default Button
