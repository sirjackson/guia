import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVERURL } from '../config';



@Injectable()
export class ApirestService {

  constructor(private http:HttpClient) { }

  get_cons_empresas (){
    return new Promise ((resolve,reject)=>{
      this.http.get(`${SERVERURL}/api/empresas/get`).subscribe(
        (res)=>{
          resolve(res); // res = devuelve la informacion
        },(err)=>{
          reject(err);
        }
      )
    })
  }

  get_cons_empresa (id){
    return new Promise ((resolve,reject)=>{
      this.http.get(`${SERVERURL}/api/empresas/get/${id}`).subscribe(
        (res)=>{
          resolve(res); // res = devuelve la informacion
        },(err)=>{
          reject(err);
        }
      )
    })
  }
}
