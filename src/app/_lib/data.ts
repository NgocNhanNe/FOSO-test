import { BlogCard, CategoryStyle } from './types';

// export const categoriesWithCount = [
//   {
//     category: 'Thiết Kế Website',
//     count: 20
//   },
//   {
//     category: 'Thiết Kế App Mobile',
//     count: 10
//   },
//   {
//     category: 'Quản Lý Sản Xuất',
//     count: 23
//   },
//   {
//     category: 'Quản Lý Bán Hàng',
//     count: 18
//   },
//   {
//     category: 'Báo Chí Nói Về FOSO',
//     count: 5
//   },
//   {
//     category: 'Tin Tức FOSO',
//     count: 13
//   }
// ];

export const categoryStyles: Record<string, CategoryStyle> = {
  'Thiết Kế Website': { color: '#0F4F9E', backgroundColor: '#E2F0FE' },
  'Thiết Kế App Mobile': { color: '#0F4F9E', backgroundColor: '#28a745' },
  'Quản Lý Sản Xuất': { color: '#0F4F9E', backgroundColor: '#dc3545' },
  'Quản Lý Bán Hàng': { color: '#0F4F9E', backgroundColor: '#ffc107' },
  'Báo Chí Nói Về FOSO': { color: '#0F4F9E', backgroundColor: '#6c757d' },
  'Tin Tức FOSO': { color: '#0F4F9E', backgroundColor: '#17a2b8' }
};

const content = `
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
`;

