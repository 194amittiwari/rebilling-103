import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionTimerService } from './session-timer.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [SessionTimerService],
  // declarations: []
})
export class SessionTimerServiceModule { }