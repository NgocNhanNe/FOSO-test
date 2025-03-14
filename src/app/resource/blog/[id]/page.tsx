'use client';

import Image from 'next/image';

import logo from '../../../../assets/images/logopattern.svg';
import { use, useEffect, useState } from 'react';
import { BlogCard } from '@/app/_lib/types';
import Calendar from '../../../../assets/icons/CalendarBlank.svg';
import Clock from '../../../../assets/icons/Clock.svg';
import { Racing_Sans_One } from 'next/font/google';
import { addUniqueIdsToHeadings, formatDate } from '@/app/_lib/utils';
import { ChevronUp } from 'lucide-react';

type Section = {
  id: string;
  title: string;
  level: number;
};

const racing = Racing_Sans_One({
  subsets: ['latin'],
  weight: '400'
});

export default function BlogDetailPage({ params }: { params: Promise<{ id: number }> }) {
  const { id } = use(params);

  const [blog, setBlog] = useState<BlogCard | null>(null);

  const [sections, setSections] = useState<Section[]>([]);

  useEffect(() => {
    if (id) {
      fetch(`/apis/blogs/${id}`)
        .then(res => res.json())
        .then(data => {
          const dataTransformedContent = {
            ...data,
            content: addUniqueIdsToHeadings(data.content)
          };
          setBlog(dataTransformedContent);
          extractSections(dataTransformedContent.content);
        });
    }
  }, [id]);

  const extractSections = (htmlContent: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');
    const headings = Array.from(doc.querySelectorAll('h1, h2, h3, h4'));

    const extractedSections = headings.map(heading => ({
      id: heading.id,
      title: heading.textContent || '',
      level: parseInt(heading.tagName.replace('H', ''), 10) // h2 -> 2, h3 -> 3, etc.
    }));

    setSections(extractedSections);
  };
  const [isActive, setIsActive] = useState<string | null>(null);

  const handleScrollToSection = (sectionId: string) => {
    setIsActive(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!blog) return <p>Loading...</p>;

  return (
    <div className='w-full flex justify-center pt-[128px]'>
      <div className='w-full max-w-[1440px] flex flex-col gap-6'>
        <div className='font-light text-sm text-[#17181A] pb-6'>
          Trang chủ &gt; Tài nguyên &gt; Blog &gt;
          <span className='font-semibold'> {blog.category.name}</span>
        </div>
        <div className='w-full flex gap-8'>
          <div className='w-[65%] flex flex-col gap-4'>
            <div
              className='py-1 px-2 w-fit rounded-[8px] text-xs'
              style={{
                backgroundColor: blog.category.style.backgroundColor
              }}
            >
              <span style={{ color: blog.category.style.color }}>
                {blog.category.name}
              </span>
            </div>

            <p className='text-4xl font-extrabold leading-10 text-[#050505]'>
              {blog.title}
            </p>
            <div className='w-full flex justify-between'>
              <div className='flex gap-3 items-center'>
                <div className='w-16 h-16 flex justify-center items-center bg-white border border-[#f1f5f7] rounded-[40px]'>
                  <Image
                    src={logo}
                    alt='logo'
                    width={33}
                    height={32}
                  />
                </div>
                <div>
                  <p className='text-[#667F93] text-sm'>Tác giả</p>
                  <p className='text-[#33404A] font-bold '>FOSO Creator</p>
                </div>
              </div>
              <div className='flex gap-3 items-center'>
                <div className='flex items-center gap-2'>
                  <Image
                    src={Calendar}
                    alt='date'
                  />
                  <span className='text-[#667F93]'>
                    Cập nhật vào: {formatDate(blog.publishedAt)}
                  </span>
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
            </div>
            <div>
              <div className='w-full'>
                <Image
                  src={blog.image}
                  alt='blog-img'
                  width={500}
                  height={700}
                  className='w-full object-contain rounded-[8px]'
                />
              </div>
              <p className='text-[#667F93] text-center'>Quy trình 5s là gì?</p>
            </div>
            <div className='flex text-center  h-[115px]'>
              <div
                className={`${racing.className} text-[#15AA7A] text-8xl text-start flex items-start`}
              >
                &ldquo;
              </div>
              <i className='text-[#33404A] max-w-[778px] text-lg flex items-end'>
                {blog.highlight}
              </i>
            </div>
            <div dangerouslySetInnerHTML={{ __html: blog.content || '' }} />
          </div>
          <div className='w-[35%]'>
            <div className='h-[48px] flex items-center justify-between'>
              <p className='text[#050505] text-2xl font-bold'>Nội dung bài viết</p>
              <ChevronUp
                color='#15AA7A'
                className='w-8 h-8'
              />
            </div>
            <div className='w-full'>
              <ul className=''>
                {sections.map((section, i) => (
                  <li
                    key={i}
                    className={`cursor-pointer hover:text-[#15AA7A] hover:font-semibold text-md leading-8 ${
                      section.level === 1 ? '' : 'pl-5'
                    } ${isActive === section.id ? 'text-[#15AA7A] font-semibold' : ''}`}
                    onClick={() => handleScrollToSection(section.id)}
                  >
                    {section.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
