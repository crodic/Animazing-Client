import { cn } from '@/lib/utils';
import React, { ElementType, FC, ReactNode } from 'react';

interface IBorderGradient {
    children: ReactNode;
    isMembership?: boolean;
    as?: ElementType;
    className?: string;
}

const BorderGradient: FC<IBorderGradient> = ({ children, isMembership, as, className }) => {
    const Component = as || 'div';
    return <Component className={cn('w-full', isMembership && 'bg-membership', className)}>{children}</Component>;
};

export default BorderGradient;
