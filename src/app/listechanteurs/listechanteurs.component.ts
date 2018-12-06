import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listechanteurs',
  templateUrl: './listechanteurs.component.html',
  styleUrls: ['./listechanteurs.component.css']
})
export class ListechanteursComponent implements OnInit {

    private chanteurs : any[];
    
  constructor(private spotService:SpotifyService) { }

  ngOnInit() {
  }

    
    chercherChanteur(motCle:string){
         this.spotService.getChanteurs(motCle).subscribe(
         (res) => { this.chanteurs = res["artists"]["items"], (error) => console.log(error), console.log(res)}
         );
    }
}
