/// < v5.4
input$
   .map(v => v + 1)
   .filter(v => v % 2 === 0)
   .reduce((total, v) => total + v, 0);

/// v5.5+ / v6
import { filter, map, reduce } from 'rxjs/operators';
input$
   .pipe(
      map(v => v + 1),
      filter(v => v % 2 === 0),
      reduce((total, v) => total + v, 0)
   );

/// < v5.4 Custom operators
Rx.Observable.prototype.addOne = function() {
   return this.map(v => v + 1);
}
Rx.Observable.prototype.filterEven = function() {
   return this.filter(v => v % 2 === 0);
}
Rx.Observable.prototype.addAll = function() {
   return this.reduce((total, v) => total + v, 0)
}

/// v5.5+
const addOne = map(v => v + 1);
const filterEven = filter(v => v % 2 === 0);
const addAll = reduce((total, v) => total + v, 0)

input$
   .pipe(
      addOne,
      filterEven,
      addAll
   );
