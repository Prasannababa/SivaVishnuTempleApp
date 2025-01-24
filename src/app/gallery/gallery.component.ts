import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  images = [
    { url: 'assets/gallery/background_2.jpg', title: 'Temple' },
    { url: 'assets/gallery/dark-shiva-bg.jpg', title: 'Meditating Siva' },
    { url: 'assets/gallery/sage-vyasa.jpg', title: 'Sage Vyasa' },
    { url: 'assets/gallery/temple1.jpg', title: 'Temple Gopuram' },
    { url: 'assets/gallery/temple2.jpg', title: 'Temple Parihara 1' },
    { url: 'assets/gallery/temple3.jpg', title: 'Temple Parihara 2' },
    { url: 'assets/gallery/temple2.jpg', title: 'Temple Parihara 1' },
    { url: 'assets/gallery/temple3.jpg', title: 'Temple Parihara 2' },
    { url: 'assets/gallery/sage-vyasa.jpg', title: 'Sage Vyasa' },
    { url: 'assets/gallery/temple1.jpg', title: 'Temple Gopuram' }
  ];

  selectedImage: string | null = null;

  openModal(imageUrl: string) {
    this.selectedImage = imageUrl;
  }

  closeModal() {
    this.selectedImage = null;
  }
}
