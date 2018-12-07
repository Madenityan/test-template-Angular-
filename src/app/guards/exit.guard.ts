import {CanDeactivate} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

export interface OnInit {
  canDeactivate: () => boolean | Observable<boolean>;
}

@Injectable()
export class ExitGuard implements CanDeactivate<OnInit> {

  canDeactivate(component: OnInit): Observable<boolean> | boolean {

    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
