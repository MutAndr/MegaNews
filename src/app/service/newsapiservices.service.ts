import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http: HttpClient) { }

  //newsapiurl
  newsApiUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=f58b4f2cb42741f5bf84e5b6e73de4a1';

  //technewsapiurl
  techApiUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=f58b4f2cb42741f5bf84e5b6e73de4a1';

  //businessnewsapiurl
  businessApiUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f58b4f2cb42741f5bf84e5b6e73de4a1';


  //topheading()
  topHeading(): Observable<any> {
    return this._http.get(this.newsApiUrl);
  }

  //technews()
  techNews(): Observable<any> {
    return this._http.get(this.techApiUrl);
  }

  //businessnews()
  businessNews(): Observable<any> {
    return this._http.get(this.businessApiUrl);
  }

}
