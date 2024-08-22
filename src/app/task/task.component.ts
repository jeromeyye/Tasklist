import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from '../highlight.directive';
import { HoverDirective } from '../hover.directive';
import { CommonModule } from '@angular/common';
import { PipesPipe } from '../pipes.pipe';
import { TaskListComponent } from '../task-list/task-list.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    FormsModule,
    HighlightDirective,
    HoverDirective,
    CommonModule,
    PipesPipe,
    TaskListComponent,
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input() task!: any;
  @Output() save = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<any>();

  editTask: any; 

  ngOnInit(): void {
    this.editTask = { ...this.task }; 
  }

  save_task() {
    this.save.emit(this.editTask);
  }
  cancel_task() {
    this.cancel.emit();
  }
}
