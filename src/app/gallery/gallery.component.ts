import { CommonModule } from '@angular/common';
import { ChangeDetectorRef,Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GalleryChildComponent } from "../gallery-child/gallery-child.component";
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, GalleryChildComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent implements OnInit{
  constructor(private cdRef: ChangeDetectorRef){}
  private imagesSubject = new BehaviorSubject<any[]>([]);
  images:any[] = [];
  imagesLoaded = false;
  folderIds: string[] = [
    '1F6R7E3RMmjxGDZ-bnbYmnK84LMTcIT-l',
    // Add more folder IDs here
  ];
  private API_KEY = 'AIzaSyAUaFGhdx-twJC6GdtVzi7vUM5qaOn0p-g';
  initializeGapi() {
    gapi.load('client:auth2', async () => {
      gapi.client.init({
        apiKey: this.API_KEY,
        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
      }).then(() => {
        console.log("calling files");
        this.getFiles(this.folderIds);
        console.log("images: ");
      });
    });
  }
  ngOnInit() {
    this.initializeGapi();
  }

  selectedImage: string | null = null;

  getFiles(folderIds: string[]) {
    let allFiles: any[] = [];

    for (const folderId of folderIds) {
      try {
        // Fetch files from the folder
        const response = gapi.client.drive.files.list({
            q: "'"+folderId+"' in parents and trashed=false",
            fields: "files(id, name, mimeType, webContentLink)",
            key: this.API_KEY
        }).then((response: any) => {
          this.imagesSubject.next([this.images = response.result.files]);
          this.images.forEach(image => {
            image.webContentLink = this.removeExportDownloadParam(image.id);
            console.log(image.webContentLink);
          });
          console.log("updated image list");
          console.log(this.images);
          this.imagesLoaded = true;
          this.images = this.images.slice(0, 5);
          this.cdRef.detectChanges();
        }).catch((error: any) => {
          this.imagesLoaded = true;
          console.error('Error loading file from Google Drive:', error);
        });;

        // Fetch subfolders
        // const subfoldersResponse = gapi.client.request({
        //   path: 'https://www.googleapis.com/drive/v3/files',
        //   params: {
        //     q: `'${folderId}' in parents and mimeType='application/vnd.google-apps.folder' and trashed=false`,
        //     fields: 'files(id, name)',
        //     key: this.API_KEY,
        //     supportsAllDrives: true,
        //     includeItemsFromAllDrives: true,
        //   },
        // });

        // if (subfoldersResponse.result && subfoldersResponse.result.files) {
        //   const subfolderIds = subfoldersResponse.result.files.map((folder: any) => folder.id);
        //   const subfolderFiles = this.getFiles(subfolderIds);
        //   allFiles.push(...subfolderFiles);
        // }
      } catch (error) {
        console.error(`Error fetching files from folder: ${folderId}`, error);
      }
    }

    return allFiles;
  }

  removeExportDownloadParam(id: string): string {
    try {
      // Create a URL object
      return "https://lh3.googleusercontent.com/d/"+id;
    } catch (error) {
      console.error('Invalid URL:', error);
      return id; // Return the original URL if there's an error
    }
  }

  openModal(imageUrl: string) {
    this.selectedImage = imageUrl;
  }

  closeModal() {
    this.selectedImage = null;
  }
}
