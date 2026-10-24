import { fakerES_MX as faker } from '@faker-js/faker';

export function generarListasDeseos(cantidad = 350) {
  const listas = [];

  for (let i = 0; i < cantidad; i++) {
    listas.push({
      clienteId: faker.database.mongodbObjectId(),
      esPublica: faker.datatype.boolean(),
      productos: [
        {
          productoId: faker.database.mongodbObjectId(),
          prioridad: faker.helpers.arrayElement(['Alta', 'Media', 'Baja']),
          notaPersonal: faker.lorem.sentence()
        }
      ]
    });
  }
  return listas;
}