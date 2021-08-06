import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="min-h-5 h-80 bg-indigo-900 text-gray-50">
      <div className="flex flex-col justify-evenly space-y-8 h-full w-4/5 mx-auto py-10 text-center">
        <h2>Isaac Newton</h2>
        <p>
          Johnstone Family Professor in the Department of Psychology at Harvard
          University
        </p>
        <div className="footer-site-links flex flex-wrap space-x-7 justify-center">
          <Link href="/about">About</Link>
          <Link href="/books">Books</Link>
          <Link href="/articles">Articles</Link>
          <Link href="/research">Research</Link>
          <Link href="/teaching">Teaching</Link>
          <Link href="/talks">Talks</Link>
        </div>
        <div className="social-media-links">
          <Link href="https://www.twitter.com">Twitter</Link>
          <Link href="https://www.facebook.com">Facebook</Link>
        </div>
      </div>
    </footer>
  );
}
