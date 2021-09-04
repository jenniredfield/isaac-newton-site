import MediaCard from './MediaCard';

const videos = [
  {
    videoUrl: 'https://www.youtube.com/embed/s2YZN2L700Q',
    description: 'History of Isaac Newton',
  },
  {
    videoUrl: 'https://www.youtube.com/embed/TJawNbIGYbo',
    description: 'History of Isaac Newton',
  },
  {
    videoUrl: 'https://www.youtube.com/embed/n6lRdH1EzIo',
    description: 'History of Isaac Newton',
  },
];

export default function Media() {
  return (
    <div className="min-h-screen bg-white relative pt-36 md:pt-96">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute -top-1"
      >
        <path
          fill="#F6F2F2"
          fillOpacity="1"
          d="M0,160L40,186.7C80,213,160,267,240,288C320,309,400,299,480,272C560,245,640,203,720,165.3C800,128,880,96,960,117.3C1040,139,1120,213,1200,250.7C1280,288,1360,288,1400,288L1440,288L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        />
      </svg>
      <div className="media-content">
        <div className="my-constraint">
          {videos.map((v, i) => (
            <MediaCard
              description={v.description}
              videoUrl={v.videoUrl}
              key={v.videoUrl}
              invertOrder={i % 2 === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
