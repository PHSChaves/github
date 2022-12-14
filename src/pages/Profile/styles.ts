import styled from 'styled-components';

export const Container = styled.div`
  --horizontalPadding: 16px;
  --verticalPadding: 24px;

  overflow: hidden;
  background: #fafafa
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

  button {
    width: 100%;
    background-color: var(--button);
    padding: 10px;
    color: var(--primary);
    text-transform: uppercase;
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 0.8px;
  }

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

export const TabList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 25px
`;


export const Tab = styled.div`
  background: var(--primary);

  .active{
      border-top: 2px solid var(--button);
      
  }

  .ActiveLabel{
    color: var(--button);
    text-transform: uppercase;
    font-size: 14px;
    padding: 0 7px;
    font-weight: 600;
  }

  .forbidden{
    cursor: not-allowed;
    display: flex;
    align-items: center;
    padding: 14px 16px;
  }

  .label {
    color: var(--primary);
    font-size: 14px;
    padding: 0 7px;
    font-weight: 600;
    text-transform: uppercase;
  }

  .content {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 14px 16px;

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
        background: var(--header)
      }

      .offset {
        width: 25%;
        margin-right: var(--horizontalPadding);
      }
    }
  }
`;
