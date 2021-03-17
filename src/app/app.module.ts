import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogsComponent } from './components/logs/logs.component';
import { environment } from 'src/environments/environment';
import { NabvarComponent } from './components/nabvar/nabvar.component';


@NgModule({
  declarations: [
    AppComponent,
    LogsComponent,
    NabvarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
