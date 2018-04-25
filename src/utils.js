export const curry = (fn, ...args) => {
    const _curry = (args) =>
      args.length < fn.length
        ? (..._args) => _curry([...args, ..._args])
        : fn(...args);
  
    return _curry(args);
  };

export const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));  