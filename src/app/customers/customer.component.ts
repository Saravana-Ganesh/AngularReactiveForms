import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerForm:FormGroup
  constructor(private formBuilder:FormBuilder) { }

  ratingRange(min,max):ValidatorFn{
    return (abstarctControl:AbstractControl):{[key:string]:boolean}|null=>{
      if(abstarctControl?.value>=min && abstarctControl?.value<=max)
        return null;
      return {saravana:true};
    }

  }
 

  ngOnInit(): void {
    this.customerForm = this.formBuilder.group({
      firstName:['',[Validators.minLength(3), Validators.required]],
      lastName: [{value:'N/A',disabled:false},[Validators.required,Validators.maxLength(50)]],
      email:['test@google.com',[Validators.required,Validators.email]],
      phone:'',
      notification:'email',
      sendCatlog:true,
      rating:['',this.ratingRange(1,5)]
    });
   /*  this.customerForm = new FormGroup({
      firstName:new FormControl(),
      lastName: new FormControl(),
      email:new FormControl() ,
      sendCatlog:new FormControl(true)
    }); */
  }

  save(): void {
    console.log(this.customerForm);
    console.log('Saved: ' + JSON.stringify(this.customerForm.value));
  }

  populateTestData(){
    console.log(this.customerForm)
    this.customerForm.patchValue({
      firstName:'Saravana',
      lastName:'Ganesh',
      email:'saravana@google.com',
      sendCatlog:false
    })
  }
  setNotification(str:string){
    const phoneControl = this.customerForm.get('phone');
    if(str=='text'){
      phoneControl.setValidators([Validators.required])
    }else{
      phoneControl.clearValidators();
    }
    phoneControl.updateValueAndValidity();
  }
}
