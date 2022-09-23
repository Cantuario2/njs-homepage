import Link from 'next/link';
import { useState } from 'react';

const Menu = () => {
  const linkClass = 'lg:inline-flex lg:w-auto w-full px-3 py-2 text-white font-bold items-center justify-center hover:bg-gray-400 hover:text-white';
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className='flex items-center flex-wrap bg-black p-3'>
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 '>
            <span className='text-xl text-white font-bold uppercase tracking-wide'>
              LOGO GOES HERE
            </span>
          </a>
        </Link>
        <button
          className=' inline-flex p-3 hover:bg-gray-400 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>

        <div className={`${active ? '' : 'hidden'} w-full lg:inline-flex lg:flex-grow lg:w-auto`} >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto'>
            <Link href='#lorem'>
              <a className={linkClass}>
                LOREM
              </a>
            </Link>
            <Link href='#dolor'>
              <a className={linkClass}>
                DOLOR
              </a>
            </Link>
            <Link href='#amet'>
              <a className={linkClass}>
                AMET
              </a>
            </Link>
            <Link href='#elit'>
              <a className={linkClass}>
                ELIT
              </a>
            </Link>
            <Link href='#book'>
              <a className={linkClass}>
                BOOK A TABLE
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Menu;
