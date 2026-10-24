import { fakerES_MX as faker } from '@faker-js/faker';

export function generarMovimientosInventario(cantidad = 2000) {
  const movimientos = [];
  const tipos = ['RecepcionProveedor', 'Transferencia', 'AjusteMerma', 'Venta'];

  for (let i = 0; i < cantidad; i++) {
    const tipo = faker.helpers.arrayElement(tipos);
    const mov = {
      productoId: faker.database.mongodbObjectId(),
      tipoMovimiento: tipo,
      cantidad: faker.number.int({ min: 1, max: 100 }),
      fecha: faker.date.recent({ days: 60 })
    };

    if (tipo === 'RecepcionProveedor') {
      mov.numeroFacturaProveedor = 'FAC-' + faker.string.numeric(6);
    } else if (tipo === 'Transferencia') {
      mov.almacenOrigenId = faker.database.mongodbObjectId();
      mov.almacenDestinoId = faker.database.mongodbObjectId();
    } else if (tipo === 'AjusteMerma') {
      mov.motivoMerma = faker.helpers.arrayElement(['Dañado', 'Caducado', 'Extraviado']);
    }

    movimientos.push(mov);
  }
  return movimientos;
}