import React from 'react'
import { Link } from "gatsby"


const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Locations', href: '/locations' },
  { name: 'Countertops', href: '/countertops' },
  { name: 'Cabinets', href: '#' },
  { name: 'Tile', href: '#' },

]

export default function Example() {
  return (
    <header className="bg-base-300">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
          <div className="flex items-center">
            <Link to="/">
              <span className="sr-only">Your Company</span>
              <img className="h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=white" alt="" />
            </Link>
            <div className="ml-10 hidden space-x-8 lg:block">
              {navigation.map((link) => (
                <Link to={link.href} className="text-base font-medium text-primary-900 hover:text-primary-100">
                    {link.name}
                </Link>
              ))}
            </div>
          </div>
         </div>
      </nav>
    </header>
  )

  
}

