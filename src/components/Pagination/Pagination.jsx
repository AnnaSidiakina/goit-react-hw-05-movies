import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.css';

const Paginate = ({ total, handlePageClick }) => {
  return (
    <div>
      <div className={styles.container}>
        <ReactPaginate
          pageCount={total}
          onPageChange={handlePageClick}
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

Paginate.propTypes = {
  total: PropTypes.number.isRequired,
  handlePageClick: PropTypes.func.isRequired,
};

export default Paginate;
