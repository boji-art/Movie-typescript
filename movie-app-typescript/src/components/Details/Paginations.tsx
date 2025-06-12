import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination";
  
  export function PagePagination ({totalPages, setPage, page}) {
    const showDisplayePage = Math.min(totalPages, 10);
   
    const displayPages = Array.from(
      { length: showDisplayePage },
      (_, index) => index + 1
    );
    const handleSetPage = (pageNumber) => {
      setPage(pageNumber);
    };
    const handlePlus = () => {
      setPage(page + 1);
    };
    const handleMinus = () => {
      setPage(page - 1);
    };
   
    return (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious onClick={handleMinus} href="#" />
          </PaginationItem>
          {displayPages.map((showPage, index) => (
            <PaginationItem key={index}>
              <PaginationLink href="#" onClick={() => handleSetPage(showPage)}>
                {showPage}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext onClick={handlePlus} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
  }
  
  