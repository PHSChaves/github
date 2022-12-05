export interface APIUser {
  login: string;
  name: string;
  followers: number;
  following: number;
  public_repos: number;
  avatar_url: string;
  blog?: string;
  company?: string;
  email?: string;
  location?: string;
}

export interface APIRepo {
  name: string;
  owner: {
    login: string;
  };
  stargazers_count: number;
  forks: number;
  html_url: string;
  language?: string;
  description?: string;
}

export interface APIActivities {
  length: number,
  actor: {
    id: number,
    login: string,
    display_login: string,
    gravatar_id: string,
    url: string,
    avatar_url: string
  };
  repo: {
    id: number,
    name: string,
    url: string
  },
  payload: {
    action: string
  },
  public: boolean,
  created_at: string
}

export interface APITop {
  items: {
    login: string,
    id: number,
    node_id: string,
    avatar_url: string,
    gravatar_id: string,
    url: string,
    html_url: string,
    followers_url: string,
    subscriptions_url: string,
    organizations_url: string,
    repos_url: string,
    received_events_url: string,
    type: string,
    score: number,
    following_url:string,
    gists_url: string,
    starred_url: string,
    events_url: string,
    site_admin: boolean
  }
}

