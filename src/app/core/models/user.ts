import { Role } from './role';
import { UserStatus } from './userStatus';
import { WithHoldingStatus } from './withHoldingStatus';

export class User {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  role: Role;
  phone:string;
  address:string;
  userStatus:UserStatus;
  withHoldingStatus:WithHoldingStatus;
}
