import { fakerES_MX as faker } from '@faker-js/faker';

export function generarSucursales(cantidad = 15) {
  const sucursales = [];

  for (let i = 0; i < cantidad; i++) {
    sucursales.push({
      nombre: 'Sucursal ' + faker.location.city(),
      direccion: faker.location.streetAddress(),
      geolocalizacion: { lat: faker.location.latitude(), lng: faker.location.longitude() },
      horarios: { lunesAViernes: '09:00 - 20:00', sabado: '10:00 - 18:00' },
      serviciosEspeciales: faker.helpers.arrayElements(['Taller mecanico', 'Cafetería', 'Pick-up Autos'], { min: 1, max: 2 })
    });
  }
  return sucursales;
}