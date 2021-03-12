// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (arguments.length) {
        return matrix.reduce(
            (arr, el, i) => (i & 1 ? arr.concat(el.reverse()) : arr.concat(el)),
            []
        );
    } else {
        return [];
    }
};
