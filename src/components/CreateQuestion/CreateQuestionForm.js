/* eslint-disable */
/*
? 김용훈 만듬
*/
import styled from 'styled-components/macro';
import TextEditor from '../TextEditor/TextEditor';
import TextEditor2 from '../TextEditor/TextEditor2';
import React from 'react';


const QuestionSection = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100;
  min-width: 100;
  margin-left: 0px;
  
`;
const CreateHead = styled.div`
  display: flex;
  width: 580px;
  font-size: 28px;
  margin: 25px 0px 55px 0px;
  font-weight: 650;
  height: auto;
`;

const QuestionForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 770px;
  height: 250px;
  font-size: 16px;
  margin-top: 15px;
  margin-bottom: 25px;
  background-color: #EDF4FB;
  border: 0.1px solid rgba(177, 204, 235, 2);
  line-height: 25px;
  border-radius: 5px;
  h3 {
    margin: 15px 0px 5px 20px;
    font-size: 24px;
  }
  h4{
    font-size: 18px;
    margin: 10px 0px -25px 00px;
  }
  .FormText{
    margin-right: 120px;
  }
`;

const QuestionForm2 = styled.div`
  width: 770px;
  height: 250px;
  font-size: 15px;
  color: black;
  margin: 10px 0px 0px 20px;
  border-radius: 5px;
  font-weight: 300;
  a {
    text-decoration: none;
    color: #0173cc;
  }
  a:hover {
    color: #0995fd;
  }
`;
const TitleT = styled.div`

  .title {
    display: inline-block;
    color: black;
    font-size: 14px;
    font-weight: 650;
  }
 
`;
const TitleT2 = styled.form`
text-align: left;
flex-direction: column;
  width:450px;
  line-height: 110%;
  margin-top: 30px;
  li {
    
    margin-left: 20px;
    color: black;
    font-size: 11px;
  }
`;

// 제목
const QuestionTitleForm = styled.div`
  width: 770px;
  height: 130px;
  font-size: 28px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgba(152, 152, 152, 0.6);
  .title2 {
    margin: 22px 500px 0px 20px;

    font-size: 16px;
    font-weight: 700;
  }
  .body2 {
    font-size: 12px;
    margin: 5px 300px 10px 20px;
  }
`;

//타이틀 인풋
const QuestionTitleInput = styled.input`
  width: 680px;
  height: 30px;
  margin-right: -5px;
  margin-left: 20px;
  border-radius: 5px;
  border: 1px solid rgba(152, 152, 152, 0.6);
`;

//문제의 세부사항
const QuestionBodyForm = styled.div`
  width: 770px;
  font-size: 28px;
  margin-top: 30px;
  height: 750px;
  border-radius: 5px;
  background-color: white;
  border: 1px solid rgba(152, 152, 152, 0.6);
  .title {
    margin: 20px 390px 10px 20px;

    font-size: 16px;
    font-weight: 700;
  }
  .title1 {
    margin: 20px 0px 10px 20px;

    font-size: 16px;
    font-weight: 700;
  }
  .body {
    font-size: 12px;
    margin: 5px 185px 15px 20px;
  }
  .body1 {
    font-size: 12px;
    margin: 5px 70px 15px 20px;
  }
`;

//무엇을 시도했음?

//태그
const QuestionTagForm = styled.div`
  width: 770px;
  height: 130px;
  font-size: 28px;
  margin-top: 20px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgba(152, 152, 152, 0.6);
  .title3 {
    margin: 21px 650px 10px 20px;

    font-size: 16px;
    font-weight: 700;
  }
  .body3 {
    font-size: 12px;
    margin: 5px 177px 10px 20px;
  }
`;

const QuestionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 170px;
  height: 40px;
  margin:20px 0px 50px 1px;
  padding:15px;
 
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

// 
// 
// const TextEditor1 = [TextEditor1,setTextEditor1] = useState();
// const TextEditor2 = [TextEditor2,setTextEditor2] = useState();

const CreateQuestionForm = () => (
  <QuestionSection>
    <CreateHead>Ask a public question</CreateHead>
    <QuestionForm>
      <h3>Writing a good question </h3>
      <QuestionForm2>
        You’re ready to <a href="#a">ask</a> a
        <a href="#a">programming-related question</a> and this form will help
        guide you through the process.
        <div className="FormText"> Looking to ask a non-programming
        question? See <a href="#a"> the topics here </a> to find a relevant
        site.
        </div>
        <TitleT>
         <ul >
         <h4>Steps </h4>
            <TitleT2>
            <li>Summarize your problem in a one-line title.</li>
            <li>Describe your problem in more detail.</li>
            <li>Describe what you tried and what you expected to happen.</li>
            <li>Add “tags” which help surface your question to members of the community.</li>
            <li>Review your question and post it to the site.</li>
            </TitleT2>        
        </ul>
        </TitleT>
      </QuestionForm2>
    </QuestionForm>
    <QuestionTitleForm>
      <div className="title2">Title</div>
      <div className="body2">
        Be specific and imagine you’re asking a question to another person.
      </div>
      <QuestionTitleInput />
    </QuestionTitleForm>
    <QuestionBodyForm>
      <div className="title">What are the details of your problem?</div>
      <div className="body">
        Introduce the problem and expand on what you put in the title. Minimum
        20 characters.
      </div>
      <TextEditor TextEditor1 />
    </QuestionBodyForm>
    <QuestionBodyForm>
      <div className="title1">
        What did you try and what were you expecting?
      </div>
      <div className="body1">
        Describe what you tried, what you expected to happen, and what actually resulted. Minimum 20 characters
      </div>
      <TextEditor2 TextEditor2 />
    </QuestionBodyForm>
    <QuestionTagForm>
      <div className="title3">Tags</div>
      <div className="body3">
      Add up to 5 tags to describe what your question is about. Start typing to see suggestions.
      </div>
      <QuestionTitleInput />
    </QuestionTagForm>
    <QuestionButton>Review your question</QuestionButton>
  </QuestionSection>
);

export default CreateQuestionForm;
