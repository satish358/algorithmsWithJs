let sequeantialSearch = (key, ar) => {
    result = {}
    ar.forEach((el, ind) => {
        if(el == key) {
            result['index'] = ind;
            result['element'] = el;
        }
    });
    return result;
}

module.exports = sequeantialSearch;