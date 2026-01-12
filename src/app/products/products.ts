import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {

  route = inject(Router)

  name:string = ""
  mrp:string = ""
  saleprice:string = ""
  description:string = ""

  showForm:boolean = false

  openForm(){
    this.showForm = true
  }
  closeForm(){
    this.showForm = false
  }

  addProduct(){
    alert("done")
    this.closeForm()
  }

  delete(){
    
  }

  edit(){
    this.route.navigate(["/updateproduct"])
  }

}
