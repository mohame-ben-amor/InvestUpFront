import { Role } from './role';
import { UserStatus } from './userStatus';
import { withHoldingStatus } from './withHoldingStatus';

export class User {
  id: number;
  firstname: string;
  lastname: string;
  password: string;
  email: string;
  role: Role;
  phone:string;
  userStatus:UserStatus;
  withHoldingStatus:withHoldingStatus;
  token?: string;
}
