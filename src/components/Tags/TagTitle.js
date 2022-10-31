/*
?   김용훈만듬
*/

import React from 'react'; // eslint-disable-line no-unused-vars
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import TagBodyList from './TagBodyList';

const TagTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;
const ContainerBody = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 30px;
    margin-top: -10px;
  }
  .body {
    margin-top: 20px;
    line-height: 22px;
  }
  .body2 {
    margin-top: 15px;
    height: 18px;
    font-size: 12px;
    font-weight: 450;
  }
  a {
    color: #0173cc;
    text-decoration: none;
  }
  a:hover {
    color: #0995fd;
  }
`;
const InputInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 268px;
  height: 50px;
  margin: 20px 0px 1px;
`;

const Input = styled.input`
  width: 185px;
  height: 35px;
  border: 1px solid #babfc4;
  border-radius: 5px;
  text-indent: 30px;
`;

const MagnifyingGlass = styled(AiOutlineSearch)`
  width: 30px;
  color: #838c95;
  margin-top: 10.5px;
  position: absolute;
  z-index: 1;
  color: #4f5b66;
`;
const TagTitleButton = styled.div`
  display: flex;
  width: 100vw;
  margin-right: 100px;
  margin-left: 1029px;
`;
const TagButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 67px;
  height: 38px;
  margin-top: -55px;
  color: #6c6c6c;
  border: 0.1px solid rgba(108, 108, 108, 0.8);
  border-radius: 5px 0px 0px 5px;
  background-color: #d7d9dd;
  cursor: pointer;
`;
const TagButton2 = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 57px;
  height: 38px;
  margin-top: -55px;
  color: #6c6c6c;
  border: 0.1px solid rgba(108, 108, 108, 0.8);
  :hover {
    background-color: #d7d9dd;
  }
  background-color: #f0f2f4;
  cursor: pointer;
`;
const TagButton3 = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 53px;
  height: 38px;
  margin-top: -55px;
  color: #6c6c6c;
  border-radius: 0px 5px 5px 0px;
  border: 0.1px solid rgba(108, 108, 108, 0.8);
  :hover {
    background-color: #d7d9dd;
  }
  background-color: #f0f2f4;
  cursor: pointer;
`;

const TagTitle = () => {
  return (
    <TagTitleContainer>
      <ContainerBody>
        <h1>Tags</h1>
        <div className="body">
          A tag is a keyword or label that categorizes your question with other,
          similar questions.
          <br />
          Using the right tags makes it easier for others to find and answer
          your question.
        </div>
        <div className="body2">
          <a href="#a">Show all tag synonyms</a>
        </div>
      </ContainerBody>
      <InputInfo>
        <MagnifyingGlass />
        <Input className="in" placeholder="Filter by tag name" />
      </InputInfo>
      <TagTitleButton>
        <TagButton className="box1">Popular</TagButton>
        <TagButton2 className="box2">Name</TagButton2>
        <TagButton3 className="box3">New</TagButton3>
      </TagTitleButton>
      <TagBodyList></TagBodyList>
    </TagTitleContainer>
  );
};

export default TagTitle;
