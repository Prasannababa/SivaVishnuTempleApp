import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loadGapiInsideDOM } from 'gapi-script';
import { Observable } from 'rxjs/internal/Observable';
declare var gapi: any;
@Injectable({
  providedIn: 'root',
})
export class GoogleDriveService {
    private API_KEY = 'AIzaSyAUaFGhdx-twJC6GdtVzi7vUM5qaOn0p-g';
    private FOLDER_ID = '1F6R7E3RMmjxGDZ-bnbYmnK84LMTcIT-l'; 
  
    constructor(private http: HttpClient) { }
  
    // Fetch files in the folder from Google Drive API
    listFiles(folderId: string): Observable<any> {
      const url = `https://www.googleapis.com/drive/v3/files?q='${folderId}' in parents and trashed=false&key=${this.API_KEY}&fields=files(id, name, mimeType, parents)`;
      return this.http.get<any>(url);
    }
}
