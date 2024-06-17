import PricingCard from '@/components/card/PricingCard';
import { TierType } from '@/mocks/tiers-pricing';
import { FC } from 'react';

interface IMembershipList {
    tiers: TierType[];
}

const MembershipList: FC<IMembershipList> = ({ tiers }) => {
    return (
        <div className="z-20 flow-root pb-24 sm:pb-32">
            <div className="-mt-80">
                <div className="mx-auto px-6 lg:px-8">
                    <div className="mx-auto grid grid-cols-1 gap-8 lg:grid-cols-3">
                        {tiers.map((tier) => (
                            <PricingCard tier={tier} key={tier.id} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MembershipList;
