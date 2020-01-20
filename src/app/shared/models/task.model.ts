import * as firebase from 'firebase';

export interface ITask {
    $key?: string;
    finished: boolean;
    createdAt: any;
    description: string;
}

export class Task implements ITask {
    finished = false;
    createdAt = firebase.firestore.FieldValue.serverTimestamp();
    description: string;

    constructor(description: string) {
        this.description = description;
    }
}
