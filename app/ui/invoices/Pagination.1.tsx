'use client';
import { usePathname, useSearchParams } from 'next/navigation';



export default function Pagination({ totalPages }: { totalPages: number; }) {
  // NOTE: comment in this code when you get to this point in the course
  // const allPages = generatePagination(currentPage, totalPages);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };
  return (
    <>
      {/* NOTE: comment in this code when you get to this point in the course */}

      {/* <div className="inline-flex">
              <PaginationArrow
                direction="left"
                href={createPageURL(currentPage - 1)}
                isDisabled={currentPage <= 1}
              />
      
              <div className="flex -space-x-px">
                {allPages.map((page, index) => {
                  let position: 'first' | 'last' | 'single' | 'middle' | undefined;
      
                  if (index === 0) position = 'first';
                  if (index === allPages.length - 1) position = 'last';
                  if (allPages.length === 1) position = 'single';
                  if (page === '...') position = 'middle';
      
                  return (
                    <PaginationNumber
                      key={page}
                      href={createPageURL(page)}
                      page={page}
                      position={position}
                      isActive={currentPage === page}
                    />
                  );
                })}
              </div>
      
              <PaginationArrow
                direction="right"
                href={createPageURL(currentPage + 1)}
                isDisabled={currentPage >= totalPages}
              />
            </div> */}
    </>
  );
}
