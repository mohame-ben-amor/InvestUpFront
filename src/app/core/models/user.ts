import { Role } from './role';
import { UserStatus } from './userStatus';
import { WithHoldingStatus } from './withHoldingStatus';

export class User {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  role: Role;
  telNum:string;
  adress:string;
  userStatus:UserStatus;
  presential : number;
  remote : number ;
  withHoldingType:WithHoldingStatus;
}
