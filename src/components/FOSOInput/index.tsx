import Image from 'next/image';

export const FOSOInput = ({
  label,
  placeholder,
  type = 'text',
  disabled = false,
  icon,
  inputProps,
  value,
  handleValue
}: FOSOInputProps) => {
  return (
    <div className='bg-white flex items-center justify-between py-3 pl-6 pr-2 rounded-[12px] shadow-[0px_12px_24px_-4px_#919EAB29]'>
      {label && <span>{label}</span>}
      <input
        type={type}
        value={value}
        onChange={handleValue}
        placeholder={placeholder}
        disabled={disabled}
        className='outline-none'
        {...inputProps}
      />
      <div className='bg-[#15AA7A] w-[48px] h-[48px] rounded-[12px] flex items-center justify-center'>
        <Image
          src={icon || '/default.svg'}
          alt='icon'
          width={24}
          height={24}
        />
      </div>
    </div>
  );
};

export type FOSOInputProps = {
  label?: string;
  placeholder?: string;
  type?: 'text' | 'password' | 'email' | 'number';
  disabled?: boolean;
  icon?: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  error?: string;
  value?: string;
  handleValue?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
