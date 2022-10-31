/**
 * !김서연 */
import { useState } from 'react';
import styled from 'styled-components';
import { FaExclamationCircle } from 'react-icons/fa';
import SocialLogin from '../components/Sign/SocialLogin';

const SectionBlock = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: #f0f2f4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 13px;
  .space {
    display: flex;
    justify-content: space-between;
  }
  .sign-up {
    color: #0173cc;
    &:hover {
      color: #0995fd;
    }
  }
  .btn-txt {
    display: flex;
    flex-direction: column;
    width: 267px;
    margin: 10px;
    align-items: center;
    div {
      margin-top: 10px;
    }
  }
  svg {
    margin-bottom: 10px;
  }
`;

const LoginBlock = styled.div`
  background-color: white;
  width: 229px;
  height: 190px;
  border-radius: 6px;
  padding: 24px;
  margin-top: 10px;
  margin-bottom: 24px;
  box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05),
    0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);
  div {
    display: flex;
    flex-direction: column;
  }
  input {
    border: 1px solid #d7d9dd;
    border-radius: 3px;
    height: 30px;
    &:focus {
      border: 1px solid #0995fd;
      box-shadow: 0 0 0 3.5px #ddeaf7;
    }
  }
  button {
    height: 33px;
    color: white;
    background-color: #0995fd;
    cursor: pointer;
    border-radius: 3px;
    &:hover {
      background-color: #0173cc;
    }
  }
  .label {
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 4px;
  }
  .space {
    height: 180px;
    justify-content: space-around;
  }
  .not-vaild {
    border-color: red;
  }
  .mark {
    color: red;
    width: 16px;
    height: 16px;
    text-align: right;
    display: flex;
    position: relative;
    left: 200px;
    top: -25px;
    display: block;
  }
  .none {
    display: none;
  }
`;

const ErrorM = styled.div`
  font-size: 12px;
  color: red;
  margin-top: -20px;
`;

function Login(setIsLogin, setUserInfo) {
  const [loginInfo, setLoginInfo] = useState({
    userId: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };
  const loginRequestHandler = () => {
    const { userId, password } = loginInfo;
    if (!userId || !password) {
      setErrorMessage('아이디와 비밀번호를 입력하세요');
      return;
    } else {
      setErrorMessage('');
    }
    return fetch('https://localhost:4000/login', {
      method: 'POST', // 아무것도 안적으면 GET이라서 메소드 적어야 함
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify(loginInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        setIsLogin(true);
        setUserInfo(data);
        setErrorMessage('');
      })
      .catch((err) => {
        if (err.response.status === 401) {
          setErrorMessage(true);
        }
      });
  };

  return (
    <main>
      <SectionBlock>
        <svg width="35" height="37" viewBox="0 0 32 37">
          <path d="M26 33v-9h4v13H0V24h4v9h22Z" fill="#BCBBBB"></path>
          <path
            d="m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z"
            fill="#F48024"
          ></path>
        </svg>
        <SocialLogin />
        <LoginBlock>
          <div className="space">
            <div>
              <div>
                <label htmlFor="1" className="label">
                  Email
                </label>
              </div>
              <div>
                <input
                  id="1"
                  onChange={handleInputValue('userId')}
                  className={errorMessage ? 'not-vaild box' : 'box'}
                ></input>
                <FaExclamationCircle
                  className={errorMessage ? 'mark' : 'none'}
                />
                {errorMessage ? (
                  <ErrorM>The email is not a valid email address.</ErrorM>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="2" className="label">
                  Password
                </label>
              </div>
              <div>
                <input
                  id="2"
                  className="box"
                  onChange={handleInputValue('password')}
                ></input>
              </div>
            </div>
            <div>
              <button onClick={loginRequestHandler}>Log in</button>
            </div>
          </div>
        </LoginBlock>
        <div className="btn-txt">
          <div>
            <span>Dont have an accoutn?</span>
            <span className="sign-up"> Sign up</span>
          </div>
          <div>
            <span>Are you an employer?</span>
            <span className="sign-up"> Sign up on Talent</span>
          </div>
        </div>
      </SectionBlock>
    </main>
  );
}

export default Login;
