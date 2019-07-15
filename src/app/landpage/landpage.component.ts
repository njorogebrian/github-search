import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { GitserviceService } from '../gitservice.service';
import { HttpClient } from '@angular/common/http';
import {User} from '../user';
import {Repo} from '../repo';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-landpage',
  templateUrl: './landpage.component.html',
  styleUrls: ['./landpage.component.css']
})
export class LandpageComponent implements OnInit {

  
  

  data:any;
  repos:any;
  username:string;

  
  

  constructor(
    private gitserviceservice: GitserviceService,
    private http: HttpClient
  ) { 
    this.gitserviceservice.getUser('ChelseaOwiti').subscribe(data =>{
      this.data= data;
    });
    this.gitserviceservice.getRepo('ChelseaOwiti').subscribe(repo =>{
      this.repos= repo;
      console.log(this.repos);
    });
  }

  findProfile(){
    this.gitserviceservice.updateProfile(this.username);
    this.gitserviceservice.getUser("").subscribe(User =>{
      console.log(User);
      this.data = User;

    });
    this.gitserviceservice.getRepo("").subscribe(Repo =>{
      console.log(Repo);
      this.repos = Repo;

    });
  }
  


  ngOnInit() {
  }

}
