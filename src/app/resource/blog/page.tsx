'use client';

import Image from 'next/image';
import arrowUpRight from '../../../assets/icons/ArrowUpRight.svg';
import fmrp from '../../../assets/images/fmrp.png';
import magnifying from '../../../assets/icons/MagnifyingGlass.svg';
import { FOSOButton } from '@/components/FOSOButton';
import { FOSOInput } from '@/components/FOSOInput';
import { CategoryCount } from '@/app/_lib/types';
import { useEffect, useState } from 'react';
// import { categoriesWithCount } from '@/app/_lib/data';

export default function BlogPage() {
  const [categoriesWithCount, setCategoriesWithCount] = useState<CategoryCount[]>([]);

  const handleTotal = categoriesWithCount.reduce(
    (acc, category) => acc + category.count,
    0
  );

  console.log(categoriesWithCount);

  useEffect(() => {
    fetch('/apis/categories')
      .then(res => res.json())
      .then(data => setCategoriesWithCount(data.categories));
  }, []);

  return (
    <div className="pt-[128px] bg-[url('/bg-blog.jpg')] bg-no-repeat bg-cover">
      <div className='w-full flex justify-center items-center pt-12 pb-[100px]'>
        <div className='w-full max-w-[1280px] flex gap-1 flex-col'>
          <div className='font-light text-center text-sm text-[#17181A] pb-16'>
            Trang chủ &gt; Tài nguyên &gt; <span className='font-semibold'>Blog</span>
          </div>
          <div className='text-6xl text-[#050505] text-center leading-[100px]'>
            Blog
            <span className='font-[800] bg-gradient-to-r from-[#53b086] via-[#85EEB3] to-[#53b086] bg-clip-text text-transparent'>
              &nbsp;FOSO
            </span>
            &nbsp;– <br />
            Cập Nhật Tin Tức <span className='font-[800]'>Mới Nhất</span>
          </div>
          <div className='text-[#33404A] text-lg text-center'>
            Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!
          </div>
        </div>
      </div>
      <div className='w-full px-6 flex justify-center '>
        <div className='w-full max-w-[1440px] flex gap-8'>
          <div className='w-[80%]'>
            <p className='text-4xl font-[800]'>Tất cả bài viết</p>
            <div className='flex h-[318px] w-full bg-gradient-to-r from-[#013DA0] via-[#025ACE] to-[#0375F3] rounded-[40px]'>
              <div className='w-[50%] flex flex-col gap-8 justify-center pl-[60px]'>
                <p className='text-4xl font-[700] max-w-[376px] text-white leading-12'>
                  Gia nhập cộng đồng FMRP – Kết nối, chia sẻ, cùng phát triển!
                </p>
                <FOSOButton
                  title='Tham Gia Ngay'
                  icon={arrowUpRight}
                  variants='outline'
                />
              </div>
              <div className='w-[50%] h-[100%]'>
                <Image
                  alt='fmrp'
                  src={fmrp}
                  width={400}
                  height={150}
                  className='w-full object-contain h-[100%]'
                />
              </div>
            </div>
          </div>
          <div className='w-[20%] flex flex-col gap-8'>
            <div className='flex gap-6 flex-col'>
              <p className='text-2xl font-[800]'>Tìm kiếm</p>
              <FOSOInput
                icon={magnifying}
                placeholder='Tìm kiếm bài viết'
              />
            </div>
            <div className='flex flex-col gap-6'>
              <p className='text-2xl font-[800]'>Danh mục</p>
              <div>
                <div className='text-[#33404A] flex flex-col gap-4'>
                  <div className='flex justify-between items-center  pb-2 border-[#f1f5f7] border-b-[1px]'>
                    <p>Tất cả</p>
                    <p>{handleTotal}</p>
                  </div>
                  {categoriesWithCount.map((category, i) => (
                    <div
                      className='flex justify-between items-center  pb-2 border-[#f1f5f7] border-b-[1px]'
                      key={i}
                    >
                      <p>{category.categoryName}</p>
                      <p>{category.count}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
