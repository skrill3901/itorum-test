import Avatar from '@mui/material/Avatar';
import {Apartment, LocationOn, Link as LinkIcon} from '@mui/icons-material';
import Link from '@mui/material/Link';


const UserInfo =({avatar, login, name, company, location, link}) => {

  return (
   <div className='user-info'>
      <div className='user-info__wrapper'>
        <Avatar alt={login} src={avatar} sx={{ width: 250, height: 250 }}/>
        <span className='user-info__name'>{name}</span>
        <span className='user-info__login'>{login}</span>
        <div className='user-info__descr'>
          <Apartment/>
          <span>{company}</span>
          <LocationOn/>
          <span>{location}</span>
          <LinkIcon/>
          <Link href={link} underline="hover" sx={{ color: 'text.primary' }}>
            {link}
          </Link>
        </div>
      </div>
    </div>
  )
}
export default UserInfo;