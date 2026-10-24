import { fakerES_MX as faker } from '@faker-js/faker';

export function generarEnvios(cantidad = 800) {
  const envios = [];
  const tipos = ['Domicilio', 'Pick-up'];

  for (let i = 0; i < cantidad; i++) {
    const tipo = faker.helpers.arrayElement(tipos);
    const envio = {
      pedidoId: faker.database.mongodbObjectId(),
      tipoEnvio: tipo,
      hitos: [
        { estado: 'Empacado', fecha: faker.date.recent({ days: 5 }) },
        { estado: 'En Tránsito', fecha: faker.date.recent({ days: 2 }) }
      ]
    };

    if (tipo === 'Domicilio') {
      envio.direccionEntrega = faker.location.streetAddress();
      envio.coordenadasGeograficas = {
        lat: faker.location.latitude(),
        lng: faker.location.longitude()
      };
    } else {
      envio.puntoRecolectaId = faker.database.mongodbObjectId();
      envio.codigoCasillero = faker.string.alphanumeric(6).toUpperCase();
    }

    envios.push(envio);
  }
  return envios;
}