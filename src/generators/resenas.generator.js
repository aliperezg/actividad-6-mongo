import { fakerES_MX as faker } from '@faker-js/faker';

export function generarResenas(cantidad = 1200) {
  const resenas = [];

  for (let i = 0; i < cantidad; i++) {
    const esVerificada = faker.datatype.boolean();
    const res = {
      productoId: faker.database.mongodbObjectId(),
      clienteId: faker.database.mongodbObjectId(),
      calificacion: faker.number.int({ min: 1, max: 5 }),
      comentario: faker.lorem.paragraph(),
      esVerificada
    };

    if (esVerificada) {
      res.fotosAdjuntas = [faker.image.url(), faker.image.url()];
      res.votosUtilidad = faker.number.int({ min: 0, max: 150 });
    }

    resenas.push(res);
  }
  return resenas;
}