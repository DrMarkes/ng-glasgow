import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {PatientResponse} from '../model/patient-response';

@Injectable()
export abstract class ResponseService {

  abstract getResponse(): Observable<PatientResponse[]>;

  abstract setResult(result: Map<string, number>): void;

  abstract getResult(): Observable<Map<string, number>>;
}
