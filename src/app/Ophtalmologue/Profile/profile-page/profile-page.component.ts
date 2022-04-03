import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  user: any;
  id : number ; 
  imagePath :string=null;
user1 :any={};
retrieveResponse: any={};
base64Data: any;
  constructor(public route: Router, private ar: ActivatedRoute, public service: UserServiceService) { }

  ngOnInit() {
    this.service.getData(parseInt(localStorage.getItem('id'))).subscribe(data=>{
      this.user1=data
      this.service.getImageExpert(parseInt(localStorage.getItem('id'))).subscribe(
        res => {
          this.retrieveResponse = res;
          this.base64Data = this.retrieveResponse.image;
          this.imagePath = 'data:image/jpeg;base64,' + this.base64Data;} );
   
    console.log(this.imagePath)
}) ;
if(this.imagePath ==null){
  this.imagePath="./assets/imagesD/faces/user1.png"
}
else{
  this.imagePath=this.imagePath ; 
}
  
 /*let reference : number  =parseInt(localStorage.getItem('id')) ;
 console.log(reference) ;*/
 this.ar.paramMap.subscribe((x)=>{
  this.id =+ x.get('id');
 this.service.getData(this.id).subscribe(data => {
  this.user = data;
  console.log(this.user)

});
  });
}

}
