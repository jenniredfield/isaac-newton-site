export default function Smallbanner() {
  return (
    <div className="w-full py-8 bg-my-gray md:h-96 flex items-center">
      <svg
        className="wave-hero"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#273036"
          fillOpacity="1"
          d="M0,224L48,208C96,192,192,160,288,165.3C384,171,480,213,576,245.3C672,277,768,299,864,282.7C960,267,1056,213,1152,176C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
      <div className="w-8/12 mx-auto text-center">
        <h2>
          Experimental Physicits interested in all aspects physics, art etc.
        </h2>
        <p>
          BlaBla conducts research on a variety of topics in psychology and
          cognitive science, including common knowledge (things that everyone
          knows everyone knows), language acquisition, emotion, the moral sense,
          rationality, and trends in violence.
        </p>
        <p>Click here for research</p>
      </div>
    </div>
  );
}
