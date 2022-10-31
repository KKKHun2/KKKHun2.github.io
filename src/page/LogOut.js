// 작성자: 안지은
import styled from 'styled-components/macro';
import Header from '../components/Header/Header';

export const LogOutCotent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1f2f3;
`;

const LogOutTextBox = () => {
  const LogOutText = styled.div`
    border: solid 1px red;
    width: 400px;
    height: 600px;
  `;

  return (
    <>
      <LogOutText>
        <a href="https://askubuntu.com/"> askubuntu.com</a>
      </LogOutText>
    </>
  );
};

const LogOut = () => {
  return (
    <>
      <Header />
      <LogOutCotent>
        <h2>
          Clicking “Log out” will log you out of the following
          <br /> domains on this device:
        </h2>
        <LogOutTextBox />
      </LogOutCotent>
    </>
  );
};

export default LogOut;