import Navbar from '@/components/navbar/Navbar';
import { ReactNode } from 'react';

const PublicLayout = ({
    children,
}: Readonly<{
    children: ReactNode;
}>) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
};

export default PublicLayout;
