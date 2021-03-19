import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
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
  filterSelected: number;
  constructor(private logsService: LogsService) { }

  async ngOnInit(): Promise<void> {
    setInterval(async () => {
      this.logs = await this.logsService.getLogs();
    }, 5000);
    console.log(this.logs);

  }

  getLevelString(level: LogLevels): string {
    return Object.assign(LogLevels)[level];
  }

}
