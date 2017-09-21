import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from './../../../services/local-storage.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  userId:any;
  constructor(
    private localStorage:LocalStorageService

  ) { }

  ngOnInit() {
    this.userId = this.localStorage.get('userId');
    console.log(this.userId)
  }

}
