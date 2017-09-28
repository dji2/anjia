import { Component, OnInit } from '@angular/core';
import {PositionsService} from './../services/positions.service';
import {Router} from '@angular/router';

import { LocalStorageService } from './../services/local-storage.service';
import {HttpClient} from '@angular/common/http';
declare  var $:any;

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css'],
  providers:[PositionsService],
})
export class OwnerComponent implements OnInit {
  houseId:number = 1;
  imgIndex:number = 1;
  owner_res:string;
  formstatus:boolean = false;
  tab_index:number=0;
  shenfen:any;

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
        that.houseId = result.houseId;
        that.tab_index=1;
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
    let that=this;
    if (fileList.length > 0) {


      let file: File = fileList[0];
      that.sfzpreview(file);
      let formData: FormData = new FormData();
      formData.append('image_file', file, file.name);
      formData.append('api_key', 'dOd42wxHQ7RF-PhISyM-kRdeMZr1HsaR');
      formData.append('api_secret', 'T0dp9buMNetuUcjk14Y_rsy3ZA39tViU');
      let headers = new Headers({
        "Accept": "application/json"
      });
      // let options = new RequestOptions({ headers });
      that.http.post("https://api-cn.faceplusplus.com/cardpp/v1/ocridcard", formData)
        .subscribe(
          function (result) {
            that.shenfen=result;
          },
          function (error) {
            console.log(error.message);
          }
        )
    }
  }


  onFileChanged(fileList: FileList) {
    if(this.imgIndex<6){
      if (fileList.length > 0) {
        let that = this;
        let file: File = fileList[0];
        that.preview(file);
        let formData: FormData = new FormData();
        formData.append('file', file, file.name);
        formData.append('key', 'images/houses/'+that.houseId+'/'+that.imgIndex+'.jpg');
        formData.append('token', 'Ulg_mgLt7ByWKL4h2_fF1Gt80YShyr3a89lHaUnM:5T42rjQDg-qxCDncqf4XnTzt0K8=:eyJzY29wZSI6ImFuamlhIiwiZGVhZGxpbmUiOjE1MTQ2MDQ0NTk3ODh9');
        let headers = new Headers({
          "Accept": "application/json"
        });
        // let options = new RequestOptions({ headers });
        this.http.post("http://up.qiniu.com/", formData)
          .subscribe(
            function (result) {
              // console.log(result);
              that.imgIndex++;
              // console.log(that.shenfen)
            },
            function (error) {
              console.log(error.message);
            }
          )
      }
    }else{
      alert("系统限制，目前只允许您上传七张图片")
    }

  }

  // checkCard(e){
  //   var file=e[0];
  //   this.preview(file);
  // }
  //
  preview(file) {
    var img = new Image();
    img.src = URL.createObjectURL(file);
    var url = img.src;
    var $img = $(img).css({'width': '100%', 'heigth': '100%', 'object-fit': 'cover'});
    img.onload = function () {
      URL.revokeObjectURL(url);
      $img.addClass('fitcss');
      $('#preview').empty().append($img);
    }
  }
  sfzpreview(file) {
    var img = new Image();
    img.src = URL.createObjectURL(file);
    var url = img.src;
    var $img = $(img).css({'width': '100%', 'heigth': '100%', 'object-fit': 'cover'});
    img.onload = function () {
      URL.revokeObjectURL(url);
      $img.addClass('fitcss');
      $('#sfzpreview').empty().append($img);
    }
  }


  wancheng() {
    this.router.navigate(['/houses']);
  }
}

