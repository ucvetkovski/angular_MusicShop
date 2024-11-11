import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  serviceFilter = new EventEmitter<void>();
  
  
  public filterResult: any;
  private artSet?: Set<any>;

  private filterResultSource = new BehaviorSubject<any>([]);
  filterResult$ = this.filterResultSource.asObservable();

  setFilterResult(data: any) {
    this.filterResultSource.next(data);
  }

  filter(filterGenres: Array<string>, filterFormats: Array<string>, data: any, ag: any, filterTitle?: string) {

    let temp = JSON.parse(JSON.stringify(data));
      let filterResult: Array<any> = [];
    if (filterGenres.length != 0 || filterFormats.length != 0 || filterTitle) {

      const genreSet = new Set(filterGenres);
      let filteredAlbums = ag.filter((a: any) => genreSet.has((a.id_genre).toString()));
      let filteredAlbumIds : Array<any> = [];
      filteredAlbums.forEach((element:any) => {
        filteredAlbumIds.push(element.id_album);
      });
      const albumSet = new Set(filteredAlbumIds);

      const formatSet = new Set(filterFormats);
      if (filterTitle != undefined || null || '') {
        let artists = !filterTitle || data.filter((a: any) => a.artist_name.toLowerCase().includes(filterTitle?.toLowerCase()));
        let artistsIds: Array<string> = [];
        if (artists.length > 0) {
          artists.forEach((e: any) => {
        artistsIds.push((e[2]).toString());
      });
        this.artSet = new Set(artistsIds); 
        }
      }
      filterResult = data.filter((a: any) => {
        const matchGenre = filterGenres.length === 0 || albumSet.has((a.id_album));
        const matchFormat = filterFormats.length === 0 || formatSet.has((a.id_format).toString());
        const matchesTitle = !filterTitle || a.title.toLowerCase().includes(filterTitle.toLowerCase());
        const matchArtist = !filterTitle || this.artSet?.has(((a.id_artist).toString()));
        return matchGenre && matchFormat && (matchesTitle || matchArtist);
      });
        temp = filterResult;
        this.setFilterResult(temp);
        this.serviceFilter.emit();
      }
      else {
        this.setFilterResult(data);
        this.serviceFilter.emit();
      }
  }
}
