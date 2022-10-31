/* eslint-disable */
import { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components/macro';
import Tags from './page/Tags';
import Header from './components/Header/Header';
import GlobalStyles from './components/GlobalStyles';

const Block = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  display: flex;
  width: 100vw;
  margin-top: 50px;
`;

function App() {
  // useEffect(() => {
  //   fetch('https://8448-211-178-243-25.jp.ngrok.io/ ', {
  //     headers: {
  //       'ngrok-skip-browser-warning': 'skip',
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // }, []);

  const Questions = lazy(() => import('./page/Questions'));
  const Login = lazy(() => import('./page/Login'));
  const SignPage = lazy(() => import('./page/SignPage/SignPgae'));
  const CreateQuestionPage = lazy(()=>import('./page/CreateQuestionPage'));

  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const authHandler = () => {
    fetch('https://localhost:4000/userinfo')
      .then((response) => response.json())
      .then((data) => {
        setIsLogin(true);
        setUserInfo(data);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          console.log(err.response.data);
        }
      });
  };

  useEffect(() => {
    authHandler();
  }, []);

  return (
    <Router>
      <GlobalStyles />
      <Header isLogin={isLogin} userInfo={userInfo}/> {/* 로그인되었는지 여부랑 유저 정보 전달? 아직 미완성 입니다. (김서연) */}
      <Main>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/login"
            element={
              <Login setIsLogin={setIsLogin} setUserInfo={setUserInfo} />
            }
          />
          <Route path="/signup" element={<SignPage />} />
          <Route path="/" element={<Questions />} />
          <Route path="/tags" element={<Tags />} />
          <Route path="/users" element={<Questions />} />
          <Route path="/createquestionpage" element={<CreateQuestionPage />} />
        </Routes>
       </Suspense>
      </Main>
    </Router>
  );
}

export default App;
