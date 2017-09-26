import { Component, OnInit } from '@angular/core';
import {PositionsService} from './../services/positions.service';
import {Router} from '@angular/router';

import { LocalStorageService } from './../services/local-storage.service';
import {HttpClient} from '@angular/common/http';

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
    private router:Router,
  private localStorage:LocalStorageService,
  private http:HttpClient

) { }

  ngOnInit() {
  }
  toRelease(ownerForm){
    let owner  = ownerForm.form.value;
    let userId = this.localStorage.get('userId')

    owner.ownerId = userId;
    console.log(owner);
    let that=this;
    that.userSer.addHouse(owner,function (result) {
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

  checkCard(fileList: FileList) {
    if (fileList.length > 0) {
      let file: File = fileList[0];
      let formData: FormData = new FormData();
      formData.append('image_file', file, file.name);
      formData.append('api_key', 'dOd42wxHQ7RF-PhISyM-kRdeMZr1HsaR');
      formData.append('api_secret', 'T0dp9buMNetuUcjk14Y_rsy3ZA39tViU');
      let headers = new Headers({
        "Accept": "application/json"
      });
      // let options = new RequestOptions({ headers });
      this.http.post("https://api-cn.faceplusplus.com/cardpp/v1/ocridcard", formData)
        .subscribe(
          function (result) {
            console.log(result);
          },
          function (error) {
            console.log(error.message);
          }
        )
    }
  }

}

