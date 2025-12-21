import { Routes } from '@angular/router';
import { MainPageComponent } from './Pages/main-page/main-page.component';
import { CarsCardsComponent } from './Components/cars-cards/cars-cards.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { AdminAddNewCarPageComponent } from './Pages/admin-pages/admin-add-new-car-page/admin-add-new-car-page.component';
import { AdminManageExistingCarsPageComponent } from './Pages/admin-pages/admin-manage-existing-cars-page/admin-manage-existing-cars-page.component';
import { AdminPageComponent } from './Pages/admin-pages/admin-page/admin-page.component';
import { AdminSingleCarEditPageComponent } from './Pages/admin-pages/admin-single-car-edit-page/admin-single-car-edit-page.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { SingleCarPageComponent } from './Pages/single-car-page/single-car-page.component';
import { SuccessfullPurchasePageComponent } from './Pages/successfull-purchase-page/successfull-purchase-page.component';
import { NotAuthorizedPageComponent } from './Pages/not-authorized-page/not-authorized-page.component';

export const routes: Routes = [
    {
           path: '',
    component: MainPageComponent,
  },
  {
    path: 'Home',
    component: MainPageComponent,
  },
  {
    path: 'Login',
    component: LoginPageComponent,
  },
  {
    path: 'NotAuthorized',
    component: NotAuthorizedPageComponent,
  },
  {
    path: 'Admin',
    component: AdminPageComponent, canActivate:[AuthenticationGuard],
  },
  {
    path: 'Admin/Manage',
    component: AdminManageExistingCarsPageComponent,canActivate:[AuthenticationGuard],
  },
  {
    path: 'Admin/Add',
    component: AdminAddNewCarPageComponent,canActivate:[AuthenticationGuard],
  },
  {
    path: 'Admin/Edit/:id',
    component: AdminSingleCarEditPageComponent,canActivate:[AuthenticationGuard],
  },
  {
    path: 'Cars',
    component: CarsCardsComponent ,
  },
  {
    path: 'Cars/:filter',
    component: CarsCardsComponent,
  },
  {
    path: 'Cars/:id/Success',
    component: SuccessfullPurchasePageComponent,
  },
  {
    path: 'Cars/id/:id',
    component: SingleCarPageComponent,
  },
    
];
