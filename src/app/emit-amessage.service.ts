import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmitAMessageService {
  //property Observable ,observer
  message:any = new BehaviorSubject(`this is new data`)
  constructor(){
    setTimeout(() => {
      this.message.next('this is new data number Two')
    }, 3000);
  }
  
}
