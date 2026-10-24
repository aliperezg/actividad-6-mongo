import { fakerES_MX as faker } from '@faker-js/faker';

export function generarNotificaciones(cantidad = 1000) {
  const notificaciones = [];
  const canales = ['Email', 'SMS', 'WhatsApp'];

  for (let i = 0; i < cantidad; i++) {
    notificaciones.push({
      clienteId: faker.database.mongodbObjectId(),
      canal: faker.helpers.arrayElement(canales),
      leida: faker.datatype.boolean(),
      payloadContextual: {
        titulo: 'Actualización de Pedido',
        mensaje: faker.lorem.sentence()
      }
    });
  }
  return notificaciones;
}