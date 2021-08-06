import React, { ReactNode } from 'react';

import Footer from '../components/Footer';
import Nav from '../components/Nav';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased w-full text-gray-700 font-serif">
    {props.meta}
    <>
      <Nav />
    </>

    <div className="content">{props.children}</div>

    <Footer />

    {/* <div className="border-t border-gray-300 text-center py-2 text-xs">
      © Copyright {new Date().getFullYear()} {AppConfig.title}. Powered with{' '}
      <span role="img" aria-label="Love">
        ♥
      </span>{' '}
      by <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a>{' '}
      Extended with
      <span role="img" aria-label="Love">
        ♥
      </span>{' '}
      by JBird. */}
    {/*
     * PLEASE READ THIS SECTION
     * We'll really appreciate if you could have a link to our website
     * The link doesn't need to appear on every pages, one link on one page is enough.
     * Thank you for your support it'll mean a lot for us.
     */}
    {/* </div> */}
  </div>
);

export { Main };
