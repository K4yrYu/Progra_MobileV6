import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertasService } from 'src/app/services/alertas.service';
import { ManejodbService } from 'src/app/services/manejodb.service';
import { Productos } from 'src/app/services/productos';

@Component({
  selector: 'app-editarresecna',
  templateUrl: './editarresecna.page.html',
  styleUrls: ['./editarresecna.page.scss'],
})
export class EditarresecnaPage implements OnInit {
  // Variables para la reseña
  resecnaSeVino: any;
  errorMotivoVacio: boolean = false;
  productaso: Productos[] = [];
  motivoBaneo!: string | null ;
  usuarioWorking: any;

  constructor(
    private bd: ManejodbService,
    private router: Router,
    private activedroute: ActivatedRoute,
    private alertasService: AlertasService
  ) {
    this.activedroute.queryParams.subscribe((res) => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.resecnaSeVino = this.router.getCurrentNavigation()?.extras?.state?.['resecnaBaneA'];
      }
    });
  }

  async ngOnInit() {
    const result = await this.bd.consultarProductoPorId(this.resecnaSeVino.id_producto);
    if (result !== null) {
      this.productaso = result;
    } else {
      this.productaso = []; 
    }
  }

  async guardarCambios() {
    //se ejecutara la func que graba la suspencion
    if (!this.motivoBaneo) {
      this.errorMotivoVacio = true
      return;
    }

    this.usuarioWorking = await this.bd.consultarUsuariosPorUsername(this.resecnaSeVino.username);

    await this.bd.agregarMotivoSuspencionResecna(this.usuarioWorking.id_usuario,this.resecnaSeVino.id_resecna,this.motivoBaneo);
    this.errorMotivoVacio = false;
    // Redirigir a la página de CRUD reseñas
    this.router.navigate(['/adminresecnas']);
  }
}