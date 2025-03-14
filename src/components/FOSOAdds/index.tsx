import Image from 'next/image';
import arrowUpRight from '../../assets/icons/ArrowUpRight.svg';
import Group from '../../assets/images/Group.png';
import calculate from '../../assets/images/calculate.png';
import robot from '../../assets/images/robot.png';
import logoMRP from '../../assets/images/logoMRP.svg';
import { FOSOButton } from '@/components/FOSOButton';

export const FOSOAdds = () => {
  return (
    <div className='w-full flex flex-col gap-6'>
      <div className='flex gap-8 items-center justify-center flex-col max-w-[366px] h-[650px] w-full bg-gradient-to-r from-[#013DA0] via-[#025ACE] to-[#0375F3] rounded-[40px]'>
        <div className=''>
          <Image
            alt='calculate'
            src={calculate}
            width={400}
            height={200}
            className=' object-contain '
          />
        </div>
        <div className='w-full flex flex-col gap-6 justify-center items-center'>
          <div className='flex gap-2 text-white items-center'>
            <div className=''>
              <Image
                alt='robot'
                src={robot}
                width={136}
                height={136}
                className='object-contain '
              />
            </div>
            <div className='flex flex-col gap-2'>
              <p className='font-semibold text-xl'>Miễn phí dùng thử</p>
              <div className='flex justify-center'>
                <Image
                  alt='logoMRP'
                  src={logoMRP}
                  width={155}
                  height={136}
                  className=' object-contain '
                />
              </div>
            </div>
          </div>
        </div>
        <div className='w-full px-6'>
          <FOSOButton
            title='Tham Gia Ngay'
            icon={arrowUpRight}
            variants='outline'
            buttonProps={{ style: { width: '100%' } }}
          />
        </div>
      </div>
      <div className='flex flex-col max-w-[366px] h-[650px] w-full bg-gradient-to-r from-[#013DA0] via-[#025ACE] to-[#0375F3] rounded-[40px]'>
        <div className='w-full h-[100%]'>
          <Image
            alt='Group'
            src={Group}
            width={400}
            height={500}
            className='w-full object-contain h-[100%]'
          />
        </div>
        <div className='w-full flex flex-col gap-6 justify-center pt-6 pl-6 pr-6 pb-12'>
          <p className='text-xl font-semibold text-white leading-7'>
            Gia nhập cộng đồng FMRP Việt – Kết nối, chia sẻ, cùng phát triển!
          </p>
          <FOSOButton
            title='Tham Gia Ngay'
            icon={arrowUpRight}
            variants='outline'
          />
        </div>
      </div>
    </div>
  );
};
