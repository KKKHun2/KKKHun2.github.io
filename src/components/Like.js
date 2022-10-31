// 작성자: 안지은
// import React from 'react';
import styled from 'styled-components/macro';
import { AiFillCaretUp, AiFillCaretDown } from 'react-icons/ai';
import { FiBookmark } from 'react-icons/fi';
import { RiHistoryLine } from 'react-icons/ri';

export const LikeDislikeButton = styled.div`
  display: inline-block;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 300px;
  border: solid 1px pink;
  margin-top: 20px;
  p {
    font-size: 2rem;
    text-align: center;
    color: #6a737c;
  }
`;

export const AiFillCaretUpStyled = styled(AiFillCaretUp)`
  color: #babfc4;
`;

export const AiFillCaretDownStyled = styled(AiFillCaretDown)`
  color: #babfc4;
`;

export const FiBookmarkStyled = styled(FiBookmark)`
  color: #babfc4;
  display: flex;
  margin: auto;
`;

export const RiHistoryLineStyled = styled(RiHistoryLine)`
  color: #babfc4;
  display: flex;
  margin: 10px auto;
`;

const Like = () => {
  return (
    <>
      <LikeDislikeButton>
        <AiFillCaretUpStyled size="50" />
        <p>0</p>
        <AiFillCaretDownStyled size="50" />
        <FiBookmarkStyled size="20" />
        <RiHistoryLineStyled size="20" />
      </LikeDislikeButton>
    </>
  );
};

export default Like;
