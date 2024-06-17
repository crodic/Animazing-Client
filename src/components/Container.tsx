import { cn } from '@/lib/utils';
import React, { ElementType, FC, ReactNode } from 'react';

interface IContainer {
    children?: ReactNode;
    disablePadding?: boolean;
    as?: ElementType;
}

const Container: FC<IContainer> = ({ children, disablePadding, as }) => {
    const Component = as || 'div';
    return (
        <Component
            className={cn('mx-auto w-full min-w-[320px] max-w-7xl', !disablePadding && 'px-2 md:px-4 lg:px-5 xl:px-6')}
        >
            {children}
        </Component>
    );
};

Container.displayName = 'Container';

export default Container;
