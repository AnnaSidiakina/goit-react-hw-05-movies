import { useLocation } from 'react-router-dom';
import { ButtonWrapper, GoBackLink } from './GoBackButton.styled';

const GoBackButton = () => {
  const location = useLocation();

  return (
    <ButtonWrapper>
      <GoBackLink to={location?.state?.from ?? '/'}>Go back</GoBackLink>
    </ButtonWrapper>
  );
};
export default GoBackButton;
