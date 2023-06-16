import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingComponent } from './views/landing/landing.component';
import { FooterComponent } from './subComponent/footer/footer.component';
import { NavComponent } from './subComponent/nav/nav.component';
import { StoreModule } from '@ngrx/store';
import { globalHomeReducer } from './redux/states/home/home.reducer';
import { globaldetailWReducer } from './redux/states/detailWine/detailWine.reducer';
import { globalDetailWCReducer } from './redux/states/detailWineCellars/detailWC.reducer';
import { globalAdminReducer } from './redux/states/admin/admin.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HomeComponent } from './views/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    FooterComponent,
    NavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      home: globalHomeReducer,
      detailWine: globaldetailWReducer,
      detailWineCellar: globalDetailWCReducer,
      /* vista restringida, solo admin */
      admin: globalAdminReducer
    }, {

    }),
    StoreDevtoolsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
