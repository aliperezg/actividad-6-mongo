import { fakerES_MX as faker } from '@faker-js/faker';

export function generarPedidos(cantidad = 1000) {
  const pedidos = [];
  const canales = ['Web', 'App', 'POS'];

  for (let i = 0; i < cantidad; i++) {
    const numItems = faker.number.int({ min: 1, max: 5 });
    const items = [];
    let total = 0;

    for (let j = 0; j < numItems; j++) {
      const precioHistorico = parseFloat(faker.commerce.price({ min: 10, max: 2000 }));
      const cantidadItem = faker.number.int({ min: 1, max: 3 });
      total += precioHistorico * cantidadItem;

      items.push({
        productoId: faker.database.mongodbObjectId(),
        nombreProducto: faker.commerce.productName(),
        precioHistoricoCompra: precioHistorico,
        cantidad: cantidadItem
      });
    }

    pedidos.push({
      clienteId: faker.database.mongodbObjectId(),
      canalVenta: faker.helpers.arrayElement(canales),
      fechaPedido: faker.date.recent({ days: 180 }),
      items,
      total: parseFloat(total.toFixed(2)),
      notasEmpaque: faker.datatype.boolean() ? faker.lorem.sentence() : undefined
    });
  }
  return pedidos;
}