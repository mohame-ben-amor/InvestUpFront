export class AuthService {
  loggedIn = false;

  isAuthenticated() {
    return true;
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
}
