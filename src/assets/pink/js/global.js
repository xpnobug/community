String.prototype.repAll = function(b, a) {
    return this.replace(new RegExp(b, 'gm'), a);
};

String.prototype.removeSpaces = function(s = '') {
    return this.replace(/\s+/g, s);
};

/*
"{greeting}! My name is {author.name}. What's your name?".tplRender({
  greeting: "Hello",
  author: {
    name: "Han Meimei"
  }
});
Hello! My name is Han Meimei. What's your name?
*/
String.prototype.tplRender = function(context) {
    return this.replace(/(\\)?\{([^\{\}\\]+)(\\)?\}/g, function(word, slash1, token, slash2) {
        if (slash1 || slash2) return word.replace('\\', '');
        let variables = token.replace(/\s/g, '').split('.');
        let currentObject = context;
        for (let i in variables) {
            let variable = variables[i];
            currentObject = currentObject[variable];
            if (currentObject === undefined || currentObject === null) return '';
        }
        return currentObject;
    });
};

document.ready = function(callback) {
    if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', function() {
            document.removeEventListener('DOMContentLoaded', arguments.callee, false);
            callback();
        }, false);
    } else if (document.attachEvent) {
        document.attachEvent('onreadystatechange', function() {
            if (document.readyState == 'complete') {
                document.detachEvent('onreadystatechange', arguments.callee);
                callback();
            }
        });
    } else if (document.lastChild == document.body) {
        callback();
    }
};

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const isString = value => Object.prototype.toString.call(value) === '[object String]';
const isObject = value => Object.prototype.toString.call(value) === '[object Object]';
const isArray = value => Object.prototype.toString.call(value) === '[object Array]';
const isElementEmpty = element => element.innerHTML.removeSpaces() === '';

const log = arg => {
    if (window.console) {
        if (isString(arg)) {
            if (window.console.log) console.log(arg);
        } else if (isObject(arg) || isArray(arg)) {
            if (window.console.table) console.table(arg);
        } else {
            if (window.console.dir) console.dir(arg);
        }
    }
};

const link = (element, method) => {
    switch (method) {
        case 'self':
            window.location.href = element.dataset.link;
            break;
        case 'blank':
            window.open(element.tagName.toLowerCase() == 'a' ? element.href : element.dataset.link);
            break;
    }
};

const randomString = () => {
    return Math.random().toString(36).substr(2);
};

const htmlSpecialChars = (html, encode = true) => {
    let de = [' ', '&', "'", "'", '"', '<', '>'];
    let en = ['&nbsp;', '&amp;', '&#039;', '&apos;', '&quot;', '&lt;', '&gt;'];
    let b = encode ? de : en;
    let a = encode ? en : de;
    html = String(html);
    for (let i in b) html = html.repAll(b[i], a[i]);
    return html;
};

const textareaInsert = (obj, insStr, closedStr = '') => {
    if (obj.setSelectionRange) {
        let objVal = obj.value;
        let selStart = obj.selectionStart;
        let selEnd = obj.selectionEnd;
        let selStr = selStart == selEnd ? '' : objVal.substring(selStart, selEnd);
        let selStrBefore = objVal.substring(0, selStart);
        let selStrAfter = objVal.substring(selEnd);
        let curPos = 0;
        if (closedStr != '') {
            obj.value = selStrBefore + insStr + selStr + closedStr + selStrAfter;
            curPos = selStart == selEnd ? selStart + insStr.length : selEnd + insStr.length + closedStr.length;
        } else {
            obj.value = selStrBefore + insStr + selStrAfter;
            curPos = selStart + insStr.length;
        }
        obj.focus();
        obj.selectionStart = curPos;
        obj.selectionEnd = curPos;
    } else {
        obj.value = objVal + insStr + closedStr;
        obj.focus();
    }
};

const textareaCursorToEnd = obj => {
    if (obj.setSelectionRange) {
        let end = obj.value.length;
        obj.focus();
        obj.selectionStart = end;
        obj.selectionEnd = end;
    }
};

const cookieSet = (key, value, days = -1) => {
    if (navigator.cookieEnabled) {
        let exp = '';
        days = Number(days);
        if (days == -1) {
            exp = 'Tue, 19 Jan 2038 03:14:07 GMT';
        } else if (days == 0) {
            exp = 'Thu, 01 Jan 1970 00:00:00 GMT';
        } else {
            let date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            exp = date.toUTCString();
        }
        document.cookie = key + '=' + encodeURIComponent(value) + ';expires=' + exp + ';path=/';
    } else {
        log('cookie status: disabled');
    }
};