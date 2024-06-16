'use client';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { useRouter } from 'next-nprogress-bar';
import { usePathname, useSearchParams } from 'next/navigation';
import { FC } from 'react';

export type FilterItem = {
    label: string;
    value: string;
};

interface IFilterSelect {
    items: FilterItem[];
    initialValue: string;
}

const FilterSelect: FC<IFilterSelect> = ({ items, initialValue }) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();
    const handleValueChange = (value: string) => {
        const queryString = new URLSearchParams(searchParams);
        if (value.trim() !== 'all') {
            queryString.set('filter', value);
        } else {
            queryString.delete('filter');
        }
        router.replace(`${pathname}?${queryString.toString()}`);
    };

    return (
        <Select
            defaultValue={initialValue}
            value={searchParams.get('filter') || initialValue}
            onValueChange={handleValueChange}
        >
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Content Filter" />
            </SelectTrigger>
            <SelectContent className="overflow-y-auto">
                {items.map((select, index) => (
                    <SelectItem key={index} value={select.value}>
                        {select.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};

export default FilterSelect;
