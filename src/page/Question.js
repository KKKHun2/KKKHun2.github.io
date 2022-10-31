/* eslint-disable */
import { useState } from 'react';
import styled from 'styled-components';

const ListBlock = styled.div`
  margin-left: -24px;
  border-top: 1px solid #d7d9dd;
`;

const List = styled.div`
  height: 130px;
  width: 615px;
  display: flex;
  padding: 16px;
  flex-grow:0;
  .ask-body {
    height: 34px;
    margin-bottom: 5px;
  }
`;

const SummaryContent = styled.div`
  width: 539px;
  margin-left: 16px;
  h3 {
    font-size: 17px;
    margin-bottom: 5px;
    color: #0173cc;
    cursor: pointer;
    &:hover {
      color: #0995fd;
    }
  }
`;

const Status = styled.div`
  width: 108px;
  height: 128px;
  text-align: end;
  div {
    padding-right: 3px;
    display:flex;
    justify-content: end;
    align-items: center;
    width: 105px;
    height: 24px;
  }
  .answer {
    color: #6b737c;
  }
  .select-ask{
    color: white;
    border-radius: 3px;
    background-color: #2e6f44;
  }
  .view {
    color: #6b737c;
  }
`;

const Meta = styled.div`
  align-items: flex-start;
  width: 460px;
  height: 67px;
`;
const Tags = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  margin-bottom: 13px;
  margin-right: 10px;
  div {
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 63px;
    height: 20px;
    border-radius: 3px;
    margin-right: 4px;
    cursor: pointer;
    color: #79a7c7;
    background-color: #e1ecf4;
    &:hover {
      background-color: #b3d3ea;
    }
  }
`;

const UserInfo = styled.div`
  margin-right: 2px;
  display: flex;
  width: 330px;
  justify-content: end;
    font-size: 12px;
    .photo {
      width: 16px;
      height: 16px;
    }
`;

function Question({ data }) {
    const {likes, answers, views, title, body} = data;

    const [select, setSelect] = useState('') // 답변 체택 시 초록색 네모 생김 props로 내려줄 생각?
  return (
    <>
      <ListBlock>
        <List>
          <Status>
            <div className="vote">{likes} likes</div>
            <div className={select ? "answer select-ask" : "answer"}>{answers} answers</div>
            <div className="view">{views} views</div>
          </Status>
          <SummaryContent>
            <h3>{title}</h3>
            <div className="ask-body">{body}</div>
            <Meta>
              <Tags>
                <div>java</div>
              </Tags>
              <UserInfo>
                <div className="photo">{UserInfo.userprofile}</div>
                <div>{UserInfo.username}</div>
                <div>{UserInfo.reputation}</div>
                <div>{UserInfo.createdAt}</div>
              </UserInfo>
            </Meta>
          </SummaryContent>
        </List>
      </ListBlock>
    </>
  );
}

export default Question;
