import { Component, OnInit ,EventEmitter ,Output } from '@angular/core';
import {EmitAMessageService} from '../emit-amessage.service'

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
constructor(private EmitAMessageService:EmitAMessageService){}
  message!:any;
  @Output() notify:EventEmitter<any> = new EventEmitter();
  ngOnInit(): void {
    this.EmitAMessageService.message.subscribe((a:any)=>{
      this.message = a
      this.notify.emit(this.message)
    })

  }
}
