import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { YoutubeResponse } from '../models/youtube.models';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private youtubeUrl = "https://www.googleapis.com/youtube/v3";
  private apiKey     = "AIzaSyCI_qO0cR_IPXHxHFdmquw4Cb-Eijhhcdc";
  private playList   = "UUNvsIonJdJ5E4EXMa65VYpA";
  private nextPagTok = "";


  constructor(private http: HttpClient) {

  }

/* https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyCI_qO0cR_IPXHxHFdmquw4Cb-Eijhhcdc&playlistId=UUNvsIonJdJ5E4EXMa65VYpA&maxResults=10 */

getVideos(){

  const url = `${this.youtubeUrl}/playlistItems`

  const params = new HttpParams()
                      .set("part", "snippet")
                      .set("maxResults", "10")
                      .set("playlistId", this.playList)
                      .set("key", this.apiKey)
                      .set("pageToken", this.nextPagTok)

  return this.http.get<YoutubeResponse>(url, {params})
                  .pipe(map(data => {
                    this.nextPagTok = data.nextPageToken;
                    return data.items;
             }),

             map(items => items.map( video => video.snippet))

             );





}

}
