import { FunctionComponent } from 'react';
import { LayoutMain, LayoutContainer } from './LayoutStyles';

const Layout: FunctionComponent = ({ children }) => {
  return (
    <LayoutMain>
      <LayoutContainer>{children}</LayoutContainer>
    </LayoutMain>
  );
};

export default Layout;
