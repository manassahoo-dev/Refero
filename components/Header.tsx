import { Divider } from '@geist-ui/core';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <nav>
      <div className='container flex flex-wrap items-center justify-between mx-auto py-3'>
        <Link href='/' className='flex items-center'>
          <h2 className='m-0'>Refero</h2>
        </Link>

        <div
          className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
          id='Header-cta'
        >
          <header>
            <nav>
              <ul className='flex flex-col m-0 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
                <li className='m-0'>
                  <Link href='/jobs' className='link'>
                    Users
                  </Link>
                </li>
                <li className='m-0'>
                  <Link href='/jobs' className='link'>
                    Jobs
                  </Link>
                </li>
                <li className='m-0'>
                  <Link href='/jobs' className='link'>
                    Resources
                  </Link>
                </li>
                <li className='m-0'>
                  <Link href='/jobs' className='link'>
                    Github
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
        </div>
      </div>
      <Divider />
    </nav>
  );
}
