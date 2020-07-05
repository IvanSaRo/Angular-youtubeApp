import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

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

  return this.http.get(url, {params})
}

}
