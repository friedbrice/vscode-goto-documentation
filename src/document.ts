'use strict';

import * as vscode from 'vscode';

const opn = require('opn');

export default class Document {
    private static defaultDocs : object = {
        "ahk": "https://autohotkey.com/docs/commands/${query}.htm",
        "controller": "http://api.rubyonrails.org/?q=${query}",
        "rb": "http://ruby-doc.com/search.html?q=${query}",
        "js": "https://developer.mozilla.org/en-US/search?q=${query}&topic=js",
        "html": "https://developer.mozilla.org/en-US/search?q=${query}&topic=html",
        "htm": "https://developer.mozilla.org/en-US/search?q=${query}&topic=html",
        "coffee": "https://developer.mozilla.org/en-US/search?q=${query}",
        "php": "http://php.net/manual-lookup.php?pattern=${query}",
        "clj": "http://clojuredocs.org/search?x=0&y=0&q=${query}",
        "go": "http://golang.org/search?q=${query}",
        "c": "http://www.cplusplus.com/search.do?q=${query}",
        "cpp": "http://www.cplusplus.com/search.do?q=${query}",
        "smarty": "http://www.smarty.net/${query}",
        "cmake": "http://cmake.org/cmake/help/v2.8.8/cmake.html#command:${query}",
        "perl": "http://perldoc.perl.org/search.html?q=${query}",
        "cs": "http://social.msdn.microsoft.com/Search/?query=${query}",
        "lua": "http://pgl.yoyo.org/luai/i/${query}",
        "pgsql": "http://www.postgresql.org/search/?u=%%2Fdocs%%2Fcurrent%%2F&q=${query}",
        "erl": "http://erldocs.com/R16B03/?search=${query}",
        "hs": "http://hayoo.fh-wedel.de/?query=${query}",  //haskell
        "scala": "https://www.scala-lang.org/api/current/?search=${query}",
        "css": "http://devdocs.io/#q=${query}",
        "scss": "http://devdocs.io/#q=${query}",
        "less": "http://devdocs.io/#q=${query}",
        "google": "https://google.com/search?q=${query}",
        "py": "http://docs.python.org/3/search.html?q=${query}"
    };

    public static open(ext: string, keyword: string, customDocs?: object): void {
        if (!keyword) {
            return;
        }

        let docs : any = this.defaultDocs;
        if (customDocs) {
            Object.assign(docs, customDocs);
        }

        let url: string = '';
        if (ext in docs) {
             url = docs[ext].replace('${query}', encodeURIComponent(keyword));
        } else {
             url = docs['google'].replace('${query}', encodeURIComponent(keyword));
        }

        opn(url)
    }
}