// 작성자: FE 안지은
import styled from 'styled-components/macro';
import { ButtonStyledAsk } from '../Header/SearchBar';
// import dummyText from '../Dummy/dummytext';

export const PostStyled = styled.div`
  /* border: solid 1px red; */
  display: flex;

  h1 {
    font-size: 2.5rem;
    margin: 30px 30px 20px 30px;
  }
  p {
    margin-left: 30px;
    font-size: 0.9rem;
  }
  strong {
    color: #717a82;
  }
`;

export const ButtonPost = styled(ButtonStyledAsk)`
  height: 40px;
  width: 100px;
  margin-left: auto;
  position: absolute;
  top: 60px;
  right: 60px;

  &.sign {
    background-color: #2d8de0;
    color: #ffffff;
  }

  &.sign:hover {
    background-color: #2273ba;
  }
`;

const PostTitle = () => {
  return (
    <>
      <PostStyled>
        <h1>dummy title dummy title dummy title dummy title</h1>
        <ButtonPost className="sign">Ask Question</ButtonPost>
      </PostStyled>
      <PostStyled>
        <p>
          <strong>Asked</strong> today
        </p>
        <p>
          <strong>Modified</strong> today
        </p>
        <p>
          <strong>Viewed</strong> 2 time
        </p>
      </PostStyled>
      <hr />
    </>
  );
};

export default PostTitle;
