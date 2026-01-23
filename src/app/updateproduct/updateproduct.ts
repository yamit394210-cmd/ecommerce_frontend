import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-updateproduct',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './updateproduct.html',
  styleUrl: './updateproduct.css',
})
export class Updateproduct {

  route = inject(ActivatedRoute)
  routes = inject(Router)
  http = inject(HttpClient)
  id:any = ""

  name:string = ""
  mrp:string = ""
  saleprice:string = ""
  description:string = ""
  category:string = ""
  image1!: File
  image2!: File

  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get("id")
  }

  onfile1(file1:any){
    const file = file1.target.files[0]
    this.image1 = file
    console.log(this.image1)
  }

   onfile2(file2:any){
    const file = file2.target.files[0]
    this.image2 = file
    console.log(this.image2)
  }

  updateProduct(){
    if(this.id!= "" && this.name!= "" && this.mrp!= "" && this.saleprice!= "" && this.description!= "" && this.category!= ""){

      const formdata = new FormData();
      formdata.append("id", this.id)
      formdata.append("name", this.name)
      formdata.append("mrp", this.mrp)
      formdata.append("saleprice", this.saleprice)
      formdata.append("description", this.description)
      formdata.append("category", this.category)
      formdata.append("image1", this.image1)
      formdata.append("image2", this.image2)

      const apiurl = "http://localhost:8080/api/products"
      this.http.put(apiurl, formdata).subscribe({
        next : (data) => {
          console.log(data)
          this.routes.navigate(["/products"])
        },
        error : (e) => {
          console.log("API Call Error", e)
        }
      })

    } else {
      alert("Field Can Not Be Blank")
    }
  }


}
