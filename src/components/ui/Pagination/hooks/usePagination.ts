import { useMemo } from 'react';

interface UsePaginationOptions {
  totalPages: number;
  currentPage: number;
  siblingCount?: number;
}

const range = (start: number, end: number) => {
  const length = end - start + 1;
  return Array.from({ length }, (_, index) => index + start);
};

export const usePagination = ({
  currentPage,
  totalPages,
  siblingCount = 1,
}: UsePaginationOptions) => {
  const pages = useMemo(() => {
    const firstPage = 1;
    const lastPage = totalPages;
    const totalPageNumbers = 2 * siblingCount + 5; // 5 = currentPage + 2 spaces + first page + last page

    if (totalPageNumbers >= totalPages) {
      return range(firstPage, lastPage);
    }

    const leftSiblingPage = Math.max(currentPage - siblingCount, firstPage);
    const rightSiblingPage = Math.min(currentPage + siblingCount, lastPage);

    const shouldShowLeftSpace = leftSiblingPage > firstPage + 2;
    const shouldShowRightSpace = rightSiblingPage < lastPage - 2;

    if (!shouldShowLeftSpace && !shouldShowRightSpace) {
      return range(firstPage, lastPage);
    }

    if (!shouldShowLeftSpace && shouldShowRightSpace) {
      return [...range(1, totalPageNumbers - 2), null, lastPage];
    }

    if (shouldShowLeftSpace && !shouldShowRightSpace) {
      return [firstPage, null, ...range(totalPages - (totalPageNumbers - 3), totalPages)];
    }

    return [firstPage, null, ...range(leftSiblingPage, rightSiblingPage), null, lastPage];
  }, [currentPage, totalPages, siblingCount]);

  return pages;
};
