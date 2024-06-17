'use client';
import {
    Pagination as NextPagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';
import usePagination from '@/hooks/usePagination';
import { FC } from 'react';

interface IPagination {
    count: number;
    page?: number;
    siblingCount?: number;
}

const Pagination: FC<IPagination> = ({ count, page = 1, siblingCount = 3 }) => {
    const pagination = usePagination({ count, page, siblingCount });
    return (
        <NextPagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious href="#" />
                </PaginationItem>
                {pagination?.map((item, index) => {
                    if (typeof item === 'number') {
                        return (
                            <PaginationItem key={index}>
                                <PaginationLink href="#">{item}</PaginationLink>
                            </PaginationItem>
                        );
                    } else {
                        return (
                            <PaginationItem key={index}>
                                <PaginationEllipsis />
                            </PaginationItem>
                        );
                    }
                })}
                <PaginationItem>
                    <PaginationNext href="#" />
                </PaginationItem>
            </PaginationContent>
        </NextPagination>
    );
};

export default Pagination;
