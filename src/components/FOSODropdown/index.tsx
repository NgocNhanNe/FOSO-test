'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import iconCountry from '../../assets/icons/icon_country.svg';
import { useRouter } from 'next/navigation';

export const FOSODropdown = ({ title, type, listItems }: FOSODropdownProps) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(listItems[0]);

  const handleSelect = (option: ListItem) => {
    setSelected(option);
    setIsOpen(false);
  };

  return type === 'bold-title' ? (
    <div className='relative inline-block text-left '>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1 text-gray-800 hover:text-black cursor-pointer`}
      >
        <span>{title}</span> <ChevronDown className='w-4 h-4' />
      </button>
      {isOpen && (
        <div className='absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg'>
          <ul className='py-2 text-gray-700'>
            {listItems.map((item, i) => (
              <li
                className='px-4 py-2 hover:bg-gray-100 cursor-pointer '
                key={i}
                onClick={() => {
                  router.push(`${item.value}`);
                  setIsOpen(false);
                }}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  ) : type === 'has-icon' ? (
    <div className='relative inline-block text-left '>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='flex items-center gap-3 text-gray-800 hover:text-black cursor-pointer	'
      >
        <Image
          src={selected.icon || iconCountry}
          alt='icon'
          width={24}
          height={24}
        />
        <div className='flex gap-1 items-center justify-center'>
          {selected.label} <ChevronDown className='w-4 h-4' />
        </div>
      </button>
      {isOpen && (
        <div className='absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg'>
          <ul className='py-2 text-gray-700'>
            {listItems.map((item, i) => (
              <li
                key={i}
                className={`flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                  selected.label === item.label ? 'font-semibold text-blue-600' : ''
                }`}
                onClick={() => handleSelect(item)}
              >
                <Image
                  src={item.icon || iconCountry}
                  alt='icon'
                  width={24}
                  height={24}
                />
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  ) : null;
};

type FOSODropdownProps = {
  type: 'has-icon' | 'bold-title';
  title?: string;
  listItems: ListItem[];
};

export type ListItem = {
  icon?: string;
  label: string;
  value: string;
};
