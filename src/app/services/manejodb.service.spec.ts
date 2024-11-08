import { TestBed } from '@angular/core/testing';
import { ManejodbService } from './manejodb.service';

// Mock de la base de datos
class MockDatabase {
  executeSql(query: string, values: any[]): Promise<any> {
    return Promise.resolve({ rows: { length: 0, item: () => null } }); // Ajusta para simular resultados si es necesario
  }
}

describe('ManejodbService', () => {
  let service: ManejodbService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ManejodbService,
        { provide: 'database', useClass: MockDatabase } // Proporciona un mock para la base de datos
      ]
    });
    service = TestBed.inject(ManejodbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy(); // Verifica que el servicio se crea correctamente
  });

  // Puedes agregar pruebas adicionales para verificar la funcionalidad del servicio
});
