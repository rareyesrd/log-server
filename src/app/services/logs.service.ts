import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { LogDTO } from '../models/logs.interface';
@Injectable({
  providedIn: 'root'
})
export class LogsService {

  logList: AngularFireList<LogDTO[]>;
  // selectedLogDTO: Logs;

  constructor(private db: AngularFireDatabase) { }

  getLogs(): AngularFireList<LogDTO[]> {
    return this.db.list('logs');
  }

  deleteLog($key: string): void {
    this.logList.remove($key);
  }
}
