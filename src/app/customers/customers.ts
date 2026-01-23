import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-customers',
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './customers.html',
  styleUrl: './customers.css',
})
export class Customers {

  http = inject(HttpClient)

  name:string = ""
  email:string = ""
  mobile:string = ""
  password:string = ""
  address:string = ""
  pincode:string = ""
  showForm:boolean = false
  allCustomers:any = []

  ngOnInit(){
    this.showCustomers()
  }

  openForm(){
    this.showForm = true
  }

  closeForm(){
    this.showForm = false
  }

  addCustomer(){
    if(this.name!= "" && this.email!= ""&& this.mobile!= "" && this.password!= "" && this.pincode!= "" && this.address!= ""){

      const urldata = {
        "name":this.name,
        "email":this.email,
        "mobile":this.mobile,
        "password": this.password,
        "address": this.address,
        "pincode": this.pincode
      }

      const apiurl = "http://localhost:8080/api/customers"
      this.http.post<any>(apiurl, urldata).subscribe({
        next : (data) => {
          console.log(data)
          this.allCustomers = data
          this.showCustomers()
          this.closeForm
        },
        error : (e) => {
          console.log("API Call Error" ,e)
        }
      });

    } else {
      alert("Field Cannot be blank")
    }
  }

  showCustomers(){
    const apiurl = "http://localhost:8080/api/customers"
    this.http.get(apiurl).subscribe({
      next : (data) => {
        console.log(data)
        this.allCustomers = data
      }, 
      error : (e) => {
        console.log("API Call Error")
      }
    });

    
  }





}
