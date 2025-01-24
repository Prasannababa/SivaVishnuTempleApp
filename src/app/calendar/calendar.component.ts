import { Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface EventDetails {
  title: string;
  date: Date;
}

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent implements OnChanges {
  @Input() events: EventDetails[] = [];
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['events']){
      console.log('Updated events:', this.events);
    }
  }
  @ViewChild('zeffyDiv') dynamicDiv!: ElementRef;
  currentMonth: Date = new Date();
  daysInMonth: { date: Date; events: string[] }[] = [];
  today: Date = new Date();

  ngOnInit(): void {
    console.log("Events - "+this.events);
    this.generateCalendar();
  }

  openLink(url: string, eventCount: number): void {
    if (eventCount > 0) {
      window.open(url, '_blank');
    } else {
      console.log('Event is not present. No action taken.');
    }
  }

  generateCalendar(): void {
    const year = this.currentMonth.getFullYear();
    const month = this.currentMonth.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days = [];
    this.events.forEach(event => {
      console.log(event.date.getDate());
      console.log(firstDay.getDate());
    });
    // Add previous month's days for alignment
    const prevMonthDays = firstDay.getDay(); // Sunday = 0
    for (let i = prevMonthDays; i > 0; i--) {
      const date = new Date(year, month, 1 - i);
      days.push({ date, events: [] });
    }

    // Add current month's days
    for (let i = 1; i <= lastDay.getDate(); i++) {
      const date = new Date(year, month, i);
      
      const events = this.events
        .filter(
          (event) =>
            event.date.getDate() === date.getDate() &&
            event.date.getMonth() === date.getMonth() &&
            event.date.getFullYear() === date.getFullYear()
        )
        .map((event) => event.title);
      days.push({ date, events });
    }

    // Add next month's days for alignment
    const nextMonthDays = 7 - (days.length % 7);
    for (let i = 1; i <= nextMonthDays && days.length % 7 !== 0; i++) {
      const date = new Date(year, month + 1, i);
      days.push({ date, events: [] });
    }

    this.daysInMonth = days;
  }

  isToday(date: Date): boolean {
    return (
      date.getDate() === this.today.getDate() &&
      date.getMonth() === this.today.getMonth() &&
      date.getFullYear() === this.today.getFullYear()
    );
  }


  goToPreviousMonth(): void {
    this.currentMonth = new Date(
      this.currentMonth.getFullYear(),
      this.currentMonth.getMonth() - 1,
      1
    );
    this.generateCalendar();
  }

  goToNextMonth(): void {
    this.currentMonth = new Date(
      this.currentMonth.getFullYear(),
      this.currentMonth.getMonth() + 1,
      1
    );
    this.generateCalendar();
  }
}
