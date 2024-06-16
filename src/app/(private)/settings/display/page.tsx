import DisplayForm from '@/components/form/DisplayForm';
import { Separator } from '@/components/ui/separator';
import React from 'react';

const DisplaySettingPage = () => {
    return (
        <section className="mb-10">
            <div className="space-y-0.5">
                <h2 className="text-lg font-semibold tracking-tight">Hiển Thị</h2>
                <p className="text-muted-foreground">Chế độ hiển thị an toàn cho tài khoản.</p>
            </div>
            <Separator className="my-4" />
            <DisplayForm />
        </section>
    );
};

export default DisplaySettingPage;
