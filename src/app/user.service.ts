import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserService {
  private URL = 'https://randomuser.me/api/?inc=gender,name,picture,location&results=8&nat=gb';
  constructor(private http: HttpClient) {
  }

  getUsers() {
    return this.http.get(this.URL);
  }
}
