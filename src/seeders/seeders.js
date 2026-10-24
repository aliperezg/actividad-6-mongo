import { connectDB, closeDB } from '../config/database.js';

import { generarProductos } from '../generators/productos.generator.js';
import { generarClientes } from '../generators/clientes.generator.js';
import { generarCategorias } from '../generators/categorias.generator.js';
import { generarProveedores } from '../generators/proveedores.generator.js';
import { generarInventario } from '../generators/inventario.generator.js';
import { generarAlmacenes } from '../generators/almacenes.generator.js';
import { generarPedidos } from '../generators/pedidos.generator.js';
import { generarPagos } from '../generators/pagos.generator.js';
import { generarEnvios } from '../generators/envios.generator.js';
import { generarResenas } from '../generators/resenas.generator.js';
import { generarMovimientosInventario } from '../generators/movimientos_inventario.generator.js';
import { generarPromociones } from '../generators/promociones.generator.js';
import { generarCarritosCompra } from '../generators/carritos_compra.generator.js';
import { generarDevoluciones } from '../generators/devoluciones.generator.js';
import { generarGarantias } from '../generators/garantias.generator.js';
import { generarSucursales } from '../generators/sucursales.generator.js';
import { generarEmpleados } from '../generators/empleados.generator.js';
import { generarAuditoriaCambios } from '../generators/auditoria_cambios.generator.js';
import { generarListasDeseos } from '../generators/listas_deseos.generator.js';
import { generarNotificaciones } from '../generators/notificaciones.generator.js';

async function ejecutarSeeder() {
  const db = await connectDB();
  
  console.log(' Limpiando base de datos...');
  await db.dropDatabase();

  console.log(' Poblando 20 colecciones...');
  
  await db.collection('productos').insertMany(generarProductos(500));
  await db.collection('clientes').insertMany(generarClientes(300));
  await db.collection('categorias').insertMany(generarCategorias(20));
  await db.collection('proveedores').insertMany(generarProveedores(50));
  await db.collection('inventario').insertMany(generarInventario(500));
  await db.collection('almacenes').insertMany(generarAlmacenes(10));
  await db.collection('pedidos').insertMany(generarPedidos(1000));
  await db.collection('pagos').insertMany(generarPagos(1000));
  await db.collection('envios').insertMany(generarEnvios(800));
  await db.collection('resenas').insertMany(generarResenas(1200));
  await db.collection('movimientos_inventario').insertMany(generarMovimientosInventario(2000));
  await db.collection('promociones').insertMany(generarPromociones(50));
  await db.collection('carritos_compra').insertMany(generarCarritosCompra(400));
  await db.collection('devoluciones').insertMany(generarDevoluciones(150));
  await db.collection('garantias').insertMany(generarGarantias(250));
  await db.collection('sucursales').insertMany(generarSucursales(15));
  await db.collection('empleados').insertMany(generarEmpleados(80));
  await db.collection('auditoria_cambios').insertMany(generarAuditoriaCambios(1500));
  await db.collection('listas_deseos').insertMany(generarListasDeseos(350));
  await db.collection('notificaciones').insertMany(generarNotificaciones(1000));

  console.log(' Seeder completado con éxito.');
  await closeDB();
}

ejecutarSeeder().catch(console.error);