import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';

import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AutorizacionService {

	autenticado:any = {}

	constructor(private angularFireAuth: AngularFireAuth, private router:Router) {
		this.isLogged()
	}

	public facebookLogin() {
		this.angularFireAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
			.then( response => {
				swal({
				type: 'success',
				title: response.operationType,
				})
				console.log(response)
				this.router.navigate(['lugares'])
			})
			.catch( error => {
				swal({
				type: 'error',
				title: error.message,
				})
			console.log(error.message)
			})
	}

	public login = (email, password) => {
		this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
		.then( response => {
			swal({
				type: 'success',
				title: response.operationType,
			})
			console.log(response)
			this.router.navigate(['lugares'])
		})
		.catch( error => {
			swal({
				type: 'error',
				title: error.message,
			})
			console.log(error.message)
		})
	}

	public registro = (email, password) => {
		this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
		.then( response => {
			swal({
				type: 'success',
				title: response.operationType,
			})
			console.log(response)
			this.router.navigate(['lugares'])
		})
		.catch( error => {
			swal({
				type: 'error',
				title: error.message,
			})
			console.log(error)
		})
	}

	public isLogged() {
		return this.angularFireAuth.authState
	}

	public logOut() {
		this.angularFireAuth.auth.signOut()
		swal({
				type: 'success',
				title: 'logOut',
			})
			this.router.navigate(['lugares'])
	}

	public getUser() {
		this.autenticado =this.angularFireAuth.auth
		console.log(this.autenticado)
		return this.autenticado
	}
}