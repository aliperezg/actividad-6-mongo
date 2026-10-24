import { fakerES_MX as faker } from '@faker-js/faker';

export function generarPagos(cantidad = 1000) {
  const pagos = [];
  const metodos = ['Tarjeta', 'SPEI', 'PayPal', 'OXXO'];

  for (let i = 0; i < cantidad; i++) {
    const metodo = faker.helpers.arrayElement(metodos);
    const pago = {
      pedidoId: faker.database.mongodbObjectId(),
      monto: parseFloat(faker.commerce.price({ min: 100, max: 15000 })),
      metodo,
      fechaPago: faker.date.recent({ days: 90 })
    };

    if (metodo === 'Tarjeta') {
      pago.detallesTarjeta = {
        marca: faker.helpers.arrayElement(['Visa', 'Mastercard', 'AMEX']),
        ultimos4Digitos: faker.string.numeric(4)
      };
    } else if (metodo === 'SPEI') {
      pago.detallesSPEI = {
        clabeRastreo: faker.string.numeric(18),
        bancoOrigen: 'BBVA'
      };
    } else if (metodo === 'PayPal') {
      pago.detallesPayPal = { idTransaccion: 'PAYID-' + faker.string.alphanumeric(12).toUpperCase() };
    } else {
      pago.detallesOXXO = { referenciaOXXO: faker.string.numeric(14) };
    }

    pagos.push(pago);
  }
  return pagos;
}