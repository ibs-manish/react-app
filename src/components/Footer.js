import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #282c34;
  padding: 10px;
  color: white;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>&copy; 2024 {process.env.REACT_APP_APP_NAME}</p>
    </FooterWrapper>
  );
};

export default Footer;
