import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SpotifyService } from './spotify.service'
import { AppComponent } from './app.component';
import { ListealbumComponent } from './listealbum/listealbum.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing'

import { MatListModule, MatFormFieldModule, MatInputModule, MatCardModule, MatButtonModule, MatIconModule } from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
import { AccueilComponent } from './accueil/accueil.component';
import { ListechanteursComponent } from './listechanteurs/listechanteurs.component';
import { DetailalbumComponent } from './detailalbum/detailalbum.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogPlaylistComponent } from './dialog-playlist/dialog-playlist.component';

@NgModule({
  declarations: [
    AppComponent,
    ListealbumComponent,
    AccueilComponent,
    ListechanteursComponent,
    DetailalbumComponent,
    PlaylistComponent,
    DialogPlaylistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatListModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    FormsModule,
    MatDialogModule,
    MatToolbarModule,
    MatSidenavModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent],
    entryComponents: [DialogPlaylistComponent]
})
export class AppModule { }
