import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-updatecategory',
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './updatecategory.html',
  styleUrl: './updatecategory.css',
})
export class Updatecategory {

  route = inject(ActivatedRoute)
  routes = inject(Router)
  http = inject(HttpClient)
  name:string = ""
  id:any=""

  ngOnInit(){
    this.id=this.route.snapshot.paramMap.get("id");
  }
    

  updateCategory(){
    
    if(this.id!= "" && this.name!= ""){
      const urldata={
        "id":this.id,
        "name":this.name
      }

      const apiurl = "http://localhost:8080/api/category"
      this.http.put<any>(apiurl, urldata).subscribe({
        next : (data) => {
          console.log(data);
          this.routes.navigate(["/categories"]);
        },
        error : (e) => {
          console.log("APi Call Error", e);
        }
      })

    } else {
      alert("Field Can Not Be Blank")
    }
  }

}
