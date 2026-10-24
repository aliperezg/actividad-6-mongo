import { fakerES_MX as faker } from '@faker-js/faker';

export function generarEmpleados(cantidad = 80) {
  const empleados = [];
  const roles = ['Cajero', 'Almacenista', 'Repartidor', 'Gerente'];

  for (let i = 0; i < cantidad; i++) {
    const rol = faker.helpers.arrayElement(roles);
    const emp = {
      nombre: faker.person.fullName(),
      rol,
      sucursalId: faker.database.mongodbObjectId()
    };

    if (rol === 'Almacenista') {
      emp.certificadoMontacargas = faker.datatype.boolean();
    } else if (rol === 'Repartidor') {
      emp.licenciaConducir = {
        numero: faker.string.alphanumeric(8).toUpperCase(),
        vigencia: faker.date.future()
      };
    }

    empleados.push(emp);
  }
  return empleados;
}