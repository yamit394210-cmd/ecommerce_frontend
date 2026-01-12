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

  // http = inject(HttpClient)
  route = inject(Router)

  name:string = ""
  showForm:boolean = false

  openForm(){
    this.showForm= true
  }
  closeForm(){
    this.showForm=false
  }

  ngOnInit(){
   this.closeForm()
  }
  
  addCategory(){
    if(this.name != ""){
      alert("Done");
      this.closeForm()
    }
  }

  edit(){
    this.route.navigate(["/updatecategory"])
  }

}
