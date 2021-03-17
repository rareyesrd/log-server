import { LogLevels } from '../utils/enums/log-levels.enum';

export interface LogDTO {
  $key: string;
  log: Log;
}
export class Log {
  id: number;
  level: LogLevels;
  timestamp: string;
  fileName: string;
  lineNumber: string;
  message: string;
  additional: any[];

}


