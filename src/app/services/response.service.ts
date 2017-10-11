import { Injectable } from '@angular/core';

import {Response} from "../response";
import {RESPONSES} from "../mock/response-mock";

@Injectable()
export class ResponseService {

  constructor() { }

  getResponse(): Response[] {
    return RESPONSES;
  }

}
