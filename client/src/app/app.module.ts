import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { RebirthHttpModule } from 'rebirth-http';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'system',
        pathMatch: 'full'
      },
      {
        path: 'system',
        loadChildren: './system/system.module#SystemModule'
      },
      {
        path: 'cicd-variables',
        loadChildren:
          './cicd-variables/cicd-variables.module#CicdVariablesModule'
      },
      {
        path: 'system-develop',
        loadChildren:
          './system-develop/system-develop.module#SystemDevelopModule'
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

const COMPONENTS = [
  AppComponent,
  LayoutComponent,
  LoginComponent,
  RegisterComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: PreloadAllModules
    }),
    NgZorroAntdModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RebirthHttpModule,
    ReactiveFormsModule
  ],
  providers: [AppService],
  entryComponents: [RegisterComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
