import Image from 'next/image';

export const FOSOButton = ({
  title,
  icon = '/default-icon.png',
  variants = 'outline',
  buttonProps
}: FOSOButtonProps) => {
  const baseClasses = 'w-fit flex items-center gap-4 py-2';
  const variantClasses =
    variants === 'text'
      ? 'pr-4'
      : 'px-6 gap-8 justify-center border border-white border-2 rounded-[40px] text-white font-[700] text-sm';

  return (
    <button
      className={`${baseClasses} ${variantClasses}`}
      {...buttonProps}
    >
      {title}
      <div className='w-8 h-8 flex items-center justify-center'>
        <Image
          src={icon}
          alt='icon'
          width={18}
          height={18}
        />
      </div>
    </button>
  );
};

type FOSOButtonProps = {
  title: string;
  icon?: string;
  variants: 'text' | 'outline';
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
};
