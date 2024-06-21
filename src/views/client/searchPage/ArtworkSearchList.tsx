import ArtworkCard from '@/components/card/ArtworkCard';

const ArtworkSearchList = () => {
    return (
        <div className="space-y-4">
            <h4 className="text-lg font-semibold indent-4">Popular Artwork</h4>

            <section className="grid grid-cols-2 gap-2 sm:grid-cols-4 md:gap-4 lg:grid-cols-6">
                {Array.from({ length: 24 }).map((card, index) => (
                    <ArtworkCard key={index} />
                ))}
            </section>
        </div>
    );
};

export default ArtworkSearchList;
