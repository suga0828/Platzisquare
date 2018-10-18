import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule }  from "@angular/forms";

import { AgmCoreModule } from '@agm/core';

import { ResaltarDirective }     from "./directives/resaltar.directive";
import { ContarClicksDirective } from './directives/contar-clicks.directive';

import { DetalleComponent } from './detalle/detalle.component';
import { LugaresComponent } from './lugares/lugares.component';

import { Router }           from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ContactComponent } from './contact/contact.component';

import { LugaresService } from "./services/lugares.service";

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { CrearComponent } from './crear/crear.component';

import { HttpModule } from '@angular/http';

import { LinkifystrPipe } from './pipes/linkifystr.pipe'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

import { AutorizacionService } from './services/autorizacion.service'

import { MyGuardService } from './services/my-guard.service';

import { ReactiveFormsModule } from '@angular/forms'

export const firebaseConfig = {
  apiKey: "AIzaSyDIHYRliXimIXekAXhoskgIiTfW1OzUUeE",
  authDomain: "platzisquare-213523.firebaseapp.com",
  databaseURL: "https://platzisquare-213523.firebaseio.com",
  projectId: "platzisquare-213523",
  storageBucket: "platzisquare-213523.appspot.com",
  messagingSenderId: "588174358846"
};

@NgModule({
  declarations: [
    AppComponent,
      ResaltarDirective,
      ContarClicksDirective,
      DetalleComponent,
      LugaresComponent,
      ContactComponent,
      CrearComponent,
      LinkifystrPipe,
      LoginComponent,
      RegistroComponent
  ],
  imports: [
    BrowserModule,
    	FormsModule,
    AgmCoreModule.forRoot({
     		apiKey: 'AIzaSyDQpwt-EN2cEwM-V_ZvZnBtXI2EWl6PqOk'
    }),

    AppRoutingModule,

    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    
    HttpModule,

    BrowserAnimationsModule,

    ReactiveFormsModule
  ],
  providers: [
    LugaresService,
    AutorizacionService,
    MyGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
