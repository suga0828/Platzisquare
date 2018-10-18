import { Injectable } 		   from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'
import { Http, Headers }	   from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})

export class LugaresService {

	API_ENDPOINT = 'https://platzisquare-213523.firebaseio.com'

	lugares:any = [
			{
				id: 1,
				plan: 'pagado',
				cercania: 1,
				distancia: 1,
				activo: true,
				nombre: 'Florería La Gardenia'
			},
			{
				id: 2,
				plan: 'gratuito',
				cercania: 1,
				distancia: 1.8,
				activo: true,
				nombre: 'Donas La Pasadita'
			},
			{
				id: 3,
				plan: 'gratuito',
				cercania: 2,
				distancia: 10,
				activo: false,
				nombre: 'Sushi Sushiroll'
			},
			{
				id: 4,
				plan: 'pagado',
				cercania: 3,
				distancia: 35,
				activo: true,
				nombre: 'Hotel La Gracia'
			},
			{
				id: 5,
				plan: 'gratuito',
				cercania: 3,
				distancia: 120,
				activo: false,
				nombre: 'Zapatería El Clavo'
			}
		]

	constructor(private afDB: AngularFireDatabase, private http: Http){}

	public getLugares() {
		// Usando Socket
		return this.afDB.list('lugares/')		
	}

	public buscarLugar(id) {
  		return this.lugares.find( (lugar) => { return lugar.id == id } ) || null
  	}

  	public guardarLugar(lugar) {
		
		// Usando Socket
		this.afDB.database.ref('lugares/'+lugar.id).set(lugar)
	}

	public editarLugar(lugar) {
		this.afDB.database.ref('lugares/'+lugar.id).set(lugar)
	}

	public obtenerGeoData(direccion) {
						   // http://maps.google.com/maps/api/geocode/json?address=78-43+diagonal+70f,+Bogota,Colombia
		return this.http.get('http://maps.google.com/maps/api/geocode/json?address='+direccion);
	}

	public getLugar(id) {
		return this.afDB.object('lugares/'+id)
	}
}
