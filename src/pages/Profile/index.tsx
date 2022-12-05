import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Repos,
  Tab,
  TabList
} from './styles';

import ProfileData from '../../components/ProfileData';
import ProfileRepo from '../../components/ProfileRepo';
import RepoCard from '../../components/RepoCard';
import ActCard from '../../components/ActCard';

import { APIUser, APIRepo, APITop, APIActivities } from '../../@types';

interface Data {
  user?: APIUser;
  orgs?: string;
  repos?: APIRepo[];
  top?: APITop[];
  act?: APIActivities[];
  error?: string;
}

const Profile: React.FC = () => {
  const { username = 'PHSChaves' } = useParams();
  const [data, setData] = useState<Data>();
  const [activities, setActivities] = useState(false);
  const [repository, setRepository] = useState(true);
  const cards = 10;
  const [showMore, setShowMore] = useState(cards);

  const handleMoreCards = () => {
    setShowMore(showMore + cards);
  };


  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/users/${username}`),
      fetch(`https://api.github.com/users/${username}/orgs`),
      fetch(`https://api.github.com/users/${username}/repos`),
      fetch(`https://api.github.com/events`),
    ]).then(async (responses) => {
      const [userResponse, orgsResponse, reposResponse, activitiesResponse] = responses;

      if (userResponse.status === 404) {
        setData({ error: 'User not found!' });
        return;
      }

      const user = await userResponse.json();
      const orgs = await orgsResponse.json();
      const repos = await reposResponse.json();
      const act = await activitiesResponse.json();
      const shuffledRepos = repos.sort(() => 0.5 - Math.random());
      const slicedRepos = shuffledRepos.slice(0, 10); // 6 repos

      setData({
        user,
        act,
        repos: slicedRepos,
        orgs
      });
    });
  }, [username]);

  if (data?.error) {
    return <h1>{data.error}</h1>;
  }

  if (!data?.user || !data?.repos) {
    return <h1>Loading...</h1>;
  }

  const TabContent = () => (
    <TabList>
      <div onClick={() => {setActivities(true); setRepository(false); setShowMore(10)}} className={`content ${activities === true ? 'active' : ''}`}>
        <span className={`${activities === true ? 'ActiveLabel' : 'label'}`}>Activites</span>
      </div>
      <div onClick={() => {setActivities(false); setRepository(true); setShowMore(10)}} className={`content ${repository === true ? 'active' : ''}`}>
        <span className={`${repository === true ? 'ActiveLabel' : 'label'}`}>Repositories</span>
      </div>
      <div className="forbidden">
        <span className="label">Top Users</span>
      </div>
    </TabList>
  );

  console.log(data.act?.map((item) => item.repo));
  console.log(data.act?.map((item) => item.payload));

  return (
    <Container>
      <Tab className="desktop">
        <div className="wrapper">
          <TabContent />
        </div>
        <span className="line" />
      </Tab>

      <Main>
        <LeftSide>
          <ProfileData
            username={data.user.login}
            name={data.user.name}
            avatarUrl={data.user.avatar_url}
            repositories={data.user.public_repos}
            followers={data.user.followers}
            following={data.user.following}
            company={data.user.company}
            location={data.user.location}
            email={data.user.email}
            blog={data.user.blog}
          />
          <ProfileRepo
            data={data.repos}
          />
        </LeftSide>

        <RightSide>
          <Tab className="mobile">
            <TabContent />
            <span className="line" />
          </Tab>

          <Repos>
            {
              activities && <div>
                {data.act?.slice(0, showMore)?.map((item) => {
                  return (
                    <ActCard
                      key={item.actor.id}
                      username={item.actor.display_login}
                      avatar={item.actor.avatar_url}
                      action={item.payload.action}
                    />
                  );
                })}
                {showMore < data.act!.length && (
                  <button
                    onClick={handleMoreCards}
                  >
                    Load more
                  </button>
                )}
              </div>
            }
            {
              repository && <div>
                {data.repos.slice(0, showMore)?.map((item) => {
                  return (
                    <RepoCard
                      key={item.name}
                      username={item.owner.login}
                      reponame={item.name}
                      description={item.description}
                      language={item.language}
                      stars={item.stargazers_count}
                      forks={item.forks}
                    />
                  );
                })}
                {showMore < data.act!.length && (
                  <button
                    onClick={handleMoreCards}
                  >
                    Load more
                  </button>
                )}
              </div>
            }
          </Repos>
        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
