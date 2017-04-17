(() => {

    var doSomething = () => {
        console.log('something');
    }

    var api = {
        doSomething: doSomething,
    };

    module.exports = api;
})();