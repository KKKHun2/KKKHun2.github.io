/* eslint-disable */
/*
?   김용훈만듬
*/

import React from "react";
import styled from 'styled-components/macro';

const TagContainer = styled.div`
  width: 1200px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, auto));
  gap: 12px;
  @media (max-width: 1280px){
    grid-template-columns: repeat(3, minmax(0, auto));
    width: 40%;
  }
  @media (max-width: 1139px) {
    grid-template-columns: repeat(2, minmax(0, auto));
    width: 30%;
  }
  @media (max-width: 951px){
    grid-template-columns: repeat(1, minmax(0, auto));
  }
`;
const Tag = styled.a`
  color: #39739d;
  background-color: #e1ecf4;
  padding: 5px;
  border-radius: 3px;
  font-size: 13px;
  cursor: pointer;
  display: inline-block;
  :hover {
    background-color: #D0E3F1;
  }
  width:58px;
`;

const TagBody = styled.div`
  display: flex;    
  flex-direction: column;
  margin-top: 3px;
  padding: 10px;
  width: 275px;
  height: 150px;
  border: 1px solid #d6d9dc;
  border-radius: 3px;
  gap: 12px;
  p {
    font-size: 13px;
  }
`;

const TagBodyList=()=> {
  
  return (
    <TagContainer>
      <TagBody>
        <Tag className="title">javascript</Tag>
      <p>
      For questions about programming in ECMAScript (JavaScript/JS) and its different dialects/implementations (except for ActionScript). Keep in...
      </p>
     </TagBody>
     <TagBody>
        <Tag className="title">javascript</Tag>
      <p>
        For questions about programming in ECMAScript (JavaScript/JS) and its different dialects/implementations (except for ActionScript). Keep in...
      </p>
     </TagBody>
     <TagBody>
        <Tag className="title">javascript</Tag>
      <p>
        For questions about programming in ECMAScript (JavaScript/JS) and its different dialects/implementations (except for ActionScript). Keep in...
      </p>
     </TagBody>
     <TagBody>
        <Tag className="title">javascript</Tag>
      <p>
        For questions about programming in ECMAScript (JavaScript/JS) and its different dialects/implementations (except for ActionScript). Keep in...
      </p>
     </TagBody>
     <TagBody>
        <Tag className="title">javascript</Tag>
      <p>
        For questions about programming in ECMAScript (JavaScript/JS) and its different dialects/implementations (except for ActionScript). Keep in...
      </p>
     </TagBody>
     <TagBody>
        <Tag className="title">javascript</Tag>
      <p>
        For questions about programming in ECMAScript (JavaScript/JS) and its different dialects/implementations (except for ActionScript). Keep in...
      </p>
     </TagBody>
     <TagBody>
        <Tag className="title">javascript</Tag>
      <p>
        For questions about programming in ECMAScript (JavaScript/JS) and its different dialects/implementations (except for ActionScript). Keep in...
      </p>
     </TagBody>
     <TagBody>
        <Tag className="title">javascript</Tag>
      <p>
        For questions about programming in ECMAScript (JavaScript/JS) and its different dialects/implementations (except for ActionScript). Keep in...
      </p>
     </TagBody>
    </TagContainer>
  );
}
export default TagBodyList;