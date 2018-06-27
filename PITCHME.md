# Rx6, the coolest Rx evolution
Note:
Introduccion de RX
+ 
TOC
+ 
Motivación de esta charla
---

### Abraham Alcaina
![Abraham](presentation/assets/abraham.jpg)

@fa[twitter] @AbrahamAlcaina

@fa[github] AbrahamAlcaina

+++

### Víctor Oliva
![Victor](presentation/assets/victor.jpg)

@fa[twitter] @voliva_v

@fa[github] voliva

---
# Rx
@fa[arrow-down]

Note:
Juego stream levantar la mano 

+++
![Yoda](presentation/assets/yoda.png)

A Stream Everything Is

+++
![Array vs stream](presentation/assets/arrayVsStream.png)

Note:
In general, we can think of streams as values over time. If we compare it to an array, with an array we have all the
values toghether in a single time, while a stream we get new values as the time passes. Note that these values can be
arrays, or even other streams (so you can have an array of arrays or a stream of arrays or a stream of streams)

Arrays are used to hold a group of values. Streams represent new values over time. That's why they are specially suitable
for events, or data that changes over time.

+++
## Sources

- Events: fromEvent(document, 'click')
- Service calls: SockJS/Socket.io/Stomp/etc.
- Promises
- Others

Note:
Others: Arrays, Interval

+++?code=presentation/assets/src/composition.js&lang=js&title=Example

@[3-11](addEventListener)
@[13-20](with rxjs)

+++?code=presentation/assets/src/composition2.js&lang=js

+++
![Composition](presentation/assets/composition.png)

+++
## Operators

- filter
- map
- scan (reduce)
- take
- buffer
- combineLatest
- concat
- debounce
- distinct
- publish

Note:
There are over 100 operators, but these are the most often used (or variations of these, like scan, bufferTime, throttle, debounceTime, etc. )
We can also define our own operators so we can use them everywhere we need, but most of what usually needs to be done can be
covered using the new ones.
(source https://github.com/ReactiveX/rxjs/blob/master/src/operators/index.ts)

---
# What's new in RxJS@6?
@fa[arrow-down]

+++?code=presentation/assets/src/import.js&lang=js&title=Imports

Note:
- Modularity
- Tree shaking

+++?code=presentation/assets/src/pipe.js&lang=js&title=Pipe

Note:
- Compose operators (alias, reuse operators, etc.)
- Custom operators
- Easier to test (pure functions)

---
# Migrating from v5
@fa[arrow-down]

+++?code=presentation/assets/src/migrateToPipe.js&lang=js&title=Migrate to pipe
@title[Migrate to pipe]

@[1-5](<= v5.5)
@[9-10,14](Using pipe)
@[7-8](New imports)
@[1-3,7-11,14](Map)
@[1-4,7-12,14](Filter)
@[1-5,7-13,14](Reduce)

+++
## Few operator name changes

Note:
Reserved JS names (if => iif, throw => throwError, do => tap, catch => catchError, etc.)
some instance methods to static methods (merge, concat, combineLatest, zip, etc.)

+++?code=presentation/assets/src/tslint_migrate.sh&lang=bash&title=TSLint tool magic
@title[TSLint tool magic]

Note:
Tip: Their documentation says that you might want to run this a few times.

+++
## rxjs-compat

Note:
To make migration easier we can use rxjs-compat, which brings old v5 API to v6. We still need to handle something though - Custom Operators

+++?code=presentation/assets/src/customOperators.js&lang=js&title=Custom Operators
@title[Custom Operators]

@[1-7](Old custom operator)
@[9-12](Old usage)
@[14-18](New custom operator)
@[19,20](Aliases)
@[22-27](New usage)

Note:
"Aliases" can be now used and they make sense, whereas before you shouldn't assume the type of the data when adding operators to the prototype (b/c it's being used in all types of Observable). And it works in TS
Sidenote - gitpitch only shows 61x14 window of code
Question => Does tslint tool migrate custom operators (defined in prototype) => No it doesn't, just basic boilerplate stuff (imports, pipes, method names)

---
@title[Example pipeline]
# Pipeline example
@fa[arrow-down]

+++
@title[Caesar algorithm explanation]
## Caesar cipher
![Caesar cipher](presentation/assets/Caesar_cipher.png)

+++
@title[Show application]
<iframe class="stretch" data-src="http://localhost:8080/"></iframe>


