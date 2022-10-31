// 작성자: FE 안지은
// import React from "react";
import styled from 'styled-components/macro';

const PostMainText = () => {
  const TextStyled = styled.div`
    border: solid 2px green;
    margin: 20px 0 0 10px;
  `;
  return (
    <>
      <TextStyled>
        <p>
          Currently, I am working with GORM Is it possible to get all the query
          gonna execute if I press commit For example :
        </p>
      </TextStyled>
    </>
  );
};

export default PostMainText;
