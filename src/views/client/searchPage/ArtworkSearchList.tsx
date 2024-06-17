import ArtworkCard from '@/components/card/ArtworkCard';
import { Card, CardContent } from '@/components/ui/card';
import React from 'react';

const ArtworkSearchList = () => {
    return (
        <Card className="py-4" id="artwork">
            <CardContent className="space-y-4">
                <h4 className="text-lg font-semibold">Popular Artwork</h4>

                <section className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-4 lg:grid-cols-6">
                    {Array.from({ length: 24 }).map((card, index) => (
                        <ArtworkCard key={index} />
                    ))}
                </section>
            </CardContent>
        </Card>
    );
};

export default ArtworkSearchList;
