import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { Container } from './Loader.styled';

const Loader = () => {
  return (
    <>
      <Container>
        <div>
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#848679"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </div>
      </Container>
    </>
  );
};

export default Loader;
