import React from 'react'

// Components
import Header from '../../organisms/Header'

type Props = { children?: React.ReactNode }

const PageTemplate = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="bg-meli-light-gray min-h-[calc(100vh_-_50px)]">
        {children}
      </main>
    </>
  )
}

export default PageTemplate
