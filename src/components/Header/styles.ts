import styled from 'styled-components';
import { FaGithub, FaSearch, FaBell, FaPlusSquare } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: var(--header);
  padding: 11px 16px;
`;

export const Bell = styled(FaBell)`
  fill: var(--logo);
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  cursor: pointer;
  opacity: 0.6;
`;

export const Add = styled(FaPlusSquare)`
  fill: var(--logo);
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  cursor: pointer;
  opacity: 0.6;
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  background: var(--header);
  padding: 11px 16px;
  width: 100%;
  justify-content: flex-end;
  span{
    color: var(--primary);
    opacity: 0.6;
  }
`;

export const ProfileOptions = styled.div`
  display: flex;
  align-items: center;
  background: var(--header);
  padding: 11px 16px;
  position: relative;
  img{
    max-width: 20px;
  }
  div{
    position: absolute;
    width: 150px;
    right: 0px;
    top: 40px;
    padding: 20px;
    background: var(--background-gray);
    text-align: center;
    z-index: 9;
    justify-content: flex-end;
    display: flex;
    ul{
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 100%;
      li{
        text-align: right;
        color: var(--gray);
        &:hover{
          font-weight: 700;
          color: var(--button);
          cursor: pointer;
        }
      }
    }
  }
  .triangle{
    width: 0;
    height: 0;
    top: 40px;
    position: absolute;
    border-style: solid;
    border-width: 0px 0px 0px 0px;
    border-color: transparent transparent var(--badge-color) transparent;
    right: 10px;
    transform: rotate(45deg);
    z-index: 0;
  }
  .divisor{
    border-bottom: 1px solid var(--gray);
  }
`;

export const ProfileRepo = styled.div`
  display: flex;
  align-items: center;
  background: var(--header);
  padding: 11px 16px;
  position: relative;
  div{
    position: absolute;
    width: 175px;
    right: -5px;
    top: 40px;
    padding: 20px;
    background: var(--background-gray);
    text-align: center;
    z-index:9;
    ul{
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 100%;
      li{
        text-align: right;
        color: var(--gray);
        &:hover{
          font-weight: 700;
          color: var(--button);
          cursor: pointer;
        }
      }
    }
  }
  .triangle{
    width: 0px;
    height: 0;
    top: 40px;
    position: absolute;
    border-style: solid;
    border-width: 0px 0px 0px 0px;
    border-color: transparent transparent var(--badge-color) transparent;
    right: 5px;
    transform: rotate(45deg);
    z-index: 0;
  }
`;

export const ProfileNotification = styled.div`
  display: flex;
  align-items: center;
  background: var(--header);
  padding: 11px 16px;
  position: relative;
  div{
    position: absolute;
    width: 250px;
    right: 0px;
    top: 40px;
    padding: 5px;
    background: var(--badge-color);
    text-align: center;
    z-index:9;
  }
  .triangle{
    width: 0;
    height: 0;
    top: 40px;
    position: absolute;
    border-style: solid;
    border-width: 0 0px 5px 25px;
    border-color: transparent transparent var(--badge-color) transparent;
    right: 0px;
    transform: rotate(45deg);
    z-index: 0;
  }
`;

export const GithubLogo = styled(FaGithub)`
  fill: var(--logo);
  width: 32px;
  height: 32px;
  flex-shrink: 0;

  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const SearchIcon = styled(FaSearch)`
  fill: var(--logo);
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  cursor: pointer;
  opacity: 0.6;
`;

export const TabList = styled.div`
  width: 40%;
  .content{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    gap: 10px;
  }
  span{
    color: var(--primary);
    opacity: 0.8;

  }
`;

export const SearchForm = styled.form`
  width: 28%;
  opacity: 0.8;
  border-bottom: 1px solid var(--primary);

  input {
    outline: 0;
    border-radius: 6px;
    padding: 7px 12px;
    width: 95%;
    transition: width 0.2s ease-out, color 0.2s ease-out;
    font-size: 18px;
    color: var(--primary);
    font-weight: 700;
  }

  button{
    color: var(--primary);
    cursor: pointer;
    width: 5px
  }
`;
