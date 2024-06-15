import Container from '../Container';
import { Button } from '../ui/button';
import { Bell, Plus, Search } from 'lucide-react';
import AccountDropdown from './AccountDropdown';
import { ThemeToggle } from '../ThemeToggle';
import SearchInput from './SearchInput';
import Sidebar from '../sidebar/Sidebar';
import WebLogo from '../WebLogo';
import { Suspense } from 'react';

const Navbar = () => {
    return (
        <header className="max-h-20 bg-card py-4 text-card-foreground">
            <Container>
                <nav className="flex items-center justify-between gap-10">
                    <div className="flex items-center gap-8">
                        <Sidebar />
                        <WebLogo />
                    </div>
                    <div className="hidden flex-1 md:block">
                        <Suspense>
                            <SearchInput />
                        </Suspense>
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
