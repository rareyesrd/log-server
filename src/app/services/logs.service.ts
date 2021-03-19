import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Subject } from 'rxjs';
import { LogDTO } from '../models/logs.interface';
@Injectable({
  providedIn: 'root'
})
export class LogsService {

  logList: AngularFireList<LogDTO[]>;
  selectedLog = new Subject<number>();

  constructor(private db: AngularFireDatabase) {
    this.getLogs();
  }

  getLogs(): AngularFireList<LogDTO[]> {
    return this.db.list('logs');
  }

  deleteLog($key: string): void {
    this.logList.remove($key);
  }
}
