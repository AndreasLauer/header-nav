import { Component, OnInit } from '@angular/core';
import { MusicVideo } from '../music-video';
import { MusicVideoService } from '../music-video.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
  musicVideos: Array<MusicVideo>;

  constructor(private musicVideoService: MusicVideoService) { }

  ngOnInit(): void {
    this.getMusicVideos();
  }

  getMusicVideos(): void {
    this.musicVideoService.getMusicVideos()
    .subscribe((musicVideos: Array<MusicVideo>): any => this.musicVideos = musicVideos);
  }

}
