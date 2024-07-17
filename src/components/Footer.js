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
      <p>&copy; 2024 My React App</p>
    </FooterWrapper>
  );
};

export default Footer;
