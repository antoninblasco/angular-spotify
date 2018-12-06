import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ListealbumComponent } from './listealbum/listealbum.component';
import { ListechanteursComponent } from './listechanteurs/listechanteurs.component';
import { DetailalbumComponent } from './detailalbum/detailalbum.component';
import { PlaylistComponent } from './playlist/playlist.component';


export const appRoutes: Routes = [
    { path: 'accueil', component: AccueilComponent },
    { path: 'albums', component: ListealbumComponent },
    { path: 'chanteurs', component: ListechanteursComponent },
     { path: 'album/:id', component: DetailalbumComponent },
     { path: 'playlist', component: PlaylistComponent },
    { path: '', redirectTo: '/accueil', pathMatch:'full'},
]