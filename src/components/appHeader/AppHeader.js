import { NavLink } from 'react-router-dom';

import Button from '@mui/material/Button';

const AppHeader = () => {
    return (
        <header className="app__header">
            <h1 className="app__title">
            GitHub Users
            </h1>
            <NavLink 
              end 
              style={({isActive}) => ({display: isActive ? 'none' : 'block'})}
              to="/">
                <Button variant="outlined">back</Button>
              </NavLink>
        </header>
    )
}

export default AppHeader;