import { BlogCard } from '@/app/_lib/types';
import Image from 'next/image';
import { FOSOButton } from '../FOSOButton';
import Calendar from '../../assets/icons/CalendarBlank.svg';
import Clock from '../../assets/icons/Clock.svg';
import ArrowRight from '../../assets/icons/ArrowRight.svg';

const formatDate = (isoString: string): string => {
  const date = new Date(isoString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

export const FOSOBlogCard = ({ blog }: FOSOBlogCardProps) => {
  return (
    <div className='flex flex-col w-[505px]'>
      <div className='rounded-[24px] '>
        <Image
          src={blog.image}
          alt='img'
          width={505}
          height={475}
          className='rounded-[24px] object-contain'
        />
      </div>
      <div className='pt-6 flex flex-col gap-1'>
        <div
          className='py-1 px-2 w-fit rounded-[8px] text-xs'
          style={{
            backgroundColor: blog.category.style.backgroundColor
          }}
        >
          <span style={{ color: blog.category.style.color }}>{blog.category.name}</span>
        </div>
        <div className=' h-[72px] text-2xl font-[800]'>{blog.title}</div>
        <div className='flex gap-3'>
          <div className='flex items-center gap-2'>
            <Image
              src={Calendar}
              alt='date'
            />
            <span className='text-[#667F93]'>{formatDate(blog.publishedAt)}</span>
          </div>
          <div className='flex items-center gap-2'>
            <Image
              src={Clock}
              alt='time'
            />
            <span className='text-[#667F93]'>{blog.readingTime} phút đọc</span>
          </div>
        </div>
        <FOSOButton
          variants='text'
          title='Khám phá thêm'
          icon={ArrowRight}
        />
      </div>
    </div>
  );
};
type FOSOBlogCardProps = {
  blog: BlogCard;
};
