import { cn } from '@/lib/utils';
import { Dancing_Script } from 'next/font/google';
import Link from 'next/link';

const dancingScript = Dancing_Script({ subsets: ['latin'], variable: '--dancing-script', weight: ['700'] });

const WebLogo = () => {
    return (
        <Link href="/">
            <h1 className={cn('text-3xl font-bold text-primary', dancingScript.className)}>Animazing</h1>
        </Link>
    );
};

export default WebLogo;
