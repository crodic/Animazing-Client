import AccountForm from '@/components/form/AccountForm';
import { Separator } from '@/components/ui/separator';
import React from 'react';

const SettingPage = () => {
    return (
        <section className="mb-10">
            <div className="space-y-0.5">
                <h2 className="text-lg font-semibold tracking-tight">Account</h2>
                <p className="text-muted-foreground">Thay đổi thông tin tài khoản.</p>
            </div>
            <Separator className="my-4" />
            <AccountForm />
        </section>
    );
};

export default SettingPage;
