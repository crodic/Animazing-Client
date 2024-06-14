import { Dancing_Script } from 'next/font/google';
import Container from '../Container';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { Bell, MenuIcon, Plus, Search } from 'lucide-react';
import AccountDropdown from './AccountDropdown';
import { ThemeToggle } from '../ThemeToggle';

const dancingScript = Dancing_Script({ subsets: ['latin'], variable: '--dancing-script', weight: ['700'] });

const Navbar = () => {
    return (
        <header className="bg-card py-4 text-card-foreground">
            <Container>
                <nav className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Button size="icon" variant="ghost">
                            <MenuIcon />
                        </Button>
                        <Link href="/">
                            <h1 className={cn('text-2xl font-bold text-primary', dancingScript.className)}>
                                Animazing
                            </h1>
                        </Link>
                    </div>
                    {/* Desktop Only */}
                    <div className="hidden items-center gap-8 md:flex">
                        <Button variant="outline" Icon={Plus} iconPlacement="right">
                            Đăng Bài
                        </Button>
                        <Button size="icon" variant="ghost">
                            <Bell size={20} fill="black" />
                        </Button>
                        <AccountDropdown />
                        <ThemeToggle />
                    </div>
                    {/* Mobile Only */}
                    <div className="flex gap-4 md:hidden">
                        <Button size="icon" variant="ghost">
                            <Search />
                        </Button>
                        <Button size="icon" variant="ghost">
                            <Plus />
                        </Button>
                    </div>
                </nav>
            </Container>
        </header>
    );
};

export default Navbar;
