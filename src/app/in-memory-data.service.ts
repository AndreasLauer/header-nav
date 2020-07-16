import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Task } from './task';
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
    const tasks: Array<Task> = [
      {id: 'al-00', name: 'task-1', description: 'task 1 description', epic: 'epic-1', status: 'new', progressStatus: ''},
      {id: 'al-01', name: 'task-2', description: 'task 2 description', epic: 'epic-2', status: 'new', progressStatus: ''},
      {
        id: 'al-02',
        name: 'task-2',
        description: 'task 3 description text-overflow: ellipsis; text-overflow: ellipsis; text-overflow: ellipsis; text-overflow: ellipsis; text-overflow: ellipsis; text-overflow: ellipsis; text-overflow: ellipsis;',
        epic: 'epic-1',
        status: 'actual',
        progressStatus: 'to-do',
      },
      {id: 'al-03', name: 'task-3', description: 'task 4 description', epic: 'epic-1', status: 'actual', progressStatus: 'to-do'},
      {id: 'al-04', name: 'task-4', description: 'task 5 description', epic: 'epic-1', status: 'actual', progressStatus: 'in-progress'},
      {id: 'al-05', name: 'task-5', description: 'task 6 description', epic: 'epic-2', status: 'actual', progressStatus: 'to-verify'},
      {id: 'al-06', name: 'task-6', description: 'task 7 description', epic: 'epic-3', status: 'actual', progressStatus: 'done'},
    ];
    return {heroes, musicVideos, tasks};
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