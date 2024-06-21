import Navbar from '@/components/navbar/Navbar';
import React from 'react';

interface PrivateLayoutProps {
    children: React.ReactNode;
}

const PrivateLayout = ({ children }: PrivateLayoutProps) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

export default PrivateLayout;
