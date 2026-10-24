import { fakerES_MX as faker } from '@faker-js/faker';

export function generarPromociones(cantidad = 50) {
  const promociones = [];
  const tiposRegla = ['CuponPorcentaje', 'DosPorUno', 'EnvioGratis'];

  for (let i = 0; i < cantidad; i++) {
    const tipoRegla = faker.helpers.arrayElement(tiposRegla);
    const promo = {
      nombre: faker.commerce.productAdjective() + ' Promo',
      tipoRegla,
      vigenciaHasta: faker.date.future()
    };

    if (tipoRegla === 'CuponPorcentaje') {
      promo.codigoCupon = faker.string.alphanumeric(8).toUpperCase();
      promo.porcentajeDescuento = faker.number.int({ min: 10, max: 50 });
    } else if (tipoRegla === 'DosPorUno') {
      promo.categoriaAplicaId = faker.database.mongodbObjectId();
    } else if (tipoRegla === 'EnvioGratis') {
      promo.montoMinimoCompra = 500;
    }

    promociones.push(promo);
  }
  return promociones;
}