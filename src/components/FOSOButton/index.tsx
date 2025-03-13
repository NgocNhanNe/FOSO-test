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
      ? 'pr-4 text-[#667F93]'
      : 'px-6 gap-8 justify-center border border-white border-2 rounded-[40px] text-white font-[700] text-sm';

  const iconSize = variants === 'text' ? 'w-12 h-12' : 'w-8 h-8';

  return (
    <button
      className={`${baseClasses} ${variantClasses}`}
      {...buttonProps}
    >
      {title}
      <div className={`${iconSize} flex items-center justify-center`}>
        <Image
          src={icon}
          alt='icon'
          width={variants === 'outline' ? 18 : 24}
          height={variants === 'outline' ? 18 : 24}
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
