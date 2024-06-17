import Container from '@/components/Container';
import ArtworkCard from '@/components/card/ArtworkCard';

export default function Home() {
    return (
        <Container disablePadding>
            <main>
                <section className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-4 lg:grid-cols-6">
                    {Array.from({ length: 24 }).map((card, index) => (
                        <ArtworkCard key={index} />
                    ))}
                </section>
            </main>
        </Container>
    );
}
