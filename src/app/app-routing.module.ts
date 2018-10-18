import { NgModule } 			from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }      from './app.component';

import { DetalleComponent } from './detalle/detalle.component';
import { LugaresComponent } from './lugares/lugares.component';
import { ContactComponent } from './contact/contact.component';
import { CrearComponent }	from './crear/crear.component';
import { LoginComponent }	from './login/login.component';
import { RegistroComponent }from './registro/registro.component';

import { MyGuardService } from './services/my-guard.service'

const appRoutes: Routes = [
	{ path: '',  			component: LugaresComponent },
	{ path: 'lugares', 		component: LugaresComponent },
	{ path: 'detalle/:id', 	component: DetalleComponent },
	{ path: 'contact', 		component: ContactComponent },
	{ path: 'crear/:id',	component: CrearComponent, canActivate:[MyGuardService] },
	{ path: 'edit/:id', 	component: CrearComponent },
	{ path: 'login', 		component: LoginComponent },
	{ path: 'registro',		component: RegistroComponent},	
];

@NgModule({
	imports: [ RouterModule.forRoot(appRoutes) ],
  	exports: [ RouterModule ]
})

export class AppRoutingModule { }
