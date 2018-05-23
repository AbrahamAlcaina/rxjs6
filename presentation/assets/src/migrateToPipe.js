/// <= v5.5, rxjs-compat
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
