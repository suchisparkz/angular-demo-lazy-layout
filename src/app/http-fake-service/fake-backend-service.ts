import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
    providedIn: 'root'
})
export class FakeBackendService implements InMemoryDbService {
    createDb() {
        const users = [
            { firstName: 'Joe', lastName: 'Rogers', id: 1 },
            { firstName: 'Mani', lastName: 'Ganesh', id: 2 },
            { firstName: 'Rocky', lastName: 'Singh', id: 3 },
            { firstName: 'Chandrasekar', lastName: 'Shanker', id: 4 },
            { firstName: 'Karen', lastName: 'Ng', id: 5 },
            { firstName: 'Mike', lastName: 'Dyson', id: 6 },
            { firstName: 'Kali', lastName: 'George', id: 7 },
            { firstName: 'Russel', lastName: 'King', id: 8 },
            { firstName: 'Tareng', lastName: 'Raj', id: 9 },
            { firstName: 'Shakti', lastName: 'Mani', id: 10 }
        ]
        return {
            users
        };
    }
}
