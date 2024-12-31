/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function (functions) {
    return await new Promise((resolve, reject) => {
        let res = Array(functions.length);
        let wat = functions.length;
        for (let i = 0; i < functions.length; i++) {
            functions[i]().then((result) => {
                res[i] = result;
                wat--
                if (wat === 0) resolve(res)
            }).catch(reject)
        }
    })

};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */