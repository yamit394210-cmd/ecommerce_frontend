import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-customers',
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './customers.html',
  styleUrl: './customers.css',
})
export class Customers {

}
