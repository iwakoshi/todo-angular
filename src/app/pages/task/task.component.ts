import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

import { Observable } from 'rxjs';
import { faCheck, faPen, faTrashAlt, faSave } from '@fortawesome/free-solid-svg-icons';

import { TaskService } from '@app/shared/services/task.service';
import { Task, ITask } from '@app/shared/models/task.model';

@Component({
    selector: 'todo-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
    @Output() createTask = new EventEmitter(false);
    @ViewChild('editDescription') editDescription: ElementRef;
    @ViewChild('createDescription') createDescription: ElementRef;

    description = new FormControl('');
    selectedDescription = new FormControl('');
    tasks$: Observable<ITask[]>;
    filter: string;
    editing: ITask;

    faPen = faPen;
    faSave = faSave;
    faCheck = faCheck;
    faTrashAlt = faTrashAlt;

    constructor(
        private taskService: TaskService,
        public route: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.tasks$ = this.taskService.tasks$;
        this.route.params.subscribe(param => this.filter = param.finished);
    }

    clear(): void {
        this.description.reset();
        this.selectedDescription.reset();
        this.editing = null;
        setTimeout(() => {
            this.createDescription.nativeElement.focus();
        }, 0);
    }

    toggleStatus(task: Task) {
        task.finished = !task.finished;
        this.taskService.update(task);
    }

    create() {
        const description = this.description.value.trim();
        if (description.length) {
            this.taskService.add(description);
        }
        this.clear();
    }

    startEdit(task: Task) {
        this.selectedDescription.setValue(task.description);
        this.editing = task;
        setTimeout(() => {
            this.editDescription.nativeElement.focus();
        }, 0);
    }

    stopEdit(task: Task) {
        task.description = this.selectedDescription.value;
        this.taskService.update(task);
        this.clear();
    }

    delete(task: Task) {
        this.taskService.delete(task);
    }
}
