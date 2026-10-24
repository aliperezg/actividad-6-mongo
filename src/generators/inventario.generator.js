import { fakerES_MX as faker } from '@faker-js/faker';

export function generarInventario(cantidad = 500) {
  const inventarios = [];
  const tiposControl = ['Lote', 'NumeroSerie', 'Granel'];

  for (let i = 0; i < cantidad; i++) {
    const tipoControl = faker.helpers.arrayElement(tiposControl);
    const item = {
      productoId: faker.database.mongodbObjectId(),
      almacenId: faker.database.mongodbObjectId(),
      tipoControl,
      stockDisponible: faker.number.int({ min: 10, max: 500 })
    };

    if (tipoControl === 'Lote') {
      item.detallesLote = {
        numeroLote: faker.string.alphanumeric(8).toUpperCase(),
        fechaCaducidad: faker.date.future()
      };
    } else if (tipoControl === 'NumeroSerie') {
      item.numeroSerieIndividual = faker.string.uuid();
    } else {
      item.ubicacionRack = `RACK-${faker.number.int({ min: 1, max: 50 })}-SEC-${faker.string.alpha(1).toUpperCase()}`;
    }

    inventarios.push(item);
  }
  return inventarios;
}