import BottomNavigation from '@/components/navbar/BottomNavigation';
import Navbar from '@/components/navbar/Navbar';
import React from 'react';

interface PrivateLayoutProps {
    children: React.ReactNode;
}

const PrivateLayout = ({ children }: PrivateLayoutProps) => {
    return (
        <>
            <div className='mb-20 md:mb-8'>
                <Navbar />
                {children}
            </div>
            <BottomNavigation />
        </>
    );
};

export default PrivateLayout;
