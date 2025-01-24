import { CommonModule } from '@angular/common';
import { ChangeDetectorRef,Component, Input, input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'gallery-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery-child.component.html',
  styleUrl: './gallery-child.component.css'
})
export class GalleryChildComponent implements OnChanges{
  @Input() images:any[] = [];
  removeExportDownloadParam(url: string): string {
  try {
    // Create a URL object
    const urlObj = new URL(url);

    // Remove the "export" query parameter if it exists
    if (urlObj.searchParams.has('export')) {
      urlObj.searchParams.delete('export');
    }

    // Return the updated URL as a string
    return urlObj.toString();
  } catch (error) {
    console.error('Invalid URL:', error);
    return url; // Return the original URL if there's an error
  }
}
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['images']){
      console.log('Updated images:', this.images);
    }
  }
  selectedImage: string | null = null;

  openModal(imageUrl: string) {
    this.selectedImage = imageUrl;
  }

  closeModal() {
    this.selectedImage = null;
  }
}
