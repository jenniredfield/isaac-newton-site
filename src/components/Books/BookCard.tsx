import Link from "next/link";

interface WhereToGet {
  name: string;
  link: string;
}

interface Props {
  title: string;
  type?: string;
  year: number;
  description: string;
  imgUrl: string;
  whereToGet: WhereToGet[]
}

export default function BookCard({
  title,
  year,
  description,
  imgUrl,
  whereToGet
}: Props) {
  return (
    <div className="relative flex flex-col md:flex-row shadow p-8 rounded-md mb-10">
      <span className="absolute -top-2 right-5 p-2 bg-my-gray primary-light-text">{year}</span>
      <div className="w-full md:w-3/5 p-10 md:p-0">
        <img src={imgUrl} alt=""/>
      </div>
      <div className="flex flex-col md:pl-8">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="flex flex-col">
          <h2>Available:</h2>
          {whereToGet.map(w => <Link href={w.link} >{w.name}</Link>)}
        </div>
      </div>
    </div>
  );
}
