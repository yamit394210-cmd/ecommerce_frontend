import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Customers } from './customers/customers';
import { Categories } from './categories/categories';
import { Dashboard } from './dashboard/dashboard';
import { Orders } from './orders/orders';
import { Products } from './products/products';
import { Users } from './users/users';

export const routes: Routes = [
    {path:"", component:Login}, 
    {path:"customers", component:Customers}, 
    {path:"categories", component:Categories},
    {path:"dashboard", component:Dashboard},
    {path:"users", component:Users},
    {path:"orders", component:Orders},
    {path:"products", component:Products}
]
