import { cn } from '@/lib/utils';
import React, { ElementType, FC, ReactNode } from 'react';

interface IBorderGradient {
    children: ReactNode;
    isMembership?: boolean;
    as?: ElementType;
    className?: string;
    isAvatar?: boolean;
}

const BorderGradient: FC<IBorderGradient> = ({ children, isMembership, as, className, isAvatar }) => {
    const Component = as || 'div';
    return (
        <Component
            className={cn(
                'h-max w-max',
                isMembership && 'bg-membership p-1',
                isAvatar && 'rounded-full p-1',
                className,
            )}
        >
            {children}
        </Component>
    );
};

export default BorderGradient;
