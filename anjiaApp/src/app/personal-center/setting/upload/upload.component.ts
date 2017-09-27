import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from './../../../services/local-storage.service';
import {HttpClient} from '@angular/common/http';
declare  var $:any;
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  img_url:string='../../../../assets/images/h1.jpg';
  userId:any;
  constructor(
    private localStorage:LocalStorageService,
  private http:HttpClient

  ) { }

  ngOnInit() {
    this.userId = this.localStorage.get('userId');
    console.log("userid"+this.userId)
  }
  onFileChanged(fileList: FileList) {
    if (fileList.length > 0) {
      let file: File = fileList[0];
      this.preview(file);
      let formData: FormData = new FormData();
      formData.append('file', file, file.name);
      formData.append('key', 'images/user/'+this.userId+'.jpg');
      formData.append('token', 'Ulg_mgLt7ByWKL4h2_fF1Gt80YShyr3a89lHaUnM:5T42rjQDg-qxCDncqf4XnTzt0K8=:eyJzY29wZSI6ImFuamlhIiwiZGVhZGxpbmUiOjE1MTQ2MDQ0NTk3ODh9');
      let headers = new Headers({
        "Accept": "application/json"
      });
      // let options = new RequestOptions({ headers });
      this.http.post("http://up.qiniu.com/", formData)
        .subscribe(
          data => console.log('success' + data),
          error => console.log(error)
        )
    }
  }
  // checkCard(e){
  //   var file=e[0];
  //   this.preview(file);
  // }
  //
  preview(file){
    var img=new Image();
    img.src=URL.createObjectURL(file);
    var url=img.src;
    var $img=$(img);
    img.onload=function(){
      URL.revokeObjectURL(url);
      $img.addClass('fitcss');
      $('#preview').empty().append($img);
    }



 }
}
