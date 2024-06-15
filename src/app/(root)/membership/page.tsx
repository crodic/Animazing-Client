import Container from '@/components/Container';
import { Button } from '@/components/ui/button';
import { CheckIcon } from 'lucide-react';
import Link from 'next/link';

const tiers = [
    {
        name: 'Hobby',
        id: 'tier-hobby',
        href: '#',
        priceMonthly: '$49',
        description: 'Modi dolorem expedita deleniti. Corporis iste qui inventore pariatur adipisci vitae.',
        features: ['5 products', 'Up to 1,000 subscribers', 'Basic analytics', '48-hour support response time'],
    },
    {
        name: 'Team',
        id: 'tier-team',
        href: '#',
        priceMonthly: '$79',
        description: 'Explicabo quo fugit vel facere ullam corrupti non dolores. Expedita eius sit sequi.',
        features: [
            'Unlimited products',
            'Unlimited subscribers',
            'Advanced analytics',
            '1-hour, dedicated support response time',
            'Marketing automations',
        ],
    },
];

export default function MembershipPage() {
    return (
        <Container disablePadding>
            <div className="relative overflow-hidden">
                <div className="-z-1 absolute inset-0 h-[600px] w-full"></div>
                <div className="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
                    <div className="mx-auto max-w-4xl">
                        <h2 className="text-base font-semibold leading-7">Membership Animazing</h2>
                        <p className="font-geist mt-2 text-4xl font-bold tracking-tight sm:text-5xl md:leading-4">
                            The right price for you, <br className="hidden sm:inline lg:hidden" />
                            whoever you are
                        </p>
                    </div>
                    <div className="relative mt-6">
                        <p className="mx-auto max-w-2xl text-lg leading-8">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos odit
                            doloribus molestiae voluptatum.
                        </p>
                    </div>
                </div>
                <div className="z-20 flow-root pb-24 sm:pb-32">
                    <div className="-mt-80">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
                                {tiers.map((tier) => (
                                    <div
                                        key={tier.id}
                                        className="z-10 flex flex-col justify-between rounded-3xl bg-card p-8 text-card-foreground shadow-xl ring-1 ring-gray-900/10 sm:p-10"
                                    >
                                        <div>
                                            <h3 id={tier.id} className="text-base font-semibold leading-7">
                                                {tier.name}
                                            </h3>
                                            <div className="mt-4 flex items-baseline gap-x-2">
                                                <span className="text-5xl font-bold tracking-tight">
                                                    {tier.priceMonthly}
                                                </span>
                                                <span className="text-base font-semibold leading-7">/month</span>
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
                                        <Button asChild variant="outline" className="mt-8">
                                            <Link href={tier.href} aria-describedby={tier.id}>
                                                Get started today
                                            </Link>
                                        </Button>
                                    </div>
                                ))}
                                <div className="flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 ring-1 ring-gray-900/10 sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center">
                                    <div className="lg:min-w-0 lg:flex-1">
                                        <h3 className="text-lg font-semibold leading-8 tracking-tight">Discounted</h3>
                                        <p className="mt-1 text-base leading-7">
                                            Dolor dolores repudiandae doloribus. Rerum sunt aut eum. Odit omnis non
                                            voluptatem sunt eos nostrum.
                                        </p>
                                    </div>
                                    <a
                                        href="#"
                                        className="rounded-md px-3.5 py-2 text-sm font-semibold leading-6 ring-1 ring-inset ring-ring hover:ring-ring/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600/90"
                                    >
                                        Buy discounted license <span aria-hidden="true">&rarr;</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}
