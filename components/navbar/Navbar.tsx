import Link from "next/link";
import { HomeIcon } from "@primer/octicons-react";
import { ActiveLink } from "../active-link/ActiveLink";


const temporalAsync = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(true)
    }, 2000);
  })
} 


const navItems = [
  { path: '/about', text: 'About'},
  { path: '/contact', text: 'Contact'},
  { path: '/pricing', text: 'Pricing'}
]


export const Navbar = async() => {

  // await temporalAsync();

  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      

      <div className="flex flex-1">
        <Link href="/" className="mr-2">
          <HomeIcon className="mr-2"/>
           Home</Link>
      </div>

      {navItems.map( item =>
        <ActiveLink
          key={item.path}
          {...item}
        />
      )}

    </nav>
  )
}
