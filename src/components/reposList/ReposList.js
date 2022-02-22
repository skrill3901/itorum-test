import Link from '@mui/material/Link';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';

const ReposList = ({list}) => {

  const renderList = (arr) => {
    return arr.map((item, i) => {
      const create = item.created_at.slice(0, 10);
      const update = item.updated_at.slice(0, 10);
      return (
        <ListItem key={item.id} 
          component="li" 
          disablePadding 
          sx={{ borderBottom: 1, borderColor: 'grey.500' }}
        >
          <ListItemText primary={
            <div className='repo-list__item'>
              <span>{item.name}</span>
              <span>Last updated: {update}</span>
              <span>Created: {create}</span>
            </div>
          } sx={{ color: 'grey.900' }}/>
          <Link href={item.html_url} underline="hover">
            Link
          </Link>
        </ListItem>
      )
    })
  }

  const elements = renderList(list);
  return (
      <div className='repo-list'>
      <h2>Repositories:</h2>
        <List
          sx={{ width: '100%', bgcolor: 'background.paper',}}
          aria-labelledby="nested-list-subheader"
        >
          {elements}
        </List>
      </div>
  )
}
export default ReposList;