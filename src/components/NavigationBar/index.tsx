import Image from 'next/image';
import logo from '../../assets/images/logo.svg';
import iconCountry from '../../assets/icons/icon_country.svg';
import arrowUpRight from '../../assets/icons/ArrowUpRight.svg';
import { FOSODropdown, ListItem } from '../FOSODropdown';
import Link from 'next/link';

const solutions: ListItem[] = [{ label: 'solution1' }, { label: 'solution2' }];
const resources: ListItem[] = [{ label: 'blog' }, { label: 'resource2' }];
const languages: ListItem[] = [
  { label: 'VI', icon: iconCountry },
  { label: 'EN', icon: iconCountry }
];
export const NavigationBar = () => {
  return (
    <div className='w-full flex items-center justify-center fixed top-6 text-[#25272A] z-1'>
      <div className='cursor-pointer text-sm flex items-center justify-center w-[1280px] h-auto rounded-[40px] p-[12px_36px] gap-[64px] backdrop-blur-[25px] shadow-[inset_0px_2px_83.99px_rgba(0,0,0,0.02),-9px_20px_59.99px_-24px_rgba(0,0,0,0.05),1px_-1px_0px_0px_#FFFFFF,-1px_1px_0px_0px_#F0F0F0]'>
        <Image
          src={logo}
          alt='Company Logo'
          width={134}
          height={55.41}
        />
        <ul className='flex gap-2 '>
          <li className='px-2'>Về Chúng tôi</li>
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
          <li className='px-2'>Liên hệ</li>
        </ul>
        <div className='flex items-center justify-center gap-2'>
          <div className='w-fit h-10 rounded-[40px] py-2 px-3 bg-[#09090b1a] border border-[#09090b0d]'>
            <FOSODropdown
              type='has-icon'
              listItems={languages}
            />
          </div>
          <div className='flex items-center gap-3 py-2 px-3 w-fit bg-[#1AD598] rounded-[40px] cursor-pointer	'>
            <Link
              href={''}
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
