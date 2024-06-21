import Container from '@/components/Container';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import ArtworkSearchList from '@/views/client/searchPage/ArtworkSearchList';
import TagInfo from '@/views/client/searchPage/TagInfo';
import { Search } from 'lucide-react';

const SearchPage = ({ searchParams }: { searchParams: any }) => {
    return (
        <Container>
            <main className="mt-10 space-y-8">
                <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
                    <div className="flex items-center gap-4">
                        <Search />
                        <h2 className="text-xl font-medium">
                            Kết quả tìm kiếm cho từ khoá:{' '}
                            <span className="font-bold">&quot;{searchParams.search}&quot;</span>
                        </h2>
                    </div>
                    <div>
                        <Select defaultValue="name">
                            <SelectTrigger className="w-[200px] bg-card text-card-foreground">
                                <SelectValue placeholder="Lọc Theo..." />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="name">Tên Tác Phẩm</SelectItem>
                                <SelectItem value="tag">Tên Tag</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <TagInfo />
                <ArtworkSearchList />
            </main>
        </Container>
    );
};

export default SearchPage;
