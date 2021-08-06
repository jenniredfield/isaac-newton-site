import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <div className="about w-5/6 mx-auto py-20">
      <div className="circle mx-auto" />
      <div className="mx-auto text-center pt-8">
        <p>
          Nulla cursus tempus elit quis faucibus. Sed ullamcorper metus vel arcu
          dignissim pretium ut at eros. Maecenas fermentum odio pulvinar ornare
          rhoncus. Proin ultrices eros id risus condimentum, vel iaculis tellus
          placerat. Pellentesque accumsan, tortor id dignissim interdum, massa
          quam tristique ipsum, vel gravida massa diam et eros. Suspendisse id
          tincidunt purus, at consectetur diam. Donec condimentum nunc porttitor
          porttitor consectetur. Cras volutpat dui nec erat dignissim
          ullamcorper. Pellentesque accumsan, tortor id dignissim interdum,
          massa quam tristique ipsum, vel gravida massa diam et eros.
          Suspendisse id tincidunt purus, at consectetur diam. Donec condimentum
          nunc porttitor porttitor consectetur. Cras volutpat dui nec erat
          dignissim ullamcorper
        </p>
        <p>
          Nulla cursus tempus elit quis faucibus. Sed ullamcorper metus vel arcu
          dignissim pretium ut at eros. Maecenas fermentum odio pulvinar ornare
          rhoncus. Proin ultrices eros id risus condimentum, vel iaculis tellus
          placerat. Pellentesque accumsan, tortor id dignissim interdum, massa
          quam tristique ipsum, vel gravida massa diam et eros. Suspendisse id
          tincidunt purus, at consectetur diam. Donec condimentum nunc porttitor
          porttitor consectetur. Cras volutpat dui nec erat dignissim
          ullamcorper. Pellentesque accumsan, tortor id dignissim interdum,
          massa quam tristique ipsum, vel gravida massa diam et eros.
          Suspendisse id tincidunt purus, at consectetur diam. Donec condimentum
          nunc porttitor porttitor consectetur. Cras volutpat dui nec erat
          dignissim ullamcorper
        </p>
      </div>
    </div>
  </Main>
);

export default About;
