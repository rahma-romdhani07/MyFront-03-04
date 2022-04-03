import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../modele/user';
//import { DatePipe } from '@angular/common';

import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private getImage = 'http://localhost:8281/api/getImageExpert';
  private image = 'http://localhost:8281/api/updateImageExpert';
  private signup = 'http://localhost:8281/api/signupExpert';
  private loginExpert = 'http://localhost:8281/api/login';
  private get = 'http://localhost:8281/api/getExpert';
  private update = 'http://localhost:8281/api/updateExpert';
  private baseUrl =  'http://localhost:8281/api/updateEx' ; 
  islogin = false;
  admin = false;
  expert = false;
  choixmenu : string  = 'A';
  listData : User[];
  public dataForm:  FormGroup; 
  constructor(private http: HttpClient) { }
  getImageExpert(id : number): Observable<any> {
    return this.http.get(`${this.getImage}/${id}`);
  }
  updateExpertTotale(id: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}`,value);
  }
  updateImage(id: number, file : File): Observable<any> {
    return this.http.put(`${this.image}/${id}`,file);
  }
  login(username, password) {
     return this.http.post(`${this.loginExpert}`,{username, password});
   }  
  getData(id: number): Observable<Object> {
    return this.http.get(`${this.get}/${id}`);
  }
 /*getUser(nom: string): Observable<Object> {
  return this.http.get(`${this.baseUrl3}/${nom}`);
}*/
  createData(info: Object): Observable<Object> {
    return this.http.post(`${this.signup}`, info);
  }
  
  updatedata(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.update}/${id}`, value);
  }
 
  /*deleteData(id: number): Observable<any> {
   
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getAll(): Observable<any> {
   
    return this.http.get(`${this.baseUrl}`);
  }*/
 /* transformDate(date){
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }
  
  createData1(formData: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl11}`, formData);
  }
  */
  uploadFile(file: File): Observable<HttpEvent<{}>> {
		const formdata: FormData = new FormData();
		formdata.append('file', file);
		const req = new HttpRequest('POST', '<Server URL of the file upload>', formdata, {
			  reportProgress: true,
			  responseType: 'text'
		});
	
		return this.http.request(req);
   }
}