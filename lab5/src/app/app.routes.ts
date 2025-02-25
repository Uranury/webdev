import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
    {
        path: '',
        component: CategoriesComponent
    },

    {
        path: 'categories/:category_id',
        component: ProductsComponent
    },

    {
        path: 'details/:product_id',
        component: DetailsComponent
    }
];
