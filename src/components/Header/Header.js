// 작성자: FE 안지은
import styled from 'styled-components';
import SearchBar, { ButtonStyledAsk } from './SearchBar';
import logo from '../../icon/Logo.png';
import { useState } from 'react';
import UserHeader from './UserProfile';
import { Link } from 'react-router-dom';

export const HeaderStyled = styled.header`
  z-index: 10;
  border-top: solid 2px #f48123;
  box-shadow: 0 1px 2px 1px #e3e3e3;
  width: 100vw;
  height: 45px;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

export const HeaderIconStyled = styled.img`
  width: 160px;
  background-image: url(${logo});
  /* background-size: cover; */

  @media screen and (max-width: 700px) {
    //브라우저 폭이 700px일 때 적용되는 코드
    display: none;
  }
`;

export const ProductsStyled = styled.button`
  border-radius: 30px;
  border: none;
  background: none;
  width: 70px;
  margin: 5px;
  padding: 5px 0 5px 0;
  font-size: 0.75rem;
  text-align: center;
  transition: background-color 0.5s;

  &:hover {
    background: #e0e0e0;
    cursor: pointer;
  }
`;

export const ButtonStyled = styled(ButtonStyledAsk)`
  border: solid 1px #2d8de0;
  background-color: #e8f2fa;
  border-radius: 3px;
  width: 60px;
  margin: 3px 2px;
  padding: 5px 0 5px 0;
  text-align: center;
  color: #2273ba;
  font-size: 0.75rem;

  &:hover {
    background: #d5e4f0;
  }

  &.sign {
    background-color: #2d8de0;
    color: #ffffff;
  }

  &.sign:hover {
    background-color: #2273ba;
  }
`;

export const GuestsStyled = styled.div`
  display: flex;
`;

export const UserStyled = styled.div`
  display: flex;
`;

const Guest = () => {
  const [isLogin] = useState(false);
  if (!isLogin) {
    return (
      <>
        <GuestsStyled>
          <ProductsStyled>About</ProductsStyled>
          <ProductsStyled>Products</ProductsStyled>
          <ProductsStyled>For Teams</ProductsStyled>
          <SearchBar />
          <Link to="/login">
            <ButtonStyled>Log in</ButtonStyled>
          </Link>
          <Link to="/signup">
            <ButtonStyled className="sign">Sign up</ButtonStyled>
          </Link>
        </GuestsStyled>
      </>
    );
  }
  return (
    <>
      <UserStyled>
        <ProductsStyled>Products</ProductsStyled>
        <SearchBar />
        <UserHeader />
      </UserStyled>
    </>
  );
};

const Header = () => {
  return (
    <>
      <HeaderStyled>
        <Link to="/">
          <HeaderIconStyled src={logo} className="header-hide" />
        </Link>
        <Guest isLogin={false} />
      </HeaderStyled>
    </>
  );
};

export default Header;
