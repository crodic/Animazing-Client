'use client';

import React, { FC } from 'react';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Heart, Layers } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Separator } from '../ui/separator';
import BorderGradient from '../BorderGradient';

interface IArtworkCard {
    count?: number;
    isLike?: boolean;
    type?: 'artwork' | 'manga';
    isMembership?: boolean;
}

const ArtworkCard: FC<IArtworkCard> = ({ count, isLike, isMembership = false }) => {
    return (
        <BorderGradient
            as={isMembership ? 'div' : Card}
            className="group h-auto w-auto cursor-pointer overflow-hidden rounded-none sm:rounded-lg"
            isMembership={isMembership}
        >
            <CardContent className="rounded-[inherit] bg-card p-0 text-card-foreground">
                <div className="relative overflow-hidden">
                    <Image
                        src="/artwork.png"
                        alt=""
                        width={300}
                        height={300}
                        quality={100}
                        className="aspect-square w-full rounded-none object-cover object-center"
                    />
                    <div className="absolute bottom-2 right-2">
                        <Heart
                            className={cn(
                                'size-8 fill-white stroke-black transition-all duration-100 sm:hover:scale-110 sm:hover:fill-destructive sm:size-6',
                                isLike && 'fill-destructive',
                            )}
                        />
                    </div>
                    <div className="pointer-events-none absolute inset-0 z-10 group-hover:bg-muted/20"></div>
                </div>
                <div className="hidden space-y-1 px-3 py-2 sm:block">
                    <h5 className="line-clamp-1 text-sm font-semibold">Honkai star rail - Jingliu</h5>
                    <div className="flex items-center gap-2">
                        <Avatar className="size-7">
                            <AvatarImage src="/avatar.png" className="object-cover object-top" />
                            <AvatarFallback>S</AvatarFallback>
                        </Avatar>
                        <span className="line-clamp-1 flex-1 whitespace-nowrap text-xs">Crodic Crystal</span>
                        <Separator orientation="vertical" className="h-5" />
                        <span className="flex items-center gap-1 text-xs">
                            <Layers size={10} />
                            {count || 12}
                        </span>
                    </div>
                </div>
            </CardContent>
        </BorderGradient>
    );
};

export default ArtworkCard;
