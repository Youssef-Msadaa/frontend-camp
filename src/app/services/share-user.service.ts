import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShareUserService {
  Backurl = 'http://127.0.0.1:3000/';
  testLog = false;
  constructor(private http: HttpClient) {}
  getAllUsers(url: string) {
    return this.http.get(this.Backurl + url);
  }
  getOneUser(url: string, id: string) {
    return this.http.get(this.Backurl + url + id);
  }
  createUser(url: string, data: Object) {
    console.log('data to send ', data);
    return this.http.post(this.Backurl + url, data);
  }
  checkUser(url: string, data: Object) {
    return this.http.post(this.Backurl + url, data);
  }
  deleteUser(url: string, id: string) {
    return this.http.delete(this.Backurl + url + id);
  }
  updateUser(url: string, id: string, data: Object) {
    return this.http.put(this.Backurl + url + id, data);
  }

  saveToken(token: any) {
    localStorage.setItem('token', token);
  }
}
