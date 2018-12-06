import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

     private playlists : any[];
    
constructor(private spotService:SpotifyService) { }


  ngOnInit() {
      this.getPlaylists("web.studio.robot");
  }
    
    getPlaylists(userId:string){
       this.spotService.getPlaylists(userId).subscribe(
         (res) => { this.playlists = res, (error) => console.log(error), console.log(res)}
         ); 
    }
    
    creerPlaylist(nom:string){
        this.spotService.createPlaylist(nom).subscribe(
         (res) => { console.log(res), (error) => console.log(error)}
         );
    }
}
