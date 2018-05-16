Rx.js 6
--- 
Who I am
---
Introduction to rx
+++
All things are streams
+++
Copia de internnet
---
What's the new in RX6?
---
Migration de v5 -> v6
+++
First vX.Y -> v5.5
- Migrate to pipe
- tslint auto migrate code
+++
Second v5.5 -> v6 compat
- Imports migration
+++
Third v6 compact -> v6
+++
Enjoy

---
@title[Example pipeline]
# Pipeline example
@fa[arrow-down]
+++
@title[Pipeline function]
## Pipeline function
  https://github.com/ReactiveX/rxjs/blob/master/doc/pipeable-operators.md

+++
@title[Pipeline operator]
## Pipeline operator
  https://github.com/tc39/proposal-pipeline-operator

+++
@title[Caesar algorithm explanation]
## Caesar cipher
![Caesar cipher](presentation/assets/Caesar_cipher.png)

+++?image=presentation/assets/66.png&size=contain&color=#ABB8C3
<!-- .slide: data-layout="top-left" -->
@title[classical implementation with inline functions]
@div[right-50]
@color[gray](Problems:)
@ul
- Change prototype
- Hard to test it
- No code reuse 
@ulend
@divend

+++?image=presentation/assets/00.png&size=contain&color=#ABB8C3
@title[classical implementation in Rx5]

+++?image=presentation/assets/01.png&size=contain&color=#ABB8C3
@title[Use compose to avoid 3 maps]

+++?image=presentation/assets/02.png&size=contain&color=#ABB8C3
@title[Use curried function, just to show an alternative way]

+++?image=presentation/assets/03.png&size=contain&color=#ABB8C3
@title[Use pipe operator in Rx5.5]

+++?image=presentation/assets/04.png&size=contain&color=#ABB8C3
@title[Use pipe function]

+++?image=presentation/assets/05.png&size=contain&color=#ABB8C3
@title[Use pipe operator]

+++?image=presentation/assets/06.png&size=contain&color=#ABB8C3
@title[Extract Caesar algorithm in an operator]

+++?image=presentation/assets/caesar.png&size=contain&color=#ABB8C3
@title[Caesar operator]

+++?image=presentation/assets/07.png&size=contain&color=#ABB8C3
@title[Extract last letter in an operator]

+++?image=presentation/assets/lastLetter.png&size=contain&color=#ABB8C3
@title[LastLetter operator]

+++?image=presentation/assets/08.png&size=contain&color=#ABB8C3
@title[Extract generic subscribe]

+++?image=presentation/assets/subscribe.png&size=contain&color=#ABB8C3
@title[HOF subscribe]

+++?image=presentation/assets/09.png&size=contain&color=#ABB8C3
@title[Extract DOM manipulation]

+++?image=presentation/assets/domManipulation.png&size=contain&color=#ABB8C3
@title[DOM manipulation]
