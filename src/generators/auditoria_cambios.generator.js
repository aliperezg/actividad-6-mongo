import { fakerES_MX as faker } from '@faker-js/faker';

export function generarAuditoriaCambios(cantidad = 1500) {
  const auditorias = [];
  const colecciones = ['productos', 'clientes', 'pedidos'];

  for (let i = 0; i < cantidad; i++) {
    auditorias.push({
      usuario: faker.internet.userName(),
      coleccionAfectada: faker.helpers.arrayElement(colecciones),
      fecha: faker.date.recent({ days: 30 }),
      delta: {
        campoModificado: 'precio',
        valorAnterior: faker.commerce.price(),
        valorNuevo: faker.commerce.price()
      }
    });
  }
  return auditorias;
}