import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LogsService {
  selectedLog = new Subject<number>();
  constructor(private http: HttpClient) { }

  getLogs(): any {
    return new Promise((resolve, reject) => {
      const params = {
        q: '*',
        size: '1000'
      };
      this.http.get(`${environment.api}_search`, { params }).toPromise()
        .then(data => {
          // tslint:disable-next-line:no-string-literal
          const logList = data['hits'].hits.map(logs => logs._source);
          resolve(logList);
        }).catch(error => reject(error));
    });
  }

  deleteLog() {

  }
}
