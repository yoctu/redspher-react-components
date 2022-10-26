import { Pagination, PaginationItem } from '@mui/material';
import { PaginationProps } from '@mui/material/Pagination/Pagination';
import CaretLeftIcon from '../../icons/Rubiwin/CaretLeftIcon';
import CaretRightIcon from '../../icons/Rubiwin/CaretRightIcon';

interface IrubiwinPagination extends PaginationProps {
  count: number;
  onPageChange: Function;
  page?: number;
  rowsPerPage?: number;
  table?: { current: any };
  spacingScrollTop?: number;
}

/**
 * This is a Mui Pagination branded for Rubiwin
 *
 * Demos:
 * - [Pagination](https://mui.com/components/pagination/)
 *
 * API:
 * - [Pagination API](https://mui.com/api/pagination/)
 */
const RubiwinPagination = ({
  count,
  onPageChange,
  table,
  page = 1,
  rowsPerPage = 10,
  spacingScrollTop = 15
}: IrubiwinPagination) => {
  const scrollToTop = (event: any, newPage: any) => {
    if (page !== newPage) {
      if (
        table &&
        window.scrollY > table.current?.offsetTop - spacingScrollTop
      ) {
        window.scrollTo({
          top: table.current?.offsetTop - spacingScrollTop,
          behavior: 'smooth'
        });
      }

      onPageChange(event, newPage);
    }
  };

  return (
    <Pagination
      count={Math.ceil(count / rowsPerPage)}
      defaultPage={page}
      renderItem={(item) => (
        <PaginationItem
          components={{ previous: CaretLeftIcon, next: CaretRightIcon }}
          {...item}
        />
      )}
      onChange={scrollToTop}
      color='primary'
    />
  );
};

export default RubiwinPagination;
