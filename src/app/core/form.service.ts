import { Injectable } from '@angular/core';
import { FromStation, ToStation, NoOfTicket, TypeOfClass } from '../form-model';


//create  service for passing data to over form.component
@Injectable()
export class FormService {
  //create object array to store some data
  //define array
  public fromStation: FromStation[];
  public toStation:  ToStation[];
  public noOfTicket: NoOfTicket[];
  public typeOfTicket: TypeOfClass[];


  constructor() {
    this.fromStation = [
      { fromStation: "Valsad" },
      { fromStation: "Vapi" },
      { fromStation: "Surat" },
      { fromStation: "Bilimora" },
      { fromStation: "Navsari" }
    ];
    this.toStation = [
      { to: "Valsad" },
      { to: "Vapi" },
      { to: "Surat" },
      { to: "Bilimora" },
      { to: "Navsari" }];
    this.noOfTicket = [
      { noOfTickets: 1 },
      { noOfTickets: 2 },
      { noOfTickets: 3 },
      { noOfTickets: 4 },
      { noOfTickets: 5 },
      { noOfTickets: 6 },
      { noOfTickets: 7 }];
    this.typeOfTicket = [
      { typeOfTicket: "AC" },
      { typeOfTicket: "nonAC" },
      { typeOfTicket: "General" }];
  }
  getFormStation():FromStation[]{
    
    
    return this.fromStation;
  }
  getToStation():ToStation[]{
    return this.toStation;
  }
  getNoOfStation():NoOfTicket[]{
    return this.noOfTicket;
  }
  getTypeOfTicket():TypeOfClass[]{
    return this.typeOfTicket;
  }
  

}
