import { Component, OnInit } from '@angular/core';
import {PositionsService} from './../services/positions.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css'],
  providers:[PositionsService],
})
export class OwnerComponent implements OnInit {

  owner_res:string;
  formstatus:boolean = false;
  constructor(
    private userSer:PositionsService,
    private router:Router
  ) { }

  ngOnInit() {
  }
  toRelease(ownerForm){
    let that=this;
    that.userSer.addHouse(ownerForm.form.value,function (result) {
      // 弹出接收后台数据数值

      // alert(result.stateCode);
      if(result.stateCode==11){
        that.router.navigate(['/index']);
      }else {

        that.owner_res='提交失败，请稍后再试';
      }
    })
  }
  setCommit():void{
    this.formstatus = !this.formstatus;
    // console.log(this.formstatus)
  }
}

