import { Component, OnInit, ViewChild, Pipe, PipeTransform } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { MusicVideo } from '../../../music-video';
import { MusicVideoService } from '../../../music-video.service';
import { RowNode } from 'ag-grid-community';

import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit, PipeTransform {
  musicVideos: Array<MusicVideo>;

  // @Pipe({ name: 'safe' });
  actualYoutubeUrl: string = 'https://www.youtube.com/embed/3xt8Mp8oWzc';

  @ViewChild('agGrid') agGrid: AgGridAngular;

  columnDefsMusic: Array<MusicVideoColumnDef>  = [
    {headerName: 'ID', field: 'id', sortable: true, filter: true, checkboxSelection: true},
    {headerName: 'Interpret', field: 'interpret', sortable: true, filter: true},
    {headerName: 'Title', field: 'title', sortable: true, filter: true},
    {headerName: 'Tag List', field: 'tagList', sortable: true, filter: true},
    {headerName: 'Youtube URL', field: 'youtubeUrl', sortable: true, filter: true, width: 500, enableCellTextSelection: true}
  ];

  rowDataMusic: Array<MusicVideo> = [];

  // columnDefsExample = [
  //   {headerName: 'Make', field: 'make' },
  //   {headerName: 'Model', field: 'model' },
  //   {headerName: 'Price', field: 'price'}
  // ];
  // rowDataExample = [
  //     { make: 'Toyota', model: 'Celica', price: 35000 },
  //     { make: 'Ford', model: 'Mondeo', price: 32000 },
  //     { make: 'Porsche', model: 'Boxter', price: 72000 }
  // ];

  constructor(
    private musicVideoService: MusicVideoService,
    public sanitizer: DomSanitizer
    ) { }

  ngOnInit(): void {
    this.getMusicVideos();
  }

  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
     }

  getMusicVideos(): void {
    this.musicVideoService.getMusicVideos()
    .subscribe((musicVideos: Array<MusicVideo>): any => {
      this.musicVideos = musicVideos;
      this.rowDataMusic = musicVideos;
    });
  }

  getSelectedRows(): void {
    const selectedNodes: Array<RowNode> = this.agGrid.api.getSelectedNodes();
    const selectedData: Array<MusicVideo> = selectedNodes.map( node => node.data );
    const selectedDataStringPresentation: string = selectedData.map( node => node.id + ' ' +
                                                              node.interpret  + ' ' +
                                                              node.title + ' ' +
                                                              node.tagList + ' ' +
                                                              node.youtubeUrl).join('\n----------------------- \n');
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
    this.actualYoutubeUrl = selectedData[0].youtubeUrl;
  }

  getActualYoutubeUrl() {
    return this.actualYoutubeUrl;
  }

}

interface MusicVideoColumnDef {
  headerName: string;
  field: string;
  sortable?: boolean;
  filter?: boolean;
  checkboxSelection?: boolean;
  width?: number;
  enableCellTextSelection?: boolean;
}
