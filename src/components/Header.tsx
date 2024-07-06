
import Link from 'next/link';

export default function Header() {
  return (
    <div className="top-rectangle">
      <img
        src="assets/images/dark.jpg"
        alt="profile image"
        className="profile-image"
      />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <nav>
        <ul className='headerList'>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/comic">Comic</Link></li>
        </ul>
      </nav>
    </div>
  );
}
