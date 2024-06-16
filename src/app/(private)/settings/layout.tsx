import { Metadata } from 'next';

import { Separator } from '@/components/ui/separator';
import { SidebarSetting } from '@/components/sidebar/SidebarSetting';
import Navbar from '@/components/navbar/Navbar';
import Container from '@/components/Container';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
    title: 'Forms',
    description: 'Advanced form example using react-hook-form and Zod.',
};

const sidebarNavItems = [
    {
        title: 'Account',
        href: '/settings',
    },
    {
        title: 'Display Content',
        href: '/settings/display',
    },
    {
        title: 'Membership',
        href: '/settings/membership',
    },
    {
        title: 'Notifications',
        href: '/settings/notifications',
    },
    {
        title: 'Billing',
        href: '/settings/billing',
    },
    {
        title: 'Fan Box',
        href: '/settings/fanbox',
    },
];

interface SettingsLayoutProps {
    children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
    return (
        <>
            <Navbar />
            <Container>
                <Card className="mt-10 py-8">
                    <CardContent className="space-y-6">
                        <div className="box-border flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
                            <aside className="lg:w-[20%]">
                                <SidebarSetting items={sidebarNavItems} />
                            </aside>
                            <Separator className="md:hidden" />
                            <div className="flex-1">{children}</div>
                        </div>
                    </CardContent>
                </Card>
            </Container>
        </>
    );
}
