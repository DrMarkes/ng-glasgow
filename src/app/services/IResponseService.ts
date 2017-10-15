import {PatientResponse} from '../model/patientResponse';
import {Observable} from 'rxjs/Observable';

export interface IResponseService {
  getResponse(): Observable<PatientResponse[]>;
}
