import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateFormModal } from './Modals/CreateModal/CreateForm.Modal';
import { DashboardPage } from './Pages/Dashboard/Dashboard.Page';
import { HomePage } from './Pages/home/home.page';
import { FormsModule } from '@angular/forms';
import { BaseHttpService } from './Base/Http/BaseHttp.Service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SettingPage } from './Pages/Setting/Setting.Page';

@NgModule({
  declarations: [AppComponent,CreateFormModal,DashboardPage,HomePage,SettingPage],
  entryComponents: [CreateFormModal],
  imports: [BrowserModule, IonicModule.forRoot(),HttpClientModule, AppRoutingModule,FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClient,
    BaseHttpService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
