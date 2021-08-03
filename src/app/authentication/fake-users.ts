import { User } from "../core/models/user";
// JSON encoded date
var date1 = "\"2014-01-01T23:28:56.782Z\"";
var date2 = "\"2021-07-11 19:43:08\"";

var dateStr1 = JSON.parse(date1);
var dateStr2 = JSON.parse(date2);


export const USERS: User[] = [
    {
        id: 1,
        name: 'Admin Name',
        email: 'admin@gmail.com',
        password: 'mypass',
        role: 'Admin',
        sexe: 'male',
        birthday: dateStr1,
        created_at: dateStr2,
        updated_at: dateStr2,
        adresse: 'ksibet',
        profile: 'profile1',
        picture: 'picture1'
    },
    {
        id: 2,
        name: 'Investor Name',
        email: 'investor@gmail.com',
        password: 'mypass',
        role: 'Investor',
        sexe: 'male',
        birthday: dateStr1,
        created_at: dateStr2,
        updated_at: dateStr2,
        adresse: 'ksibet',
        profile: 'profile1',
        picture: 'picture1'
    },
    {
        id: 3,
        name: 'Entrepreneur Name',
        email: 'entrepreneur@gmail.com',
        password: 'mypass',
        role: 'Entrepreneur',
        sexe: 'male',
        birthday: dateStr1,
        created_at: dateStr2,
        updated_at: dateStr2,
        adresse: 'ksibet',
        profile: 'profile1',
        picture: 'picture1'
    }

]
