import { fakerES_MX as faker } from '@faker-js/faker';

export function generarGarantias(cantidad = 250) {
  const garantias = [];
  const tipos = ['Estandar', 'Extendida'];

  for (let i = 0; i < cantidad; i++) {
    const tipo = faker.helpers.arrayElement(tipos);
    const gar = {
      productoId: faker.database.mongodbObjectId(),
      clienteId: faker.database.mongodbObjectId(),
      tipoPoliza: tipo,
      vigenciaMeses: tipo === 'Estandar' ? 12 : 36
    };

    if (tipo === 'Extendida') {
      gar.coberturaSiniestros = ['Robo', 'Daño por agua', 'Caídas'];
      gar.costoPoliza = parseFloat(faker.commerce.price({ min: 300, max: 1500 }));
    }

    garantias.push(gar);
  }
  return garantias;
}