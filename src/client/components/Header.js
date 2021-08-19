import React from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PeopleIcon from '@material-ui/icons/People';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import VpnKeyRoundedIcon from '@material-ui/icons/VpnKeyRounded';
import WebRoundedIcon from '@material-ui/icons/WebRounded';

const CustomLink = (props) => {
  const { navigate, ...rest } = props;
  return <a {...rest} />;
};
const CustomH3Link = (props) => {
  const { navigate, ...rest } = props;

  return (
    <h3>
      <a {...rest}>{props.children}</a>
    </h3>
  );
};

const Header = ({ currentUser }) => {
  const ssrState = useSelector((state) => state.ssr);
  return (
    <HeaderStyled>
      <HeaderLogoStyled>
        <h2>
          <Link to={'/'} exact="exact">
            <WebRoundedIcon fontSize="large" />
            SSR Stuff
          </Link>
        </h2>
      </HeaderLogoStyled>
      <HeaderMenuStyled>
        <Link to={'/users'}>
          <PeopleIcon fontSize="large" />
          Users
        </Link>
        <Link to={'/admins'}>
          <VerifiedUserIcon fontSize="large" />
          Admins
        </Link>
        <NavLink
          to={currentUser ? '/api/logout' : '/api/auth/google'}
          component={CustomLink}
        >
          <VpnKeyRoundedIcon fontSize="large" />
          {currentUser ? 'Logout' : 'Login'}
        </NavLink>
      </HeaderMenuStyled>
    </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #c1cfc0;
  align-items: center;
  border-radius: 4px 4px 0 0;

  &:first-child {
    padding-left: 28px;
    color: white;
  }

  & > div {
    padding-right: 20px;
  }

  a {
    text-decoration: none;
    color: white;
  }

  & > div > button,
  & > div > a {
    border: none;
    padding: 10px 20px;
    /* background-color: rgb(17, 50, 77); */
    color: rgb(94 136 113);
    border-radius: 4px;
    margin: 7px 0;
  }

  & > div > a {
    border: none;
    color: rgb(94 136 113);
    border-radius: 4px;
  }

  & > div > button:hover,
  & > div > a:hover {
    background-color: rgb(94 136 113) !important;
    cursor: pointer;
    color: white;
  }

  & > div > a.active {
    background-color: #576382;
  }
`;

const HeaderMenuStyled = styled.div`
  /* flex-grow: 0.05; */
  display: flex;
  column-gap: 10px;
  justify-content: space-between;

  & > a {
    display: flex;
    align-items: center;
    column-gap: 5px;
  }
`;

const HeaderLogoStyled = styled.div`
  & > h2 > a {
    display: flex;
    align-items: center;
    column-gap: 10px;
  }
`;
