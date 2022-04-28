import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { subServices } from 'src/app/services/sub-services.service';

@Component({
  selector: 'app-sub-service-list',
  templateUrl: './sub-service-list.component.html',
  styleUrls: ['./sub-service-list.component.scss']
})
export class SubServiceListComponent implements OnInit {
  public countNumber:number=1
  public subServiceDetails:any;
  serviceId:any
  subServicesId:any;
  id:any;
  constructor(private subService:subServices,private route:ActivatedRoute) { }

  ngOnInit() {
     this.route.params.subscribe(
      params=>{
        this.id=params['id'];
      }
    )
    console.log(this.id)
    this.subServiceLists();
  }
  decrement(){
    this.countNumber--
  }
  increment(){
    this.countNumber++
  }
  subServiceLists(){
    this.subService.getAllSubServices().subscribe(res=>{
      this.subServiceDetails=res.data.SubServices
      // this.subServicesId = this.subServiceDetails.filter((sub: any)=>{
      //   return this.id === sub.services._id
      // })
      for( let i=0;i<=this.subServiceDetails.length;i++){
        if(this.id===this.subServiceDetails[i]._id){
          this.serviceId = this.subServiceDetails[i]._id
        }
      }
    })
  }
  
}
