import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-updateproduct',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './updateproduct.html',
  styleUrl: './updateproduct.css',
})
export class Updateproduct {

  name:string = ""
  mrp:string = ""
  saleprice:string = ""
  description:string = ""

  updateProduct(){
    alert("done")
  }


}
