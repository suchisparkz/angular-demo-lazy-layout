import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from '../shared/User';

@Injectable({ providedIn: 'root' })
export class UserService {
    private url = 'api/users';
    httpOptions = { headers: new HttpHeaders({'content-type': 'application/json'}) };
    constructor(private readonly http: HttpClient) {
    }
    getUsers(): Observable<any> {
        return this.http.get(this.url)
            .pipe(
                tap(() => console.log('Fetching users.')),
                catchError(error => console.log)
            );
    }
    addUser(user: User): Observable<any> {
        return this.http.post(this.url, user, this.httpOptions)
            .pipe(
                tap(() => console.log('Adding user ...')),
                catchError(error => console.log)
            );
    }
}
