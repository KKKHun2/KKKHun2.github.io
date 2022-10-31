// 작성자: FE 안지은
import styled from 'styled-components';
import { HiInbox } from 'react-icons/hi2';
import { ImTrophy } from 'react-icons/im';
import { BsQuestionCircleFill } from 'react-icons/bs';
import { MdMessage } from 'react-icons/md';
import userprofile from '../../icon/UserProfile.jpg';
// import dummyTweets from '../Dummy/dummyData';

export const UserIconStyled = styled.div`
  //로그인 후 오른쪽 상단 아이콘들
  width: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  .userIcon {
    fill: #525960;
  }
  &:hover {
    background: #e4e6e8;
    cursor: pointer;
  }
`;

export const UserProfileStyled = styled.img`
  //유저 프로필 사진
  margin: 0 10px 0 20px;
  border-radius: 5px;
  width: 25px;
  background-image: url(${userprofile});
`;

const UserHeader = () => {
  //   const filteredUserProfile =
  //     dummyTweets.filter((tweet) => tweet.username) === 'kimcoding';
  return (
    <>
      <UserIconStyled>
        {/* <img src={filteredUserProfile.picture} aria-label="user profile" /> */}
        <UserProfileStyled src={userprofile} />
      </UserIconStyled>
      <UserIconStyled>
        <HiInbox className="userIcon" />
      </UserIconStyled>
      <UserIconStyled>
        <ImTrophy className="userIcon" />
      </UserIconStyled>
      <UserIconStyled>
        <BsQuestionCircleFill className="userIcon" />
      </UserIconStyled>
      <UserIconStyled>
        <MdMessage className="userIcon" />
      </UserIconStyled>
    </>
  );
};

export default UserHeader;
