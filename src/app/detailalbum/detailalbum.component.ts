import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../spotify.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';
import { DialogPlaylistComponent } from '../dialog-playlist/dialog-playlist.component';


@Component({
  selector: 'app-detailalbum',
  templateUrl: './detailalbum.component.html',
  styleUrls: ['./detailalbum.component.css']
})
export class DetailalbumComponent implements OnInit {

    private idalbum:string;
    private infosAlbum: any[];
    
  constructor(private route:ActivatedRoute, private spotService:SpotifyService, public dialog: MatDialog) { }

  ngOnInit() {
      this.idalbum = this.route.snapshot.params["id"];
      this.getInfos(this.idalbum);
  }

    getInfos(id:string){
       this.spotService.getAlbum(id).subscribe(
         (res) => { this.infosAlbum = res, (error) => console.log(error), console.log(res)}
         ); 
    }
    
    openPopup(idChanson:string){
        this.dialog.open(DialogPlaylistComponent, {data:idChanson});
    }
    
}
