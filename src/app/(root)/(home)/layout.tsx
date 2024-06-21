import Container from '@/components/Container';
import SelectionControl from '@/components/SelectionControl';
import { SELECT_TAB } from '@/mocks/tab-items';
import { ReactNode } from 'react';

const HomeLayout = ({
    children,
}: Readonly<{
    children: ReactNode;
}>) => {
    return (
        <Container>
            <main className="mt-4 min-h-[120svh] space-y-10 md:mt-20">
                <section className="hidden items-center justify-between bg-card px-4 py-2 text-card-foreground md:flex">
                    <SelectionControl items={SELECT_TAB} />
                </section>
                {children}
            </main>
        </Container>
    );
};

export default HomeLayout;
