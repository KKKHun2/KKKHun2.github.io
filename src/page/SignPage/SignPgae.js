/* eslint-disable */
/*
? 김용훈 만듬

*/
import styled from 'styled-components/macro';
import SideText from '../../components/Sign/SideText';
import SignUp from '../../components/Sign/SignUp';

const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 101vw;
   height: 135vh;
  background-color: #f0f2f4;
  margin-top:-90px;
  padding: 0px 0px 0px 150px;
`;

const SignPage = () => {
  return (
    <SignupContainer>
      <SideText />
      <SignUp />
    </SignupContainer>
  );
};

export default SignPage;
