import { Holiday } from './../../../../models/leave-management/holiday';
import { AcceptLeaveService } from './../../../../services/leave-management/accept-leave.service';
import { HolidayCalendarService } from './../../../../services/leave-management/holiday-calendar.service';
import {
  Component,
  ViewChild,
  TemplateRef,
  OnInit
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView
} from 'angular-calendar';
import { TokenStorageService } from 'src/app/services/login/token-storage.service';
import { InteractionService } from 'src/app/services/interaction.service';

const colors: any = {
  gray: {
    primary: '#464646',
    secondary: '#FFFFFF'
  }
};

@Component({
  selector: 'app-leave-calendar',
  templateUrl: './leave-calendar.component.html',
  styleUrls: ['./leave-calendar.component.css']
})
export class LeaveCalendarComponent implements OnInit {

  @ViewChild('modalContent')

  modalContent: TemplateRef<any>;
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };


  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        console.log(event);
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [];

  activeDayIsOpen: boolean = true;
  info: any;

  constructor(private modal: NgbModal,
    private holidayCalendarService: HolidayCalendarService,
    private acceptLeaveService: AcceptLeaveService,
    private token: TokenStorageService,
    private interactionService: InteractionService
  ) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    console.log(this.info.authorities);
    this.getAllHolidays();
    if (this.info.authorities == 'HR' || this.info.authorities == 'ADMIN') {
      this.getAllLeaveRequest();
    }
    this.getSuccessMsg();
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      this.viewDate = date;
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.handleEvent('Dropped or resized', event);
    this.refresh.next();
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    if (this.info.authorities != 'EMPLOYEE') {
      this.modal.open(this.modalContent, { size: 'lg' });
    }
  }

  // addEvent(): void {
  //   this.events.push({
  //     title: 'New event',
  //     start: startOfDay(new Date()),
  //     end: endOfDay(new Date()),
  //     color: colors.red,
  //     draggable: true,
  //     resizable: {
  //       beforeStart: true,
  //       afterEnd: true
  //     }
  //   });
  //   this.refresh.next();
  // }

  getAllHolidays() {
    this.holidayCalendarService.getAllHoliday().subscribe(data => {
      if (this.info.authorities == 'HR' || this.info.authorities == 'ADMIN') {
        data.forEach(holiday => {
          this.events.push({
            title: holiday.title,
            start: new Date(holiday.start),
            end: new Date(holiday.end),
            color: holiday.color,
            draggable: holiday.draggable,
            actions: this.actions,
            allDay:holiday.allDay,
            resizable: {
              beforeStart: holiday.resizable.beforeStart,
              afterEnd: holiday.resizable.afterEnd,
            }
          });
          this.refresh.next();
        });
      } else if (this.info.authorities == 'EMPLOYEE') {
        data.forEach(holiday => {
          this.events.push({
            title: holiday.title,
            start: new Date(holiday.start),
            end: new Date(holiday.end),
            color: holiday.color,
            draggable: false,
            allDay:holiday.allDay,
            resizable: {
              beforeStart: false,
              afterEnd: false,
            }
          });
          this.refresh.next();
        });
      }
    })
  }

  getAllLeaveRequest() {
    this.acceptLeaveService.getAllAcceptData().subscribe(data => {
      data.forEach(leave => {
        this.events.push({
          title: leave.leaveRequest.user.fullName,
          start: new Date(leave.leaveRequest.startDate),
          end: new Date(leave.leaveRequest.endDate),
          color: colors.gray,
          draggable: false,
          allDay: true,
          resizable: {
            beforeStart: false,
            afterEnd: false,
          }
        });
        this.refresh.next();
      });
    })
  }

  getSuccessMsg() {
    this.interactionService.msgDataSource$.subscribe(data => {
      if (data == "eventAdded") {
        this.events = [];
        this.getAllHolidays();
        this.getAllLeaveRequest();
      }
    });
  }
}
