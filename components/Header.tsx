import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';

export default function Header() {
  const { data: session, status } = useSession();
  console.log(session);
  return (
    <nav>
      <div className='container'>
        <header className='d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3'>
          <div className='col-md-3 mb-2 mb-md-0'>
            <Link
              href='/'
              className='d-inline-flex link-body-emphasis text-decoration-none'
            >
              <h2 className='m-0'>Refero</h2>
            </Link>
          </div>

          <ul className='nav col-12 col-md-auto mb-2 justify-content-center mb-md-0'>
            <li>
              <Link href='/' className='nav-link px-2 link-secondary'>
                Home
              </Link>
            </li>
            <li>
              <Link href='/users' className='nav-link px-4'>
                Users
              </Link>
            </li>
            <li>
              <Link href='/jobs' className='nav-link px-4'>
                Jobs
              </Link>
            </li>
            <li>
              <Link href='/jobs' className='nav-link px-4'>
                Jobs
              </Link>
            </li>
          </ul>

          <div className='col-md-3 text-end'>
            {status === 'authenticated' && (
              <div>
                <p>{session.user.name}</p>
                <button
                  onClick={() => signOut()}
                  className='btn btn-outline-primary me-2'
                >
                  Logout
                </button>
              </div>
            )}
            {status === 'unauthenticated' && (
              <Link href='/auth/login' className='btn btn-outline-primary me-2'>
                Login
              </Link>
            )}
          </div>
        </header>
      </div>
    </nav>
  );
}
