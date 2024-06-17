import { Separator } from '@/components/ui/separator';
import MembershipAction from '@/views/client/membershipPage/MembershipAction';
import React from 'react';

const MembershipSettingPage = () => {
    return (
        <section className="mb-10">
            <div className="space-y-0.5">
                <h2 className="text-lg font-semibold tracking-tight">Membership</h2>
                <p className="text-muted-foreground">Cấp độ tài khoản của bạn.</p>
            </div>
            <Separator className="my-4" />
            <MembershipAction />
        </section>
    );
};

export default MembershipSettingPage;
