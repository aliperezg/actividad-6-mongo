import { fakerES_MX as faker } from '@faker-js/faker';

export function generarDevoluciones(cantidad = 150) {
  const devoluciones = [];
  const motivos = ['DefectoFabrica', 'TallaIncorrecta', 'Arrepentimiento'];

  for (let i = 0; i < cantidad; i++) {
    const motivo = faker.helpers.arrayElement(motivos);
    const dev = {
      pedidoId: faker.database.mongodbObjectId(),
      motivo,
      metodoReembolso: faker.helpers.arrayElement(['Monedero', 'Transferencia'])
    };

    if (motivo === 'DefectoFabrica') {
      dev.reporteTecnico = {
        dictamen: 'Falla en tarjeta madre',
        aprobadoPorTecnico: true
      };
    }

    devoluciones.push(dev);
  }
  return devoluciones;
}