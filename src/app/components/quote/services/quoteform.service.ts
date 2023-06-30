import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http"


@Injectable({
  providedIn: 'root'
})


export class QuoteService {
  
  baseUrl = 'http://localhost:5000';
  constructor(private http: HttpClient){}
  sendToEmail(url:string, body: any){
    return this.http.post(`${this.baseUrl}/${url}`, body)
  }
  test(url:string){
    return this.http.get(`${this.baseUrl}/${url}`)
  }
}