import { cn } from "@/shared/utils/cn";

type PageButtonProps = {
  onClick: () => void;
  disabled?: boolean;
  active?: boolean;
  children: React.ReactNode;
};

type PaginationProps = {
  goToFirstPage: () => void;
  goToPrevPage: () => void;
  goToNextPage: () => void;
  goToLastPage: () => void;
  goToPage: (pageNumber: number) => void;
  totalPages: number;
  currentPage: number;
};

const PageButton = ({
  onClick,
  disabled,
  active,
  children,
}: PageButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "border px-2 py-1",
        disabled
          ? "cursor-not-allowed border-gray-300 text-gray-300"
          : active
            ? "border-blue-500 bg-blue-500 text-white"
            : "border-blue-500 text-blue-500 hover:bg-blue-50",
      )}
    >
      {children}
    </button>
  );
};

const Pagination = ({
  goToFirstPage,
  goToPrevPage,
  goToNextPage,
  goToLastPage,
  goToPage,
  totalPages,
  currentPage,
}: PaginationProps) => {
  return (
    <div className="flex shrink-0 justify-center gap-2 px-2 py-1">
      <PageButton onClick={goToFirstPage} disabled={currentPage === 1}>
        &lt;&lt;
      </PageButton>
      <PageButton onClick={goToPrevPage} disabled={currentPage === 1}>
        &lt;
      </PageButton>

      <div className="flex gap-2">
        {Array.from({ length: totalPages }).map((_, index) => {
          const pageNumber = index + 1;
          return (
            <PageButton
              key={pageNumber}
              onClick={() => goToPage(pageNumber)}
              active={currentPage === pageNumber}
            >
              {pageNumber}
            </PageButton>
          );
        })}
      </div>

      <PageButton onClick={goToNextPage} disabled={currentPage === totalPages}>
        &gt;
      </PageButton>
      <PageButton onClick={goToLastPage} disabled={currentPage === totalPages}>
        &gt;&gt;
      </PageButton>
    </div>
  );
};

export default Pagination;
