import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { MusicVideo } from './music-video';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(): any {
    const heroes: Array<Hero> = [
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    const musicVideos: Array<MusicVideo> = [
      { id: 1, interpret: 'Os Tincoãs', title: ' Deixa A Gira Girar (j g b edit)', tagList: ['latin'], youtubeUrl: 'https://www.youtube.com/watch?v=3xt8Mp8oWzc'},
      { id: 2, interpret: 'Nu', title: 'MAN O TO (Original Mix)', tagList: ['lustiges', 'lounge'], youtubeUrl: 'https://www.youtube.com/watch?v=sQh7fr53Xy0'},
    ];
    return {heroes, musicVideos};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map((hero: Hero): any => hero.id)) + 1 : 11;
  }
}