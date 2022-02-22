import { useEffect, useState } from "react";

import useGitHubService from "../../services/GitHubService";

import UserItem from '../userItem/UserItem';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

const UsersList = () => {

  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(6);
  const {getUsers, process, setProcess} = useGitHubService();

  useEffect(() => {
    getUsers()
      .then(data => setUsers(data))
      .then(() => setProcess('confirmed'))
      .catch(e => {
        console.log(e)
      })
  }, [])

  const renderUsersList = (arr) => {
    return arr.map(({id, ...props}) => {
      return <UserItem key={id} {...props}/>
    })
  }

  const elements = renderUsersList(users).slice(page, (page + count));

  const handleChangePage = (e) => {
    e.preventDefault();

    switch (e.target.value) {
      case 'next':
        setPage(page + count)
        break;
      case 'prev':
        setPage(page - count);
        break;
      //no default
    }
  }

  if (process === 'confirmed') {
    return (
      <>
        <div className="users__list">
          {elements}
        </div>
        <div className="users__list__btn">
          <Stack spacing={2} direction="row">
            <Button 
              variant="outlined" 
              value='prev' 
              disabled={page ? false : true} 
              onClick={handleChangePage}
            >prev</Button>
            <Button 
              variant="outlined" 
              value='next' 
              disabled={page + count >= users.length ? true : false } 
              onClick={handleChangePage}
            >next</Button>
          </Stack>
        </div>
      </>
    )
  } else {
    return <CircularProgress/>
  }
}
export default UsersList;