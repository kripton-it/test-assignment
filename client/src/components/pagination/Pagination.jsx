import React from 'react';

import * as Styles from './styles';

const Pagination = ({ currentPage, pageNumber, onNextClick, onPrevClick }) => {
  const prevButton = (
    <Styles.PrevButton onClick={onPrevClick}>
      {'<'}
    </Styles.PrevButton>
  );
  const nextButton = (
    <Styles.NextButton onClick={onNextClick}>
      {'>'}
    </Styles.NextButton>
  );
  return (
    <Styles.PaginationContainer>
      {currentPage > 1 ? prevButton : null}
      {currentPage < pageNumber ? nextButton : null}
    </Styles.PaginationContainer>
  );
};

export default Pagination;