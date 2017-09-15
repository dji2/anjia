import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
// export class SettingComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//     console.log('setting-oninit-------------');
//   }
//


  export class SettingComponent {
  // title = 'la';
  tabs= [ '上传头像' , '修改昵称', '修改密码'];
  tab_index= 0 ;
  arr_li = ['first tab', ' second tab ', ' third tab'];
  // flag = true;
  // num = 100 ;

  // toggleshow() {
  //   this.flag = !this.flag;
  // }
  pageCount= 10;
  arr_page_count= [];
  a= 10;
  constructor() {
    for ( let i = 0 ; i <=  this .pageCount; i++) {
      this.arr_page_count.push( i );
    }
  }
}

//  upload(ev){
// alert(ev.target.innerHTML)
// }
//   nickname(ev){
//     alert(ev.target.innerHTML)
//   }
//   password(ev){
//     alert(ev.target.innerHTML)
// }

// }
