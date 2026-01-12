import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-orders',
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './orders.html',
  styleUrl: './orders.css',
})
export class Orders {

}
