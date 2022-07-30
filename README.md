# vscode-goto-documentation

A Visual Studio Code extension to jump to documentation for the current keyword, ported from [sublime-text-2-goto-documentation](https://github.com/kemayo/sublime-text-2-goto-documentation)


## Supports

 * PHP
 * JS / CoffeeScript
 * HTML
 * CSS/SASS/LESS
 * Python
 * Clojure
 * Go
 * Ruby
 * C / C++
 * Perl
 * C#
 * Lua
 * Erlang
 * Haskell
 * ...you can add any other language via settings


## Installation

Search for `goto documentation`.


## How to use

Move the cursor inside the word you want the docs for and: 
  * Press `Super+Shift+H`, or
  * mouse right click the word and select **Browse documentation** from the context menu.


## Configuration

_Goto Documentation_ includes a default mapping from file extentions to URLs that suits most purposes.
Use the settings property `goto-documentation.customDocs` to override or extend the default mapping.
The character string `${query}` represents the text selection/entity under cursor in your editor.

```
    "goto-documentation.customDocs": {
       "md": "https://en.wikipedia.org/wiki/${query}"
    }
```