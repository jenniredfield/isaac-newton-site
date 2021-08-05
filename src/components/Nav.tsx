import { useEffect, useState } from 'react';

import Link from 'next/link';
import { slide as Menu } from 'react-burger-menu';

const menuButtonStyle = {
  width: '32px',
  height: '3px',
  backgroundColor: 'black',
  margin: '6px 0',
};

const menuButton = (
  <div className="h-2 pl-2 pt-2">
    <div style={menuButtonStyle} />
    <div style={menuButtonStyle} />
    <div style={menuButtonStyle} />
  </div>
);

export default function Nav() {
  const [isDesktop, setIsDesktop] = useState(false);
  console.log('🚀 ~ file: nav.tsx ~ line 7 ~ Nav ~ isDesktop', isDesktop);
  useEffect(() => {
    setIsDesktop(window.matchMedia('(min-width: 768px)').matches);

    window.addEventListener('resize', () => {
      setIsDesktop(window.matchMedia('(min-width: 768px)').matches);
    });
  }, []);

  const links = (
    <>
      <div>
        <Link href="/">Isaac Newton</Link>
      </div>
      <ul className="flex flex-col md:flex-row justify-evenly md:space-x-32">
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/books">Books</Link>
        </li>
        <li>
          <Link href="/research">Research</Link>
        </li>
      </ul>
    </>
  );

  return (
    <>
      <nav className="max-w-full h-12">
        <div className="container mx-auto flex md:justify-evenly md:items-center h-full">
          {!isDesktop ? (
            <Menu left customBurgerIcon={menuButton}>
              <div className="container flex flex-col text-center">{links}</div>
            </Menu>
          ) : (
            <>{links} </>
          )}
        </div>
      </nav>
    </>
  );
}
