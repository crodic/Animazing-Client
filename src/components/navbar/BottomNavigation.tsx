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
        icon: <Images />,
    },
    {
        label: 'Manga',
        path: '/manga',
        icon: <Image />,
    },
    {
        label: 'Light Novel',
        path: '/light-novel',
        icon: <BookImage />,
    },
    {
        label: 'Cosplay',
        path: '/cosplay',
        icon: <SquareUserRound />,
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
                                        <Link className={cn('block p-4')} href={nav.path}>
                                            {nav.icon}
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
