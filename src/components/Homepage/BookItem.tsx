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
    <div className="w-full mx-auto flex flex-col md:flex-row justify-evenly mb-12">
      <img
        src={imgUrl}
        className={`w-full md:w-2/6 ${invertOrder ? 'md:order-2' : ''}`}
        alt="isaac book"
      />
      <div className="book-description flex flex-col align-center self-center p-8 max-w-lg">
        <p>{title}</p>
        <p>{description}</p>
        <div className="text-xl">
          <Link href="https://www.amazon.com">BUY NOW</Link>
        </div>
      </div>
    </div>
  );
}
