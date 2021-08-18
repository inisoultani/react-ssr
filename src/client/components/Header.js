import React from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ssrSlice from '../../redux/ssrSlice';

const CustomLink = (onServerRender) => {
  return (props) => {
    const { navigate, ...rest } = props;
    console.log(onServerRender);
    return onServerRender ? <a {...rest} /> : <a {...props} />;
  };
};
const CustomH3Link = (props) => {
  const { navigate, ...rest } = props;

  return (
    <h3>
      <a {...rest}>{props.children}</a>
    </h3>
  );
};

const Header = () => {
  const ssrState = useSelector((state) => state.ssr);
  return (
    <HeaderStyled>
      <div>
        <h3>
          <Link to={'/'} exact="exact">
            SSR Stuff
          </Link>
        </h3>
      </div>
      <HeaderMenuStyled>
        <Link to={'/users'}>Users</Link>
        <Link to={'/'} exact="exact">
          Admins
        </Link>
        <Link to={'/'} exact="exact">
          Login
        </Link>
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
    padding-left: 20px;
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
    background-color: rgb(17, 50, 77);
    color: white;
    border-radius: 4px;
  }

  & > div > a {
    border: none;
    color: white;
    border-radius: 4px;
  }

  & > div > button:hover,
  & > div > a:hover {
    background-color: #6b7aa1 !important;
    cursor: pointer;
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
`;
