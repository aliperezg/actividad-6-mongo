import { fakerES_MX as faker } from '@faker-js/faker';

export function generarProductos(cantidad = 500) {
  const categorias = ['Electrónica', 'Ropa', 'Instrumentos', 'Alimentos', 'Libros'];
  const productos = [];

  for (let i = 0; i < cantidad; i++) {
    const categoriaNombre = faker.helpers.arrayElement(categorias);
    let especificaciones = {};

    switch (categoriaNombre) {
      case 'Electrónica':
        especificaciones = {
          ramGB: faker.helpers.arrayElement([8, 16, 32]),
          procesador: faker.helpers.arrayElement(['Intel i7', 'AMD Ryzen 7', 'Apple M2']),
          garantiaMeses: faker.number.int({ min: 12, max: 36 })
        };
        break;
      case 'Ropa':
        especificaciones = {
          tallasDisponibles: faker.helpers.arrayElements(['S', 'M', 'L', 'XL'], { min: 1, max: 3 }),
          material: faker.helpers.arrayElement(['Algodón 100%', 'Poliéster', 'Lana']),
          color: faker.color.human()
        };
        break;
      case 'Instrumentos':
        especificaciones = {
          numeroCuerdas: faker.helpers.arrayElement([4, 6, 12]),
          afinacion: 'E Standard',
          incluyeEstuche: faker.datatype.boolean()
        };
        break;
      case 'Alimentos':
        especificaciones = {
          fechaCaducidad: faker.date.future(),
          esPerecedero: true,
          tablaNutricional: { calorias: faker.number.int({ min: 50, max: 500 }) }
        };
        break;
      case 'Libros':
        especificaciones = {
          isbn: faker.string.numeric(13),
          autor: faker.person.fullName(),
          numeroPaginas: faker.number.int({ min: 100, max: 900 })
        };
        break;
    }

    productos.push({
      nombre: faker.commerce.productName(),
      categoriaNombre,
      precio: parseFloat(faker.commerce.price({ min: 50, max: 15000 })),
      especificaciones,
      fechaCreacion: faker.date.past()
    });
  }
  return productos;
}