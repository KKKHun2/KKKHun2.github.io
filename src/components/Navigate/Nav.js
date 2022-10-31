/**
 * !김서연  */
import styled from 'styled-components/macro';
import { ImEarth } from 'react-icons/im';
import { MdStars, MdInfo, MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Free from './Free.png';

const NavBlock = styled.div`
  background-color: white;
  border-right: 1px solid #d7d9dd;
  width: 164px;
  color: #525960;
  font-weight: 500;
  .home-link {
    height: 34px;
    cursor: pointer;
  }
  .z-i {
    z-index: 2;
  }
`;

const Ol = styled.ol`
  div {
    margin: 8px;
    .free-img {
      width: 140px;
      height: 120px;
    }
  }
  .public {
    font-size: x-small;
    margin: 10px 8px 3px 8px;
    display: flex;
    align-items: center;
  }
  .focused {
    background: #f0f2f4;
    border-right: 3px solid #f48123;
    color: #0c0e0f;
    font-weight: 600;
  }
  .info {
    position: relative;
    bottom: 0.75px;
    font-size: 11px;
    left: 72px;
  }
  .info-team {
    left: 105.75px;
  }
  .team-block {
    border-width: 1px 0px 1px 1px;
    border-style: solid;
    border-color: #d7d9dd;
    border-radius: 3px 0px 0px 3px;
    margin-top: 4px;
    font-size: 12px;
    padding: 5px 0px 5px 0px;
    .storng {
      font-weight: bold;
      color: #0c0e0f;
      font-size: 13px;
    }
    img {
      margin: 7px 0px 7px 0px;
    }
    .why-team {
      display: flex;
      justify-content: center;
      &:hover {
        color: #b6b4b1;
      }
    }
  }
`;

const Li = styled.li`
  height: 34px;
  font-size: 13px;
  cursor: pointer;
  display: flex;
  align-items: center;
  div {
    margin: 8px 8px 8px 30px;
  }
  .nav-i {
    margin-left: 8px;
    display: flex;
    .icons {
      margin-right: 5px;
      font-size: 16px;
      position: relative;
      top: -1px;
    }
    .icon-orange {
      color: #f48123;
    }
  }
  .home {
    margin-left: 8px;
  }
`;

const CreateTeam = styled.button`
  background-color: #f48123;
  font-weight: bold;
  color: white;
  width: 145px;
  height: 28px;
  font-size: 12px;
  border-radius: 3px;
  &:hover {
    background-color: #ff8f34;
  }
`;

function Nav() {
  const [currentTab, setcurrentTab] = useState(0);
  const selectMenuHandler = (index) => {
    setcurrentTab(index);
  };
  return (
    <>
      <NavBlock className="navigation">
        <Ol className="home-link">
          <Li>
            <div className="home">Home</div>
          </Li>
        </Ol>
        <Ol>
          <li className="public">PUBLIC</li>
          <Link to="/">
            <Li
              className={currentTab === 0 ? 'focused' : ''}
              onClick={() => {
                selectMenuHandler(0);
              }}
            >
              <div className="nav-i">
                <ImEarth className="icons z-i" />
                Questions
              </div>
            </Li>
          </Link>
          <Link to="/tags">
            <Li
              className={currentTab === 1 ? 'focused' : ''}
              onClick={() => {
                selectMenuHandler(1);
              }}
            >
              <div>Tags</div>
            </Li>
          </Link>
          <Link to="/users">
            <Li
              className={currentTab === 2 ? 'focused' : ''}
              onClick={() => {
                selectMenuHandler(2);
              }}
            >
              <div>Users</div>
            </Li>
          </Link>
        </Ol>
        <Ol>
          <li className="public">
            COLLECTIVES
            <MdInfo className="info z-i" />
          </li>
          <Li>
            <div className="nav-i">
              <MdStars className="icons icon-orange z-i" />
              Explore Collectives
            </div>
          </Li>
        </Ol>
        <Ol>
          <li className="public">
            TEAMS
            <MdClose className="info info-team z-i" />
          </li>
          <li className="team-block">
            <div>
              <strong className="storng">Stack Overflow for Teams</strong>
              <span>
                - Start collaborating and sharing organizational knowledge.
              </span>
              <img className="free-img" src={Free} alt="free team" />
              <CreateTeam>Create a free Team</CreateTeam>
              <div className="why-team">Why Teams?</div>
            </div>
          </li>
        </Ol>
      </NavBlock>
    </>
  );
}
export default Nav;
