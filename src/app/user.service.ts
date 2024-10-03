import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/api/users'; // 你的 Express API URL

  constructor(private http: HttpClient) { }

  // 獲取用戶列表
  getUsers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // 創建新用戶
  createUser(userData: { name: string; email: string }): Observable<any> {
    return this.http.post(this.apiUrl, userData);
  }
}