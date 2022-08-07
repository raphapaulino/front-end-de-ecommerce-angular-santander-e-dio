import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Book } from './model/books.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService
{
  // private url = "https://localhost:44382/api/bookstore";
  private url = "http://localhost:3000/api";

  httpOptions = {
    Headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http:HttpClient) {}

  getBook() {
    return this.http.get(this.url);
  }
}
