import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home.page';
import { OpenJobsResolveService } from './services/resolve/resolve.service';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    resolve: {
      activeOpenJobs: OpenJobsResolveService
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomePageComponent]
})
export class HomePageModule {}
