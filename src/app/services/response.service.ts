import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {PatientResponse} from '../model/patient-response';

@Injectable()
export abstract class ResponseService {

  abstract getResponse(): Observable<PatientResponse[]>;
}
