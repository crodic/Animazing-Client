import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import TabArtworkContent from '@/views/client/createArtworkPage/TabArtworkContent';
import TabCosplayContent from '@/views/client/createArtworkPage/TabCosplayContent';
import TabLightNovelContent from '@/views/client/createArtworkPage/TabLightNovelContent';
import TabMangaContent from '@/views/client/createArtworkPage/TabMangaContent';

const tabItems = [
    {
        label: 'artwork',
        value: 'artwork',
    },
    {
        label: 'manga',
        value: 'manga',
    },
    {
        label: 'light novel',
        value: 'light_novel',
    },
    {
        label: 'cosplay',
        value: 'cosplay',
    },
];

const TabContentCreate = () => {
    const ArtworkTab = (
        <TabsContent value={tabItems[0].value}>
            <TabArtworkContent />
        </TabsContent>
    );
    const MangaTab = (
        <TabsContent value={tabItems[1].value}>
            <TabMangaContent />
        </TabsContent>
    );
    const LightNovelTab = (
        <TabsContent value={tabItems[2].value}>
            <TabLightNovelContent />
        </TabsContent>
    );
    const CosplayTab = (
        <TabsContent value={tabItems[3].value}>
            <TabCosplayContent />
        </TabsContent>
    );

    return (
        <Tabs defaultValue="artwork">
            <TabsList className="w-max">
                {tabItems.map((tab, index) => (
                    <TabsTrigger key={index} value={tab.value} className="flex-1 capitalize">
                        {tab.label}
                    </TabsTrigger>
                ))}
            </TabsList>
            {ArtworkTab}
            {MangaTab}
            {LightNovelTab}
            {CosplayTab}
        </Tabs>
    );
};

export default TabContentCreate;
