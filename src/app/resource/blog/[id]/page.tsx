'use client';

import Image from 'next/image';

import logo from '../../../../assets/images/logopattern.svg';
import { use, useEffect, useState } from 'react';
import { BlogCard } from '@/app/_lib/types';
import Calendar from '../../../../assets/icons/CalendarBlank.svg';
import Clock from '../../../../assets/icons/Clock.svg';
import { Racing_Sans_One } from 'next/font/google';
import { addUniqueIdsToHeadings, formatDate } from '@/app/_lib/utils';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FOSOAdds } from '@/components/FOSOAdds';
import zalo from '../../../../assets/icons/zalo.svg';
import fb from '../../../../assets/icons/facebook.svg';
import X from '../../../../assets/icons/x.svg';
import linkedin from '../../../../assets/icons/linkedin.svg';
import discord from '../../../../assets/icons/discord.svg';
import like from '../../../../assets/icons/like.svg';
import heart from '../../../../assets/icons/green-heart.svg';
import star from '../../../../assets/icons/star-struck.svg';
import wow from '../../../../assets/icons/hushed-face.svg';
import yawn from '../../../../assets/icons/yawning-face.svg';
import pounting from '../../../../assets/icons/pouting-face.svg';
import { FOSOBlogCard } from '@/components/FOSOBlogCard';
import { FOSOSpinner } from '@/components/FOSOSpinner';

type Section = {
  id: string;
  title: string;
  level: number;
};

type Rating = {
  icon: string;
  count: number;
  text: string;
};

const racing = Racing_Sans_One({
  subsets: ['latin'],
  weight: '400'
});

const shareIcons = [zalo, fb, X, linkedin, discord];

const ratinglList: Rating[] = [
  {
    icon: like,
    count: 1,
    text: 'Hữu ích'
  },
  {
    icon: heart,
    count: 2,
    text: 'Yêu thích'
  },
  {
    icon: star,
    count: 0,
    text: 'Thú vị'
  },
  {
    icon: wow,
    count: 1,
    text: 'Bất ngờ'
  },
  {
    icon: yawn,
    count: 0,
    text: 'Nhàm chán'
  },
  {
    icon: pounting,
    count: 0,
    text: 'Tức giận'
  }
];

