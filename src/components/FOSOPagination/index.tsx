import { ArrowLeft, ArrowRight } from 'lucide-react';

export const FOSOPagination = ({
  currentPage,
  totalPages,
  onPageChange
}: FOSOPaginationProps) => {
  const getPages = (): (number | string)[] => {
    const pages: (number | string)[] = [];

    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 3) {
      pages.push(1, 2, 3, '...', totalPages);
    } else if (currentPage >= totalPages - 2) {
      pages.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
    } else {
      pages.push(
        1,
        '...',
        currentPage - 1,
        currentPage,
        currentPage + 1,
        '...',
        totalPages
      );
    }

    return pages;
  };

  return (
    <div className='flex items-center justify-between gap-2 mt-4'>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className='flex gap-2 items-center px-4 py-2 text-[#B3C5D4] '
      >
        <ArrowLeft className='w-6 h-6' /> Trang trước
      </button>

      <div>
        {getPages().map((page, index) =>
          page === '...' ? (
            <span
              key={index}
              className='px-2 text-[#809FB8]'
            >
              ...
            </span>
          ) : (
            <button
              key={index}
              onClick={() => onPageChange(page as number)}
              className={`w-10 h-10 px-3 py-2 rounded-md ${
                currentPage === page
                  ? 'bg-[#D1F7EA] text-[#052B1E] font-[600]'
                  : 'text-[#809FB8]'
              }`}
            >
              {page}
            </button>
          )
        )}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className='flex gap-2 items-center px-4 py-2 text-[#4D5F6E] '
      >
        Trang kế tiếp <ArrowRight className='w-6 h-6' />
      </button>
    </div>
  );
};
type FOSOPaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};
