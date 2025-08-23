import {
  PaginationItem,
  PaginationNext,
  PaginationLink,
  PaginationContent,
  PaginationPrevious,
  Pagination as PaginationComp,
} from '@/components/ui/pagination';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

import { usePagination } from '@/hooks/helpers/use-pagination';
import { cn } from '@/library/utils';
import { Label } from '../ui/label';

interface IProps {
  hasMore: boolean;
  page_count: number;
  className?: string;
  default_take?: number;
  per_page_counts?: number[];
}

export const Pagination = ({ hasMore, page_count, className, default_take, per_page_counts }: IProps) => {
  const { page, setPage, setTake, take } = usePagination(default_take);

  const prevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const nextPage = () => {
    if (hasMore) setPage(page + 1);
  };

  const getVisiblePages = () => {
    if (page_count <= 3) return Array.from({ length: page_count }, (_, i) => i + 1);

    if (page === 1) return [1, 2, 3];

    if (page === page_count) return [page_count - 2, page_count - 1, page_count];

    return [page - 1, page, page + 1];
  };

  const visiblePages = getVisiblePages();

  const takePerPages = per_page_counts || [10, 20, 30];

  //   if (page_count === 1) return null;

  return (
    <div className={cn('flex w-full items-center justify-between gap-4', className)}>
      <div className="flex shrink-0 items-center gap-3">
        <Label htmlFor="Rows-per-page">Card / Rows per page</Label>
        <Select onValueChange={(e) => setTake(Number(e))} defaultValue={take.toString()}>
          <SelectTrigger id="Rows-per-page" className="w-fit whitespace-nowrap">
            <SelectValue placeholder="Select number of results" />
          </SelectTrigger>
          <SelectContent className="[&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2">
            {takePerPages.map((take) => (
              <SelectItem key={take} value={take.toString()}>
                {take}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <PaginationComp className="m-0 w-auto">
        <PaginationContent className="rounded-md border p-1 shadow-xs">
          <PaginationItem onClick={prevPage}>
            <PaginationPrevious />
          </PaginationItem>

          {visiblePages.map((page) => (
            <PaginationItem key={page}>
              <PaginationLink>{page}</PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem onClick={nextPage}>
            <PaginationNext />
          </PaginationItem>
        </PaginationContent>
      </PaginationComp>
    </div>
  );
};
