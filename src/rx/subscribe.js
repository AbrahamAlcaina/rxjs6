const noop = Function.prototype;
// send info to a real server seq/log/etc.
const sendServerLog = e => console.log(`Log sent to server ${e}`);
const completeLogin = fn => () => {
  sendServerLog(`finalized`);
  fn();
};
const errorLogin = fn => err => {
  sendServerLog(`error ${err}`);
  fn(err);
};
const subscribe = (next, error = noop, complete = noop) => stream$ =>
  stream$.subscribe(next, errorLogin(error), completeLogin(complete));

export { subscribe as default };
