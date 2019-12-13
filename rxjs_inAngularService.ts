import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Subject} from 'rxjs';

@Injectable()
Export class MyService {
  private getDataSuccess = new Subject<any>();
  private getDataError = new Subject<any>();
  public getDataSuccess$ = this.getDataSuccess.asObservable(); // public subject: controller should subscribe to this one
  public getDataError$ = this. getDataError.asObservable(); // public subject: controller should subscribe to this one

  constructor (private http: HttpClient) {
  }
  private url  = ‘/api/photo’;  
  private headers = new Headers().set(Content-Type', 'application/json; charset=utf-8');
  getData() {
    const self = this;
    self.http.get(url, {headers})
    .pipe(map(data) => { return data.filter(a => a % 2 === 0);})) // do something
    .subscribe((response: <any>) => { // execute subscription callback
      self.getDataSuccess.next(response); // change the subject
    }, (e: HttpErrorResponse) => {
      self.getFeedDetailsError.next(e); // change error subject
    });
  }
  
  // example of using subject
  const filterOutEvens = filter(x => x % 2)
  const doubleBy = x => map(value => value * x);
  const sum = reduce((acc, next) => acc + next, 0);
  const source$ = Observable.range(0, 10) // in rxjs v5.xx use Observable, in v6.xx it's of()

  source$
  .pipe(
    filterOutEvens, 
    doubleBy(2), 
    sum)
  .subscribe(console.log); // 50
  // 'of' is a method introduced in rxjs v6.xx 
  of(1,2,3).map(x => x + 1).filter(x => x > 2); // chaining different methods
  // using .pipe()
  of(1,2,3).pipe(
    map(x => x + 1),
    filter(x => x > 2)
  );
}
