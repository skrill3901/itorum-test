import { Octokit } from "@octokit/core";
import { useState } from "react";

const useGitHubService = () => {
  const [process, setProcess] = useState('waiting');
  const octokit = new Octokit();

  const getUsers = async () => {
    setProcess('loading');
    const {data} = await octokit.request('GET /users');
    return data.map(_transformUsers);
  }

  const getUser = async (login) => {
    setProcess('loading');
    const {data} = await octokit.request(`GET /users/${login}`);
    return _transformUsers(data); 
  }

  const getRepos = async (login) => {
    setProcess('loading');
    const {data} = await octokit.request(`GET /users/${login}/repos`);
    return data; 
  }

  const _transformUsers = (user) => {
    return {
      id: user.id,
      login: user.login,
      name: user.name,
      avatar: user.avatar_url,
      type: user.type,
      company: user.company ? (user.company.length > 18 ? `${user.company.slice(18)}...` : user.company) : 'no information',
      location: user.location ? user.location : 'no information',
      link: user.blog ? user.blog : 'no information'
    }
  }

  return {
    getUsers,
    getUser,
    getRepos,
    process,
    setProcess
  }
}
export default useGitHubService;