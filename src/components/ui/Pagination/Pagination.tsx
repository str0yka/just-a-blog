'use client';

import { forwardRef } from 'react';
import clsx from 'clsx';

import { usePagination } from './hooks';

import s from './Pagination.module.scss';

export interface PaginationProps extends React.ComponentProps<'nav'> {
  currentPage: number;
  totalPages: number;
  siblingCount?: number;
  onPageChange?: (page: number) => void;
}

export const Pagination = forwardRef<React.ComponentRef<'nav'>, PaginationProps>(
  ({ currentPage, totalPages, siblingCount = 1, onPageChange, className }, ref) => {
    const pages = usePagination({ currentPage, totalPages, siblingCount });

    return (
      <nav
        ref={ref}
        className={clsx(s.list, className)}
      >
        {pages.map((page, index) =>
          page ? (
            <button
              key={index}
              type="button"
              className={clsx(s['list-item'], s['page-button'], {
                [s.active]: currentPage === page,
              })}
              onClick={() => onPageChange?.(page)}
            >
              {page}
            </button>
          ) : (
            <div
              key={index}
              className={s['list-item']}
            >
              ...
            </div>
          ),
        )}
      </nav>
    );
  },
);
