import Link from 'next/link';

export default function Books() {
  return (
    <div className="min-h-screen w-full py-8 bg-gray-100">
      <div className="w-5/6 mx-auto text-center">
        <h1 className="text-4xl py-8">Books</h1>
        <div className="books-wrapper">
          <div className="w-full mx-auto flex flex-col md:flex-row md:space-x-8 justify-evenly">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/81UyQ7SOR1L.jpg"
              className="w-full md:w-3/6"
              alt="isaac book"
            />
            <div className="book-description flex flex-col align-center self-center">
              <p>
                The Principia Mathematica (often abbreviated PM) is a
                three-volume work on the foundations of mathematics written by
                the mathematicians Alfred North Whitehead and Bertrand Russell
                and published in 1910, 1912, and 1913. In 1925–27, it appeared
                in a second edition with an important Introduction to the Second
                Edition, an Appendix A that replaced ✸9 and all-new Appendix B
                and Appendix C.
              </p>
              <div className="text-xl">
                <Link href="https://www.amazon.com">BUY NOW</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