+++?code=src/steps/66_mesh.mjs&lang=js&title=Implementation with inline functions
@title[implementation with inline functions]

@[1-10](imports that change the prototype)
@[12-23](Hard to test it)
@[24-30](Hard to test it)
@[31-34](Suscribe to show the result)

Note:
Here we want to show a classical RX application with inline functions as operators
Things to improve: 
- Change prototype 
- Hard to test it 
- No code reuse 

+++?code=src/steps/00_classical.mjs&lang=js&title=Use pure functions
@title[Use pure functions]

@[9-18](pure functions)
@[19-28](easy to read)
@[1-8](change prototype)

Note:
Here we use pure functions and we group in two groups:
  - get last character
  - caesar algorithm
Improvements:
- Easy to test maps 
- pure functions
- More reusable

Things to improve: 
- Change prototype

+++?code=src/steps/01_classical_with_compose.mjs&lang=js&title=Use compose to have a cesar algorithm
@title[Use compose to have a cesar algorithm]

@[16-21](Simple responsability)
@[23-29](Only one map)
@[1-8](change prototype)

Note:
Improvements:
- Now we have a Caesar Encrypt Algorithm
- Only one map little improvement
Things to improve: 
- Change prototype

+++?code=src/steps/03_classical_pipe.mjs&lang=js&title=Use pipe operator and not change the prototype
@title[Use pipe operator]

@[3](No prototype changes)
@[25-31](use of pipe method)

Note:
Usign the new way to import operators and the pipe method we don't change the prototype and tools like webpack will `tree-sharking` the code
Improvements 
- Avoid prototype change
- Use pipe method

+++?code=src/steps/04_pipe.mjs&lang=js&title=Use pipe function and now we can reuse the stream logic
@title[Use pipe function]

@[1-4](import pipe function)
@[25-29](reusable logic)
@[32-35](let operator)

Note:
Thanks to the pipe function is possible to create a reusable pieces of code over streams
Improvements
- Complete reusable encryptLogic
- Custom operator

+++
@title[Pipeline operator]
## Pipeline operator
  https://github.com/tc39/proposal-pipeline-operator

Note:
The pipeline operator is under revision by TC39. With this new feature will be able to create more
readable code.
Examples
- Unix shell | in bash
- Other languages like Elixir, F#
- Current status stage 2
- Babel support

+++?code=src/steps/05_pipe_operator.mjs&lang=js&title=Use pipe operator
@title[Use pipe operator]

@[1-4](not used pipe function)
@[10-23](pipe operator)
@[26-30](pipe operator)

Note:
Improvements:
- More redeable

+++?code=src/operators/caesar.js&lang=js&title=Create a Caesar operator
@title[Caesar operator]

@[4-13](Caesar Algorithm)
@[15-19](Stream Caesar Algorithm)

Note:
Let's extract the code in another file to have more

+++?code=src/operators/lastLetter.js&lang=js&title=Extract last letter in an operator
@title[Extract last letter in an operator]

+++?code=src/steps/07_reutilizable_lastLetter.mjs&lang=js&title=import lastLetter/Ceasear operators 
@title[import lastLetter/Ceasear operators ]

Note:

- Fully readeable code
- fully reasuable

+++
@title[Custom subscribe]
## Custom subscribe
  Real code reuse example

Note:
Here a production code taking advantage of the pipeline operator

+++?code=src/rx/subscribe.mjs&lang=js&title=HOF subscribe
@title[HOF subscribe]

Note:
Reusuable x-cutting concers, in this case have a subscribe that automatically logs on fails and finishes
Improvements
- Define a a custom subscribe to enhace cross-cutting concerns
- login, but why not unsubscribe
- Easy vs Simple
Subscribe 
  - 3 functions next, error, finally
  - custom cross cutting concern
  - HOF to enhance next, error
  - HOF for susbscribe

+++?code=src/steps/08_reutilizable_subscribe.mjs&lang=js&title=Extract generic subscribe
@title[Extract generic subscribe]

@[4](import custom subscribe)
@[10-14](pipe to subscribe)

Note:
- reusable subscribe
- with cross cutting concerns

+++?code=src/steps/09_extract_dom.mjs&lang=js&title=Extract DOM operations
@title[Extract DOM operations]

Note:
  - Final version
  - Nobody uses this iterative process (Just avoid the simpler ones)