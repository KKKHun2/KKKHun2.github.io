// 작성자: FE 안지은
// import React from 'react';
import styled from 'styled-components/macro';
import PostTitle from './PostTitle';
import PostMainText from './PostMainText';
import Like from '../Like';

export const PostContent = styled.div`
  display: flex;
`;

export const AsideTest = styled.div`
  width: 35vw;
  height: 800px;
  border: solid 2px pink;
  display: flex;
  margin-top: 20px;
`;

const Post = () => {
  return (
    <>
      <PostTitle />
      <PostContent>
        <Like />
        <PostMainText />
        <AsideTest />
      </PostContent>
    </>
  );
};

export default Post;
