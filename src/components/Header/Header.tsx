import { FunctionComponent } from 'react';
import { HeaderContainer, HeaderTitle, HeaderSlogan } from './HeaderStyles';

const Header: FunctionComponent = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>
        REACT<span>MOVIE</span>
      </HeaderTitle>
      <HeaderSlogan>A MOVIE SEARCHING SITE</HeaderSlogan>
    </HeaderContainer>
  );
};

export default Header;
