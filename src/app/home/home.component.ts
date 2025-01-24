import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CalendarComponent } from '../calendar/calendar.component';
import { CommonModule } from '@angular/common';
import * as XLSX from 'xlsx';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
declare var gapi: any;
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CalendarComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit  {
  events: { title: string; date: Date }[] = [];
  constructor(private cdRef: ChangeDetectorRef,private router: Router){}
  private eventsSubject = new BehaviorSubject<any[]>([]);
  images: string[] = [
    'assets/dasavatharam_banner2.png',
    'assets/temple-sample.png',
  ];

  eventsLoaded = false;


  services = [
    { key: 'Ganapathy Homam', value: '2 Hours' },
    { key: 'Grahaparavesam (new house prayers)', value: '4 hours' },
    { key: 'Aayushya Homam (for kids)', value: '2 hours' },
    { key: 'Aayushya Homam (for adults) – 50, 59, 69, 79 birthday', value: '4 hours' },
    { key: 'Wedding', value: 'Depends on the family tradition' },
    { key: 'Sashtiyabhdha poorthy (60th Birthday & Wedding)', value: 'Depends on the family tradition' },
    { key: 'Sathabhishekam (80th Birthday & Wedding)', value: 'Depends on the family tradition' },
    { key: 'Sathyanarayana Swamy Vritham & Pooja', value: '2 hours' },
    { key: 'Rudhrabhishekam & chanting of Rudhram & Chamakam', value: '3 hours' },
    { key: 'Aayushya Homam (for kids)', value: '2 hours' },
  ];

  announcements: string[] = [
    'Come & be part of our Upcoming “108 Satyanarayana Pooja” on 12 Jan 2025',
  ];

  ngOnInit() {
    this.initGoogleAPI();
  }

  initGoogleAPI() {
    gapi.load('client:auth2', () => {
      gapi.client.init({
        apiKey: 'AIzaSyAUaFGhdx-twJC6GdtVzi7vUM5qaOn0p-g',  // Use your API key here
        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest']
      }).then(() => {
        this.loadFileFromDrive('1oIlJa2Mabnpb8XHWwN6GMZ1vqwFFJ6XD');
      });
    });
  }

  navigateToContactUs() {
    this.router.navigate(['/contact-us']);  // Navigate to Contact Us page
  }
 
  excelDateToJSDate(serialDate: number): Date {
    const excelEpoch = new Date(Date.UTC(1900, 0, 1));  // Use UTC to avoid time zone issues
    const daysOffset = serialDate - 1;  // Subtract 2 for Excel's leap year bug and starting at 1
    console.log(new Date(excelEpoch.getTime() + daysOffset * 24 * 60 * 60 * 1000));
    return new Date(excelEpoch.getTime() + daysOffset * 24 * 60 * 60 * 1000);
  }
  
  loadFileFromDrive(fileId: string) {
    gapi.client.drive.files.get({
      fileId,
      alt: 'media'
    }).then((response: any) => {
      const data = response.body;
      const workbook = XLSX.read(data, { type: 'binary' });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(sheet);
      console.log(jsonData);
      this.eventsSubject.next([this.events = jsonData.map((row: any) => ({
        title: row['Event Name'],
        date: this.excelDateToJSDate(row['Event Date'])
      }))]);
      this.eventsLoaded = true;
      this.cdRef.detectChanges();
    }).catch((error: any) => {
      this.eventsLoaded = true;
      console.error('Error loading file from Google Drive:', error);
    });
  }
 
}
