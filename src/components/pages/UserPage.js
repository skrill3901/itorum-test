import { Link as LinkRouter, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import UserInfo from '../userInfo/UserInfo';
import useGitHubService from '../../services/GitHubService';
import ReposList from '../reposList/ReposList';

import CircularProgress from '@mui/material/CircularProgress';

import './userPage.scss';

const UserPage = (props) => {

  const {login} = useParams(); 
  const [user, setUser] = useState({});
  const [repoList, setRepoList] = useState([]);
  const {getUser, getRepos, process, setProcess} = useGitHubService();

  useEffect(() => {
    onRequest(login);
  }, [])

  const onRequest = (log) => {
    getUser(log)
      .then(data => setUser(data))
      .then(() => setProcess('confirmed'))
      .catch(() => setProcess('error'));
    getRepos(log)
      .then(data => setRepoList(data))
      .catch(e => console.log(e))
  }

  if (process === 'confirmed') {
    return (
      <div className='user-page'>
        <UserInfo {...user}/>
        <ReposList list={repoList}/>
      </div>
    )
  } else {
    return <CircularProgress/>
  }
}
export default UserPage;