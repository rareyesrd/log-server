import { Component, OnInit } from '@angular/core';
import { Log } from 'src/app/models/logs.interface';
import { LogsService } from 'src/app/services/logs.service';
import { LogLevels } from 'src/app/utils/enums/log-levels.enum';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {
  logs: Log[] = [];

  constructor(private logsService: LogsService) { }

  ngOnInit(): void {
    this.logsService.getLogs().snapshotChanges().subscribe(
      logs => {
        this.logs = [];
        logs.forEach((element, i) => {
          const x = element.payload.toJSON();
          const log = x as Log;
          log.id = i;
          this.logs.push(log);
        });
        this.logs.reverse();
      }
    );
  }

  getLevelString(level: LogLevels): string {
    return Object.assign(LogLevels)[level];
  }

}
