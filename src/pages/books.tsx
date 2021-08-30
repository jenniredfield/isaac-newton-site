import BookCard from '../components/Books/BookCard';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const books = [
  {
    title: 'Principia',
    type: 'Book',
    year: 1880,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel lorem aliquet, suscipit ex vitae, pulvinar augue. Integer blandit volutpat neque nec imperdiet. Phasellus a sodales justo. Mauris quis purus facilisis, finibus turpis eget, dignissim nibh. Ut sit amet nisl bibendum, accumsan nisl sit amet, vulputate turpis. In viverra rutrum tellus eget faucibus. Donec facilisis, elit sagittis pellentesque gravida, est felis varius sapien, in pharetra justo turpis sed nibh. Mauris sodales est non lacinia lacinia. Etiam sit amet nisi aliquam, dignissim mauris sit amet, imperdiet lorem. Vivamus dignissim, purus semper mattis vulputate, turpis quam lobortis arcu, euismod ornare lorem augue nec ipsum. Sed vehicula ipsum ut dolor aliquet, quis scelerisque ligula tincidunt. Quisque eu ex quis eros mattis rhoncus et vel nulla.z',
    imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/81UyQ7SOR1L.jpg',
    whereToGet: [
      { name: 'Amazon Uk', link: 'https://www.amazon.co.uk' },
      { name: 'Amazon US', link: 'https://www.amazon.com' },
    ],
  },
  {
    title: 'Principia',
    type: 'Book',
    year: 1880,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel lorem aliquet, suscipit ex vitae, pulvinar augue. Integer blandit volutpat neque nec imperdiet. Phasellus a sodales justo. Mauris quis purus facilisis, finibus turpis eget, dignissim nibh. Ut sit amet nisl bibendum, accumsan nisl sit amet, vulputate turpis. In viverra rutrum tellus eget faucibus. Donec facilisis, elit sagittis pellentesque gravida, est felis varius sapien, in pharetra justo turpis sed nibh. Mauris sodales est non lacinia lacinia. Etiam sit amet nisi aliquam, dignissim mauris sit amet, imperdiet lorem. Vivamus dignissim, purus semper mattis vulputate, turpis quam lobortis arcu, euismod ornare lorem augue nec ipsum. Sed vehicula ipsum ut dolor aliquet, quis scelerisque ligula tincidunt. Quisque eu ex quis eros mattis rhoncus et vel nulla.z',
    imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/81UyQ7SOR1L.jpg',
    whereToGet: [
      { name: 'Amazon Uk', link: 'https://www.amazon.co.uk' },
      { name: 'Amazon US', link: 'https://www.amazon.com' },
    ],
  },
];

const Books = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <div className="books-page my-constraint py-20 min-h-2/4">
      <h1 className="m-10 text-center">Books</h1>
      <div className="flex flex-col">
        {books.map((b) => (
          <BookCard
            title={b.title}
            year={b.year}
            description={b.description}
            imgUrl={b.imgUrl}
            whereToGet={b.whereToGet}
            key={b.title}
          />
        ))}
      </div>
    </div>
  </Main>
);

export default Books;
