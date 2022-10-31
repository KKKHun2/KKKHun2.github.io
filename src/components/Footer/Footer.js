/* eslint-disable */
/*
? 김용훈 만듬

*/
import React from 'react'; 
import styled from 'styled-components/macro';
import Moment from 'react-moment'; 

const FooterLayout = styled.div`
  position: relative;
  bottom: 0;
  display: flex;
  justify-content:center;
  background-color: #232528;
  box-sizing: border-box;
  padding-left: 30px;
  width: 100vw;
  
`;

const FooterText = styled.div`
  display: flex;
  align-items: left;
  top: 0;
  bottom: 0;
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;
const Logo = styled.div`
  color: #9fa4aa;
  margin-right: -50px;
`;

const TitleT = styled.div`
  margin-left: 50px;
  .title {
    color: #bbbec2;
    font-size: 14px;
    font-weight: bold;
    text-decoration: none;
    margin: 20px;
  }
  a {
    text-decoration: none;
    color: #bbbec2;
  }
  a:hover {
    color: #bbbec2;
  }
`;
const TitleT2 = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  li {
    color: #8d9c99;
    text-decoration: none;
    display: block;
    font-size: 12.5px;
    padding: 6px 0;
    list-style: none;
  }
  a {
    text-decoration: none;
    color: #8d9c99;
  }
  a:hover {
    color: #9fa4aa;
  }
  .hidden {
    color: #282a2d;
  }
`;

const Social = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #8d9c99;
  font-size: 12px;
  padding: 27px 10px 0px 10px;
  margin-left: 70px;
  a {
    text-decoration: none;
    color: #8d9c99;
  }
  a:hover {
    color: #9fa4aa;
  }
  ul {
    display: flex;
    column-gap: 10px;
    display: flex;
    align-items: left;
    list-style: none;
  }

  .license {
    display: inline;
    padding: 12px;
    margin-left: 26px;
    padding-right: 30px;
    font-size: 11px;
  }
`;
const UnderLine = styled.div`
  text-decoration: underline;
  cursor: pointer;
`;
const MomentDateChage = () => {
  return <Moment format="YYYY/MM/DD"></Moment>;
};

function Footer() {
  return (
    <FooterLayout>
      <FooterText>
        <Logo>
          <a href="/Main">
            <svg width="35" height="37" viewBox="0 0 32 37">
              <path d="M26 33v-9h4v13H0V24h4v9h22Z" fill="#BCBBBB"></path>
              <path
                d="m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z"
                fill="#F48024"
              ></path>
            </svg>
          </a>
        </Logo>
        <TitleT>
          <ul>
            <div className="title">
              <a href="/"> STACK OVERFLOW </a>
            </div>
            <TitleT2>
              <li>
                <a href="#a">Questions </a>
              </li>
              <li>
                <a href="#a">Help</a>
              </li>
            </TitleT2>
          </ul>
        </TitleT>
        <TitleT>
          <ul>
            <div className="title">
              <a href="/"> PRODUCTS</a>
            </div>
            <TitleT2>
              <li>
                <a href="#a">Teams</a>
              </li>
              <li>
                <a href="#a">Advertising</a>
              </li>
              <li>
                <a href="#a">TitleTlectives</a>
              </li>
              <li>
                <a href="#a">Talent</a>
              </li>
            </TitleT2>
          </ul>
        </TitleT>
        <TitleT>
          <ul>
            <div className="title">
              <a href="/"> COMPANY</a>
            </div>
            <TitleT2>
              <li>
                <a href="#a">About</a>
              </li>
              <li>
                <a href="#a">Press</a>
              </li>
              <li>
                <a href="#a">Work Here</a>
              </li>
              <li>
                <a href="#a">Legal</a>
              </li>
              <li>
                <a href="#a">Privacy Policy</a>
              </li>
              <li>
                <a href="#a">Terms of Service</a>
              </li>
              <li>
                <a href="#a">Contact Us</a>
              </li>
              <li>
                <a href="#a">Cookie Settings</a>
              </li>
              <li>
                <a href="#a">Cookie Policy</a>
              </li>
            </TitleT2>
          </ul>
        </TitleT>
        <TitleT>
          <ul>
            <div className="title">
              <a href="/"> STACK EXCHANGE NETWORK</a>
            </div>
            <TitleT2>
              <li>
                <a href="#a">Technology</a>
              </li>
              <li>
                <a href="#a">Culture & recreation</a>
              </li>
              <li>
                <a href="#a">Life & arts</a>
              </li>
              <li>
                <a href="#a">Science</a>
              </li>
              <li>
                <a href="#a">Professional</a>
              </li>
              <li>
                <a href="#a">Business</a>
              </li>
              <li className="hidden">보일락말락안보이지롱</li>
              <li>
                <a href="#a">API</a>
              </li>
              <li>
                <a href="#a">Data</a>
              </li>
            </TitleT2>
          </ul>
        </TitleT>
        <Social>
          <ul>
            <li>
              <a href="https://stackoverflow.blog/?blb=1&_ga=2.262961356.1556631905.1666544847-1794074138.1665380100">
                Blog
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/officialstackoverflow/">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://twitter.com/stackoverflow">Twitter</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/stack-overflow">
                Linkedin
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/thestackoverflow/">
                Instagram
              </a>
            </li>
          </ul>
          <div className="license">
            Site design / logo © 2022 Stack Exchange Inc; user <br />
            contributions licensed under <UnderLine>CCBY-SA.</UnderLine>rev{' '}
            <MomentDateChage />
            .42957
          </div>
        </Social>
      </FooterText>
    </FooterLayout>
  );
}

export default Footer;
