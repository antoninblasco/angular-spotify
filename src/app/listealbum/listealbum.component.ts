import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listealbum',
  templateUrl: './listealbum.component.html',
  styleUrls: ['./listealbum.component.css']
})
export class ListealbumComponent implements OnInit {

    private albums: any[];
    
  constructor(private spotService:SpotifyService) { }

  ngOnInit() {
  }
    
    chercherAlbum(motCle:string){
         this.spotService.getAlbums(motCle).subscribe(
         (res) => { this.albums = res["albums"]["items"], (error) => console.log(error), console.log(res)}
         );
    }
}
