import Container from '@/components/Container';
import FilterSelect from '@/components/FilterSelect';
import SelectionControl from '@/components/SelectionControl';
import { FILTER_ITEMS, SELECT_TAB } from '@/mocks/tab-items';
import { ReactNode, Suspense } from 'react';

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
                    <Suspense>
                        <FilterSelect items={FILTER_ITEMS} initialValue={FILTER_ITEMS[0].value} />
                    </Suspense>
                </section>
                {children}
            </main>
        </Container>
    );
};

export default HomeLayout;
