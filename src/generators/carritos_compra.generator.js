import { fakerES_MX as faker } from '@faker-js/faker';

export function generarCarritosCompra(cantidad = 400) {
  const carritos = [];
  const estados = ['Activo', 'Abandonado'];

  for (let i = 0; i < cantidad; i++) {
    const estado = faker.helpers.arrayElement(estados);
    const car = {
      clienteId: faker.database.mongodbObjectId(),
      estado,
      items: [
        { productoId: faker.database.mongodbObjectId(), cantidad: faker.number.int({ min: 1, max: 3 }) }
      ]
    };

    if (estado === 'Abandonado') {
      car.fechaAbandono = faker.date.recent({ days: 10 });
      car.cuponProvisionalAplica = 'VOLVER10';
    }

    carritos.push(car);
  }
  return carritos;
}