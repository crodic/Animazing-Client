import { Card, CardContent, CardHeader } from '@/components/ui/card';

import Container from '@/components/Container';
import Link from 'next/link';
import React from 'react';
import { Separator } from '@/components/ui/separator';
import TabContentCreate from '@/components/tab/TabContentCreate';

const CreateArtworkPage = () => {
    return (
        <Container>
            <main className="mt-8">
                <Card className="p-4 md:p-8">
                    <CardHeader>
                        <h4 className="text-xl font-semibold">Đăng Tác Phẩm.</h4>
                        <span className="text-sm font-medium text-card-foreground/40">
                            Đọc{' '}
                            <Link
                                href="#"
                                className="font-medium text-primary/80 transition-all duration-150 hover:text-primary hover:underline"
                            >
                                quy định
                            </Link>{' '}
                            về bài đăng tác phẩm của chúng tôi.
                        </span>
                    </CardHeader>
                    <Separator className="mb-4" />
                    <CardContent>
                        <TabContentCreate />
                    </CardContent>
                </Card>
            </main>
        </Container>
    );
};

export default CreateArtworkPage;
