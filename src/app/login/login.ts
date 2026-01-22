import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  router  = inject(Router)

  http = inject(HttpClient)

  username:string=""
  password:string=""

  onlogin(){
    if(this.username!="" && this.password!=""){

      const urldata = {
        "username":this.username,
        "password":this.password
      }

      const apiurl = "http://localhost:8080/api/admin"
      this.http.post<any>(apiurl, urldata).subscribe({
        next : (data) => {
          console.log(data);
          if(data.status==="Success"){
            this.router.navigate(["/dashboard"])
          }else{
            console.log("Api Call Failed")
          }

        },
        error : (e) => {
          console.log("Api Call Error", e);
        }
      });

    } else {
      alert("Field Can not be blank");
    }
  }
}
