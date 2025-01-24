import { Component } from '@angular/core';

@Component({
  selector: 'app-event-detail-popup',
  standalone: true,
  imports: [],
  templateUrl: './event-detail-popup.component.html',
  styleUrl: './event-detail-popup.component.css'
})
export class EventDetailPopupComponent {
  images = [
    { url: 'assets/gallery/background_2.jpg', title: 'Image 1' },
    { url: 'assets/gallery/dark-shiva-bg.jpg', title: 'Image 2' },
    { url: 'assets/gallery/sage-vyasa.jpg', title: 'Image 3' },
    { url: 'assets/gallery/temple1.jpg', title: 'Image 4' },
    { url: 'assets/gallery/temple2.jpg', title: 'Image 5' },
    { url: 'assets/gallery/temple3.jpg', title: 'Image 5' }
  ];

  selectedImage: string | null = null;

  openModal(imageUrl: string) {
    this.selectedImage = imageUrl;
  }

  closeModal() {
    this.selectedImage = null;
  }
}
