import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BorrowerService {
  private apiUrl = 'http://localhost:5187/api/Borrowers'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  getBorrowers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}

