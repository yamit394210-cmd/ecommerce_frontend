import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
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
  http = inject(HttpClient)

  name:string = ""
  mrp:string = ""
  saleprice:string = ""
  description:string = ""
  category:string = ""
  allProducts:any = []
  image1 !: File
  image2 !: File

  showForm:boolean = false

  openForm(){
    this.showForm = true
  }
  closeForm(){
    this.showForm = false
  }

  onfile1(event:any){
    const file = event.target.files[0] 
    this.image1 = file
    console.log(this.image1)
  }

  onfile2(event:any){
    const file = event.target.files[0]
    this.image2 = file
    console.log(this.image2)
  }

  ngOnInit(){
    this.showProducts()
    this.closeForm()
  }

  addProduct(){
    if(this.name != "" && this.mrp!= "" && this.saleprice != "" && this.description!= "" && this.category != "" && this.image1!= null && this.image2!= null){

      const formdata  = new FormData();
      formdata.append("name",this.name)
      formdata.append("mrp", this.mrp)
      formdata.append("saleprice", this.saleprice)
      formdata.append("description",this.description)
      formdata.append("category", this.category)
      formdata.append("image1", this.image1)
      formdata.append("image2", this.image2)

      const apiurl = "http://localhost:8080/api/products"
      this.http.post<any>(apiurl, formdata).subscribe({
        next : (data) => {
          console.log(data)
          this.showProducts()
        },
        error : (e) => {
          console.log("API Call Error", e)
        }
      })


    } else {
      alert("Field can not be blank")
    }
    this.closeForm()
  }

  showProducts(){
    const apiurl = "http://localhost:8080/api/products"
    this.http.get(apiurl).subscribe({
      next : (data) => {
        console.log(data)
        this.allProducts = data
      },
      error : (e) => {
        console.log("API Call Error", e)
      }
    })
  }

  delete(id:number){

    const apiurl = "http://localhost:8080/api/products/"+id
    this.http.delete(apiurl, {responseType: 'json'}).subscribe({
      next : (data) => {
        console.log(data);
        this.showProducts()
      },
      error : (e) => {
        console.log("API Call Error", e)
      }
    })
    
  }

  edit(id:number){
    this.route.navigate(["/updateproduct", id])
  }

}
