import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { MusicVideo } from '../music-video';
import { MusicVideoService } from '../music-video.service';
import { RowNode } from 'ag-grid-community';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
  musicVideos: Array<MusicVideo>;

  @ViewChild('agGrid') agGrid: AgGridAngular;

  columnDefsMusic: Array<MusicVideoColumnDef>  = [
    {headerName: 'ID', field: 'id', sortable: true, filter: true, checkboxSelection: true},
    {headerName: 'Interpret', field: 'interpret', sortable: true, filter: true},
    {headerName: 'Title', field: 'title', sortable: true, filter: true},
    {headerName: 'Tag List', field: 'tagList', sortable: true, filter: true}
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

  constructor(private musicVideoService: MusicVideoService) { }

  ngOnInit(): void {
    this.getMusicVideos();
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
}

}

interface MusicVideoColumnDef {
  headerName: string;
  field: string;
  sortable?: boolean;
  filter?: boolean;
  checkboxSelection?: boolean;
}
