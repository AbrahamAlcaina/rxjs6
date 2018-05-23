/// <= v5.5
Rx.Observable.prototype.filterByProperties =
   function(properties) {
      return this.filter(
         data => subjectHasProperties(data, properties)
      );
   }

input$
   .filterByProperties(['id', 'value'])
   .map(obj => obj.value)
   .filter(v => v % 2 === 0);

/// v5.5+ / v6
const filterByProperties = properties => source =>
   source.filter(
      data => subjectHasProperties(data, properties)
   );
const pickValue = map(obj => obj.value);
const filterEven = filter(v => v % 2 === 0);

input$
   .pipe(
      filterByProperties(['id', 'value']),
      pickValue,
      filterEven
   );
