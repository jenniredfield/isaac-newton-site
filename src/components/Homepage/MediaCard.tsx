interface Props {
  videoUrl: string;
  description: string;
  invertOrder: boolean;
}

export default function Mediacard({
  videoUrl,
  description,
  invertOrder,
}: Props) {
  return (
    <div className="media-card w-full flex md:flex-row flex-wrap mb-20">
      <div
        className={`w-full p-8 pt-0 md:p-0 md:w-3/6 ${
          invertOrder ? 'md:order-2' : ''
        }`}
      >
        <iframe
          width="100%"
          height="315"
          src={videoUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="shadow-xl"
        />
      </div>
      <div className="w-full md:w-3/6 flex justify-center items-center">
        <p>{description}</p>
      </div>
    </div>
  );
}
