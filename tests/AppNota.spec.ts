import 'mocha';
import * as fs from 'fs';
import { expect } from 'chai';
import { AppNotas } from '../src/AppNotas';

describe('Test de la clase AppNotas', () => {
  const app = new AppNotas();
  it('Se puede crear una nueva nota', () => {
    app.addNota('Marco', 'Mi nota', 'Esta nota es una prueba', 'azul');
    expect(fs.existsSync('data/users/Marco/Mi Nota.json')).true;
  });

  it('Se puede eliminar una nota', () => {
    app.removeNota('Marco', 'Mi nota');
    expect(fs.existsSync('data/users/Marco/Mi nota.json')).false;
  });
});