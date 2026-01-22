import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';



@Component({
  selector: 'app-categories',
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './categories.html',
  styleUrl: './categories.css',
})
export class Categories {

  http = inject(HttpClient)
  route = inject(Router)

  name: string = ""
  allCategories:any = []
  showForm: boolean = false

  openForm() {
    this.showForm = true
  }
  closeForm() {
    this.showForm = false
  }

  ngOnInit() {
    this.showCategories()
    this.closeForm()
  }

  addCategory() {
    if (this.name != "") {
      const urldata = {
        "name": this.name
      }

      const apiurl = "http://localhost:8080/api/category"
      this.http.post<any>(apiurl, urldata).subscribe({
        next: (data) => {
          console.log(data)
          this.allCategories = data
          this.showCategories()
          this.closeForm()
        },
        error: (e) => {
          console.log("Api Call Error", e);
        }
      });


    } else {
      alert("Field Can not be blank");
    }
  }

  showCategories(){
    const apiurl = "http://localhost:8080/api/category"
    this.http.get(apiurl).subscribe({
      next : (data) => {
        console.log(data);
        this.allCategories = data
      },
      error : (e) => {
        console.log("Api Call Error", e)
      }

    })
  }

  delete(id:number){
    const apiurl = "http://localhost:8080/api/category/"+id
    this.http.delete(apiurl).subscribe({
      next : (data) => {
        console.log(data);
        this.showCategories()
      },
      error : (e) => {
        console.log("Api Call Error", e)
      }
    });

  }

  edit(id:number) {
    console.log(id)
    this.route.navigate(["/updatecategory", id]);
  }

}
