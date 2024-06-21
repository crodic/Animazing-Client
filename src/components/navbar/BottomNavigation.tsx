'use client';

/* eslint-disable jsx-a11y/alt-text */
import { BookImage, Image, Images, SquareUserRound } from 'lucide-react';
import Container from '../Container';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const Navigation = [
    {
        label: 'Artwork',
        path: '/',
        icon: <Images size={18} />,
    },
    {
        label: 'Manga',
        path: '/manga',
        icon: <Image size={18} />,
    },
    {
        label: 'Light Novel',
        path: '/light-novel',
        icon: <BookImage size={18} />,
    },
    {
        label: 'Cosplay',
        path: '/cosplay',
        icon: <SquareUserRound size={18} />,
    },
];

const BottomNavigation = () => {
    const pathname = usePathname();
    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 block border-t-2 bg-card text-card-foreground shadow-md md:hidden">
            <Container disablePadding>
                <ul className="grid grid-cols-4">
                    {Navigation.map((nav, index) => (
                        <TooltipProvider key={index} delayDuration={0}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <li
                                        className={cn(
                                            'flex cursor-pointer items-center justify-center border-t-4 border-transparent',
                                            nav.path === pathname && 'border-primary bg-muted',
                                        )}
                                    >
                                        <Link className={cn('p-2 flex flex-col justify-center items-center gap-1')} href={nav.path}>
                                            {nav.icon}
                                            <span className='text-xs font-medium'>
                                                {nav.label}
                                            </span>
                                        </Link>
                                    </li>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{nav.label}</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    ))}
                </ul>
            </Container>
        </nav>
    );
};

export default BottomNavigation;
