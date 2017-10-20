import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';

import {DataService} from './data.service';

@Injectable()
export class ResultResolverService implements Resolve<Map<string, number>>{

  constructor(private responseService: DataService,
              private router: Router) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Map<string, number> | Observable<Map<string, number>> | Promise<Map<string, number>> {

    return this.responseService.getResult().take(1).map(result => {

      if(result.size === 3) {
        return result;
      } else {
        this.router.navigate(['/']);
        return null;
      }
    });
  }

}
