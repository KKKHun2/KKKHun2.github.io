/* eslint-disable */
/*
? 김용훈 만듬

*/
import styled from 'styled-components/macro';
import SocialSign from './SocialSign';
import { RiShareBoxLine } from 'react-icons/ri';
import EmailSignup from './EmailSign';
import React from 'react';
import { Link } from 'react-router-dom';

const BoxLine = styled(RiShareBoxLine)`
  width: 20px;
  height: 30px;
  margin-left: 3px;
  margin-bottom:-10px;
  color: #4173ca;
  cursor: pointer;
`;

const SignupSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const BottomText = styled.div`
margin-top: 20px;
margin-left: 40px;
  .formtext {
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 18px;
    font-size: 14px;
    margin-top: 10px;
    font-weight: 400;
  }

  a {
    color: #0173cc;
    text-decoration: none;
  }
  a:hover {
    color: #0995fd;
  }
`;
const BottomText2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 10px;
  font-size: 14px;
  color: #f0f2f4;
  margin-bottom: 30px;
  padding-top: 20px;
`;
const HeadForem = styled.form`
  display: flex;
  padding-right: 0px;
  justify-content: center;
  width: 500px;
  height: 60px;
  font-size: 21px;
  padding: 50px 10px 20px 0px;
`;
const MinHead = styled.div`
  display: flex;
  width: 500px;
  height: 100px;
  padding-top: 40px;
  margin-left: -30px;
  
  
  @media (min-width: 993px) {
    color: black;
    display: none;
  }
`;

const SignupForm = () => {
  return (
    <SignupSection>
      <HeadForem>
        <MinHead>
          Create your Stack Overflow account. It’s <br />
          free and only takes a minute.
        </MinHead>
      </HeadForem>
      <SocialSign />
      <EmailSignup />
      <BottomText>
        <div className="formtext">
          Already have an account? <Link to="/login">Log in</Link>
        </div>
        <div className="formtext">
          Are you an employer? <a href="#a">Sign up on Talent</a>
          <BoxLine />
        </div>
      </BottomText>
      <BottomText2>asas</BottomText2>
    </SignupSection>
  );
};

export default SignupForm;
