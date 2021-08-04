import Books from '../components/Books';
import Herobanner from '../components/HeroBanner';
import Smallbanner from '../components/SmallBanner';
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
    </Main>
  );
};

export default Index;
