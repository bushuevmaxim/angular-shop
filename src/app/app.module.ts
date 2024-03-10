import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MenuComponent } from './components/menu/menu.component';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProductComponent } from './components/product/product.component';
import { MatCardModule } from '@angular/material/card';
import { ProductsComponent } from './components/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import { FirestoreModule, provideFirestore } from '@angular/fire/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { getFirestore } from 'firebase/firestore/lite';
import { provideStorage, getStorage } from '@angular/fire/storage';
const firebaseConfig = {
  apiKey: "AIzaSyDAofOVXIiT1_vSgAZMEkrXeqzuSM1QvDQ",
  authDomain: "angular-shop-f137d.firebaseapp.com",
  projectId: "angular-shop-f137d",
  storageBucket: "angular-shop-f137d.appspot.com",
  messagingSenderId: "487128323606",
  appId: "1:487128323606:web:0e338df7e9a6223eb0c737"
};




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    ProductComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    HttpClientModule,
    MatMenuModule,
    FirestoreModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


