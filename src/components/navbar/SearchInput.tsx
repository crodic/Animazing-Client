/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';
import { useEffect, useMemo, useRef } from 'react';
import { ScrollArea } from '../ui/scroll-area';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebounceCallback } from 'usehooks-ts';
import SearchItem from './SearchItem';
import { useSearchToggle } from '@/hooks/useSearchToggle';

const DELAY_SEARCH = 300;
const VALUE_LENGTH = 10;

const SearchInput = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();
    const { open, hideDropdown, showDropdown } = useSearchToggle();

    const searchValue = useMemo(() => searchParams.get('search'), [searchParams.get('search')]);

    // const [open, setOpen] = useState(false);
    const debounce = useDebounceCallback(handleChangeInput, DELAY_SEARCH);

    const wrapperRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutSide = (e: any) => {
            if (dropdownRef?.current?.contains(e.target) || wrapperRef?.current?.contains(e.target)) {
                return;
            }
            hideDropdown();
        };
        document.addEventListener('mousedown', handleClickOutSide, false);
        return () => document.removeEventListener('mousedown', handleClickOutSide, false);
    }, []);

    async function handleChangeInput(value: string) {
        const sp = new URLSearchParams(searchParams);
        if (value.trim() !== '') {
            sp.set('search', value);
        } else {
            sp.delete('search');
        }
        router.replace(`${pathname}?${sp.toString()}`);
    }

    const renderSearchItem = (
        <div className="h-max">
            {VALUE_LENGTH > 0 ? (
                Array.from({ length: VALUE_LENGTH }).map((search, index) => (
                    <SearchItem data={{ _id: '1', label: 'Kafka' }} key={index} />
                ))
            ) : (
                <div className="flex h-[80px] items-center justify-center">Không Tìm Thấy Kết Quả</div>
            )}
        </div>
    );

    const handleEnter = (e: any) => {
        if (searchParams.get('search') && e?.key === 'Enter' && e?.keyCode === 13) {
            hideDropdown();
            router.push(`/search?search=${searchParams.get('search')}`);
        }
    };

    const renderPopularArtwork = (
        <ScrollArea className={cn('h-[50vh] overflow-y-auto p-4')}>
            <div className="space-y-2">
                <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Popular</h4>
                    <div className="grid grid-cols-3 gap-2">
                        {Array.from({ length: 10 }).map((_, index) => (
                            <div key={index} className="aspect-square w-full border first:col-span-3 first:h-32"></div>
                        ))}
                    </div>
                </div>
                <div className="space-y-2">
                    <h4 className="text-sm font-semibold">#AI Recommend Tag</h4>
                    <div className="grid grid-cols-4 gap-2">
                        {Array.from({ length: 4 }).map((_, index) => (
                            <div key={index} className="aspect-square w-full border"></div>
                        ))}
                    </div>
                </div>
                <div className="space-y-2">
                    <h4 className="text-sm font-semibold">#Girl Recommend Tag</h4>
                    <div className="grid grid-cols-4 gap-2">
                        {Array.from({ length: 8 }).map((_, index) => (
                            <div key={index} className="aspect-square w-full border"></div>
                        ))}
                    </div>
                </div>
            </div>
        </ScrollArea>
    );

    return (
        <section className="relative">
            <div
                className={cn(
                    'flex items-center justify-start rounded-md border bg-background px-3',
                    'focus-within:shadow-[0px_0px_0px_4px_#13C9F2]',
                )}
                ref={wrapperRef}
            >
                <Search className="mr-2 h-4 shrink-0 opacity-50" />
                <input
                    placeholder="Tìm Kiếm Tác Phẩm"
                    type="search"
                    className={cn(
                        'flex h-10 w-full grow rounded-md border-none bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
                    )}
                    onKeyDown={handleEnter}
                    defaultValue={searchParams.get('search') || ''}
                    onChange={(e) => debounce(e.target.value)}
                    onFocus={showDropdown}
                />
            </div>
            {open && (
                <div
                    ref={dropdownRef}
                    className="absolute left-0 right-0 top-[120%] z-50 rounded-sm border bg-card text-card-foreground shadow-md"
                >
                    {searchValue ? renderSearchItem : renderPopularArtwork}
                </div>
            )}
        </section>
    );
};

export default SearchInput;
