import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
// import { Pagination } from './Pagination.styled';
import styles from './Pagination.module.css';

const Paginate = ({ total, onLoadMore }) => {
  return (
    <div>
      <div className={styles.container}>
        <ReactPaginate
          pageCount={total}
          onPageChange={onLoadMore}
          nextLabel=">"
          previousLabel="<"
          pageRangeDisplayed={5}
          marginPagesDisplayed={2}
          pageClassName={styles.page}
          pageLinkClassName={styles.link}
          previousClassName={styles.page}
          previousLinkClassName={styles.link}
          nextClassName={styles.page}
          nextLinkClassName={styles.link}
          breakLabel="..."
          breakClassName={styles.page}
          breakLinkClassName={styles.link}
          containerClassName={styles.paginate}
          activeClassName={styles.active}
          renderOnZeroPageCount={null}
          disabledClassName={styles.disable}
        />
      </div>
    </div>
  );
};
export default Paginate;
