/*
?   김용훈만듬
*/
import Nav from '../components/Navigate/Nav';
import Footer from '../components/Footer/Footer';
import styled from 'styled-components';
import TagTitle from '../components/Tags/TagTitle';

const TagContainer = styled.main`
  padding: 20px;
  width: 100vw;
  height: 200vh;
  display: flex;
  flex-direction: row;
`;

const FooterBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

function Tags() {
  return (
    <>
      <FooterBlock>
        <TagContainer>
          <Nav />
          <TagTitle />
        </TagContainer>
        <Footer />
      </FooterBlock>
    </>
  );
}

export default Tags;
