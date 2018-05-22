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
What's new in RX6?
---
Migrating v5 -> v6
+++?code=presentation/assets/src/pipe_5.5.js&lang=js
@title[vX.Y => v5.5]

@[1-5](< v5.5)
@[9-14](Using pipe)
@[7-8](New imports)
@[16-25](Custom operators < v5.5)
@[27-37](v5.5+)

+++?code=presentation/assets/src/tslint_migrate.sh&lang=bash&title=TSLint tool magic
@title[TSLint tool magic]

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
@title[classical implementation with inline functions]
@ul[issues]
- Things to improve: 
- Change prototype 
- Hard to test it 
- No code reuse 
@ulend

+++?image=presentation/assets/00.png&size=contain&color=#ABB8C3
@title[classical implementation in Rx5]
@ul[issues]
- Improvements:
- Easy to test maps
- More reusable
- Things to improve: 
- Change prototype
@ulend

+++?image=presentation/assets/01.png&size=contain&color=#ABB8C3
@title[Use compose to avoid 3 maps]
@ul[issues]
- Improvements:
- Now we have a Caesar Encrypt Algorithm
- Things to improve: 
- Change prototype
@ulend

+++?image=presentation/assets/02.png&size=contain&color=#ABB8C3
@title[Use curried function, just to show an alternative way]
@ul[issues]
- Alternative solution with curry
@ulend

+++?image=presentation/assets/03.png&size=contain&color=#ABB8C3
@title[Use pipe operator in Rx5.5]
@ul[issues]
- Use pipe opeator
- PROS
- Avoid prototype change
@ulend

+++?image=presentation/assets/04.png&size=contain&color=#ABB8C3
@title[Use pipe function]
@ul[issues]
- Use pipe function
- PROS 
- Complete reusable encryptLogic
@ulend

+++?image=presentation/assets/05.png&size=contain&color=#ABB8C3
@title[Use pipe operator]
@ul[issues]
- Use pipeline operator like Elixir, F#, etc
- PROS 
- Improve readability
@ulend

+++?image=presentation/assets/06.png&size=contain&color=#ABB8C3
@title[Extract Caesar algorithm in an operator]
@ul[issues]
- Extract Caesar algorithm as a rx operator
@ulend

+++?image=presentation/assets/caesar.png&size=contain&color=#ABB8C3
@title[Caesar operator]

+++?image=presentation/assets/07.png&size=contain&color=#ABB8C3
@title[Extract last letter in an operator]
@ul[issues]
- Extract lastLetter as a rx operator
@ulend

+++?image=presentation/assets/lastLetter.png&size=contain&color=#ABB8C3
@title[LastLetter operator]

+++?image=presentation/assets/08.png&size=contain&color=#ABB8C3
@title[Extract generic subscribe]
@ul[issues]
- reusable subscribe
@ulend

+++?image=presentation/assets/subscribe.png&size=contain&color=#ABB8C3
@title[HOF subscribe]
@ul[issues]
- Define a a custom subscribe to enhace it with login
@ulend

+++?image=presentation/assets/09.png&size=contain&color=#ABB8C3
@title[Extract DOM manipulation]

+++?image=presentation/assets/domManipulation.png&size=contain&color=#ABB8C3
@title[DOM manipulation]
