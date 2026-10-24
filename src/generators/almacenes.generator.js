import { fakerES_MX as faker } from '@faker-js/faker';

export function generarAlmacenes(cantidad = 10) {
  const almacenes = [];
  const tipos = ['CEDIS', 'Bodega Local', 'Tienda Fisica'];

  for (let i = 0; i < cantidad; i++) {
    const tipo = faker.helpers.arrayElement(tipos);
    const almacen = {
      nombre: `Almacén ${faker.location.city()} (${tipo})`,
      tipo,
      direccion: faker.location.streetAddress()
    };

    if (tipo === 'CEDIS') {
      almacen.especificacionesCEDIS = {
        muellesCarga: faker.number.int({ min: 5, max: 20 }),
        capacidadM3: faker.number.int({ min: 10000, max: 50000 })
      };
    } else if (tipo === 'Bodega Local') {
      almacen.tieneCamaraRefrigeracion = faker.datatype.boolean();
    }

    almacenes.push(almacen);
  }
  return almacenes;
}