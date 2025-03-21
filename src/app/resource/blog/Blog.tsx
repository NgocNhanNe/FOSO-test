'use client';

import Image from 'next/image';
import arrowUpRight from '../../../assets/icons/ArrowUpRight.svg';
import fmrp from '../../../assets/images/fmrp.png';
import magnifying from '../../../assets/icons/MagnifyingGlass.svg';
import { FOSOButton } from '@/components/FOSOButton';
import { FOSOInput } from '@/components/FOSOInput';
import { BlogCard, CategoryCount } from '@/app/_lib/types';
import { use, useEffect, useState } from 'react';
import { FOSOBlogCard } from '@/components/FOSOBlogCard';
import { FOSOPagination } from '@/components/FOSOPagination';
import { FOSOAdds } from '@/components/FOSOAdds';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebounce } from '@/app/_lib/hooks/useDebounce';
import calendarBG from '../../../assets/images/hero1.svg';
import handBG from '../../../assets/images/hero2.svg';
import bgLeft from '../../../assets/images/bgleft.png';
import bgRight from '../../../assets/images/bg2.png';
import { ChevronDown, ChevronUp } from 'lucide-react';

const limit = 6;

export default function BlogPage({
  searchParams
}: {
  searchParams: Promise<{ page: number; category: string; title: string }>;
}) {
  const { page, category, title } = use(searchParams);
  const searchParamsHook = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [categoriesWithCount, setCategoriesWithCount] = useState<CategoryCount[]>([]);
  const [blogs, setBlogs] = useState<BlogCard[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    category || null
  );
  const [expendedSections, setExpendedSections] = useState(true);
  const [searchTitle, setSearchTitle] = useState<string>(title || '');
  const debouncedSearchTitle = useDebounce(searchTitle, 300);

  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(page || 1);

  const handleTotal = categoriesWithCount.reduce(
    (acc, category) => acc + category.count,
    0
  );

  useEffect(() => {
    fetch('/apis/categories')
      .then(res => res.json())
      .then(data => setCategoriesWithCount(data.categories));
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      const categoryParam = selectedCategory ? `&category=${selectedCategory}` : '';
      const res = await fetch(
        `/apis/blogs?limit=${limit}&page=${currentPage}${categoryParam}&title=${debouncedSearchTitle}`
      );
      const data = await res.json();
      const params = new URLSearchParams(searchParamsHook);

      if (currentPage) params.set('page', currentPage + '');
      if (selectedCategory) params.set('category', selectedCategory);
      else params.delete('category');
      if (debouncedSearchTitle) params.set('title', debouncedSearchTitle);
      else params.delete('title');

      replace(`${pathname}?${params.toString()}`);
      setBlogs(data.blogs);
      setTotal(data.total);
    };

    fetchBlogs();
  }, [
    selectedCategory,
    currentPage,
    replace,
    pathname,
    searchParamsHook,
    debouncedSearchTitle
  ]);

  return (
    <div className='lg:pt-32 bg-[#f9fbfc] pt-18'>
      <div className='relative w-full flex justify-center items-center pt-12 pb-[100px]'>
        <div className='w-full max-w-7xl flex gap-1 flex-col  z-1'>
          <div className='font-light text-center text-sm text-[#17181A] pb-16'>
            Trang chủ &gt; Tài nguyên &gt; <span className='font-semibold'>Blog</span>
          </div>
          <div className='relative lg:text-6xl text-4xl text-[#050505] text-center lg:leading-[100px] leading-[60px] px-4'>
            Blog
            <span className='font-[800] bg-gradient-to-r from-[#53b086] via-[#85EEB3] to-[#53b086] bg-clip-text text-transparent'>
              &nbsp;FOSO
            </span>
            &nbsp;– <br />
            Cập Nhật Tin Tức
            <span className='relative font-[800]'>
              <span className=' relative z-1 whitespace-nowrap'>&nbsp; Mới Nhất</span>
              <div className='absolute bg-[#A3EED6] w-[90%] lg:h-8 rounded-[40px] lg:top-10 lg:left-8 top-6 left-5 z-0 h-5'></div>
            </span>
          </div>
          <div className='text-[#33404A] lg:text-lg text-sm text-center px-4'>
            Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!
          </div>
        </div>
        <div className='absolute top-10 left-[43px] z-0'>
          <Image
            src={calendarBG}
            alt=''
            width={150}
            height={282}
            quality={100}
            className='lg:w-[282px]'
          />
        </div>
        <div className='absolute top-10 right-0 z-0'>
          <Image
            src={handBG}
            alt=''
            width={150}
            height={251}
            quality={100}
            className='lg:w-[320px]'
          />
        </div>
      </div>
      <div className=' w-full px-6 flex flex-col gap-16 justify-center items-center pb-20'>
        <div className=' w-full max-w-[1440px] flex flex-col-reverse justify-center items-center xl:items-start gap-8 z-1 xl:flex-row'>
          <div className='xl:w-[74%] max-w-3xl w-full flex flex-col gap-6'>
            <p className='text-4xl font-[800]'>{selectedCategory || 'Tất cả bài viết'}</p>
            <div className='flex flex-col gap-12'>
              <div className='flex xl:h-[318px] h-[220px] w-full bg-gradient-to-r from-[#013DA0] via-[#025ACE] to-[#0375F3] rounded-[40px]'>
                <div className='w-[50%] flex flex-col gap-8 justify-center xl:pl-25 pl-5 '>
                  <p className='xl:text-4xl text-2xl font-[700] max-w-[376px] text-white xl:leading-12 leading-8'>
                    Gia nhập cộng đồng FMRP – Kết nối, chia sẻ, cùng phát triển!
                  </p>
                  <div>
                    <FOSOButton
                      title='Tham Gia Ngay'
                      icon={arrowUpRight}
                      variants='outline'
                    />
                  </div>
                </div>
                <div className='w-[50%] h-[100%]'>
                  <Image
                    alt='fmrp'
                    src={fmrp}
                    width={400}
                    height={300}
                    quality={100}
                    className='w-full object-contain h-[100%]'
                  />
                </div>
              </div>
              {!blogs.length ? (
                <div className='flex items-center justify-center  w-full text-[#33404A]'>
                  No Blog Found
                </div>
              ) : (
                <div className='grid md:grid-cols-2 gap-8 grid-cols-1'>
                  {blogs.map((blog, i) => (
                    <FOSOBlogCard
                      blog={blog}
                      key={i}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className='xl:w-[26%] w-full max-w-3xl flex flex-col  gap-8 '>
            <div className='flex gap-6 flex-col'>
              <p className='text-2xl font-[800]'>Tìm kiếm</p>
              <FOSOInput
                icon={magnifying}
                placeholder='Tìm kiếm bài viết'
                value={searchTitle}
                handleValue={e => setSearchTitle(e.target.value)}
              />
            </div>
            <div className='flex flex-col gap-6'>
              <div className='h-[48px] flex items-center justify-between'>
                <p className='text-2xl font-[800]'>Danh mục</p>
                {expendedSections ? (
                  <ChevronDown
                    color='#15AA7A'
                    className='w-8 h-8 cursor-pointer'
                    onClick={() => setExpendedSections(!expendedSections)}
                  />
                ) : (
                  <ChevronUp
                    color='#15AA7A'
                    className='w-8 h-8 cursor-pointer'
                    onClick={() => setExpendedSections(!expendedSections)}
                  />
                )}
              </div>
              {expendedSections && (
                <div className='text-[#33404A] flex flex-col gap-4'>
                  <div
                    className={`flex justify-between items-center  pb-2 border-[#f1f5f7] border-b-[1px] cursor-pointer ${
                      !selectedCategory ? 'text-[#15AA7A]' : ''
                    }`}
                    onClick={() => {
                      setSelectedCategory(null);
                      setCurrentPage(1);
                    }}
                  >
                    <p>Tất cả</p>
                    <p>{handleTotal}</p>
                  </div>
                  {categoriesWithCount.map((category, i) => (
                    <div
                      className={`flex justify-between items-center pb-2 border-[#f1f5f7] border-b-[1px] cursor-pointer ${
                        selectedCategory === category.categoryName ? 'text-[#15AA7A]' : ''
                      }`}
                      onClick={() => {
                        setSelectedCategory(category.categoryName);
                        setCurrentPage(1);
                      }}
                      key={i}
                    >
                      <p>{category.categoryName}</p>
                      <p>{category.count}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <FOSOAdds />
          </div>
        </div>
        <div className='w-full xl:max-w-[1440px] max-w-3xl z-1'>
          <FOSOPagination
            currentPage={currentPage}
            totalPages={Math.ceil(total / limit)}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>

      <div className='absolute top-[400px] left-0 z-0'>
        <Image
          src={bgLeft}
          alt=''
          width={500}
          height={500}
        />
      </div>
      <div className='absolute top-[2300px] right-0 z-0'>
        <Image
          src={bgRight}
          alt=''
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
