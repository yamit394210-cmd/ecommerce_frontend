
import { Login } from './login/login';
import { Customers } from './customers/customers';
import { Categories } from './categories/categories';
import { Dashboard } from './dashboard/dashboard';
import { Orders } from './orders/orders';
import { Products } from './products/products';
import { Users } from './users/users';
import { Updatecategory } from './updatecategory/updatecategory';
import { Updateproduct } from './updateproduct/updateproduct';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:"", component:Login}, 
    {path:"customers", component:Customers}, 
    {path:"categories", component:Categories},
    {path:"dashboard", component:Dashboard},
    {path:"users", component:Users},
    {path:"orders", component:Orders},
    {path:"products", component:Products},
    {path:"updatecategory/:id", component:Updatecategory},
    {path:"updateproduct/:id", component:Updateproduct}
]
