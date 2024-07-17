import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #282c34;
  padding: 20px;
  color: white;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <h1>{process.env.REACT_APP_APP_NAME}</h1>
      <p>Version: {process.env.REACT_APP_VERSION}</p>
    </HeaderWrapper>
  );
};

export default Header;
