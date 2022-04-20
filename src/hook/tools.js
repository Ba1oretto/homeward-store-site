const isBlank = function (target) {
    return (target === '' || target === null || target === {} || target === undefined);
}
const rounding = function (number, keep) {
    return number.toFixed(keep)
}
export {rounding, isBlank}