import { Component, OnInit } from '@angular/core';
import { IrctcModel, FromStation, ToStation, NoOfTicket, TypeOfClass } from '../form-model';
import { FormService } from '../core/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  public fromStation: FromStation[];
  public toStation:  ToStation[];
  public noOfTicket: NoOfTicket[];
  public typeOfTicket: TypeOfClass[];
  public irctcFormData;
  data1 :IrctcModel;
  
  submitted = false;
  
  constructor(private serviceResponce: FormService) {
    
    this.irctcFormData=this.serviceResponce.getFormStation();
    
  }
  
  ngOnInit() {
    this.fromStation = this.serviceResponce.getFormStation();
    this.toStation = this.serviceResponce.getToStation();
    this.noOfTicket = this.serviceResponce.getNoOfStation();
    this.typeOfTicket = this.serviceResponce.getTypeOfTicket();
    this.data1={
      fromStation:null,
      to:null,
      noOfTickets:null,
      typeOfTicket:null,
      date:null,
      trainNo:null
    };
    
  }
  onSubmit() { this.submitted = true; }

}
