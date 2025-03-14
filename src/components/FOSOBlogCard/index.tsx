'use client';

import { BlogCard } from '@/app/_lib/types';
import Image from 'next/image';
import { FOSOButton } from '../FOSOButton';
import Calendar from '../../assets/icons/CalendarBlank.svg';
import Clock from '../../assets/icons/Clock.svg';
import ArrowRight from '../../assets/icons/ArrowRight.svg';
import { formatDate } from '@/app/_lib/utils';
import { useRouter } from 'next/navigation';

export const FOSOBlogCard = ({ blog }: FOSOBlogCardProps) => {
  const router = useRouter();
  return (
    <div className='flex flex-col cursor-pointer hover:scale-95 transition-transform duration-300'>
      <div className='w-full rounded-[24px] flex-1 cursor-pointer'>
        <Image
          src={blog.image}
          alt='img'
          width={400}
          height={200}
          className='w-full h-full rounded-[24px] object-cover'
          onClick={() => router.push(`/resource/blog/${blog.id}`)}
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
        <div
          className=' h-[70px] overflow-hidden text-ellipsis line-clamp-2 text-2xl font-[800] text-[#33404A] cursor-pointer'
          onClick={() => router.push(`/resource/blog/${blog.id}`)}
        >
          {blog.title}
        </div>
        <div className='flex gap-3'>
          <div className='flex items-center gap-2'>
            <Image
              src={Calendar}
              alt='date'
            />
            <span className='text-[#667F93]'>{formatDate(blog.publishedAt)}</span>
          </div>
          <div className='text-[#D9E1E7]'>|</div>
          <div className='flex items-center gap-2'>
            <Image
              src={Clock}
              alt='time'
            />
            <span className='text-[#667F93]'>{blog.readingTime} phút đọc</span>
          </div>
        </div>
        <div>
          <FOSOButton
            variants='text'
            title='Khám phá thêm'
            icon={ArrowRight}
            buttonProps={{
              onClick: () => router.push(`/resource/blog/${blog.id}`)
            }}
          />
        </div>
      </div>
    </div>
  );
};
type FOSOBlogCardProps = {
  blog: BlogCard;
};
