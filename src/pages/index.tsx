import React from 'react';

import Books from '../components/Homepage/Books';
import Herobanner from '../components/Homepage/HeroBanner';
import Media from '../components/Homepage/Media';
import Smallbanner from '../components/Homepage/SmallBanner';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Index = () => {
  // const router = useRouter(); //useful for baseurl

  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <Herobanner />

      <Smallbanner />

      <Books />

      <Media />
    </Main>
  );
};

export default Index;
