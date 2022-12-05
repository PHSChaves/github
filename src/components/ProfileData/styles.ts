import styled, { css } from 'styled-components';
import {
  RiBuilding4Line,
  RiMapPin2Line,
  RiMailLine,
  RiLinksLine,
} from 'react-icons/ri';

export const Container = styled.div``;

export const Flex = styled.div`
  display: flex;
  align-items: center;

  > div {
    margin-left: 24px;

    > h1 {
      font-size: 18px;
      line-height: 1.25;
      color: var(--gray-soft-dark);
      font-weight: 600;
    }
    > h2 {
      font-size: 16px;
      color: var(--username);
      font-weight: 300;
    }
  }

  @media (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    > div {
      margin-left: 0;
      margin-top: 16px;
    }
  }
`;

export const Avatar = styled.img`
  width: 16%;

  @media (min-width: 768px) {
    width: 100%;
    margin-top: -34px;
  }
`;

export const Row = styled.ul`
  border: 1px solid var(--background-gray);
  display: flex;
  background: var(--primary);
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 0;
  padding: 20px;
  gap: 5px;

  > li {
    display: flex;
    align-items: center;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;

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
`;

const iconCSS = css`
  width: 16px;
  height: 16px;
  fill: var(--icon);
  flex-shrink: 0;
`;

export const Column = styled.ul`
  li {
    display: flex;
    align-items: center;
    font-size: 14px;
  }
  li + li {
    margin-top: 10px;
  }
  span {
    margin-left: 5px;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const CompanyIcon = styled(RiBuilding4Line)`
  ${iconCSS}
`;

export const LocationIcon = styled(RiMapPin2Line)`
  ${iconCSS}
`;

export const EmailIcon = styled(RiMailLine)`
  ${iconCSS}
`;

export const BlogIcon = styled(RiLinksLine)`
  ${iconCSS}
`;
