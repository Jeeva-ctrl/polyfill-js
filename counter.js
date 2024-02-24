export function LoadJavascript() {
  const promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log('called executor');
      resolve('settime out api resolved'), 100;
    });
  });

// Promise pollyfill

  function MyPromise(exec) {
    let resolveFunc,
      rejectFunc,
      value,
      isfullfilled = false,
      iscalled = false;

    this.then = function (thenHandler) {
      console.log('calling then');
      resolveFunc = thenHandler;
      return this;
    };

    this.catch = function (catchHandler) {
      console.log('calling catch');
      rejectFunc = catchHandler;
      return this;
    };

    function resolve(res) {
      console.log('calling resolve');
      value = res;
      isfullfilled = true;
      if (typeof resolveFunc === 'function' && !iscalled) {
        resolveFunc(value);
      }
    }
    function reject(res) {
      console.log('calling reject');
      value = res;
      isfullfilled = true;
      if (typeof rejectFunc === 'function' && !iscalled) {
        rejectFunc(value);
      }
    }

    exec(resolve, reject);
  }
  const promise1 = new MyPromise(function (resolve, reject) {
    setTimeout(() => {
      console.log('called executor');
      reject('settime out api resolved'), 100;
    });
  });
  promise1
    .then((res) => (document.getElementById('res').innerHTML = res))
    .catch(
      (res) => (document.getElementById('res').innerHTML = res + ' with error')
    );
}
