import { Role } from 'src/app/core/models/role';
import { User } from 'src/app/core/models/user';
import { UserStatus } from 'src/app/core/models/userStatus';
import { WithHoldingStatus } from 'src/app/core/models/withHoldingStatus';

export const USERSLIST: User[] = [

  {
    id: 1,
    firstname: 'mohamed',
    lastname: "cheni",
    email: 'mohamed@gmail.com',
    role: Role.ADMIN,
    address: 'ksibet',
    phone: '0123467',
    userStatus: UserStatus.REMOTE,
    withHoldingStatus: WithHoldingStatus.NONE,
  },

  {
    id: 2,
    firstname: 'ayoub',
    lastname: "cheni",
    email: 'ayoub@gmail.com',
    role: Role.POLE_MANAGER,
    address: 'ksibet',
    phone: '0123467',
    userStatus: UserStatus.PRESENTIAL,
    withHoldingStatus: WithHoldingStatus.SICK_DAYS,
  },

  {
    id: 3,
    firstname: 'rayen',
    lastname: "cheni",
    email: 'rayen@gmail.com',
    role: Role.DEVELOPER,
    address: 'ksibet',
    phone: '0123467',
    userStatus: UserStatus.PRESENTIAL,
    withHoldingStatus: WithHoldingStatus.SUSPENSION,
  },

  {
    id: 4,
    firstname: 'hamdi',
    lastname: "cheni",
    email: 'hamdimalek@gmail.com',
    role: Role.PROJECT_MANAGER,
    address: 'ksibet',
    phone: '0123467',
    userStatus: UserStatus.REMOTE,
    withHoldingStatus: WithHoldingStatus.IN_VACATION,
  },

];
