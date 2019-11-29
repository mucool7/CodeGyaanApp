import { Component } from "@angular/core";
import { DashboardBL } from './Dashboard.BL';
import { DashboardModel } from 'src/app/Models/Dashboard.Model';

@Component({
 
     selector:'cg-dashboard'   ,
     templateUrl:'Dashboard.Page.html'

})

export class DashboardPage{
     constructor(public BL:DashboardBL){

     this.Dashboard = new DashboardModel();

       this.BL.getDashboardData().then(e=>this.Dashboard = e);
     }
     Dashboard:DashboardModel;

 ngOnInit(): void {
      
     
 }

}