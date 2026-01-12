import { CommonModule } from '@angular/common';
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

  // route = inject(ActivatedRoute)
  name:string = ""
  updateCategory(){

  }

}
