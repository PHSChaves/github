import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { 
  Container, 
  GithubLogo, 
  SearchForm, 
  TabList, 
  SearchIcon, 
  Bell,
  Add,
  ProfileContainer, 
  ProfileOptions, 
  ProfileRepo, 
  ProfileNotification } from './styles';

import { ThemeName } from '../../styles/themes';

interface Props {
  themeName: ThemeName;
  setThemeName: (newName: ThemeName) => void;
}

const Header: React.FC<Props> = ({ themeName, setThemeName }) => {
  const { username = 'PHSChaves' } = useParams();
  const [search, setSearch] = useState('');
  const [data, setData] = useState<any>();
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profileInfo, setProfileInfo] = useState(false);
  const [add, setAdd] = useState(false);

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/users/${username}`),
    ]).then(async (responses) => {
      const [userResponse] = responses;
  
      if (userResponse.status === 404) {
        setData({ error: 'User not found!' });
        return;
      }
  
      const user = await userResponse.json();
  
      setData({
        user
      });
    });
  }, [username]);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    navigate('/' + search.toLowerCase().trim());
  }

  function toggleTheme() {
    setThemeName(themeName === 'light' ? 'dark' : 'light');
  }

  console.log(data?.user)

  const HeaderContentLeft = () => (
    <TabList>
      <div className="content">
        <span>Pull Requests</span>
        <span>|</span>
        <span>Issues</span>
        <span>|</span>
        <span>Marketplace</span>
        <span>|</span>
        <span>Explore</span>
        <span>|</span>
        <SearchIcon onClick={() => {setShowSearch(true)}}/>
      </div>
    </TabList>
  );

  const HeaderContentRight = () => (
    <ProfileContainer>
      <ProfileNotification onMouseOver={() => setNotification(true)} onMouseLeave={() => setNotification(false)}>
        <Bell/>
        {
          notification && 
          <>
            <div onMouseLeave={() => setNotification(false)}>
              <span>You have no unread notifications</span>
            </div>
            <div className="triangle"/>
          </>
        }
      </ProfileNotification>
      <span>|</span>
      <ProfileRepo onMouseOver={() => setAdd(true)} onMouseLeave={() => setAdd(false)}>
        <Add />
        {
          add && 
          <>
            <div onMouseLeave={() => setAdd(false)}>
              <ul>
                <li>New repository</li>
                <li>Import repository</li>
                <li>New gist</li>
                <li>New organization</li>
              </ul>
            </div>
            <div className="triangle"/>
          </>
        }
      </ProfileRepo>
      <span>|</span>
      <ProfileOptions onMouseOver={() => setProfileInfo(true)} onMouseLeave={() => setProfileInfo(false)} >
        <img alt={data?.user.login} src={data?.user.avatar_url}/>
        {
          profileInfo && 
          <>
            <div onMouseLeave={() => setProfileInfo(false)}>
              <ul>
                <li>Your Profile</li>
                <li>Your Stars</li>
                <li>Your gists</li>
                <li className="divisor"/>
                <li>Help</li>
                <li>Settings</li>
                <li>Sign out</li>
              </ul>
            </div>
            <div className="triangle"/>
          </>
        }
      </ProfileOptions>
    </ProfileContainer>
  );

  return (
    <Container>
      <GithubLogo onClick={toggleTheme} />
      <HeaderContentLeft/>
      {showSearch && 
        <SearchForm onSubmit={handleSubmit}>
          <input
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.currentTarget.value)}
          />
          <button onClick={() => {setShowSearch(false)}}>X</button>
        </SearchForm>
      }
      <HeaderContentRight/>
    </Container>
  );
};

export default Header;
