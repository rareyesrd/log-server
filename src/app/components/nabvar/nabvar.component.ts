import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LogsService } from 'src/app/services/logs.service';

@Component({
  selector: 'app-nabvar',
  templateUrl: './nabvar.component.html',
  styleUrls: ['./nabvar.component.scss']
})
export class NabvarComponent implements OnInit {
  status = [
    { name: 'ALL', key: 7 },
    { name: 'TRACE', key: 0 },
    { name: 'DEBUG', key: 1 },
    { name: 'INFO', key: 2 },
    { name: 'LOG', key: 3 },
    { name: 'WARNING', key: 4 },
    { name: 'ERROR', key: 5 },
    { name: 'FATAL', key: 6 },
    { name: 'OFF', key: 8 },
  ];
  constructor(private losService: LogsService) { }

  ngOnInit(): void {

  }

  onFilterSelected(value: string): void {
    this.losService.selectedLog.next(parseInt(value, 0));
  }

}
