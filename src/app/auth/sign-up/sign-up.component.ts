import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  contact:any;
  contactForm: any;
  isDisabled=true;
  constructor(private _auth:AuthService) { }

  ngOnInit() {
    this.contactForm=new FormGroup({
        mobile : new FormControl(''),
        isChecked : new FormControl(true)
    })
  }
  onSubmit(){
    console.log(this.contactForm.value)
    this._auth.registerData(this.contactForm.value).subscribe(res=>{
      console.log(res)
    })
  }
}
