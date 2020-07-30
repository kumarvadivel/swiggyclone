import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
providedIn: 'root'
})
export class SharedcartService {
private subject = new Subject<any>();
sendincClickEvent() {
  this.subject.next();
}
getincClickEvent(): Observable<any>{ 
  return this.subject.asObservable();
}
senddecClickEvent() {
  this.subject.next();
}
getdecClickEvent(): Observable<any>{ 
  return this.subject.asObservable();
}
}