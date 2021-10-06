import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from 'styled-components';
import theme from '../styling/theme';

import "./layout.css"


const Wrapper = styled.main`

  margin: 120px 20px 20px;
  maxWidth: 960;
  overflow: hidden;
  @media (${({ theme }) => theme.respondTo.tablet}) {
    max-width: ${({ theme }) => theme.maxContainerWidthTablet};
    // padding: 0 1.45rem;
    margin: 200px 6vw 0;
    }
    @media (${({ theme }) => theme.respondTo.desktop}) {
      max-width: ${({ theme }) => theme.maxContainerWidth};
    }
`;

const Copyright = styled.p`
  color: #333;
  font-size: 15px;
  margin: 20px 0;
  text-align: center;
`;


const Layout = ({ children, isHomepage }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    <ThemeProvider theme={theme}>
        <Wrapper>{children}</Wrapper>
        <Copyright>© {new Date().getFullYear()}, Timothy Foli</Copyright>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
