import BookItem from './BookItem';

const booksSection = [
  {
    imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/81UyQ7SOR1L.jpg',
    title: 'Principia',
    description:
      'The Principia deals primarily with massive bodies in motion, initially under a variety of conditions and hypothetical laws of force in both non-resisting and resisting media, thus offering criteria to decide, by observations, which laws of force are operating in phenomena that may be observed. It attempts to cover hypothetical or possible motions both of celestial bodies and of terrestrial projectiles.',
  },
  {
    imgUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQJ9dtMgn6NDo04vLlGSP4zF0OepWFGEJVSw&usqp=CAU',
    title: 'Scientific Method',
    description:
      "Newton's method aims to turn theoretical questions into ones which can be empirically answered by measurement from phenomena. Newton employs theory-mediated measurements to turn data into far more informative evidence than can be achieved by confirmation from prediction alone.",
  },
];

export default function Books() {
  return (
    <div className="min-h-screen w-full py-8 homepage-books__background relative -top-1">
      <div className="w-5/6 my-constraint text-center">
        <h1 className="text-4xl py-8 primary-light-text">Books</h1>
        <div className="books-wrapper">
          {booksSection.map((item, i) => {
            return (
              <BookItem
                imgUrl={item.imgUrl}
                title={item.title}
                description={item.description}
                key={item.title}
                invertOrder={(i + 1) % 2 === 0}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
