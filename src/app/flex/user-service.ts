import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserService {
    private url = 'api/users';
    httpOptions = { 
        header: new HttpHeaders({'content-type': 'applications/json'})
    };
    constructor(private readonly http: HttpClient) {
    }
    getUsers(): Observable<any> {
        return this.http.get(this.url)
            .pipe(
                tap(() => console.log('Fetching users.')),
                catchError(error => console.log)
            )
    }
}
