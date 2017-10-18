import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {IResponseService} from './IResponseService';
import {PatientResponse} from '../model/patientResponse';

@Injectable()
export abstract class ResponseService implements IResponseService{

  abstract getResponse(): Observable<PatientResponse[]>;
}
