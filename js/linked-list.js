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

function getLastListItem(l) {
    let tmp = l;
    while (tmp.next) {
        tmp = tmp.next;
    }
    return tmp;
}

function ListNodeAppend(l, v) {
    getLastListItem(l).next = new ListNode(v);
    return l;
}