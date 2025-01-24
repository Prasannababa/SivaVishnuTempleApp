import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  standalone: true,
  imports:[ReactiveFormsModule],
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactForm!: FormGroup;
  backgroundColor = '#3498db'; // Dynamic background color
  imageUrl = 'assets/image.jpg'; // Dynamic image URL
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // Initialize form with controls
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      date: ['', Validators.required],
      comments: ['',Validators.required]
    });
  }

  // Submit form handler
  submitForm() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      const formValues = this.contactForm.value;
      const subject = 'Contact Us Form Submission';
      const body = `
        First Name: ${formValues.firstName}
        Last Name: ${formValues.lastName}
        Email: ${formValues.email}
        Phone Number: ${formValues.phoneNumber}
        Date: ${formValues.date}
        Comments:  ${formValues.comments}
      `;

      const mailtoLink = `mailto:admin@sivavishnutemple.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open the default email client with pre-filled details
      window.location.href = mailtoLink;
      // Implement form submission logic here (e.g., HTTP call)
    } else {
      alert('Please fill out all required fields');
    }
  }
}
