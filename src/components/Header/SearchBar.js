// 작성자: FE 안지은
import styled from 'styled-components/macro';
import { AiOutlineSearch } from 'react-icons/ai';
import { useState } from 'react';

export const SerchStyled = styled.div`
  width: 700px;
  height: 30px;
  display: flex;
  align-items: center;
  border: solid 1px gray;
  border-radius: 3px;
  background-color: #ffffff;
  margin: 0 5px 0 5px;
  input {
    width: 600px;
    height: 20px; //이부분 수정
    border: none;
    outline: none;
    margin-left: 5px;
  }
`;

export const SearchGuide = styled.div`
  position: absolute;
  top: 48px;
  width: 670px;
  height: 150px;
  border-radius: 5px;
  background-color: #ffffff;
  padding: 15px;
  box-shadow: 0px 0px 8px 5px #e3e3e3;
  &.hide {
    display: none;
  }
  &.show {
    display: block;
  }
`;

const SearchContent = () => {
  const GuideContent = styled.div`
    width: 670px;
    height: 100px;
    display: block;
    p {
      padding-bottom: 10px;
      font-size: 0.8rem;
      color: #636363;
    }
    strong {
      font-weight: bold;
      font-size: 0.9rem;
      padding-right: 10px;
      color: #000000;
    }
    hr {
      border-color: #fafafa;
    }
    &.content-sort {
      position: absolute;
      top: 15px;
      left: 350px;
    }
  `;

  return (
    <>
      <GuideContent>
        <p>
          <strong>`[tag]`</strong> search within a tag
        </p>
        <p>
          <strong>user:1234</strong>search by author
        </p>
        <p>
          <strong>&#34;words here&#34;</strong>exact phrase
        </p>
        <p>
          <strong>collective:&#34;Name&#34;</strong>collective content
        </p>
        <hr />
      </GuideContent>
      <GuideContent className="content-sort">
        <p>
          <strong>anwer:0</strong>unanwered questions
        </p>
        <p>
          <strong>score:3</strong>posts with a 3+ score
        </p>
        <p>
          <strong>is:question</strong>type of post
        </p>
        <p>
          <strong>isaccepted:yes</strong>search within states
        </p>
      </GuideContent>
    </>
  );
};

export const MagnifyingGlass = styled(AiOutlineSearch)`
  width: 30px;
  color: #838c95;
`;

export const ButtonStyledAsk = styled.button`
  width: 100px;
  padding: 8px 0 8px 0;
  border: solid 1px #2d8de0;
  background-color: #e8f2fa;
  border-radius: 3px;
  margin-top: 15px;
  text-align: center;
  color: #2273ba;
  font-size: 0.8rem;

  &:hover {
    background: #d5e4f0;
  }
`;

const SearchBar = () => {
  const [isSearch, setIsSearch] = useState(false);
  const [value, setValue] = useState('');
  const isSearchHandler = () => {
    setIsSearch(!isSearch);
    console.log('issearch 작동중');
  };
  const handleChange = (e) => {
    setValue(e.target.value);
    alert('input 값 입력중');
  };
  return (
    <>
      <SerchStyled>
        <MagnifyingGlass />
        <input
          type="text"
          value={value}
          onChange={handleChange}
          onClick={isSearchHandler}
          placeholder="Search..."
        />
        <SearchGuide className={`hide ${isSearch ? 'show' : 'hide'}`}>
          <SearchContent />
          <ButtonStyledAsk>Ask a question</ButtonStyledAsk>
        </SearchGuide>
      </SerchStyled>
    </>
  );
};

export default SearchBar;
