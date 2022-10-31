/* eslint-disable */
/*
? 김용훈 만듬

*/
import styled from 'styled-components/macro';
import { FaQuestionCircle } from 'react-icons/fa';

const EmailSignForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 270px;
  height: 590px;
  border-radius: 8px;
  background-color: white;
  border: none;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.3);
  margin: 20px 0px 0px;
  padding: 24px;
`;

const DisplayText = styled.div`
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 6px;
  padding-right: 300px;
  text-align: left;
`;
const DisplayText1 = styled.div`
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 6px;
  padding-right: 161px;
`;

const InputInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 268px;
  height: 100px;
  margin: 5px 0px 1px;
`;

const Input = styled.input`
  width: 262px;
  height: 28px;
  border: 1px solid #babfc4;
  border-radius: 4px;
`;
const DisplayBottomText = styled.div`
  width: 260px;
  height: 55px;
  font-size: 12px;
  color: #6c727b;
  margin-bottom: 10px;
  margin-top: -10px;
  padding-right: 20px;
`;
const DisplayBottomText2 = styled.div`
  width: 330px;
  height: 55px;
  font-size: 11.5px;
  margin-top: 9px;
  margin-left: 10px;
  line-height: 17px;
  font-weight: 450;
`;
const DisplayBottomText3 = styled.div`
  display: flex;
  width: 100px;

  font-size: 13px;
  font-weight: 600;
  margin-top: 43px;
  margin-left: 7px;
`;
const DisplayBottomText4 = styled.div`
  width: 280px;
  height: 55px;
  font-size: 12px;
  color: #6c727b;
  margin-top: 30px;
  line-height: 15px;
  a {
    text-decoration: none;
    color: #0173cc;
  }
  a:hover {
    color: #0995fd;
  }
`;

const DisplayBottom = styled.form`
  width: 266px;
  height: 185px;
  font-size: 12px;
  background-color: #f1f1f2;
  margin: 4px 0px;
  border: 0.05px solid #babfc4;
  border-radius: 5px;
`;
const DisplayBottom2 = styled.div`
  display: flex;
  justify-content: center;
  width: 150px;
  height: 95px;
  font-size: 12px;
  background-color: #f9fafa;
  margin-top: 10px;
  padding-bottom: 10px;
  margin-left: 60px;
  border: 0.3px solid #babfc4;
`;
const DisplayBottom3 = styled.div`
  display: flex;
  justify-content: center;
  width: 368px;
  height: 55px;
  font-size: 12px;
`;
const CheckBox = styled.input`
  cursor: pointer;
  width: 30px;
  height: 30px;
  border: 1px solid #f9fafa;
  border-radius: 5px;
  margin-top: 35px;
  padding-right: 80px;
`;
const SignButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 270px;
  height: 50px;
  margin-top: 20px;
  margin-left: 1px;
  border: 0.01px solid #43549f;
  color: white;
  :hover {
    background-color: #0173cc;
    border: 2px solid #0173cc;
  }
  background-color: #0995fd;
  border: 2px solid #0a95ff;
  border-radius: 4px;
  cursor: pointer;
`;

const CheckBox2 = styled.input`
  width: 13px;
  height: 13px;
  margin-top: 10px;
  margin-right: -4px;
  cursor: pointer;
`;
const QuestionCircle = styled(FaQuestionCircle)`
  width: 18px;
  height: 18px;
  margin-top: 12px;
  padding-right: 100px;
  padding-left: 11px;
  color: #6c727b;
  cursor: pointer;
`;

const EmailSign = () => {
  return (
    <EmailSignForm>
      <InputInfo>
        <DisplayText1>Display name </DisplayText1>
        <Input type="text" />
      </InputInfo>
      <InputInfo>
        <DisplayText>Email </DisplayText>
        <Input type="email" />
      </InputInfo>
      <InputInfo>
        <DisplayText>Password </DisplayText>
        <Input type="password" />
      </InputInfo>

      <DisplayBottomText>
        Passwords must contain at least eight <br />
        characters, including at least 1 letter and 1 <br />
        number.
      </DisplayBottomText>
      <DisplayBottom>
        <DisplayBottom2>
          <CheckBox type="checkbox" />
          <DisplayBottomText3>I`m not a robot</DisplayBottomText3>
        </DisplayBottom2>
      </DisplayBottom>
      <DisplayBottom3>
        <CheckBox2 type="checkbox" />
        <DisplayBottomText2>
          Opt-in to receive occasional product <br />
          updates, user research invitations,
          <br /> company announcements, and digests.
        </DisplayBottomText2>
        <QuestionCircle />
      </DisplayBottom3>
      <SignButton>Sign Up </SignButton>
      <DisplayBottomText4>
        By clicking “Sign up”, you agree to our{' '}
        <a href="#a">terms of service</a>, <a href="#a">privacy policy</a> and{' '}
        <a href="#a">cookie policy</a>
      </DisplayBottomText4>
    </EmailSignForm>
  );
};

export default EmailSign;
