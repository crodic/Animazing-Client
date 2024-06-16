'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

export type dataItems = {
    label: string;
    path: string;
};

interface ISelectionControl {
    items: dataItems[];
}

const SelectionControl: FC<ISelectionControl> = ({ items }) => {
    const pathname = usePathname();

    return (
        <ul className="flex">
            {items.map((tab, index) => (
                <li
                    key={index}
                    className={cn('border-b-4 border-transparent', tab.path === pathname && 'border-primary')}
                >
                    <Link
                        href={tab.path}
                        className={cn(
                            'text-md block px-4 py-2 font-semibold opacity-50 hover:font-bold hover:opacity-80',
                            tab.path === pathname && 'font-bold opacity-100',
                        )}
                    >
                        {tab.label}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default SelectionControl;
