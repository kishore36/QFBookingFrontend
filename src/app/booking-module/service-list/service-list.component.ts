import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllServices } from 'src/app/services/All-services.service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss']
})
export class ServiceListComponent implements OnInit {

  lists:any;
  constructor( private allServices:AllServices, private router:Router) { }
  id:any="select";
  ngOnInit(){
    this.serviceList()
    
  }
  serviceList(){
    this.allServices.getAllServices().subscribe(res=>{
      this.lists=res.data.service
      console.log(this.lists)
    })
  }

  tabsChange(ids: any){ 
    this.id=ids
  }

}
