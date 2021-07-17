import { Role } from 'src/app/core/models/role';
import { RouteInfo } from './users.metadata';

export const USERSLIST: RouteInfo[] = [

  {
    id: 1,
    name: 'mohamed',
    email: 'mohamed@gmail.com',
    role: Role.ADMIN,
    address: 'ksibet',
    phone: '0123467',
    picture: 'assets/images/user/user8.jpg',
  },

  {
    id: 2,
    name: 'ayoub',
    email: 'ayoub@gmail.com',
    role: Role.POLE_MANAGER,
    address: 'ksibet',
    phone: '0123467',
    picture: 'assets/images/user/user8.jpg',
  },

  {
    id: 3,
    name: 'rayen cherni',
    email: 'rayen@gmail.com',
    role: Role.DEVELOPER,
    address: 'ksibet',
    phone: '0123467',
    picture: 'assets/images/user/user8.jpg',
  },

  {
    id: 4,
    name: 'hamdi malek',
    email: 'hamdimalek@gmail.com',
    role: Role.PROJECT_MANAGER,
    address: 'ksibet',
    phone: '0123467',
    picture: 'assets/images/user/user8.jpg',
  },

];
