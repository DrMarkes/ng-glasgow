import { Injectable } from '@angular/core';

import {Criteries} from "../criteries";
import {ECrit} from "../mock/ECrit-mock";
import {VCrit} from "../mock/VCrit-mock";
import {MCrit} from "../mock/MCrit";

@Injectable()
export class CriteriesService {

  constructor() { }

  getCriteries(title: string): Criteries[] {
    switch (title){
      case 'E': return ECrit;
      case 'V': return VCrit;
      case 'M': return MCrit;
    }

  }

}
