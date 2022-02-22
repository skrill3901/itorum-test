
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';

const UserItem = ({login, avatar, type}) => {

  return (
    <div className="users__list-item">
      <Avatar alt={login} src={avatar} sx={{ width: 130, height: 130 }}/>
      <div className="users__list-info">
        <span>{login}</span>
        <span>Тип: {type}</span>
          <Link href={`/users/${login}`} underline="hover">
            {'Profile'}
          </Link>
      </div>
    </div>
  )
}
export default UserItem;