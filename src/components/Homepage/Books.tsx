import BookItem from './BookItem';

const booksSection = [{
  imgUrl: "https://images-na.ssl-images-amazon.com/images/I/81UyQ7SOR1L.jpg",
  title: "Principia",
  description: "The Principia Mathematica (often abbreviated PM) is three-volume work on the foundations mathematics written by the mathematicians Alfred North Whitehead and Bertrand Russel and published in 1910, 1912, and 1913. In 1925–27, it appearedin a second edition with an important Introduction to the SecondEdition, an Appendix  A that replaced ✸9 and all-new Appendix Band Appendix C."
},
{
  imgUrl: "https://images-na.ssl-images-amazon.com/images/I/81UyQ7SOR1L.jpg",
  title: "Principia",
  description: "The Principia Mathematica (often abbreviated PM) is three-volume work on the foundations mathematics written by the mathematicians Alfred North Whitehead and Bertrand Russel and published in 1910, 1912, and 1913. In 1925–27, it appearedin a second edition with an important Introduction to the SecondEdition, an Appendix  A that replaced ✸9 and all-new Appendix Band Appendix C."
},]

export default function Books() {
  return (
    <div className="min-h-screen w-full py-8 bg-gray-100">
      <div className="w-5/6 mx-auto text-center">
        <h1 className="text-4xl py-8">Books</h1>
        <div className="books-wrapper">
         {booksSection.map((item, i) => {
            return <BookItem {...item} invertOrder={(i + 1) % 2 === 0}/>
         })}
        </div>
      </div>
    </div>
  );
}
