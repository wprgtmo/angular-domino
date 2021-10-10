import { IEvento } from 'src/app/common/models/evento.interface';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';

export class ExampleDataSource extends DataSource<IEvento> {
  /** Stream of data that is provided to the table. */
  data = new BehaviorSubject<IEvento[]>([]);

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<IEvento[]> {
    return this.data;
  }

  disconnect() {}
}



// export class LessonsDataSource implements DataSource<Lesson> {

//   private lessonsSubject = new BehaviorSubject<Lesson[]>([]);
//   private loadingSubject = new BehaviorSubject<boolean>(false);

//   public loading$ = this.loadingSubject.asObservable();

//   constructor(private coursesService: CoursesService) {}

//   connect(collectionViewer: CollectionViewer): Observable<Lesson[]> {
//       return this.lessonsSubject.asObservable();
//   }

//   disconnect(collectionViewer: CollectionViewer): void {
//       this.lessonsSubject.complete();
//       this.loadingSubject.complete();
//   }

//   loadLessons(courseId: number, filter = '',
//               sortDirection = 'asc', pageIndex = 0, pageSize = 3) {

//       this.loadingSubject.next(true);

//       this.coursesService.findLessons(courseId, filter, sortDirection,
//           pageIndex, pageSize).pipe(
//           catchError(() => of([])),
//           finalize(() => this.loadingSubject.next(false))
//       )
//       .subscribe(lessons => this.lessonsSubject.next(lessons));
//   }
// }
