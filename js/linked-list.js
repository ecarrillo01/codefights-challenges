'use strict';
//let l1 = arrayToListNode([9665]);
//let l2 = arrayToListNode([6933, 8443, 5132, 6809, 8519, 9096]);

function ListNode(x) {
    this.value = x;
    this.next = null;
}

function arrayToListNode(arr) {
    let i = arr.length;
    let prev = null;
    let curr = null;
    while (i--) {
        curr = new ListNode(arr[i]);
        if (prev) {
            curr.next = prev;
        }
        prev = curr;
    }
    return prev;
}

function createListNode(...a) {
    return arrayToListNode(a);
}

function reverseListNode(a) {
    let a1 = null;
    let prev = null;
    while (a) {
        prev = a1;
        a1 = new ListNode(a.value);
        a1.next = prev;
        a = a.next;
    }
    return a1;
}

function loopOverList(l, fn) {
    let tmp = l;
    let k = 0;
    let prev = null;
    while (tmp) {
        let r = fn(k, tmp, prev, tmp.next);
        if (r === false) {
            console.log("break at value %s", tmp.value);
            break;
        }
        prev = tmp;
        tmp = tmp.next;
        k++;
    }
}

function getLastListItem(l) {
    let tmp = l;
    while (tmp.next) {
        tmp = tmp.next;
    }
    return tmp;
}


function listLength(l) {
    let cnt = 0;
    loopOverList(l, function (k, v) {
        cnt++;
    });
    return cnt;
}