import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
    providedIn: 'root'
})
export class FakeBackendService implements InMemoryDbService {
    createDb() {
        const users = [
            { firstName: 'Joe', lastName: 'Rogers', id: 1 },
            { firstName: 'Mani', lastName: 'Ganesh', id: 2 }
        ]
        return {
            users
        };
    }
}
