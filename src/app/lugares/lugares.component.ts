import { Component, OnInit } from '@angular/core'

import { LugaresService } from '../services/lugares.service'

import { trigger, state, style, transition, animate } from '@angular/animations'

// ES6 Modules or TypeScript
import swal from 'sweetalert2'

@Component({
	selector: 'app-lugares',
	templateUrl: './lugares.component.html',
	styleUrls: ['./lugares.component.css'],
	animations: [
		trigger('contenedorAnimable', [
				state('inicial', style({
					opacity: 0
				})),
				state('final', style({
					opacity: 1
				})),
				transition('inicial => final', animate(2000)),
				transition('final => inicial', animate(1000)),
			])
]
})

export class LugaresComponent implements OnInit {

	lugares = null

	constructor(private lugaresService: LugaresService) {
		lugaresService.getLugares()
			.valueChanges().subscribe( lugares => {
				this.lugares = lugares
				this.lugares = Object.keys(this.lugares).map( key => this.lugares[key])
				this.state = 'final'
			}, error => {
				console.log(error)
				swal({
					type: 'error',
					title: 'Something went wrong!',
					text: error.statusText,
				})
			})
	}

	ngOnInit() {
	}

	title = 'platziSquare'

	state = 'inicial'

	animar(){
		this.state = this.state === 'final' ? 'inicial' : 'final'
	}

	animacionInicia(e) {
		console.log('Iniciado')
		console.log(e)
	}

	animacionTermina(e) {
		console.log('Terminado')
		console.log(e)
	}

	lat:number = 4.6560663
	lng:number = -74.0595918
}
