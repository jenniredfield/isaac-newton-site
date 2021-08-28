import { useState, useEffect } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { slide as Menu } from 'react-burger-menu';

const menuButtonStyle = {
  width: '32px',
  height: '3px',
  backgroundColor: 'rgb(226, 232, 240)',
  margin: '6px 0',
};

const menuButton = (
  <div className="h-2 pl-2">
    <div style={menuButtonStyle} />
    <div style={menuButtonStyle} />
    <div style={menuButtonStyle} />
  </div>
);

const styles = {
  bmBurgerButton: {
    position: 'absolute',
    width: '41px',
    height: '41px',
    left: '15px',
    top: '24px',
  },
  bmBurgerBars: {
    background: '#cdcecf',
  },
  bmBurgerBarsHover: {
    background: '#a90000',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
  },
  bmCross: {
    background: '#bdc3c7',
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
    top: '0px',
    left: '0px',
    width: '100vw',
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
  },
  bmMorphShape: {
    fill: '#373a47',
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
  },
  bmItem: {
    display: 'inline-block',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
  },
};

export default function Nav() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    setIsDesktop(window.matchMedia('(min-width: 768px)').matches);

    window.addEventListener('resize', () => {
      setIsDesktop(window.matchMedia('(min-width: 768px)').matches);
    });
  }, []);

  const router = useRouter();
  const isHome = router.pathname === '/';

  const logo = (
    <div className="flex items-center justify-center">
      <img
        src={`${router.basePath}/assets/images/atom-svgrepo-com.svg`}
        width="25px"
        className="mr-2"
        alt="atom"
      />
      <Link href="/">Isaac Newton</Link>
    </div>
  );

  const links = (
    <>
      {logo}
      <ul className="flex flex-col md:flex-row justify-evenly md:space-x-32 space-y-8 md:space-y-0 py-8 md:py-0">
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
      <nav
        className={`nav-class max-w-full h-20 text-2xl ${
          !isHome ? 'shadow' : ''
        }`}
      >
        <div
          className={`container mx-auto flex justify-between md:justify-evenly items-center h-full px-3 ${
            isHome ? 'primary-light-text' : 'primary-dark-text'
          }`}
        >
          {!isDesktop ? (
            <>
              <Menu
                customBurgerIcon={menuButton}
                menuClassName="py-5"
                className="burger-menu-outer"
                noOverlay
                styles={styles}
              >
                <div className="container flex flex-col text-center text-8xl">
                  {links}
                </div>
              </Menu>
              {logo}
            </>
          ) : (
            <>{links} </>
          )}
        </div>
      </nav>
    </>
  );
}
