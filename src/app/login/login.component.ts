import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  Username = 'Bret';
 // mdp:string;
  logged = false;
  loading = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {

/*    this.http.get('https://jsonplaceholder.typicode.com/users')
    .subscribe(value =>{
      console.log('get',value);
      this.http.get('https://jsonplaceholder.typicode.com/users')
      .subscribe(value1 =>{
        console.log('delete',value1);
        this.http.get('https://jsonplaceholder.typicode.com/users')
        .subscribe(value2 =>{
          console.log('get2',value2);
        });
      });
    }, error1 =>{
      console.log('error1', error1)
  });*/
  }
  connexion(){
   /* this.loading = true;

    setTimeout(()=>{
      if(this.login === 'admin' && this.mdp === 'admin'){
        this.logged = true;
      }else {
  
      }
      this.loading = false;
    }, 2000);
    
    console.log("connexion...");
    console.log('login', this.login);
    console.log('mdp', this.mdp);*/
    this.loading = true;
    this.http.get('https://jsonplaceholder.typicode.com/users?username=' + this.Username)
      .subscribe((value: any[]) => {
        //console.log('get',value.length);
        //Traitement OK
        //console.log(value[0].company.name)
        if(value.length === 1){
          this.logged = true;
        }
      }, (error1: HttpErrorResponse) =>{
        //Traitement KO
        console.error('error1', error1)
        this.loading=false;
      }, () =>{
        //Finalisation OK
        this.loading = false;
      });
  }
}
