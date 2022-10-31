/* eslint-disable */
/*
? 김용훈 만듬
*/
import styled from 'styled-components/macro';
import WritingTitle from '../components/CreateQuestion/WritingTitle';
import CreateQuestionForm from '../components/CreateQuestion/CreateQuestionForm';
import Footer from '../components/Footer/Footer';
import React  from 'react';

const CreateQuestionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100vw;
  min-height: 300vh;
  background-color: #f0f2f4;
`;

const CreateQuestionPage = () => {
  return (
    <CreateQuestionContainer>
      <CreateQuestionForm />
      <WritingTitle />
      <Footer />
    </CreateQuestionContainer>
  );
};

export default CreateQuestionPage;
