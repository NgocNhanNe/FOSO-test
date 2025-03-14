'use client';

import Image from 'next/image';
import logo from '../../assets/images/logo.svg';
import iconCountry from '../../assets/icons/icon_country.svg';
import arrowUpRight from '../../assets/icons/ArrowUpRight.svg';
import { FOSODropdown, ListItem } from '../FOSODropdown';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const solutions: ListItem[] = [
  { label: 'Solution 1', value: '/solution/1' },
  { label: 'Solution 2', value: '/solution/2' }
];
const resources: ListItem[] = [{ label: 'Blog', value: '/resource/blog' }];
const languages: ListItem[] = [
  { label: 'VI', value: 'vi', icon: iconCountry },
  { label: 'EN', value: 'en', icon: iconCountry }
];
export const NavigationBar = () => {
  const router = useRouter();
  return (
    <div className='w-full flex items-center justify-center fixed top-6 text-[#25272A] z-100'>
      <div className='cursor-pointer text-sm flex items-center justify-center w-[1280px] rounded-[40px] p-[12px_36px] gap-[64px] bg-white shadow-md'>
        <Image
          src={logo}
          alt='Company Logo'
          width={134}
          height={55.41}
          onClick={() => router.push('/home')}
        />
        <ul className='flex gap-2 '>
          <li className='px-2'>
            <Link href='/about-us'>Về Chúng tôi</Link>
          </li>
          <li className='px-2'>
            <FOSODropdown
              type='bold-title'
              title='Giải pháp'
              listItems={solutions}
            />
          </li>
          <li className='px-2'>
            <FOSODropdown
              type='bold-title'
              title='Tài nguyên'
              listItems={resources}
            />
          </li>
          <li className='px-2'>
            <Link href='/contact'>Liên hệ</Link>
          </li>
        </ul>
        <div className='flex items-center justify-center gap-2'>
          <div className='w-[102px] h-10 rounded-[40px] py-2 px-3 bg-[#09090b1a] border border-[#09090b0d]'>
            <FOSODropdown
              type='has-icon'
              listItems={languages}
            />
          </div>
          <div className='flex items-center gap-3 py-2 px-3 w-fit bg-[#1AD598] rounded-[40px] cursor-pointer	'>
            <Link
              href='/connect'
              className='font-semibold text-[#052B1E]'
            >
              Trở thành khách hàng
            </Link>
            <div className='bg-black rounded-[40px] w-[22px] h-[22px] flex justify-center items-center'>
              <Image
                src={arrowUpRight}
                alt='arrow-up'
                width={14}
                height={14}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
