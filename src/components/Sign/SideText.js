/* eslint-disable */
/*
? 김용훈 만듬

*/
import styled from 'styled-components/macro';
import { RiQuestionnaireLine } from 'react-icons/ri';
import { IoMdPricetags } from 'react-icons/io';
import { MdSwitchLeft } from 'react-icons/md';
import { GiTrophy } from 'react-icons/gi';
import React from 'react';

const SideTextBox = styled.div`
  width: 480px;
  height: 400px;
  margin-top: 370px;
  margin-bottom: 150px;
  @media (max-width: 993px) {
    display: none;
  }
`;
const Head = styled.div`
  width: 450px;
  font-size: 28px;
  margin-top: 30px;
  padding-bottom: 25px;
  @media (max-width: 993px) {
    display: none;
  }
`;
const SideTextForm = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  @media (max-width: 993px) {
    display: none;
  }
`;

const SideTextT = styled.div`
  font-size: 16px;
  padding-left: 10px;
  @media (max-width: 993px) {
    display: none;
  }
`;

const SideIcon = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 5px;
  @media (max-width: 993px) {
    display: none;
  }
`;
const SideBottomText = styled.div`
  @media (max-width: 993px) {
    display: none;
  }
  font-size: 14px;
  padding-right: 50px;
  margin-top: 30px;
  color: #535454;
  line-height: 18px;
  a {
    color: #0995fd;
  }
  a:hover {
    color: #0173cc;
  }
`;
const Tlogo = styled(RiQuestionnaireLine)`
  @media (max-width: 993px) {
    display: none;
  }
  width: 25px;
  height: 25px;
  margin-right: -20px;
  padding-top: 3.3px;
  color: #0995fd;
`;
const Tlogo1 = styled(MdSwitchLeft)`
  @media (max-width: 993px) {
    display: none;
  }
  width: 33px;
  height: 33px;
  margin-left: -5px;
  padding-top: 1.5px;
  color: #0995fd;
  transform: rotate(-0.25turn);
`;
const Tlogo2 = styled(IoMdPricetags)`
  @media (max-width: 993px) {
    display: none;
  }
  width: 25px;
  height: 25px;
  margin-right: -19px;
  padding-top: 4px;
  color: #0995fd;
`;
const Tlogo3 = styled(GiTrophy)`
  @media (max-width: 993px) {
    display: none;
  }
  width: 25px;
  height: 25px;
  margin-right: -20px;
  padding-top: 3px;
  color: #0995fd;
`;
const SideText = () => {
  return (
    <SideTextBox>
      <Head>Join the Stack Overflow community</Head>
      <SideTextForm>
        <SideIcon>
          <Tlogo />
        </SideIcon>
        <SideTextT>Get unstuck — ask a question</SideTextT>
      </SideTextForm>

      <SideTextForm>
        <SideIcon>
          <Tlogo1 />
        </SideIcon>
        <SideTextT>Unlock new privileges like voting and commenting</SideTextT>
      </SideTextForm>

      <SideTextForm>
        <SideIcon>
          <Tlogo2 />
        </SideIcon>
        <SideTextT>Save your favorite tags, filters, and jobs</SideTextT>
      </SideTextForm>

      <SideTextForm>
        <SideIcon>
          <Tlogo3 />
        </SideIcon>
        <SideTextT>Earn reputation and badges</SideTextT>
      </SideTextForm>
      <SideBottomText>
        Collaborate and share knowledge with a private group for FREE.
        <br />
        <a href="#a">Get Stack Overflow for Teams free for up to 50 users.</a>
      </SideBottomText>
    </SideTextBox>
  );
};

export default SideText;
