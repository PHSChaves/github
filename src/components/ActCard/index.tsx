import React from 'react';

import {
  Main,
  ActInfo,
  Container,
  Topside,
  RepoIcon,
  Botside,
  StarIcon,
  ForkIcon,
} from './styles';

interface Props {
  username: string;
  avatar: string;
  action: string;
  description?: string;
  language?: string;
  stars?: number;
  forks?: number;
}

const RepoCard: React.FC<Props> = ({
  username,
  avatar,
  action,
  description,
  language,
  stars,
  forks,
}) => {
  const languageClass = language ? language.toLowerCase() : 'other';

  return (
    <Main>
      <ActInfo>
        <img alt={username} src={avatar}/>
        <p>{username}</p>
        <span>{action}</span>
      </ActInfo>
      <Container>
        <Topside>
          <header>
            <RepoIcon />
          </header>

          <p>teste{description}</p>
        </Topside>

        <Botside>
          <ul>
            <li>
              <div className={`language ${languageClass}`} />
              <span>teste</span>
            </li>
            <li>
              <StarIcon />
              <span>teste</span>
            </li>
            <li>
              <ForkIcon />
              <span>teste</span>
            </li>
          </ul>
        </Botside>
      </Container>
    </Main>
  );
};

export default RepoCard;
