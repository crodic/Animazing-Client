import { cn } from '@/lib/utils';
import { CheckIcon } from 'lucide-react';
import { FC } from 'react';
import { Button } from '../ui/button';
import { TierType } from '@/mocks/tiers-pricing';

interface IPricingCard {
    tier: TierType;
}

const PricingCard: FC<IPricingCard> = ({ tier }) => {
    return (
        <div
            key={tier.id}
            className={cn(
                'z-10 flex flex-col justify-between rounded-3xl bg-card p-8 text-card-foreground shadow-xl ring-1 ring-gray-900/10 sm:p-10',
                tier.recommend && 'border-4 border-primary',
            )}
        >
            <div>
                <h3 id={tier.id} className="text-base font-semibold leading-7">
                    {tier.name}
                </h3>
                <div className="mt-4 flex items-baseline gap-x-2">
                    <span className="text-5xl font-bold tracking-tight">{tier.price}</span>
                </div>
                <p className="mt-6 text-base leading-7">{tier.description}</p>
                <ul role="list" className="mt-10 space-y-4 text-sm leading-6">
                    {tier.features.map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                            <CheckIcon className="h-6 w-5 flex-none" aria-hidden="true" />
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>
            <Button
                variant={tier.recommend ? 'default' : 'outline'}
                className="mt-8 disabled:bg-transparent"
                disabled={tier.current}
            >
                {tier.current ? 'Gói hiện tại' : 'Nâng cấp ngay'}
            </Button>
        </div>
    );
};

export default PricingCard;
