export default function Herobanner() {
  return (
    <div className="hero-wrapper text-gray-50">
      <div className="hero-image" />
      <div className="hero-content w-full h-full mx-auto flex items-center justify-center flex-col px-10 text-center">
        <h1 className="text-4xl fadeInUp">Isaac Newton</h1>
        <h2 className="text-4xl fadeInUp">Science Author</h2>
        <p className="text-4xl fadeInUp"> Theory Bla Bla Author</p>
      </div>
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
    </div>
  );
}
