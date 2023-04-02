import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { pathname } = router;
  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Users', href: '/users' },
    { label: 'Jobs', href: '/jobs' },
    { label: 'Resources', href: '/resources' },
  ];

  return (
    <>
      <nav
        className='navbar navbar-expand-lg navbar-light bg-light'
        aria-label='Eighth navbar example'
      >
        <div className='container'>
          <Link
            href='/'
            className='navbar-brand d-inline-flex link-body-emphasis text-decoration-none'
          >
            Refero
          </Link>
          <button
            className='navbar-toggler collapsed'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarsExample07'
            aria-controls='navbarsExample07'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='navbar-collapse collapse' id='navbarsExample07'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              {menuItems.map(({ label, href }) => (
                <li key={href} className='nav-item'>
                  <Link
                    href={href}
                    className={
                      pathname === href ? 'nav-link active' : 'nav-link'
                    }
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div>
              {status === 'authenticated' && (
                <div>
                  <span className='mx-2'>{session.user.name}</span>
                  <button
                    onClick={() => signOut()}
                    className='btn btn-outline-primary me-2'
                  >
                    Logout
                  </button>
                </div>
              )}
              {status === 'unauthenticated' && (
                <Link
                  href='/auth/login'
                  className='btn btn-outline-primary me-2'
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
      <nav>
        <div className='container'>
          <header className='d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3'>
            <div className='col-md-3 mb-2 mb-md-0'></div>
          </header>
        </div>
      </nav>
    </>
  );
}
