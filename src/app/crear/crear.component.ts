import { Component, OnInit } from '@angular/core';

import { LugaresService }	 from '../services/lugares.service';

import { ActivatedRoute } from "@angular/router";

import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { FormControl } from '@angular/forms';
import { Http } from '@angular/http'

import swal from 'sweetalert2';

@Component({
	selector: 'app-crear',
	templateUrl: './crear.component.html',
	styleUrls: ['./crear.component.css']
})

export class CrearComponent implements OnInit {

	id = null
	lugar:any = {};
	results$:Observable<any>
	private searchField: FormControl

	constructor(private route: ActivatedRoute, private lugaresService: LugaresService, private http: Http) {
		this.id = this.route.snapshot.params['id']
		if (this.id != 'new') {
			this.lugaresService.getLugar(this.id)
				.valueChanges().subscribe( lugar => {
				this.lugar = lugar
			})
		}
		const URL = 'https://maps.google.com/maps/api/geocode/json';
		this.searchField = new FormControl()
		this.results$ = this.searchField.valueChanges
			.switchMap( query => this.http.get(`${URL}?address=${query}`))
			.map( response => response.json() )
			.map( response => response.results)
	}

	guardarLugar() {
		let direccion = this.lugar.calle +','+ this.lugar.ciudad +','+ this.lugar.pais;
		this.lugaresService
			.obtenerGeoData(direccion)
				.subscribe( result => {
					debugger;
					this.lugar.lat = 0
					this.lugar.lng = 0

					if (this.id != 'new') {
						this.lugaresService.guardarLugar(this.lugar)
						// alert('¡Negocio editado con exito!')
						swal({
							type: 'success',
							title: '¡Negocio editado con exito!',
						})
					} else {
						this.lugar.id = Date.now()
						this.lugaresService.guardarLugar(this.lugar)
						// alert('¡Negocio guardado con exito!')
						swal({
							type: 'success',
							title: '¡Negocio guardado con exito!',
						})
					}
					this.lugar = {}
				})
	}

	ngOnInit() {
	}

}
