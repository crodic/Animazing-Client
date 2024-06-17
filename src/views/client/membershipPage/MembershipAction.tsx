import { Button } from '@/components/ui/button';
import { CircleAlert } from 'lucide-react';
import Link from 'next/link';

const MembershipAction = () => {
    return (
        <div className="space-y-4">
            <h4 className="text-base">
                Gói Hiện Tại: <span className="font-semibold">BASIC (FREE)</span>
            </h4>
            <p className="flex items-center gap-1 text-xs text-destructive">
                <CircleAlert size={10} />
                Gói hiện tại không thể dùng tính năng Membership
            </p>
            <div className="flex gap-4">
                <Button asChild variant="warning">
                    <Link href="/membership">Nâng Cấp Tài Khoản</Link>
                </Button>
                <Button variant="outline" disabled>
                    Membership Dashboard
                </Button>
            </div>
        </div>
    );
};

export default MembershipAction;
