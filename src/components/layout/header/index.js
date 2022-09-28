import React from 'react'

import Nav from './nav'

import siteConfig from '../../../config/site'

export default function Header() {
  return (
    <header>
      <div className='p-1 border-2 border-accent-500'>
        <h1 className='text-4xl text-center text-primary-500'>{siteConfig.company}</h1>
        <Nav />
      </div>
    </header>

  )
}

