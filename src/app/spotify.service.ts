import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
    
    private token : string = "BQD_m-o3rXtYeE0cD2_qYmMKGQpaDqs_QATdWYNafXSpmEPTnP68v9QNi5CcExTlp8r3GCiBBez3O-MVhcuLlupn10PQG87UcmR2gozWu42u2OxPipCv3yxMgZz3_0_NifaVyZYRs2m2f7VOqp_al9G6AkVvTy2u10CgXb8knAq3xu1IM6tS2DymwwLDcDAqRfF-EzToKaJRHXeehTwpyY0d3-mY1N1h14AQtV2NslGAa6QZSe6DwWg3aHlwFlJN6AkX5cpx7cNLdykVvau57Qrk8Ls";
    
    private userId : string = "web.studio.robot";
    
    private spotifyUrlSearchAlbum : string = "https://api.spotify.com/v1/search?type=album&market=FR&limit=10&q=";
    private spotifyUrlSearchChanteur = 'https://api.spotify.com/v1/search?type=artist&market=FR&limit=10&q=';
    private spotifyUrlAlbum = "https://api.spotify.com/v1/albums/";
    private spotifyUrlPlaylists = "https://api.spotify.com/v1/";
    private spotifyUrlPlaylist = "https://api.spotify.com/v1/playlists/"
    
    
    private headers:HttpHeaders;
    
    constructor(private http:HttpClient) { 
         this.headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization' : 'Bearer '+ this.token }
                                        
    )}
    
    getAlbums(mot:string) : Observable<any[]>{
        return this.http.get<any[]>(this.spotifyUrlSearchAlbum+mot, { headers : this.headers});
    }
    
    getChanteurs(mot:string) : Observable<any[]>{
        return this.http.get<any[]>(this.spotifyUrlSearchChanteur+mot, { headers : this.headers});
    }
    
    getPlaylists(userId:string) : Observable<any[]>{
        return this.http.get<any[]>(this.spotifyUrlPlaylists+ "users/"+userId+"/playlists", { headers : this.headers});
    }
    
    createPlaylist(nom:string) : Observable<any[]>{
        return this.http.post<any[]>(this.spotifyUrlPlaylists+ "users/"+this.userId+"/playlists", {name:nom} ,{ headers : this.headers});
    }
    
    getAlbum(id:string) : Observable<any[]>{
        return this.http.get<any[]>(this.spotifyUrlAlbum+id, { headers : this.headers});
    }
    
    addSongToPlaylist(idPlaylist:string, idChanson:string){
        return this.http.post<any[]>(this.spotifyUrlPlaylist + idPlaylist + "/tracks" , idChanson ,{ headers : this.headers});
    }
}