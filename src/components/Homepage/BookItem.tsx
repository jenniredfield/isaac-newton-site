import Link from 'next/link';

interface Props {
  imgUrl: string;
  title: string;
  description: string;
  invertOrder: boolean;
}

export default function BookItem({
  imgUrl,
  title,
  description,
  invertOrder,
}: Props) {
  return (
    <div className="w-full mx-auto flex flex-col md:flex-row md:w-5/6 justify-evenly mb-24 shadow md:relative md:h-96rounded-2xl md:rounded-3xl max-w-screen-sm bg-light-gray">
      <div className="md:relative md:w-3/6">
        <img
          src={imgUrl}
          className={`w-full md:w-4/6 md:left-16 md:top-4 md:absolute ${
            invertOrder ? 'md:order-2' : ''
          }`}
          alt="isaac book"
        />
      </div>
      <div className="book-description flex flex-col align-center self-center p-8 md:w-3/6">
        <p className="m-0 mb-5 text-xl">{title}</p>
        <p className="text-base mb-5">{description}</p>
        <div className="text-xl">
          <Link href="https://www.amazon.com">BUY NOW</Link>
        </div>
      </div>
    </div>
  );
}
