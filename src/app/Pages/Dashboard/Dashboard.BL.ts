import { Injectable } from "@angular/core";
import { BaseHttpService } from 'src/app/Base/Http/BaseHttp.Service';
import { DashboardModel } from 'src/app/Models/Dashboard.Model';

@Injectable({providedIn:"root"})
export class DashboardBL{
    constructor(private http:BaseHttpService){

    }

    Dashboard:DashboardModel = new DashboardModel();


    

    getDashboardData():Promise<DashboardModel>{
        return new Promise((resolve,reject)=>{
            this.http.Post("getDashboard",null).then(resp=>{
                this.Dashboard = resp;
                    resolve(this.Dashboard)
            }).catch(err=>reject(err))

        })
        
    }
    
}