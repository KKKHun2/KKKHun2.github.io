/* eslint-disable */
/*
? 김용훈 만듬
*/

import styled from 'styled-components/macro';
import { SlPencil } from 'react-icons/sl';
import React from 'react';

const WritingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 500px;
  min-height: 100vh;
  margin-left: 20px;
  margin-bottom: 1418px;
  @media (max-width: 1150px) {
    display: none;
  }
`;
const SlPencilLogo = styled(SlPencil)`
  margin-top: 14px;
  width: 50px;
  height: 50px;
`;
const WritingTitleForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 320px;
  height: 12px;
  padding: 10px;
  border-radius: 5px 5px 0px 0px;
  color: black;
  box-shadow: 3px -3px 5px rgba(0, 0, 0, 0.1);
  background-color: #f0f2f4;
  border: 0.1px solid rgba(135, 135, 135, 0.8);

  .body {
    margin-right: 180px;
  }
`;
const WritingTitleForm2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 320px;
  height: 30px;
  padding: 10px;
  background-color: white;
  border-right: 0.1px solid rgba(135, 135, 135, 0.8);
  border-left: 0.1px solid rgba(135, 135, 135, 0.8);
  box-shadow: 3px -3px 5px rgba(0, 0, 0, 0.1);
  .body2 {
    color: black;
    width: 300px;
    font-size: 13px;
    margin-left: 22px;
    padding-right: 30px;
  }
`;
const WritingTitleForm3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 320px;
  height: 35px;
  padding: 10px;
  border-radius: 0px 0px 5px 5px;
  background-color: white;
  border-right: 0.1px solid rgba(135, 135, 135, 0.8);
  border-left: 0.1px solid rgba(135, 135, 135, 0.8);
  border-bottom: 0.1px solid rgba(135, 135, 135, 0.8);
  box-shadow: 3px 2px 5px rgba(0, 0, 0, 0.1);
  .body3 {
    color: black;
    width: 270px;
    font-size: 13px;
    margin-left: 20px;
    margin-bottom: 10px;
  }
`;
const WritingTitle = () => {
  return (
    <WritingContainer>
      <WritingTitleForm>
        <div className="body">Writing a good title</div>
      </WritingTitleForm>
      <WritingTitleForm2>
        <SlPencilLogo />
        <div className="body2">Your title should summarize the problem.</div>
      </WritingTitleForm2>
      <WritingTitleForm3>
        <div className="body3">
          You might find that you have a better idea of your title after writing
          out the rest of the question.
        </div>
      </WritingTitleForm3>
    </WritingContainer>
  );
};

export default WritingTitle;
