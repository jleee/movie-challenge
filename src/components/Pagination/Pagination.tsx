import { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { PaginationContainer, PaginationList, PaginationButton } from './PaginationStyles';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  handlePagination: (pageNumber: number) => void;
}

const Pagination: FunctionComponent<PaginationProps> = ({ totalPages, currentPage, handlePagination }) => {
  const getPagination = (totalPages: number, currentPage: number): number[] => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];
    let l;

    range.push(1);

    if (totalPages <= 1) {
      return range;
    }

    for (let i = currentPage - delta; i <= currentPage + delta; i++) {
      if (i < totalPages && i > 1) {
        range.push(i);
      }
    }

    range.push(totalPages);

    for (const i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push(-1);
        }
      }
      rangeWithDots.push(i);
      l = i;
    }

    return rangeWithDots;
  };

  const pages = getPagination(totalPages, currentPage);

  return (
    <PaginationContainer>
      {currentPage > 1 && (
        <PaginationList key={`${currentPage - 1}`} onClick={() => handlePagination(currentPage - 1)}>
          <PaginationButton type="button">
            <FontAwesomeIcon icon={faChevronLeft} />
          </PaginationButton>
        </PaginationList>
      )}
      {pages.map((page, index) => {
        return (
          <PaginationList key={index}>
            {page < 0 ? (
              '...'
            ) : (
              <PaginationButton
                active={currentPage === page}
                onClick={() => page > 0 && handlePagination(page)}
                key={`page-${index}`}
                type="button"
              >
                {page}
              </PaginationButton>
            )}
          </PaginationList>
        );
      })}
      {currentPage < totalPages && (
        <PaginationList key={`${currentPage + 1}`} onClick={() => handlePagination(currentPage + 1)}>
          <PaginationButton type="button">
            <FontAwesomeIcon icon={faChevronRight} />
          </PaginationButton>
        </PaginationList>
      )}
    </PaginationContainer>
  );
};

export default Pagination;
