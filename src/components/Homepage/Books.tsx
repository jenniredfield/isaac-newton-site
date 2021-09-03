import BookItem from './BookItem';

const booksSection = [
  {
    imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/81UyQ7SOR1L.jpg',
    title: 'Principia',
    description:
      'The Principia Mathematica (often abbreviated PM) is three-volume work on the foundations mathematics written by the mathematicians Alfred North Whitehead and Bertrand Russel and published in 1910, 1912, and 1913.',
  },
  {
    imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/81UyQ7SOR1L.jpg',
    title: 'Principia',
    description:
      'The Principia Mathematica (often abbreviated PM) is three-volume work on the foundations mathematics written by the mathematicians Alfred North Whitehead and Bertrand Russel and published in 1910, 1912, and 1913.',
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
