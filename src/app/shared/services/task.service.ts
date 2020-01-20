import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ITask, Task } from '../models/task.model';

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    private taskCollectionRef: AngularFirestoreCollection<ITask>;
    tasks$: Observable<ITask[]>;

    constructor(private afs: AngularFirestore) {
        this.taskCollectionRef = this.afs.collection<ITask>('tasks');
        this.tasks$ = this.taskCollectionRef.snapshotChanges().pipe(
            map(actions => actions.map(a => {
                return { $key: a.payload.doc.id, ...a.payload.doc.data() };
            }))
        );
    }

    add(description: string) {
        if (description && description.trim().length) {
            this.taskCollectionRef.add({ ... new Task(description) });
        }
    }

    update(task: ITask) {
        this.taskCollectionRef.doc(task.$key).update(task);
    }

    delete(task: ITask) {
        this.taskCollectionRef.doc(task.$key).delete();
    }
}
