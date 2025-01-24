import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule for *ngFor

@Component({
  selector: 'app-trustees',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './trustees.component.html',
  styleUrls: ['./trustees.component.css']
})
export class TrusteesComponent {
  trustees = [
    {
      name: 'Ananth Seshan',
      position: 'President',
      email: 'admin@sivavishnutemple.com',
      image: 'assets/profile-img-m.png',
      profile: 'Dr Ananth Seshan is the Chairman of 5G Group of Companies.  He is Chair of the Governance Committee and a Member of the Board of Directors of MESA International, a US headquartered global industry organization that introduces best practices and advanced technology to the manufacturing industry.  He is also a member of President’s Circle of the University of Toronto.'
    },
    {
      name: 'Devendran Devaraj',
      position: 'Vice President',
      email: 'admin@sivavishnutemple.com',
      image: 'assets/profile-img-m.png',
      profile: ''
    },
    {
      name: 'Sujatha Swaminathan',
      position: 'Secretary',
      email: 'admin@sivavishnutemple.com',
      image: 'assets/profile-img-w.png',
      profile: 'Ms Sujatha Swaminathan has been focused on Customer Centric Service-related roles for over 25 years.  Deeply involved in spiritual activities and dedicated to service to the community at large, she is a Human Resource professional and an entrepreneur running cloud-based SME in Singapore, India & USA.'
    },
    {
      name: 'Krishnan Sekaran',
      position: 'Treasurer',
      email: 'admin@sivavishnutemple.com',
      image: 'assets/profile-img-m.png',
      profile: ''
    }
  ];
}
