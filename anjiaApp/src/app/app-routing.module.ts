/**
 * Created by lzhan on 2017/9/3.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { OwnerComponent } from './owner/owner.component';
import { HousesComponent } from './houses/houses.component';
import { HousesDetailsComponent } from './houses/houses-details/houses-details.component';
import { RegisterComponent } from './register/register.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [


  {
    path: 'index',
    component: IndexComponent
  },

  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'houses',
    component: HousesComponent
  },
  {
    path: 'houses/:searchText',
    component: HousesComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'owner',
    component: OwnerComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'detail/:id',
    component: HousesDetailsComponent
  },
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
