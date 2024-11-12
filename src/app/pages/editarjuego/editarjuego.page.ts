import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertasSilenciosasService } from 'src/app/services/alertasilenciosa.service';
import { CamaraService } from 'src/app/services/camara.service';
import { ManejodbService } from 'src/app/services/manejodb.service';

@Component({
  selector: 'app-editarjuego',
  templateUrl: './editarjuego.page.html',
  styleUrls: ['./editarjuego.page.scss'],
})
export class EditarjuegoPage implements OnInit {

  juegoLlego: any;  // Los datos del juego que llegan
  estatus: string = '';  // El estatus actual del juego (Disponible/No disponible)
  estados = [
    { value: '1', viewValue: 'Disponible' },
    { value: '0', viewValue: 'No disponible' }
  ];

  // Variables de control para los mensajes de error
  errorCampos: boolean = false;
  errorPrecio: boolean = false;
  errorStock: boolean = false;
  errorImagen: boolean = false;

  constructor(
    private router: Router,
    private bd: ManejodbService,
    private activedroute: ActivatedRoute,
    private camaraService: CamaraService,
    private silentAlert: AlertasSilenciosasService
  ) {
    this.activedroute.queryParams.subscribe(res => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.juegoLlego = { ...this.router.getCurrentNavigation()?.extras?.state?.['juegoSelect'] };

        // Asegurarse de que el estatus se asigna correctamente
        if (this.juegoLlego.estatus != null) {
          this.estatus = this.juegoLlego.estatus.toString();  // Convertir a string para que coincida con los valores del select
          console.log('Estatus recibido y asignado:', this.estatus);  // Log para verificar el valor inicial
        } else {
          this.estatus = '1';  // Valor predeterminado si el estatus no está definido
        }
      }
    });
  }

  ngOnInit() {}

  // Método para guardar los cambios del juego
  async guardarCambios() {
    this.resetErrores();

    // Validación de campos
    if (!this.juegoLlego.nombre_prod || this.juegoLlego.precio_prod === null || 
        !this.juegoLlego.descripcion_prod || this.juegoLlego.stock_prod === null || 
        !this.juegoLlego.foto_prod || !this.estatus) {
      this.errorCampos = true;
      return;
    }

    if (this.juegoLlego.precio_prod < 0) {
      this.errorPrecio = true;
      return;
    }

    if (this.juegoLlego.stock_prod < 0) {
      this.errorStock = true;
      return;
    }

    if(this.juegoLlego.stock_prod === 0) {
      this.Stock0NoDisponible();
    }

    try {
      // Verificar el valor de estatus antes de guardarlo
      console.log('Estatus seleccionado antes de modificar:', this.estatus);  // Log para verificar el valor antes de actualizar

      await this.bd.modificarJuego(
        this.juegoLlego.id_producto, 
        this.juegoLlego.nombre_prod, 
        this.juegoLlego.precio_prod, 
        this.juegoLlego.stock_prod, 
        this.juegoLlego.descripcion_prod, 
        this.juegoLlego.foto_prod, 
        this.estatus  // Utilizar la variable "estatus" para modificar el estado
      ); 

      this.router.navigate(['/crudjuegos']);
    } catch (error) {
      console.error('Error al guardar cambios:', error);  // Manejo del error
    }
  }

  // Resetear los errores
  private resetErrores() {
    this.errorCampos = false;
    this.errorPrecio = false;
    this.errorStock = false;
    this.errorImagen = false;
  }

  // Método para tomar una foto
  async tomarFoto() {
    try {
      const fotoUrl = await this.camaraService.takePicture();
      if (fotoUrl) {
        this.juegoLlego.foto_prod = fotoUrl;  // Asigna la URL de la imagen
        this.errorImagen = false;  // Limpia el error si se toma la foto
      } else {
        this.errorImagen = true;  // Manejo si no se devuelve una imagen
      }
    } catch (error) {
      console.error('Error al tomar la foto:', error);
      this.errorImagen = true;  // Mostrar mensaje de error si algo falla
    }
  }

  // Método para validar que los valores de precio y stock sean enteros
  validarNumeroEntero(campo: string) {
    if (campo === 'precio') {
      this.juegoLlego.precio_prod = Math.floor(this.juegoLlego.precio_prod || 0);  // Redondea hacia abajo si es decimal
    } else if (campo === 'stock') {
      this.juegoLlego.stock_prod = Math.floor(this.juegoLlego.stock_prod || 0);  // Redondea hacia abajo si es decimal
    }
  }

  // Método para volver sin cambiar valores
  volver() {
    this.router.navigate(['/crudjuegos']);
  }

  async Stock0NoDisponible () {
    //stock es 0
    await this.silentAlert.presentSilentToast("Producto Cambiado a No disponible automaticamente. Razon: Stock = 0", 5000)
  }
}