export default function BlogDetailPage({ params }: { params: Promise<{ id: number }> }) {
  const { id } = use(params);

  const [blog, setBlog] = useState<BlogCard | null>(null);

  const [sections, setSections] = useState<Section[]>([]);

  const [expendedSections, setExpendedSections] = useState(true);

  const [isActive, setIsActive] = useState<string | null>(null);

  const [reactionActive, setReactionActive] = useState<number | null>(null);

  const [ratings, setRatings] = useState(ratinglList);

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
    setIsActive(extractedSections[0].id);
  };

  const handleScrollToSection = (sectionId: string) => {
    setIsActive(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!blog)
    return (
      <div className='w-full h-screen flex items-center justify-center'>
        <FOSOSpinner />
      </div>
    );

  const handleReaction = (index: number) => {
    setRatings(prevRatings =>
      prevRatings.map((item, i) => ({
        ...item,
        count:
          i === index
            ? item.count + (reactionActive === index ? -1 : 1)
            : i === reactionActive
            ? item.count - 1
            : item.count
      }))
    );

    setReactionActive(prev => (prev === index ? null : index));
  };

  return (
    <div className='relative w-full flex flex-col justify-center items-center pt-[128px] px-10 z-0 bg-[#f9fbfc]'>
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

            <div className='w-full py-12'>
              <div className='bg-white rounded-2xl py-6 flex flex-col items-center justify-center gap-6 shadow-[0px_1px_3px_rgba(18,18,23,0.10)]'>
                <div className='text-center flex flex-col gap-1'>
                  <h1 className='text-[#33404A] text-xl font-bold leading-[150%]'>
                    Bạn thấy bài viết như thế nào?
                  </h1>
                  <p className='text-[#33404A]'>
                    {ratings.reduce((acc, r) => r.count + acc, 0)} phản hồi
                  </p>
                </div>
                <div className='flex gap-8'>
                  {ratings.map((item, i) => (
                    <div
                      key={i}
                      className={`w-[90px] p-1 flex flex-col gap-1 items-center justify-center cursor-pointer
                        ${
                          reactionActive === i
                            ? 'border border-[#10805B] rounded-[4px]'
                            : ''
                        }`}
                      onClick={() => handleReaction(i)}
                    >
                      <Image
                        src={item.icon}
                        alt='icon'
                        width={48}
                        height={48}
                      />
                      <p className='text-[#10805B] font-bold'>{item.count}</p>
                      <p className='text-[#33404A] text-sm'>{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className='w-[35%] flex flex-col gap-6'>
            <div className='h-[48px] flex items-center justify-between'>
              <p className='text[#050505] text-2xl font-bold'>Nội dung bài viết</p>
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
              <div className='w-full '>
                <ul className=''>
                  {sections.map((section, i) => (
                    <li
                      key={i}
                      className={`cursor-pointer hover:text-[#15AA7A] hover:font-semibold text-md leading-8 ${
                        section.level === 1 ? '' : 'pl-5'
                      } ${
                        isActive === section.id
                          ? 'text-[#15AA7A] font-semibold'
                          : 'text-[#33404A]'
                      }`}
                      onClick={() => handleScrollToSection(section.id)}
                    >
                      {section.title}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <FOSOAdds />
          </div>
        </div>
      </div>
      <div className='w-full'>
        <p>Bài viết liên quan</p>
        <div className='w-full grid grid-cols-3 gap-8'>
          {relatedBlogs.map((blog, i) => (
            <FOSOBlogCard
              blog={blog}
              key={i}
            />
          ))}
        </div>
      </div>
      <div className='fixed top-60 left-8 '>
        <div className='flex flex-col gap-2'>
          <span className='text-[#33404A] font-bold'>Chia sẻ</span>
          {shareIcons.map((shareIcon, i) => (
            <div
              key={i}
              className='w-12 h-12 bg-white rounded-2xl border border-[#15AA7A] p-3 flex items-center justify-center'
            >
              <Image
                src={shareIcon}
                alt='icon'
                width={24}
                height={24}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const relatedBlogs: BlogCard[] = [
  {
    id: 1,
    image: 'https://fososoft.vn/wp-content/uploads/2023/03/5s.png',
    category: {
      name: 'Quản Lý Sản Xuất',
      style: {
        color: '#dc3545',
        backgroundColor: '#dc35454f'
      }
    },
    title: 'Quy Trình 5S Là Gì? Cách ứng Dụng Hiệu Quả Nên Biết',
    publishedAt: '2025-03-13T19:57:00.811Z',
    readingTime: 6,
    highlight:
      'Chắc hẳn bạn đã từng nghe qua khái niệm về quy trình 5S là gì? Xây dựng 5S cần yếu tố gì? Bài viết dưới đây của FOSO sẽ trả lời cho bạn thông tin chi tiết về mô hình này cũng như yếu tố tạo nên thành công của quy trình bạn nhé.',
    content: `
      <div class ='flex flex-col gap-4'>
              <h1 class='text-[#15AA7A] font-bold text-xl'>1. Quy trình 5S là gì?</h1>
              <p>
                Quy trình 5S được biết đến là mô hình quản trị tinh gọn trong sản xuất.
                Nguồn gốc của quy trình 5S là đến từ xứ sở hoa anh đào Nhật Bản.
              </p>
              <p>
                Quy trình 5S hiện nay đang được rất nhiều nước trên thế giới vận dụng bởi
                tính hiệu quả mà 5S mang lại. Quy trình này bao gồm 5 chữ S đầu trong
                tiếng Nhật:
              </p>
              <ul class='list-disc pl-5 marker:text-[#15AA7A]'>
                <li>
                  <span class='text-[#15AA7A] font-bold'>Seiri</span> (Ngăn nắp)
                </li>
                <li>
                  <span class='text-[#15AA7A] font-bold'>Seiri</span> (Sạch sẽ)
                </li>
                <li>
                  <span class='text-[#15AA7A] font-bold'>Seiri</span> (Trật tự)
                </li>
                <li>
                  <span class='text-[#15AA7A] font-bold'>Shitsuke</span> (Kỷ luật)
                </li>
                <li>
                  <span class='text-[#15AA7A] font-bold '>Seiketsu</span> (Tiêu chuẩn
                  hóa)
                </li>
              </ul>
              <h1 class='text-[#15AA7A] font-bold text-xl'>
                2. Lợi ích quy trình 5S đem lại
              </h1>
              <p>
                Quy trình 5S được kết hợp từ 5 chữ S và mỗi chữ S thể hiện cho mỗi bước
                của quy trình với mục đích cải tiến môi trường làm việc của doanh nghiệp.
              </p>
              <p>
                Khi doanh nghiệp áp dụng quy trình vào trong tổ chức, doanh nghiệp sẽ tạo
                nên một môi trường được sắp xếp theo nguyên tắc logic. Nơi làm việc sẽ trở
                nên sạch sẽ hơn, các công cụ, đồ dùng sẽ được đặt theo vị trí quy định và
                dễ dàng tìm kiếm khi cần thiết.
              </p>
              <p>
                Và khi doanh nghiệp áp dụng như vậy cũng hình thành tạo ra thói quen tốt
                cho mỗi nhân viên. Và từ đó, cũng góp phần vào tạo nên một văn hóa doanh
                nghiệp tích cực.
              </p>
              <div class='w-full flex flex-col justify-center items-center gap-2'>
                <Image
                  src='https://fososoft.vn/wp-content/uploads/2023/03/quy-trinh-5s.png'
                  alt='h2'
                />
                <p class='text-[#667F93] text-center'>
                  Tại sao doanh nghiệp cần quy trình 5S?
                </p>
              </div>
              <h1 class='text-[#15AA7A] font-bold text-xl'>
                3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?
              </h1>
              <p>
                Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên toàn
                thế giới, bao gồm cả Việt Nam. Điều này càng chứng minh rõ nét tính hiệu
                quả của quy trình đem lại. Sau đây là các lý do vì sao bạn nên lựa chọn
                quy trình:
              </p>
              <div>
                <h2 class='text-[#15AA7A] font-bold text'>
                  3.1 Cải thiện rõ nét môi trường làm việc
                </h2>
                <p>
                  Môi trường làm việc tại doanh nghiệp sẽ trở nên sạch sẽ hơn, gọn gàng
                  hơn và có tổ chức hơn. Điều này tạo ra một không gian làm việc hiệu quả
                  cho từng cá nhân trong doanh nghiệp.
                </p>
              </div>
              <div>
                <h2 class='text-[#15AA7A] font-bold text'>
                  3.2 Tiết kiệm thời gian đáng kể
                </h2>
                <p>
                  Khi doanh nghiệp áp dụng quy trình này, doanh nghiệp giảm được thời gian
                  đáng kể khi không còn mất nhiều thời gian tìm kiếm đồ dùng, máy móc cần
                  sử dụng trong quá trình làm việc. Khi mọi thứ đều có trật tự, mọi sự tìm
                  kiếm đều trở nên dễ dàng. 
                </p>
              </div>

              <div>
                <h2 class='text-[#15AA7A] font-bold text'>
                  3.3 Tăng năng suất làm việc
                </h2>
                <p>
                  Môi trường làm việc tại doanh nghiệp sẽ trở nên sạch sẽ hơn, gọn gàng
                  hơn và có tổ chức hơn. Điều này tạo ra một không gian làm việc hiệu quả
                  cho từng cá nhân trong doanh nghiệp.
                </p>
              </div>
              <div>
                <h2 class='text-[#15AA7A] font-bold text'>3.4 Tiết kiệm chi phí</h2>
                <p>
                  Bằng cách tối ưu hóa không gian làm việc, giảm thiểu lãng phí và sử dụng
                  tài nguyên hiệu quả hơn, doanh nghiệp có thể giảm thiểu chi phí vận hành
                  đáng kể cho doanh nghiệp của mình.
                </p>
              </div>

              <div>
                <h2 class='text-[#15AA7A] font-bold text'>
                  3.5 Tăng chất lượng sản phẩm
                </h2>
                <p>
                  5S giúp giữ cho môi trường làm việc luôn sạch sẽ và gọn gàng. Từ đó,
                  giúp tăng cường chất lượng sản phẩm và giảm thiểu lỗi sản xuất không
                  mong muốn.
                </p>
              </div>

              <div class='w-full flex flex-col justify-center items-center gap-2'>
                <Image
                  src='https://fososoft.vn/wp-content/uploads/2023/03/quy-trinh-5s-2.png'
                  alt='h3'
                />
                <p class='text-[#667F93] text-center'>Quy trình 5s gồm các bước</p>
              </div>
              <h1 class='text-[#15AA7A] font-bold text-xl'>
                4. Quy trình 5S gồm các bước
              </h1>
              <p>
                5S là một phương pháp quản lý tổ chức, sắp xếp và tăng cường hiệu quả làm
                việc trong một tổ chức hoặc doanh nghiệp. 5S bao gồm năm bước cơ bản sau:
              </p>
              <div>
                <h2 class='text-[#15AA7A] font-bold text'>4.1 Seiri (Ngăn nắp)</h2>
                <p>
                  Bước đầu tiên trong quy trình là Seiri, mang nghĩa là ngăn nắp, nhằm tổ
                  chức và loại bỏ những thứ dư thừa, không cần thiết để tạo ra một không
                  gian làm việc sạch sẽ, gọn gàng và tiết kiệm thời gian.
                </p>
              </div>
              <div>
                <h2 class='text-[#15AA7A] font-bold text'>4.2 Seiton (Sắp xếp)</h2>
                <p>
                  Bước tiếp theo trong quy tắc 5S đó là Seiso, trong đó cá nhân trong
                  doanh nghiệp sẽ giữ cho môi trường làm việc luôn sạch sẽ. Và việc vệ
                  sinh thường xuyên như vậy sẽ giúp giảm thiểu sự lây nhiễm bệnh tật và
                  tăng cường sức khỏe cho mỗi nhân viên.
                </p>
              </div>
              <div>
                <h2 class='text-[#15AA7A] font-bold text'>4.3 Seiso (Vệ sinh)</h2>
                <p>
                  Chữ S thứ 2 là Seiton, có nghĩa là sắp xếp các dụng cụ, thiết bị, tài
                  liệu trong doanh nghiệp một cách gọn gàng để giúp tìm kiếm và sử dụng
                  chúng một cách dễ dàng.
                </p>
              </div>
              <div>
                <h2 class='text-[#15AA7A] font-bold text'>
                  4.4 Seiketsu (Tiêu chuẩn hóa)
                </h2>
                <p>
                  Bước kế tiếp đó là Seiketsu, có nghĩa là Tiêu chuẩn hóa. Bước này giúp
                  đặt ra các tiêu chuẩn về sự sạch sẽ, gọn gàng và cách thức sử dụng các
                  dụng cụ, thiết bị, tài liệu.
                </p>
              </div>
              <div>
                <h2 class='text-[#15AA7A] font-bold text'>4.5 Shitsuke (Kỷ luật)</h2>
                <p>
                  Đây được xem là bước cuối cùng trong quy trình. Và bước này đóng vai trò
                  quan trọng trong duy trì tính hiệu quả của quy tắc 5S trong dài hạn.
                  Bước này đòi hỏi việc tạo ra một hệ thống kỷ luật và giám sát chặt chẽ
                  để đảm bảo mọi người trong tổ chức duy trì và tuân thủ theo quy trình.
                </p>
              </div>

              <div class='w-full flex flex-col justify-center items-center gap-2'>
                <Image
                  src='https://fososoft.vn/wp-content/uploads/2023/03/5s-trong-san-xuat.png'
                  alt='h4'
                />
                <p class='text-[#667F93] text-center'>
                  Các bước thực hiện quy trình 5s
                </p>
              </div>
              <h1 class='text-[#15AA7A] font-bold text-xl'>
                5. Quy trình được thực hiện như sau:
              </h1>
              <p>
                Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên toàn
                thế giới, bao gồm cả Việt Nam. Điều này càng chứng minh rõ nét tính hiệu
                quả của quy trình đem lại. Sau đây là các lý do vì sao bạn nên lựa chọn
                quy trình:
              </p>
              <div>
                <h2 class='text-[#15AA7A] font-bold text'>5.1 Giai đoạn chuẩn bị</h2>
                <p>
                  Trong giai đoạn chuẩn bị, doanh nghiệp cần bố trí nhân lực đứng ra điều
                  hành và quản lý quá trình thực hiện quy trình 5S. Việc phân bổ cụ thể
                  như vậy sẽ giúp quá trình áp dụng quy tắc 5S sẽ hiệu quả hơn.
                </p>
              </div>
              <div>
                <h2 class='text-[#15AA7A] font-bold text'>
                  5.2 Triển khai rộng rãi
                </h2>
                <p>
                  Đầu tiên doanh nghiệp cần chuẩn bị tài liệu, kiến thức về quy trình 5S
                  cho tất cả mọi người trong doanh nghiệp nắm rõ kiến thức cũng như cách
                  áp dụng như thế nào vào doanh nghiệp của bạn.
                </p>
              </div>
              <div>
                <h2 class='text-[#15AA7A] font-bold text'>
                  5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp
                </h2>
                <p>
                  Đây là bước có thể khiến mọi người không hào hứng trong các bước của quy
                  trình. Doanh nghiệp nên tuyên truyền tích cực và tạo không khí hào hứng
                  cho từng cá nhân.
                </p>
              </div>
              <div>
                <h2 class='text-[#15AA7A] font-bold text'>
                  5.4 Sàng lọc, sắp xếp và đánh giá
                </h2>
                <p>
                  Đây là bước tiếp theo sau khi đã hoàn thành bước vệ sinh toàn bộ doanh
                  nghiệp. Doanh nghiệp cần đưa ra tiêu chuẩn rõ ràng để việc thực hiện
                  sàng lọc và sắp xếp trở nên khoa học hơn, hiệu quả hơn và dễ dàng tìm
                  kiếm sau này.
                </p>
              </div>
              <div>
                <h2 class='text-[#15AA7A] font-bold text'>5.5 Đánh giá</h2>
                <p>
                  Sau khi đã hoàn tất các bước, doanh nghiệp nên tổng kết lại quá trình
                  cải tiến và xem xét cần cải tiến phương diện nào hay không trong quá
                  trình thực hiện quy trình 5S.
                </p>
              </div>

              <h1 class='text-[#15AA7A] font-bold text-xl'>
                6. Quy trình 5S có giống với Kaizen?
              </h1>
              <p>
                Vậy câu hỏi đặt ra ở đây là quy trình 5S có giống với Kaizen hay không?
                Quy trình 5S với Kaizen là 2 khái niệm khác nhau nhưng giữa chúng có mối
                quan hệ chặt chẽ với nhau.
              </p>
              <div class='max-w-[778px] pt-3 pr-4 pb-2 pl-9 border-l-[3px] border-[#15AA7A] text-lg'>
                <i>
                  Về Kaizen, thì đây được xem là một triết lý cải tiến liên tục trong
                  doanh nghiệp. Phương pháp này nhằm tạo ra sự thay đổi tích cực, mang
                  tính liên tục và bền vững.
                </i>
              </div>
              <div class='pt-3 pr-4 max-w-[778px] pb-2 pl-9 border-l-[3px] border-[#15AA7A] text-lg'>
                <i>
                  Còn đối với quy tắc 5S, đây là một phương pháp quản lý và cải tiến trong
                  sản xuất. 5S tập trung vào việc sắp xếp, sạch sẽ, sắp đặt, tiêu chuẩn
                  hóa và kỷ luật trong môi trường làm việc.
                </i>
              </div>
              <p>
                Tuy nhiên, quy trình 5S được xem là một phần của Kaizen. Và quy tắc này
                đóng vai trò quan trọng trong việc tạo ra môi trường làm việc sạch sẽ, an
                toàn. Quy tắc 5S thường được sử dụng làm bước đầu tiên trong quá trình cải
                tiến liên tục của phương pháp Kaizen để tạo ra một nền tảng vững chắc cho
                các hoạt động cải tiến tiếp theo.
              </p>
              <h1 class='text-[#15AA7A] font-bold text-xl'>
                7. Đối tượng nào nên áp dụng 5S?
              </h1>
              <p>
                Quy trình 5S được xem là phương pháp quản lý được áp dụng rộng rãi ở nhiều
                ngành công nghiệp và các loại doanh nghiệp khác nhau. Tuy nhiên, 5S phù
                hợp đặc biệt cho các doanh nghiệp sản xuất, các cơ quan hành chính, các tổ
                chức phi lợi nhuận và các doanh nghiệp nhỏ.
              </p>
              <p>
                Các tổ chức có sự xuất hiện của nhiều nhân viên, hoạt động phức tạp, các
                trang thiết bị và vật dụng phải được quản lý và sử dụng hiệu quả.
              </p>
              <div class='w-full flex flex-col justify-center items-center gap-2'>
                <Image
                  src='https://fososoft.vn/wp-content/uploads/2023/03/quy-tac-5s.png'
                  alt='h7'
                />
                <p class='text-[#667F93] text-center'>
                  Các yếu tố tạo nên thành công cho quy trình 5S
                </p>
              </div>
              <h1 class='text-[#15AA7A] font-bold text-xl'>
                8. Các yếu tố tạo nên thành công cho quy trình 5S
              </h1>
              <p>
                Và những nhân tố quyết định đến quá trình thành công của quy trình nhằm
                cải tiến môi trường làm việc của doanh nghiệp đó là từ phía:
              </p>
              <ul class='list-disc p-5'>
                <li>
                  Lãnh đạo cởi mở và ủng hộ áp dụng quy trình vào doanh nghiệp. Bởi đây
                  yếu tố quan trọng nhất để quyết định doanh nghiệp có áp dụng quy tắc này
                  hay không.
                </li>
                <li>
                  Chương trình, kế hoạch thực hiện quy trình: Sau khi phía lãnh đạo đồng
                  ý, doanh nghiệp cần bộ phận đưa lên ý tưởng, kế hoạch thực hiện triển
                  khai 5S. 
                </li>
                <li>
                  Sự tự nguyện tham gia của toàn thể nhân viên: Doanh nghiệp cần huy động
                  và khuyến khích nhân viên tự nguyện thực hiện vì lợi ích chung của tổ
                  chức, của doanh nghiệp.
                </li>
              </ul>
              <p>
                Đồng thời, trên đây là các yếu tố tạo nên sự thành công nhưng cũng là các
                lưu ý cho mỗi doanh nghiệp cần nắm bắt trước khi bắt tay vào triển khai
                quy trình 5S vào doanh nghiệp của mình. Và với những thông tin bổ ích như
                trên, FOSO mong rằng phần nào giúp được doanh nghiệp của bạn phát triển,
                cải tiến vượt bậc trong tương lai.
              </p>
            </div>
    `
  },
  {
    id: 2,
    image: 'https://fososoft.vn/wp-content/uploads/2022/11/quan-ly-san-xuat-3.png',
    category: {
      name: 'Thiết Kế Website',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#E2F0FE'
      }
    },
    title: 'dolore adipiscing do magna dolor et eiusmod aliqua',
    publishedAt: '2025-03-13T19:57:00.811Z',
    readingTime: 11
  },
  {
    id: 3,
    image:
      'https://fososoft.vn/wp-content/uploads/2022/10/Cac-loai-hinh-san-xuat-FOSO-1066x800.png',
    category: {
      name: 'Thiết Kế Website',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#E2F0FE'
      }
    },
    title: 'aliqua magna do magna Lorem',
    publishedAt: '2025-03-13T19:57:00.811Z',
    readingTime: 3
  }
];
