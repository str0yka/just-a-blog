'use client';

import { forwardRef } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import type { PaginationProps as UIPaginationProps } from '~/components/ui';
import { Pagination as UIPaggination } from '~/components/ui';
import { SEARCH_PARAMS } from '~/utils/constants';

type PagginationProps = Omit<UIPaginationProps, 'onPageChange'>;

export const Pagination = forwardRef<React.ComponentRef<typeof UIPaggination>, PagginationProps>(
  ({ currentPage, totalPages, ...props }, ref) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const createPageURL = (page: number) => {
      const params = new URLSearchParams(searchParams);
      params.set(SEARCH_PARAMS.PAGE, page.toString());
      return `${pathname}?${params.toString()}`;
    };

    const onPageChange = (page: number) => router.push(createPageURL(page));

    return (
      <UIPaggination
        ref={ref}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
        {...props}
      />
    );
  },
);
