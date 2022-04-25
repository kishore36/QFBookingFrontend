import { Component, OnInit } from '@angular/core';
import { AllServices } from 'src/app/services/All-services';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss']
})
export class ServiceListComponent implements OnInit {


  constructor( private allServices:AllServices) { }
  id:any="select";
  ngOnInit(){
    this.serviceList()
    
  }
  serviceList(){
    this.allServices.getAllServices().subscribe(res=>{
      console.log(res)
    })
  }

  tabsChange(ids: any){ 
    this.id=ids
  }

}
