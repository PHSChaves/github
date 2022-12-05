import styled, { css } from 'styled-components';
import { RiBookMarkLine } from 'react-icons/ri';
import { FaPlusSquare } from 'react-icons/fa';


export const Container = styled.div`
  --horizontalPadding: 16px;
  --verticalPadding: 24px;

  padding: var(--verticalPadding) var(--horizontalPadding);
  overflow: hidden;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  max-width: 1280px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const iconCSS = css`
  width: 16px;
  height: 16px;
  fill: var(--icon);
  flex-shrink: 0;
`;

export const RepoIcon = styled(RiBookMarkLine)`
  ${iconCSS}
`;

const PlusiconCSS = css`
  width: 16px;
  height: 16px;
  fill: var(--button);
  flex-shrink: 0;
`;

export const PlusIcon = styled(FaPlusSquare)`
  ${PlusiconCSS}
`;

export const LeftSide = styled.div`
  padding: 0 var(--horizontalPadding);

  @media (min-width: 768px) {
    width: 25%;
  }
`;

export const RightSide = styled.div`
  padding: 0 var(--horizontalPadding);

  @media (min-width: 768px) {
    width: 75%;
  }
`;

export const Repos = styled.div`
  margin-top: var(--verticalPadding);

  > h2 {
    font-size: 16px;
    font-weight: normal;
  }
  > div {
    margin-top: 8px;

    display: flex;
    gap: 16px;
    flex-direction: column;

    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
      grid-auto-rows: minmax(min-content, max-content);
    }
  }
`;

export const RepoRow = styled.ul`
  border: 1px solid var(--background-gray);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: var(--primary);
  margin: 20px 0;
  padding: 20px;
  gap: 5px;

  > h2{
    font-size: 16px;
    text-transform: uppercase;
    font-weight: normal;
  }

  > li {
    display: flex;
    align-items: flex-start;
    width: 100%;
    flex-direction: row;

    > span {
      text-transform: uppercase;
      font-size: 14px;
      color: var(--gray);
    }

    >b{
      font-weight: 400;
      text-align: center;
      min-width: 40px;
      padding: 3px;
      border-radius: 20px;
      background-color: var(--background-gray)
    }

    > * {
      margin-right: 5px;
    }
  }

  .divisor{
    margin: 10px 0px;
    background: var(--background-gray);
    height: 1px;
    border-bottom: 1px solid var(--gray);
  }

  div{
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-top: 15px;
      button{
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: 14px;
        text-transform: uppercase;
        font-weight: 700;
        color: var(--button)
      }
    }
`;

export const SearchForm = styled.form`
  background-color: var(--background-gray);
  width: 100%;
  margin-bottom: 10px;

  input {
    background: var(--search);
    outline: 0;
    border-radius: 6px;
    padding: 7px 12px;
    width: 100%;

    &:focus {
      width: 318px;
    }

    transition: width 0.2s ease-out, color 0.2s ease-out;
  }
`;

export const Tab = styled.div`
  background: var(--primary);

  .content {
    display: flex;
    align-items: center;

    padding: 14px 16px;

    border-top: 2px solid var(--orange);

    .label {
      font-size: 14px;
      padding: 0 7px;
      font-weight: 600;
    }
    .number {
      font-size: 12px;
      background: var(--ticker);
      padding: 2px 6px;
      border-radius: 24px;
    }
  }

  .line {
    display: flex;
    width: 200vw;
    border-bottom: 1px solid var(--border);
    margin-left: -50vw;
  }

  &.mobile {
    margin-top: var(--verticalPadding);

    .content {
      margin: 0 auto;
    }

    @media (min-width: 768px) {
      display: none;
    }
  }
  &.desktop {
    display: none;

    @media (min-width: 768px) {
      display: unset;

      .wrapper {
        display: flex;
        margin: 0 auto;
        max-width: 1280px;
      }
    }
  }
`;
