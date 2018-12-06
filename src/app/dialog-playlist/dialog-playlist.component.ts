import { Component, Inject, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import {MAT_DIALOG_DATA} from '@angular/material';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dialog-playlist',
  templateUrl: './dialog-playlist.component.html',
  styleUrls: ['./dialog-playlist.component.css']
})
export class DialogPlaylistComponent implements OnInit {

    
  constructor(private spotService:SpotifyService, @Inject(MAT_DIALOG_DATA) public chansonUri) { }

    private playlists : any[];
    
  ngOnInit() {
      this.getPlaylists("web.studio.robot");
  }
    
    getPlaylists(userId:string){
        this.spotService.getPlaylists(userId).subscribe(
         (res) => { this.playlists = res, (error) => console.log(error), console.log(res)}
         ); 
    }
    
    addToPlaylist(idPlaylist){
        const chanson:any = {'uris': [this.chansonUri]};
        this.spotService.addSongToPlaylist(idPlaylist, chanson).subscribe(
         (res) => { console.log("chanson ajoutée")
             window.location.reload(), (error) => console.log(error), console.log(res)}
         ); 
    }

}
