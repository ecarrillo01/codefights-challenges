let arr=require("./first-duplicate-test.json").arr;
function getDuplicatedIndex(n, arr) {
    let start = arr.indexOf(n);
    let end = arr.lastIndexOf(n);
    if (start < end) {
        for (let i = start + 1, max = end; i < max; i++) {
            let v = arr[i];
            if (v == n) {
                return i;
            }
        }
        return end;
    }
    return 0;
}

function firstDuplicate(a) {
    let initVal = -1;
    let duplicatedKey = initVal;
    let seen = [];
    for (let i = 0, max = a.length; i < max; i++) {
        if (!seen.includes(a[i])) {
            seen.push(a[i]);
            let dIndex = getDuplicatedIndex(a[i], a);
            if (dIndex > 0) { //Is duplicated
                if (duplicatedKey == -1) {
                    duplicatedKey = dIndex;
                } else {
                    if (dIndex < duplicatedKey) {
                        duplicatedKey = dIndex;
                        console.log("duplicated value=%d duplicated key=%d,i=%d", a[duplicatedKey],
                            duplicatedKey, i);
                        if (duplicatedKey < i) {
                            console.log("in this case i is greater than duplicated");
                            return duplicatedKey
                        }
                    }
                }
            }
        }
    }
    if (duplicatedKey > initVal) {
        return a[duplicatedKey];
    }
    return duplicatedKey;
}

console.log(firstDuplicate(arr));