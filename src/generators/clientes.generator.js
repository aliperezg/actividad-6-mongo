import { fakerES_MX as faker } from '@faker-js/faker';

export function generarClientes(cantidad = 300) {
  const clientes = [];

  for (let i = 0; i < cantidad; i++) {
    const tipoCliente = faker.helpers.arrayElement(['B2C', 'B2B']);
    const cliente = {
      nombre: faker.person.fullName(),
      email: faker.internet.email(),
      tipoCliente,
      fechaRegistro: faker.date.past()
    };

    if (tipoCliente === 'B2B') {
      cliente.datosFiscales = {
        rfc: faker.string.alphanumeric({ length: 12, casing: 'upper' }),
        razonSocial: faker.company.name(),
        regimenFiscal: '601 - General de Ley Personas Morales'
      };
      cliente.programaFidelidad = { nivel: 'VIP', puntos: faker.number.int({ min: 1000, max: 50000 }) };
    }

    clientes.push(cliente);
  }
  return clientes;
}