export const blogs: BlogCard[] = [
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
  },
  {
    id: 4,
    image: 'https://robohash.org/0.9675590877811582',
    category: {
      name: 'Thiết Kế Website',
      style: {
        color: '#0F4F9E',
        backgroundColor: '#E2F0FE'
      }
    },
    title: 'aliqua sit dolor consectetur dolore magna eiusmod',
    publishedAt: '2025-03-13T19:57:00.811Z',
    readingTime: 5
  },
  {
    id: 21,
    image: 'https://robohash.org/0.20189106900367904',
    category: {
      name: 'Thiết Kế App Mobile',
      style: {
        color: '#28a745',
        backgroundColor: '#d1f7ea'
      }
    },
    title: 'aliqua dolore adipiscing consectetur magna ipsum sit',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 4
  },
  {
    id: 22,
    image: 'https://robohash.org/0.29478542571685384',
    category: {
      name: 'Thiết Kế App Mobile',
      style: {
        color: '#28a745',
        backgroundColor: '#d1f7ea'
      }
    },
    title: 'adipiscing dolore amet incididunt tempor tempor amet',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 7
  },
  {
    id: 23,
    image: 'https://robohash.org/0.9644106305218847',
    category: {
      name: 'Thiết Kế App Mobile',
      style: {
        color: '#28a745',
        backgroundColor: '#d1f7ea'
      }
    },
    title: 'labore adipiscing Lorem elit dolor aliqua incididunt',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 4
  },
  {
    id: 24,
    image: 'https://robohash.org/0.38643680035483263',
    category: {
      name: 'Thiết Kế App Mobile',
      style: {
        color: '#28a745',
        backgroundColor: '#d1f7ea'
      }
    },
    title: 'incididunt incididunt Lorem do sed incididunt eiusmod',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 9
  },
  {
    id: 25,
    image: 'https://robohash.org/0.8023122415500366',
    category: {
      name: 'Thiết Kế App Mobile',
      style: {
        color: '#28a745',
        backgroundColor: '#d1f7ea'
      }
    },
    title: 'aliqua do eiusmod adipiscing eiusmod Lorem Lorem aliqua',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 6
  },
  {
    id: 31,
    image: 'https://robohash.org/0.06039967296820081',
    category: {
      name: 'Quản Lý Sản Xuất',
      style: {
        color: '#dc3545',
        backgroundColor: '#dc35454f'
      }
    },
    title: 'et eiusmod sed et ipsum amet',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 10
  },
  {
    id: 32,
    image: 'https://robohash.org/0.05252927671773566',
    category: {
      name: 'Quản Lý Sản Xuất',
      style: {
        color: '#dc3545',
        backgroundColor: '#dc35454f'
      }
    },
    title: 'sit eiusmod dolore elit eiusmod elit',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 11
  },
  {
    id: 33,
    image: 'https://robohash.org/0.07672567511686079',
    category: {
      name: 'Quản Lý Sản Xuất',
      style: {
        color: '#dc3545',
        backgroundColor: '#dc35454f'
      }
    },
    title: 'sed dolor elit elit consectetur',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 9
  },
  {
    id: 34,
    image: 'https://robohash.org/0.2115522343661851',
    category: {
      name: 'Quản Lý Sản Xuất',
      style: {
        color: '#dc3545',
        backgroundColor: '#dc35454f'
      }
    },
    title: 'dolor sit labore dolor ipsum dolore dolor elit consectetur',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 7
  },
  {
    id: 35,
    image: 'https://robohash.org/0.42559233520737094',
    category: {
      name: 'Quản Lý Sản Xuất',
      style: {
        color: '#dc3545',
        backgroundColor: '#dc35454f'
      }
    },
    title: 'elit ipsum aliqua Lorem adipiscing',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 3
  },
  {
    id: 36,
    image: 'https://robohash.org/0.1801711906885326',
    category: {
      name: 'Quản Lý Sản Xuất',
      style: {
        color: '#dc3545',
        backgroundColor: '#dc35454f'
      }
    },
    title: 'labore dolore consectetur aliqua labore',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 8
  },
  {
    id: 54,
    image: 'https://robohash.org/0.7473403538280445',
    category: {
      name: 'Quản Lý Bán Hàng',
      style: {
        color: '#ffc107',
        backgroundColor: '#ffc10745'
      }
    },
    title: 'ut ut do ut incididunt amet sit tempor',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 3
  },
  {
    id: 55,
    image: 'https://robohash.org/0.45967017162377766',
    category: {
      name: 'Quản Lý Bán Hàng',
      style: {
        color: '#ffc107',
        backgroundColor: '#ffc10745'
      }
    },
    title: 'sit incididunt elit labore Lorem ut',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 3
  },
  {
    id: 56,
    image: 'https://robohash.org/0.29010336968221884',
    category: {
      name: 'Quản Lý Bán Hàng',
      style: {
        color: '#ffc107',
        backgroundColor: '#ffc10745'
      }
    },
    title: 'dolor elit dolore Lorem eiusmod consectetur aliqua elit et',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 7
  },
  {
    id: 72,
    image: 'https://robohash.org/0.7193162694188069',
    category: {
      name: 'Báo Chí Nói Về FOSO',
      style: {
        color: '#6c757d',
        backgroundColor: '#f0f0f0'
      }
    },
    title: 'ut adipiscing dolor dolor consectetur sed magna dolor',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 3
  },
  {
    id: 73,
    image: 'https://robohash.org/0.29177694482168826',
    category: {
      name: 'Báo Chí Nói Về FOSO',
      style: {
        color: '#6c757d',
        backgroundColor: '#f0f0f0'
      }
    },
    title: 'ut amet do aliqua consectetur magna sed',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 3
  },
  {
    id: 74,
    image: 'https://robohash.org/0.21962550618588894',
    category: {
      name: 'Báo Chí Nói Về FOSO',
      style: {
        color: '#6c757d',
        backgroundColor: '#f0f0f0'
      }
    },
    title: 'magna ut eiusmod Lorem incididunt incididunt dolore Lorem',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 6
  },
  {
    id: 75,
    image: 'https://robohash.org/0.6792525045729707',
    category: {
      name: 'Báo Chí Nói Về FOSO',
      style: {
        color: '#6c757d',
        backgroundColor: '#f0f0f0'
      }
    },
    title: 'do Lorem tempor ipsum sed dolore ut ut magna',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 6
  },
  {
    id: 76,
    image: 'https://robohash.org/0.922878906444901',
    category: {
      name: 'Báo Chí Nói Về FOSO',
      style: {
        color: '#6c757d',
        backgroundColor: '#f0f0f0'
      }
    },
    title: 'aliqua ipsum adipiscing ipsum ipsum sed ipsum sit adipiscing',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 11
  },
  {
    id: 77,
    image: 'https://robohash.org/0.7942490886411921',
    category: {
      name: 'Tin Tức FOSO',
      style: {
        color: '#17a2b8',
        backgroundColor: '#17a2b847'
      }
    },
    title: 'ipsum ut labore ipsum sed labore sed',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 4
  },
  {
    id: 78,
    image: 'https://robohash.org/0.5922338687566702',
    category: {
      name: 'Tin Tức FOSO',
      style: {
        color: '#17a2b8',
        backgroundColor: '#17a2b847'
      }
    },
    title: 'sed aliqua sit aliqua elit consectetur ipsum consectetur do',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 11
  },
  {
    id: 79,
    image: 'https://robohash.org/0.015536982803960209',
    category: {
      name: 'Tin Tức FOSO',
      style: {
        color: '#17a2b8',
        backgroundColor: '#17a2b847'
      }
    },
    title: 'labore eiusmod dolore ipsum incididunt sed',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 9
  },
  {
    id: 80,
    image: 'https://robohash.org/0.5080096034657995',
    category: {
      name: 'Tin Tức FOSO',
      style: {
        color: '#17a2b8',
        backgroundColor: '#17a2b847'
      }
    },
    title: 'tempor tempor dolore labore eiusmod labore',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 5
  },
  {
    id: 81,
    image: 'https://robohash.org/0.12269396956579603',
    category: {
      name: 'Tin Tức FOSO',
      style: {
        color: '#17a2b8',
        backgroundColor: '#17a2b847'
      }
    },
    title: 'dolor et consectetur aliqua et aliqua elit',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 7
  },
  {
    id: 82,
    image: 'https://robohash.org/0.6987933777276067',
    category: {
      name: 'Tin Tức FOSO',
      style: {
        color: '#17a2b8',
        backgroundColor: '#17a2b847'
      }
    },
    title: 'dolore ipsum elit adipiscing et aliqua consectetur',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 8
  },
  {
    id: 83,
    image: 'https://robohash.org/0.6696965012283809',
    category: {
      name: 'Tin Tức FOSO',
      style: {
        color: '#17a2b8',
        backgroundColor: '#17a2b847'
      }
    },
    title: 'sed eiusmod eiusmod sit adipiscing magna sed consectetur',
    publishedAt: '2025-03-13T19:57:00.812Z',
    readingTime: 12
  }
].map(b => ({ ...b, content }));
