'use client';

import Image from 'next/image';
import logo from '../../assets/images/logo.svg';
import iconCountry from '../../assets/icons/icon_country.svg';
import en from '../../assets/icons/en.png';
import arrowUpRight from '../../assets/icons/ArrowUpRight.svg';
import { FOSODropdown, ListItem } from '../FOSODropdown';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AlignJustify, X } from 'lucide-react';
import { useState } from 'react';

const solutions: ListItem[] = [
  { label: 'Solution 1', value: '/solution/1' },
  { label: 'Solution 2', value: '/solution/2' }
];
const resources: ListItem[] = [{ label: 'Blog', value: '/resource/blog' }];
const languages: ListItem[] = [
  { label: 'VI', value: 'vi', icon: iconCountry },
  { label: 'EN', value: 'en', icon: en }
];
export const NavigationBar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='w-full flex items-center justify-center top-0 fixed lg:top-6 text-[#25272A] z-100'>
      <div className='cursor-pointer text-md flex items-center w-[1280px] lg:rounded-[40px] lg:justify-center lg:gap-12 p-[12px_36px] bg-white shadow-md justify-between  rounded-none'>
        <Image
          src={logo}
          alt='Company Logo'
          width={134}
          height={55.41}
          onClick={() => router.push('/home')}
        />
        <div
          className={`${
            isOpen ? 'flex' : 'hidden'
          } lg:relative lg:flex-row lg:gap-8 lg:items-center lg:p-0 lg:top-0 lg:w-fit absolute lg:flex flex-col items-start gap-4 bg-white lg:shadow-none shadow-md w-full p-8 top-20 left-0 `}
        >
          <ul className=' lg:flex-row  flex gap-2 flex-col  '>
            <li className='px-2 '>
              <Link href='/about-us'>Về Chúng tôi</Link>
            </li>
            <li className='px-2 '>
              <FOSODropdown
                type='bold-title'
                title='Giải pháp'
                listItems={solutions}
              />
            </li>
            <li className='px-2 z-0'>
              <FOSODropdown
                type='bold-title'
                title='Tài nguyên'
                listItems={resources}
              />
            </li>
            <li className='px-2 '>
              <Link href='/contact'>Liên hệ</Link>
            </li>
          </ul>
          <div className='lg:flex-row flex flex-col lg:items-center items-start justify-center gap-2'>
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
        {isOpen ? (
          <X
            className='lg:hidden'
            onClick={() => setIsOpen(!isOpen)}
          />
        ) : (
          <AlignJustify
            className='lg:hidden '
            onClick={() => setIsOpen(!isOpen)}
          />
        )}
      </div>
    </div>
  );
};
