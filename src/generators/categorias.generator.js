import { fakerES_MX as faker } from '@faker-js/faker';

export function generarCategorias(cantidad = 20) {
  const categorias = [];
  for (let i = 0; i < cantidad; i++) {
    const esSubcategoria = faker.datatype.boolean();
    const cat = {
      nombre: faker.commerce.department() + ' ' + faker.string.alphanumeric(3),
      descripcion: faker.lorem.sentence(),
      seo: {
        slug: faker.helpers.slugify(faker.lorem.words(2)),
        metaKeywords: [faker.word.sample(), faker.word.sample()]
      }
    };
    if (esSubcategoria) {
      cat.categoriaPadreId = faker.database.mongodbObjectId();
    }
    categorias.push(cat);
  }
  return categorias;
}