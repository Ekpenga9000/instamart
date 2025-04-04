import React from 'react'; 
import { Link } from 'react-router-dom';

function Navbar() {
  return (
      <header>
          <nav className='bg-sky-950 text-white flex items-center justify-center gap-[10rem] p-4'>
              <h2 className='font-semibold text-lg'><Link to={"/"}>InstaRush</Link></h2>
              <ul className='flex items-center gap-4'>
                  <li>
                      <Link to="/">All Posts</Link>
                  </li>
                  <li>
                      <Link to="/create">Create Posts</Link>
                  </li>
              </ul> 
          </nav>
    </header>
  )
}

export default Navbar;