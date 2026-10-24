import { fakerES_MX as faker } from '@faker-js/faker';

export function generarProveedores(cantidad = 50) {
  const proveedores = [];
  const tipos = ['Fabricante Directo', 'Importador Mayorista', 'Artesano Local'];

  for (let i = 0; i < cantidad; i++) {
    const tipo = faker.helpers.arrayElement(tipos);
    const prov = {
      nombreComercial: faker.company.name(),
      tipoProveedor: tipo,
      contacto: {
        nombre: faker.person.fullName(),
        telefono: faker.phone.number()
      }
    };

    if (tipo === 'Fabricante Directo') {
      prov.certificaciones = ['ISO 9001', 'ISO 14001'];
      prov.capacidadProduccionDiaria = faker.number.int({ min: 1000, max: 10000 });
    } else if (tipo === 'Importador Mayorista') {
      prov.padronImportadores = faker.string.alphanumeric(10).toUpperCase();
      prov.paisesOrigen = ['China', 'Estados Unidos', 'Alemania'];
    } else {
      prov.esComercioJusto = true;
      prov.regionArtesanal = faker.location.state();
    }

    proveedores.push(prov);
  }
  return proveedores;
}