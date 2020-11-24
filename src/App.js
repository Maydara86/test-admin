import * as React from "react";
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './users';
import { PostList, PostCreate, PostEdit } from './posts';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from './Dashboard';
import authProvider from './authProvider';


const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
  <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name="posts" icon={PostIcon} list={PostList} create={PostCreate} edit={PostEdit} />
    <Resource name="users" icon={UserIcon} list={UserList} />
  </Admin>
  );

export default App;