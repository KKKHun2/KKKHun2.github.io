/* eslint-disable */
/**
 * !김서연  폴더명이 바뀌지 않음..*/
import styled from 'styled-components/macro';
import { Suspense, lazy } from 'react';
import dummyData from './DummyData';
import { MdFilterList } from 'react-icons/md';
import Question from './Question';
import { Link } from 'react-router-dom';

const Container = styled.div`
  height: 2000px;
  width: 100vw;
  display: flex;
  justify-content: center;
  font-size: 13px;
`;

const Content = styled.div`
  width: 1000px; // 반응형 하려면 와이트를 주는게 맞나..?
  height: 100vh; //이게 맞나..
  display: flex;
  flex-direction: row;
  padding: 24px;
  h1 {
    font-size: 27px;
    margin-bottom: 12px;
    width: 620px;
  }
  .filter-block {
    display: flex;
    margin-bottom: 12px;
  }
  .count {
    display: flex;
    align-items: center;
    width: 355px;
  }
`;

const AskBtn = styled.button`
  height: 37px;
  width: 103px;
  color: white;
  background-color: #0995fd;
  margin-left: 365px;
  cursor: pointer;
  border-radius: 3px;
  &:hover {
    background-color: #0173cc;
  }
`;

const Filter = styled.div`
  font-size: 12px;
  height: 25px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #d7d9dd;
  border-radius: 3px;
  margin-right: 5px;
  cursor: pointer;
  &:hover {
    background-color: #f0f2f4;
  }
  &.filter-blue {
    color: #79a7c7;
    background-color: #e1ecf4;
    border: 1px solid #79a7c7;
    &:hover {
      background-color: #b3d3ea;
    }
  }
`;

function Questions() {
  const Nav = lazy(() => import('../components/Navigate/Nav'));
  const Footer = lazy(() => import('../components/Footer/Footer'));

  // const [ask, setAsk] = useState(dummyData);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
       <FooterBlock>
        <Container>
          <Nav />
          <Content>
            <div className="main-bar">
              <h1>
                All questions
                <Link to="/CreateQuestionPage">
                <AskBtn>Ask Question</AskBtn>
                </Link>
              </h1>
              <div className="filter-block">
                <div className="count">{dummyData.length} questions</div>
                <Filter>Like</Filter>
                <Filter>Answer</Filter>
                <Filter>View</Filter>
                <Filter className="filter-blue">
                  <MdFilterList />
                  Filter
                </Filter>
              </div>

              {dummyData.map((data) => (
                <Question data={data} key={data.id} />
              ))}
            </div>
            <Aside>
              <div>side</div>
            </Aside>
          </Content>
        </Container>
          <Footer />
        </FooterBlock>
      </Suspense>
    </>
  );
}

const Aside = styled.div`
  margin-left: 24px;
  background-color: #fdf6e2;
  width: 300px;
  height: 515px;
  @media (max-width: 1200px) {
    display: none;
  }
`;

 const FooterBlock = styled.div`
   display: flex;
   flex-direction: column;
 `;

export default Questions;