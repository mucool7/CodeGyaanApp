import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn:"root"})
export class BaseHttpService{

    // BaseApi = "http://localhost:9000/"
    BaseApi = "http://52.66.240.183/"
    constructor(private Http:HttpClient){}

    public Post(url:string,data:any):Promise<any>{
        
        url = this.BaseApi+url;
       
        return new Promise((resolve,reject)=>{

            this.Http.get(url).subscribe(resp=>{

                resolve(resp);

            },error=>{
                reject(error)
            })
            
        })
    }

}