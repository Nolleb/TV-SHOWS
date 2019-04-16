export default function sortByDate(array, key) {
    return array.sort(function(a, b) {
        const x = new Date(a[key]).getTime();
        const y = new Date(b[key]).getTime();
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}