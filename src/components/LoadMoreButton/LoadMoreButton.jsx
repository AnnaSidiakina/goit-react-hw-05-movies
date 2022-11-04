import React from 'react';
import { ButtonWrapper, LoadMoreBtn } from './LoadMoreButton.styled';
// import PropTypes from 'prop-types';

const LoadMoreButton = ({ onLoadMore }) => {
  return (
    <ButtonWrapper>
      <LoadMoreBtn onClick={onLoadMore} type="button">
        Load more
      </LoadMoreBtn>
    </ButtonWrapper>
  );
};

// LoadMoreButton.propTypes = {
//   onLoadMore: PropTypes.func.isRequired,
//   isLoading: PropTypes.bool.isRequired,
// };

export default LoadMoreButton;
