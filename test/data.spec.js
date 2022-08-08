import { filtrarFunctionName, filtrarFunctionDescription, orderDataZA, orderDataAZ } from '../src/data.js';

describe('probar funciones puras', () => {
  it('filtrarFunctionName sea una funcion', () => {
    expect(typeof filtrarFunctionName).toBe('function');
  });

  it('filtrarFunctionName filtre por el nombre', () => {

    const arr1 = [{ name: 'hola', description: 'hola mundo' }, { name: 'nom2', description: 'chao mundo' }]
    const resultado = filtrarFunctionName(arr1, 'hola')

    const resu = [{ name: 'hola', description: 'hola mundo' }]

    expect(resultado).toEqual(resu);
  });

  it('filtrarFunctionDescription sea una funcion', () => {
    expect(typeof filtrarFunctionDescription).toBe('function');
  });

  it('filtrarFunctionDescription filtre por la descripcion', () => {

    const arr1 = [{ name: 'hola', description: 'hola mundo' }, { name: 'nom2', description: 'chao mundo' }]
    const resultado = filtrarFunctionDescription(arr1, 'hola mundo')

    const resu = [{ name: 'hola', description: 'hola mundo' }]

    expect(resultado).toEqual(resu);
  });
});

describe('probar funciones puras', () => {
  it('orderDataZA sea una funcion', () => {
    expect(typeof orderDataZA).toBe('function');
  });

  it('orderDataZA ordenar la tabla por el nombre de Z-A', () => {

    const arr1 = [{ name: 'hola', description: 'hola mundo' }, { name: 'nom2', description: 'chao mundo' }]
    const resultado = orderDataZA(arr1)

    const resu = [{ name: 'nom2', description: 'chao mundo' }, { name: 'hola', description: 'hola mundo' }]

    expect(resultado).toEqual(resu);
  });

  it('orderDataAZ ordenar la tabla por el nombre de A-Z', () => {

    const arr1 = [{ name: 'hola', description: 'hola mundo' }, { name: 'nom2', description: 'chao mundo' }]
    const resultado = orderDataAZ(arr1)

    const resu = [{ name: 'hola', description: 'hola mundo' }, { name: 'nom2', description: 'chao mundo' }]

    expect(resultado).toEqual(resu);
  });



});

