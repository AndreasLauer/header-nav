import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MusicVideo } from './music-video';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class MusicVideoService {
  private musicVideosUrl: string = 'api/musicVideos';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getMusicVideos(): Observable<MusicVideo[]> {
    return this.http.get<MusicVideo[]>(this.musicVideosUrl)
    .pipe(
      tap(_ => this.log('fetched music videos')),
      catchError(this.handleError<MusicVideo[]>('getMusicVideos', []))
    );
  }

  // @TODO: create error handler and logger class!
    /** Log a HeroService message with the MessageService */
    private log(message: string): void {
      this.messageService.add(`HeroService: ${message}`);
    }
  
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation: string = 'operation', result?: T): any {
      return (error: any): Observable<T> => {
  
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
  
        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);
  
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
}
