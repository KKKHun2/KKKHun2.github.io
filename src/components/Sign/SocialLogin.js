/* eslint-disable */
/*
? 김용훈 만듬

*/
import styled from 'styled-components/macro';
import { GoMarkGithub } from 'react-icons/go';
import { GrFacebook } from 'react-icons/gr';
import { FcGoogle } from 'react-icons/fc';

const SocialSignUp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 229px;
  height: 150px;
`;

const GithubLogo = styled(GoMarkGithub)`
  width: 19px;
  height: 19px;
  margin-right: 3px;
`;

const FacebookLogo = styled(GrFacebook)`
  width: 17px;
  height: 17px;
  margin-right: 3px;
`;

const GoogleLogo = styled(FcGoogle)`
  width: 20px;
  height: 20px;
  margin-right: 3px;
`;

const GithubButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 279px;
  height: 38px;
  padding: 11px;
  margin: 4px 6px 4px 5px;
  color: white;
  :hover {
    background-color: #282a2d;
  }
  background-color: #33373a;
  border: 1px solid #33373a;
  border-radius: 5px;
  cursor: pointer;
`;

const FacebookButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 279px;
  height: 38px;
  padding: 11px;
  margin: 4px 6px 1px 5px;
  border: 1px solid #43549f;
  color: white;
  :hover {
    background-color: #314a86;
  }
  background-color: #43549f;
  border-radius: 5px;
  cursor: pointer;
`;

const GoogleButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 279px;
  height: 38px;
  padding: 11px;
  margin: 4px 6px 4px 5px;
  :hover {
    background-color: #f8f9f9;
  }
  background-color: #ffffff;
  border: 1px solid #a6a6a6;
  border-radius: 5px;
  cursor: pointer;
`;

const SocialLogin = () => {
  return (
    <SocialSignUp>
      <GoogleButton>
        <GoogleLogo />
        Sign up with Google
      </GoogleButton>
      <GithubButton>
        <GithubLogo />
        Sign up with GitHub
      </GithubButton>
        <FacebookButton>
          <FacebookLogo />
          Sign up with Facebook
        </FacebookButton>
    </SocialSignUp>
  );
};

export default SocialLogin;
