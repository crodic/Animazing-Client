import React from 'react';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import LoginForm from '@/components/form/LoginForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Animazing Artwork | Login',
    description: 'The website by Crodic Crystal',
};

export default function SignInPage() {
    return (
        <main className="flex min-h-screen w-full overflow-y-hidden text-foreground">
            <div className="relative hidden min-h-screen flex-1 items-center justify-center lg:flex">
                <div className="relative z-10 w-full max-w-lg">
                    <Image
                        src="/logo.png"
                        width={100}
                        height={100}
                        alt=""
                        className="h-auto rounded-full drop-shadow-md"
                    />
                    <div className="mt-10 space-y-3">
                        <h3 className="font-geist text-3xl font-normal tracking-tighter md:text-4xl lg:text-5xl">
                            Welcome back !!!
                        </h3>

                        <Separator className="mr-auto h-px w-[100px]" />
                        <p className="text-md font-geist tracking-tight md:text-xl">
                            Continue your journey of sharing your wonderful works now.
                        </p>
                        <div className="flex items-center -space-x-2 overflow-hidden">
                            {Array.from({ length: 5 }).map((user, index) => (
                                <Image
                                    key={index}
                                    alt=""
                                    width={50}
                                    height={50}
                                    src={`https://randomuser.me/api/portraits/women/${index}.jpg`}
                                    className="h-10 w-10 rounded-full border-2 border-white"
                                />
                            ))}
                            <p className="translate-x-5 text-sm font-medium text-gray-400">Join 5.000+ users</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative flex min-h-full flex-1 items-center justify-center bg-card text-card-foreground">
                <LoginForm />
            </div>
        </main>
    );
}
