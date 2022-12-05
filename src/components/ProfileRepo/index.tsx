import React, { useState, useEffect } from 'react';

import {
  SearchForm,
  RepoRow,
  RepoIcon,
  PlusIcon
} from './styles';

interface Props {
  data?: any;
}

const ProfileRepo: React.FC<Props> = ({
  data
}) => {
  const [filterRepo, setFilterRepo] = useState<any>(data);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const results = (data.filter((repos:any) => repos.name.toLowerCase().indexOf(search) !== -1))
    setFilterRepo(results);
  }, [search, data])

  function removefilter() {
    setSearch("");
    setFilterRepo(data)
  }

  return (
    <RepoRow>
      <h2>Repositories</h2>
      <li className="divisor"/>
      <SearchForm>
        <input
          placeholder="Find a repository"
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
        />
      </SearchForm>
      {filterRepo.map((item:any) => (
        <li key={item.name}>
          <RepoIcon />
          <span>{item.name}</span>
        </li>))}
      <div>
        { search.length > 0 && <button onClick={() => {removefilter()}}>show more</button> }
        <button><PlusIcon/>Add new</button>
      </div>
    </RepoRow>
  );
};

export default ProfileRepo;
