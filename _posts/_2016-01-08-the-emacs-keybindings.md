---
author: "Heinrich Hartmann"
layout: "post"
---

This note contains a full annotated list of emacs default key
bindings, as produced by

    emacs -q -e describe-bindings

 with GNU Emacs 24.4.1.  with the exception of mouse commands, arrow
key commands (since they distract the flow) key translations and pure
prefix commands (like `C-x`). The bindings categorized and sorted by
my personal prefrence.

This post started as a private exercise while reading the emacs
documentation on a flight (without internet access). The aim is to get
a firm grip around the default key bindings, that are avilable the
packaged emacs versions. There is an argument to be made, that
*customization is bad* since it's too easy to invest too much time
into fiddling around with it. Why do you think, you end up with better
usability, than the default?

On the other hand, *completeness is good*. Only after reading the
whole list of keybindings, you can be sure, not to have missed that
super-useful command that emacs provides per default. In fact while
going throught this exercise I discovered quit a few handy bindings
that I was not aware of.

This is not an introduction to emacs. Familiarity with emacs concepts
like windows, buffers and the kill-ring is assumed. If you want to
learn more about those concepts get on a plane and press \`C-h r\`.

# Standard Global Keybindings

## Basic Editing

### View control

Commands that change the current view port, without moving the cursor
(i.e. 'point' in emacs lingo).

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col  class="left" />

<col  class="left" />

<col  class="left" />
</colgroup>
<thead>
<tr>
<th scope="col" class="left">Key</th>
<th scope="col" class="left">Lisp function</th>
<th scope="col" class="left">Comment</th>
</tr>
</thead>

<tbody>
<tr>
<td class="left">C-l</td>
<td class="left">recenter-top-bottom</td>
<td class="left">Move cursor to center -> top -> bottom.</td>
</tr>


<tr>
<td class="left">C-v</td>
<td class="left">scroll-up-command</td>
<td class="left">&#xa0;</td>
</tr>


<tr>
<td class="left">M-v</td>
<td class="left">scroll-down-command</td>
<td class="left">OMG. This is soo bad!</td>
</tr>


<tr>
<td class="left">C-x <</td>
<td class="left">scroll-left</td>
<td class="left">I have never used this.</td>
</tr>


<tr>
<td class="left">C-x ></td>
<td class="left">scroll-right</td>
<td class="left">I have never used this.</td>
</tr>
</tbody>
</table>

### Cursor Movement

1.  Horizontal Movement

    These bindings are intended for microsocopic editing. They are much
    better accessible than arrow kes. But still a little awkward. I'dont
    get why you would bind a command like \`backward-char\` that is used
    multiple times per minute to a key (\`C-b\`) that is easy to remeber,
    but not ideally placed on the keyboard. Vi's jk bindings seem superior
    here. The only excuse might be that the authors of emacs wanted to
    actively discurage cursor movement by line or character.
    
    <table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">
    
    
    <colgroup>
    <col  class="left" />
    
    <col  class="left" />
    
    <col  class="left" />
    </colgroup>
    <tbody>
    <tr>
    <td class="left">C-f</td>
    <td class="left">forward-char</td>
    <td class="left">??</td>
    </tr>
    
    
    <tr>
    <td class="left">C-b</td>
    <td class="left">backward-char</td>
    <td class="left">??</td>
    </tr>
    
    
    <tr>
    <td class="left">M-f</td>
    <td class="left">forward-word</td>
    <td class="left">&#xa0;</td>
    </tr>
    
    
    <tr>
    <td class="left">M-b</td>
    <td class="left">backward-word</td>
    <td class="left">&#xa0;</td>
    </tr>
    
    
    <tr>
    <td class="left">C-M-f</td>
    <td class="left">forward-sexp</td>
    <td class="left">&#xa0;</td>
    </tr>
    
    
    <tr>
    <td class="left">C-M-b</td>
    <td class="left">backward-sexp</td>
    <td class="left">&#xa0;</td>
    </tr>
    </tbody>
    </table>
    
    The \`C-a/e\` combo seems to me a better tradeoff than \`C-f/b\` above.
    
    <table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">
    
    
    <colgroup>
    <col  class="left" />
    
    <col  class="left" />
    
    <col  class="left" />
    </colgroup>
    <tbody>
    <tr>
    <td class="left">C-a</td>
    <td class="left">move-beginning-of-line</td>
    <td class="left">&#xa0;</td>
    </tr>
    
    
    <tr>
    <td class="left">C-e</td>
    <td class="left">move-end-of-line</td>
    <td class="left">&#xa0;</td>
    </tr>
    
    
    <tr>
    <td class="left">M-a</td>
    <td class="left">backward-sentence</td>
    <td class="left">&#xa0;</td>
    </tr>
    
    
    <tr>
    <td class="left">M-e</td>
    <td class="left">forward-sentence</td>
    <td class="left">&#xa0;</td>
    </tr>
    
    
    <tr>
    <td class="left">C-M-a</td>
    <td class="left">beginning-of-defun</td>
    <td class="left">&#xa0;</td>
    </tr>
    
    
    <tr>
    <td class="left">C-M-e</td>
    <td class="left">end-of-defun</td>
    <td class="left">&#xa0;</td>
    </tr>
    </tbody>
    </table>

2.  Vertical Movement

    <table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">
    
    
    <colgroup>
    <col  class="left" />
    
    <col  class="left" />
    
    <col  class="left" />
    </colgroup>
    <tbody>
    <tr>
    <td class="left">C-n</td>
    <td class="left">next-line</td>
    <td class="left">?</td>
    </tr>
    
    
    <tr>
    <td class="left">C-p</td>
    <td class="left">previous-line</td>
    <td class="left">?</td>
    </tr>
    
    
    <tr>
    <td class="left">C-M-n</td>
    <td class="left">forward-list</td>
    <td class="left">&#xa0;</td>
    </tr>
    
    
    <tr>
    <td class="left">C-M-p</td>
    <td class="left">backward-list</td>
    <td class="left">&#xa0;</td>
    </tr>
    
    
    <tr>
    <td class="left">C-M-d</td>
    <td class="left">down-list</td>
    <td class="left">Never used this</td>
    </tr>
    
    
    <tr>
    <td class="left">C-M-u</td>
    <td class="left">backward-up-list</td>
    <td class="left">Never used this</td>
    </tr>
    </tbody>
    </table>
    
    So, why is M-n/p not bound at all? It seems quite natural to biind
    forward/backward paragraph on those keys.
    
    <table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">
    
    
    <colgroup>
    <col  class="left" />
    
    <col  class="left" />
    
    <col  class="left" />
    </colgroup>
    <tbody>
    <tr>
    <td class="left">M-<</td>
    <td class="left">beginning-of-buffer</td>
    <td class="left">This also sets mark where left off</td>
    </tr>
    
    
    <tr>
    <td class="left">M-></td>
    <td class="left">end-of-buffer</td>
    <td class="left">&#xa0;</td>
    </tr>
    
    
    <tr>
    <td class="left">M-}</td>
    <td class="left">forward-paragraph</td>
    <td class="left">Why not M-n ??</td>
    </tr>
    
    
    <tr>
    <td class="left">M-{</td>
    <td class="left">backward-paragraph</td>
    <td class="left">Why not M-p ??</td>
    </tr>
    
    
    <tr>
    <td class="left">C-x [</td>
    <td class="left">backward-page</td>
    <td class="left">The concept of a page is rather acrane. I don' use this.</td>
    </tr>
    
    
    <tr>
    <td class="left">C-x ]</td>
    <td class="left">forward-page</td>
    <td class="left">&#xa0;</td>
    </tr>
    </tbody>
    </table>

3.  Alternative Structured Movement

    If you really want to use the arrow keys you can:
    
    <table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">
    
    
    <colgroup>
    <col  class="left" />
    
    <col  class="left" />
    
    <col  class="left" />
    </colgroup>
    <tbody>
    <tr>
    <td class="left"><C-M-down></td>
    <td class="left">down-list</td>
    <td class="left">&#xa0;</td>
    </tr>
    
    
    <tr>
    <td class="left"><C-M-left></td>
    <td class="left">backward-sexp</td>
    <td class="left">&#xa0;</td>
    </tr>
    
    
    <tr>
    <td class="left"><C-M-right></td>
    <td class="left">forward-sexp</td>
    <td class="left">&#xa0;</td>
    </tr>
    
    
    <tr>
    <td class="left"><C-M-up></td>
    <td class="left">backward-up-list</td>
    <td class="left">&#xa0;</td>
    </tr>
    
    
    <tr>
    <td class="left"><C-M-end></td>
    <td class="left">end-of-defun</td>
    <td class="left">&#xa0;</td>
    </tr>
    
    
    <tr>
    <td class="left"><C-M-home></td>
    <td class="left">beginning-of-defun</td>
    <td class="left">&#xa0;</td>
    </tr>
    
    
    <tr>
    <td class="left"><C-down></td>
    <td class="left">forward-paragraph</td>
    <td class="left">&#xa0;</td>
    </tr>
    
    
    <tr>
    <td class="left"><C-end></td>
    <td class="left">end-of-buffer</td>
    <td class="left">&#xa0;</td>
    </tr>
    
    
    <tr>
    <td class="left"><C-home></td>
    <td class="left">beginning-of-buffer</td>
    <td class="left">&#xa0;</td>
    </tr>
    
    
    <tr>
    <td class="left">ESC <C-down></td>
    <td class="left">down-list</td>
    <td class="left">&#xa0;</td>
    </tr>
    
    
    <tr>
    <td class="left">ESC <C-end></td>
    <td class="left">end-of-defun</td>
    <td class="left">&#xa0;</td>
    </tr>
    
    
    <tr>
    <td class="left">ESC <C-home></td>
    <td class="left">beginning-of-defun</td>
    <td class="left">&#xa0;</td>
    </tr>
    
    
    <tr>
    <td class="left">ESC <C-left></td>
    <td class="left">backward-sexp</td>
    <td class="left">&#xa0;</td>
    </tr>
    
    
    <tr>
    <td class="left">ESC <C-right></td>
    <td class="left">forward-sexp</td>
    <td class="left">&#xa0;</td>
    </tr>
    
    
    <tr>
    <td class="left">ESC <C-up></td>
    <td class="left">backward-up-list</td>
    <td class="left">&#xa0;</td>
    </tr>
    
    
    <tr>
    <td class="left">ESC <left></td>
    <td class="left">backward-word</td>
    <td class="left">&#xa0;</td>
    </tr>
    
    
    <tr>
    <td class="left">ESC <right></td>
    <td class="left">forward-word</td>
    <td class="left">&#xa0;</td>
    </tr>
    </tbody>
    </table>

4.  Smart Cursor Positioning

    <table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">
    
    
    <colgroup>
    <col  class="left" />
    
    <col  class="left" />
    
    <col  class="left" />
    </colgroup>
    <tbody>
    <tr>
    <td class="left">M-m</td>
    <td class="left">back-to-indentation</td>
    <td class="left">Use this instead of C-n to move througt source code</td>
    </tr>
    
    
    <tr>
    <td class="left">M-r</td>
    <td class="left">move-to-window-line-top-bottom</td>
    <td class="left">This is a counterpart to C-l</td>
    </tr>
    
    
    <tr>
    <td class="left">C-M-l</td>
    <td class="left">reposition-window</td>
    <td class="left">Careful: This triggers logout in gnome ;)</td>
    </tr>
    </tbody>
    </table>

5.  Goto Commands

    <table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">
    
    
    <colgroup>
    <col  class="left" />
    
    <col  class="left" />
    
    <col  class="left" />
    </colgroup>
    <tbody>
    <tr>
    <td class="left">M-g g</td>
    <td class="left">goto-line</td>
    <td class="left">&#xa0;</td>
    </tr>
    
    
    <tr>
    <td class="left">M-g M-g</td>
    <td class="left">goto-line</td>
    <td class="left">Better tempo then M-g g</td>
    </tr>
    
    
    <tr>
    <td class="left">M-g TAB</td>
    <td class="left">move-to-column</td>
    <td class="left">&#xa0;</td>
    </tr>
    
    
    <tr>
    <td class="left">M-g c</td>
    <td class="left">goto-char</td>
    <td class="left">counted from the beginning of the buffer</td>
    </tr>
    </tbody>
    </table>
    
    When editing source code, the following commands are available:
    
    <table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">
    
    
    <colgroup>
    <col  class="left" />
    
    <col  class="left" />
    
    <col  class="left" />
    </colgroup>
    <tbody>
    <tr>
    <td class="left">C-x \`</td>
    <td class="left">next-error</td>
    <td class="left">&#xa0;</td>
    </tr>
    
    
    <tr>
    <td class="left">M-g n</td>
    <td class="left">next-error</td>
    <td class="left">&#xa0;</td>
    </tr>
    
    
    <tr>
    <td class="left">M-g M-n</td>
    <td class="left">next-error</td>
    <td class="left">&#xa0;</td>
    </tr>
    
    
    <tr>
    <td class="left">M-g p</td>
    <td class="left">previous-error</td>
    <td class="left">&#xa0;</td>
    </tr>
    
    
    <tr>
    <td class="left">M-g M-p</td>
    <td class="left">previous-error</td>
    <td class="left">&#xa0;</td>
    </tr>
    </tbody>
    </table>

### Search/Replace/Filter

Incremental search is a very powerfull movement method.

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col  class="left" />

<col  class="left" />

<col  class="left" />
</colgroup>
<tbody>
<tr>
<td class="left">C-s</td>
<td class="left">isearch-forward</td>
<td class="left">&#xa0;</td>
</tr>


<tr>
<td class="left">C-r</td>
<td class="left">isearch-backward</td>
<td class="left">&#xa0;</td>
</tr>


<tr>
<td class="left">C-M-s</td>
<td class="left">isearch-forward-regexp</td>
<td class="left">&#xa0;</td>
</tr>


<tr>
<td class="left">C-M-r</td>
<td class="left">isearch-backward-regexp</td>
<td class="left">&#xa0;</td>
</tr>


<tr>
<td class="left">M-%</td>
<td class="left">query-replace</td>
<td class="left">awkward!</td>
</tr>


<tr>
<td class="left">C-M-%</td>
<td class="left">query-replace-regexp</td>
<td class="left">&#xa0;</td>
</tr>
</tbody>
</table>

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col  class="left" />

<col  class="left" />

<col  class="left" />
</colgroup>
<tbody>
<tr>
<td class="left">M-s .</td>
<td class="left">isearch-forward-symbol-at-point</td>
<td class="left">&#xa0;</td>
</tr>


<tr>
<td class="left">M-s \_</td>
<td class="left">isearch-forward-symbol</td>
<td class="left">&#xa0;</td>
</tr>


<tr>
<td class="left">M-s w</td>
<td class="left">isearch-forward-word</td>
<td class="left">&#xa0;</td>
</tr>
</tbody>
</table>

### Kill/Yank

This is the emacs version of copy/paste

With the following bindings, you can kill very precise regions of text.
Don't forget that you can use these in conjunction with prefix arguments:
\`M&#x2013;\` or \`C-u 4\`.

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col  class="left" />

<col  class="left" />

<col  class="left" />
</colgroup>
<tbody>
<tr>
<td class="left">M-d</td>
<td class="left">kill-word</td>
<td class="left">&#xa0;</td>
</tr>


<tr>
<td class="left">C-k</td>
<td class="left">kill-line</td>
<td class="left">&#xa0;</td>
</tr>


<tr>
<td class="left">M-k</td>
<td class="left">kill-sentence</td>
<td class="left">&#xa0;</td>
</tr>


<tr>
<td class="left">C-M-k</td>
<td class="left">kill-sexp</td>
<td class="left">&#xa0;</td>
</tr>


<tr>
<td class="left">C-x k</td>
<td class="left">kill-buffer</td>
<td class="left">&#xa0;</td>
</tr>


<tr>
<td class="left">C-w</td>
<td class="left">kill-region</td>
<td class="left">&#xa0;</td>
</tr>
</tbody>
</table>

;; kill up to the (N-th) occurance of char.
;; Never used this.
M-z        zap-to-char

1.  Backspace/Delete Combos

    backspace             delete-backward-char
    C-backspace            backward-kill-word
    M-backspace        backward-kill-word
    C-S-backspace            kill-whole-line
    ESC C-backspace        backward-kill-sexp
    C-x backspace        backward-kill-sentence
    
    delete      delete-forward-char
    C-delete    kill-word
    S-delete    kill-region

2.  Kill-Save

    ;; the equivalent of copy:
    M-w        kill-ring-save
    C-x r M-w    copy-rectangle-as-kill

3.  Kill Append

    ;; Append to current kill-ring-entry
    C-M-w        append-next-kill
    
    <C-insert>    kill-ring-save
    <C-insertchar>    kill-ring-save
    <S-insert>    yank
    <S-insertchar>    yank

4.  Yanking

    C-y        yank       # The equivalent of paste
    M-y        yank-pop   # cycle through kill-ring. Only allowed after C-y or M-y

### Inserting Text

;; use the keyboard to insert characters as usual
;; new lines
C-o        open-line
C-j        electric-newline-and-maybe-indent
M-j        indent-new-comment-line
C-M-j        indent-new-comment-line

<insert>    overwrite-mode
C-d        delete-char
;; insert special character
C-q        quoted-insert          ;; use e.g. for new lines by \`C-q RET\` or tab \`C-q TAB\`
C-x 8 RET    insert-char        ;; insert unicode character

### Undo

C-/        undo
C-x u        undo # useful on international keyboards
C-\_        undo

### Transpose

C-t        transpose-chars
M-t        transpose-words
C-M-t        transpose-sexps
C-x C-t        transpose-lines

## Advanced Editing

M-SPC        just-one-space      ;; delete additional whitespace between words.
                                ;; might require unbinding this in the window manager.
M-\\     delete-horizontal-space ;; delete all spaces and tabs around point

M-(        insert-parentheses
C-M-o        split-line
C-x C-o        delete-blank-lines
M-)        move-past-close-and-reindent

1.  Indent

    C-M-\\        indent-region
    C-x TAB        indent-rigidly     ;; interactive! with (S-) arrow keys. New for me!
    M-^        delete-indentation     ;; join line at point with predecessorpp

2.  Up- & down-case

    M-c        capitalize-word ;; Operate on current word. Use with prefix arguments.
    M-u        upcase-word     ;; E.g. M&#x2013; M-5 M-u : upcase 5 preceeding words.
    M-l        downcase-word
    C-x C-l        downcase-region
    C-x C-u        upcase-region

3.  Filling

    M-q        fill-paragraph         ;; use C-u M-q to justify paragraph
    C-x f        set-fill-column
    C-x .        set-fill-prefix    ;; fill prefixed regions like, quotes or comments
    
    M-o M-s        center-line        ;; center within 0-fill column
    M-o M-S        center-paragraph
    M-o M-o        font-lock-fontify-block

### Tab Stops

;; yes, appareny emacs supports tab stops. Try:
;; M-x edit-tab-stops
;; M-x ruler-mode
;; Checkout the manual!

M-i        tab-to-tab-stop        ;; move to next tab column

### Marks and Regions

M-@        mark-word
M-h        mark-paragraph
C-M-SPC        mark-sexp
C-M-@        mark-sexp
C-M-h        mark-defun
C-x h        mark-whole-buffer
C-x C-p        mark-page

C-SPC        set-mark-command
C-x C-x        exchange-point-and-mark
C-x SPC        rectangle-mark-mode
C-x C-@        pop-global-mark
C-x C-SPC    pop-global-mark

### Restricted Editing

;; Narrow down editing area.
C-x n n        narrow-to-region   ;; only show the active region
C-x n w        widen              ;; back to full buffer

;; never used this one
C-x n d        narrow-to-defun
C-x n p        narrow-to-page

;; use with numeric prefix. lines whose indentation is >= that value
;; are not displayed.
C-x $        set-selective-display

### Keyboard Macros

C-x (        kmacro-start-macro
C-x )        kmacro-end-macro
C-x e        kmacro-end-and-call-macro

;; those seem convenient on international keyboards, where the () are dispace.

<f3>        kmacro-start-macro-or-insert-counter
<f4>        kmacro-end-or-call-macro

C-x C-k        kmacro-keymap
C-x q        kbd-macro-query

C-x C-k C-a    kmacro-add-counter
C-x C-k C-c    kmacro-set-counter
C-x C-k C-d    kmacro-delete-ring-head
C-x C-k C-e    kmacro-edit-macro-repeat
C-x C-k C-f    kmacro-set-format
C-x C-k TAB    kmacro-insert-counter
C-x C-k C-k    kmacro-end-or-call-macro-repeat
C-x C-k C-l    kmacro-call-ring-2nd-repeat
C-x C-k RET    kmacro-edit-macro
C-x C-k C-n    kmacro-cycle-ring-next
C-x C-k C-p    kmacro-cycle-ring-previous
C-x C-k C-s    kmacro-start-macro
C-x C-k C-t    kmacro-swap-ring
C-x C-k C-v    kmacro-view-macro-repeat
C-x C-k SPC    kmacro-step-edit-macro
C-x C-k b    kmacro-bind-to-key
C-x C-k e    edit-kbd-macro
C-x C-k l    kmacro-edit-lossage
C-x C-k n    kmacro-name-last-macro
C-x C-k q    kbd-macro-query
C-x C-k r    apply-macro-to-region-lines
C-x C-k s    kmacro-start-macro
C-x C-k x    kmacro-to-register

### Register Commands

C-x r C-@    point-to-register
C-x r ESC    Prefix Command
C-x r SPC    point-to-register
C-x r +        increment-register
C-x r N        rectangle-number-lines
C-x r b        bookmark-jump
C-x r c        clear-rectangle
C-x r d        delete-rectangle
C-x r f        frameset-to-register
C-x r g        insert-register
C-x r i        insert-register
C-x r j        jump-to-register
C-x r k        kill-rectangle
C-x r l        bookmark-bmenu-list
C-x r m        bookmark-set
C-x r n        number-to-register
C-x r o        open-rectangle
C-x r r        copy-rectangle-to-register
C-x r s        copy-to-register
C-x r t        string-rectangle
C-x r w        window-configuration-to-register
C-x r x        copy-to-register
C-x r y        yank-rectangle
C-x r C-SPC    point-to-register

### Abbreviations

C-x a C-a    add-mode-abbrev
C-x a '        expand-abbrev
C-x a +        add-mode-abbrev
C-x a -        inverse-add-global-abbrev
C-x a e        expand-abbrev
C-x a g        add-global-abbrev
C-x a i        Prefix Command
C-x a l        add-mode-abbrev
C-x a n        expand-jump-to-next-slot
C-x a p        expand-jump-to-previous-slot

C-x a i g    inverse-add-global-abbrev
C-x a i l    inverse-add-mode-abbrev

C-x '        expand-abbrev
M-'        abbrev-prefix-mark
M-/        dabbrev-expand
C-M-/        dabbrev-completion

### Tags

M-\*        pop-tag-mark
M-,        tags-loop-continue
M-.        find-tag
C-M-.        find-tag-regexp

### Comments

M-;        comment-dwim
C-x ;        comment-set-column

### Get information

M-=        count-words-region
C-x l        count-lines-page
C-x =        what-cursor-position

## Modes and Commands

### Dired

C-x C-d        list-directory
C-x d        dired

### Shell

M-!        shell-command
M-&        async-shell-command
M-|        shell-command-on-region

### Ispell

M-$        ispell-word
M-s o        occur

### Mail

C-x m        compose-mail ;; system mail

### Calc

C-x \*        calc-dispatch ;; invoke emacs Emacs Calculator

### Lisp

C-x C-e        eval-last-sexp
M-:        eval-expression
M-ESC :        eval-expression

### Two-colum mode

;; Annotat the current buffer side by side.
;; Did not know abou this before. Seems handy.
;; Read more in the docs.
pp
<f2> <f2>    2C-two-columns
C-x 6 2        2C-two-columns
C-x 6 b        2C-associate-buffer
C-x 6 s        2C-split
C-x 6 <f2>    2C-two-columns

<f2> 2        2C-two-columns
<f2> b        2C-associate-buffer
<f2> s        2C-split

### Highlight

M-s h .        highlight-symbol-at-point
M-s h f        hi-lock-find-patterns
M-s h l        highlight-lines-matching-regexp
M-s h p        highlight-phrase
M-s h r        highlight-regexp
M-s h u        unhighlight-regexp
M-s h w        hi-lock-write-interactive-patterns

### Version Control Commands

C-x v +        vc-update
C-x v =        vc-diff
C-x v D        vc-root-diff
C-x v G        vc-ignore
C-x v I        vc-log-incoming
C-x v L        vc-print-root-log
C-x v O        vc-log-outgoing
C-x v a        vc-update-change-log
C-x v b        vc-switch-backend
C-x v c        vc-rollback
C-x v d        vc-dir
C-x v g        vc-annotate
C-x v h        vc-insert-headers
C-x v i        vc-register
C-x v l        vc-print-log
C-x v m        vc-merge
C-x v r        vc-retrieve-tag
C-x v s        vc-create-tag
C-x v u        vc-revert
C-x v v        vc-next-action
C-x v ~        vc-revision-other-window

## Display Controls

### Text Scale

C-x C-+        text-scale-adjust
C-x C&#x2013;        text-scale-adjust
C-x C-0        text-scale-adjust
C-x C-=        text-scale-adjust

### Loading and writing files

C-x C-f        find-file
C-x C-q        read-only-mode
C-x C-r        find-file-read-only
C-x C-v        find-alternate-file  ;; replaces current buffer, if you accidentally opended the wrong file.
C-x i        insert-file          ;; instert content of file at point

C-x C-s        save-buffer
C-x C-w        write-file           ;; save-as
C-x s        save-some-buffers    ;; ask for each buffer.

C-x C-c        save-buffers-kill-terminal

1.  File encoding

    C-x RET C-\\    set-input-method
    C-x RET F    set-file-name-coding-system
    C-x RET X    set-next-selection-coding-system
    C-x RET c    universal-coding-system-argument
    C-x RET f    set-buffer-file-coding-system
    C-x RET k    set-keyboard-coding-system
    C-x RET l    set-language-environment
    C-x RET p    set-buffer-process-coding-system
    C-x RET r    revert-buffer-with-coding-system
    C-x RET t    set-terminal-coding-system
    C-x RET x    set-selection-coding-system

### Swtich Buffers

C-x b        switch-to-buffer
C-x C-b        list-buffers

C-x <C-left>    previous-buffer
C-x <C-right>    next-buffer
C-x <left>    previous-buffer
C-x <right>    next-buffer

M-~            not-modified ;; never used this

### Window control

C-x o        other-window       ;; switch to other window

C-x 0        delete-window
C-x 1        delete-other-windows
C-x 2        split-window-below
C-x 3        split-window-right

1.  Window Sizes

    C-x +        balance-windows
    C-x ^        enlarge-window
    C-x -        shrink-window-if-larger-than-buffer
    C-x {        shrink-window-horizontally
    C-x }        enlarge-window-horizontally

2.  Other window control

    C-M-v        scroll-other-window
    C-M-S-v        scroll-other-window-down
    C-x 4 C-f    find-file-other-window
    C-x 4 f        find-file-other-window
    C-x 4 C-o    display-buffer
    C-x 4 b        switch-to-buffer-other-window
    C-x 4 d        dired-other-window
    
    C-h 4 i        info-other-window ;; more often needed than \`C-h i\`
    <f1> 4 i    info-other-window
    <help> 4 i    info-other-window
    
    ;; never used these
    C-x 4 0        kill-buffer-and-window
    C-x 4 .        find-tag-other-window
    C-x 4 a        add-change-log-entry-other-window
    C-x 4 c        clone-indirect-buffer-other-window
    C-x 4 m        compose-mail-other-window
    C-x 4 r        find-file-read-only-other-window
    
    ;; these keys are far away
    <M-begin>    beginning-of-buffer-other-window
    <M-end>        end-of-buffer-other-window
    <M-home>    beginning-of-buffer-other-window
    <M-prior>    scroll-other-window-down
    <M-next>    scroll-other-window
    
    ESC <begin>    beginning-of-buffer-other-window
    ESC <end>    end-of-buffer-other-window
    ESC <home>    beginning-of-buffer-other-window
    ESC <next>    scroll-other-window
    ESC <prior>    scroll-other-window-down

### Frame Control

C-z        suspend-frame

;; Emacs allows splitting windows. Use cases for frames are limited,
;; to cases where two differen window setups are used in parallel.
;; Maybe handy for on multiple monitors. I never use frames.

1.  Operate on other frame

    C-x 5 C-f    find-file-other-frame
    C-x 5 C-o    display-buffer-other-frame
    C-x 5 .        find-tag-other-frame
    C-x 5 0        delete-frame
    C-x 5 1        delete-other-frames
    C-x 5 2        make-frame-command
    C-x 5 b        switch-to-buffer-other-frame
    C-x 5 d        dired-other-frame
    C-x 5 f        find-file-other-frame
    C-x 5 m        compose-mail-other-frame
    C-x 5 o        other-frame
    C-x 5 r        find-file-read-only-other-frame

## Emacs Special

C-g        keyboard-quit
M-x        execute-extended-command
C-u        universal-argument
C&#x2013;        negative-argument
M&#x2013;        negative-argument
C-M&#x2013;        negative-argument

C-\\        toggle-input-method
C-]        abort-recursive-edit
<f10>        menu-bar-open
<M-f10>        toggle-frame-maximized
<f11>        toggle-frame-fullscreen
ESC <f10>    toggle-frame-maximized
C-x C-z        suspend-frame
C-M-c        exit-recursive-edit
C-x C-n        set-goal-column
M-\`        tmm-menubar

### Facemenu

M-o b        facemenu-set-bold
M-o d        facemenu-set-default
M-o i        facemenu-set-italic
M-o l        facemenu-set-bold-italic
M-o o        facemenu-set-face
M-o u        facemenu-set-underline

## Getting Help

;; You can use <f1> or <help> instead of <C-h> prefix.

C-h m        describe-mode      ;; When you want to learn more about the current major-mode
C-h a        apropos-command    ;; When you look for a feature but can't
                               ;; remember key-binding or function name
C-h r        info-emacs-manual  ;; get proper help
                               ;; use C-h r i &#x2013; to search for topic.

### Describe

C-h f        describe-function  ;; default search string is the word at the point
C-h k        describe-key
C-h b        describe-bindings
C-h v        describe-variable

;; never used those:
C-h .        display-local-help
C-h C-w        describe-no-warranty
C-h C-\\        describe-input-method
C-h C        describe-coding-system
C-h I        describe-input-method
C-h L        describe-language-environment
C-h P        describe-package
C-h c        describe-key-briefly
C-h g        describe-gnu-project
C-h s        describe-syntax
C-h C-o        describe-distribution

### Info

C-h i        info
C-h S        info-lookup-symbol
C-h F        Info-goto-emacs-command-node
C-h K        Info-goto-emacs-key-command-node

### Others

C-h C-h        help-for-help
C-h C-a        about-emacs
C-h C-c        describe-copying
C-h C-d        view-emacs-debugging
C-h C-e        view-external-packages
C-h C-f        view-emacs-FAQ
C-h RET        view-order-manuals
C-h C-n        view-emacs-news
C-h C-p        view-emacs-problems
C-h C-t        view-emacs-todo
C-h ?        help-for-help
C-h d        apropos-documentation
C-h e        view-echo-area-messages
C-h h        view-hello-file
C-h l        view-lossage
C-h n        view-emacs-news
C-h p        finder-by-keyword
C-h q        help-quit
C-h t        help-with-tutorial
C-h w        where-is
C-h <f1>    help-for-help
C-h <help>    help-for-help

## Comments on my personal key bindings

Tools for dragging around text are missing!

;; Do seomething useful with the arrow keys. E.g. resize windows:
(global-set-key (kbd "<left>") 'shrink-window-horizontally)
(global-set-key (kbd "<right>") 'enlarge-window-horizontally)
(global-set-key (kbd "<down>") 'shrink-window)
(global-set-key (kbd "<up>") 'enlarge-window)

;; Bind M-n and M-p to something useful.
;; For some reasons those are ommited in the default bindings.
(global-set-key (kbd "M-n") 'forward-paragraph)
(global-set-key (kbd "M-p") 'backward-paragraph)

# Org Mode Keybindings

## Variants of existing functionality

C-a             org-beginning-of-line
C-e             org-end-of-line
RET             org-return
C-j             org-return-indent
C-k             org-kill-line
C-y             org-yank
C-M-i           pcomplete
M-a             org-backward-sentence
M-e             org-forward-sentence
M-h             org-mark-element
M-{             org-backward-element
M-}             org-forward-element

## List Editing

TAB             org-cycle
M-RET           org-insert-heading
C-M-t           org-transpose-element

## List Navigation

C-c C-b         org-backward-heading-same-level
C-c C-f         org-forward-heading-same-level
C-c C-j         org-goto

## Org Mode Specials

C-c C-c         org-ctrl-c-ctrl-c

C-c C-s         org-schedule
C-c C-t         org-todo
C-c C-a         org-attach
C-c C-e         org-export-dispatch
C-c C-d         org-deadline

## Agenda

C-'             org-cycle-agenda-files
C-,             org-cycle-agenda-files

## Table

<S-return>      org-table-copy-down
C-c +           org-table-sum
C-c =           org-table-eval-formula
C-c ?           org-table-field-info
C-c ~           org-table-create-with-table.el
C-c C-\*         org-list-make-subtreeC-c }           org-table-toggle-coordinate-overlays
C-c |           org-table-create-or-convert-from-region
C-c {           org-table-toggle-formula-debugger
C-c \`           org-table-edit-field
C-c SPC         org-table-blank-field

## Others

C-c C-k         org-kill-note-or-show-branches
C-c C-l         org-insert-link
C-c RET         org-ctrl-c-ret

C-c %           org-mark-ring-push
C-c &           org-mark-ring-goto

C-c C-o         org-open-at-point
C-c C-q         org-set-tags-command
C-c C-r         org-reveal
C-c C-v         Prefix Command
C-c C-w         org-refile
C-c C-x         Prefix Command
C-c C-y         org-evaluate-time-range
C-c C-z         org-add-note
C-c ESC         Prefix Command
C-c C-^         org-up-element
C-c C-\_         org-down-element
C-c !           org-time-stamp-inactive
C-c #           org-update-statistics-cookies
C-c $           org-archive-subtree
C-c '           org-edit-special
C-c \*           org-ctrl-c-star
C-c ,           org-priority
C-c -           org-ctrl-c-minus
C-c .           org-time-stamp
C-c /           org-sparse-tree
C-c :           org-toggle-fixed-width-section
C-c ;           org-toggle-comment
C-c <           org-date-from-calendar
C-c >           org-goto-calendar
C-c @           org-mark-subtree
C-c [           org-agenda-file-to-front
C-c \\           org-match-sparse-tree
C-c ]           org-remove-file
C-c ^           org-sort
C-c <down>      org-shiftdown
C-c <left>      org-shiftleft
C-c <right>     org-shiftright
C-c <up>        org-shiftup

<remap> <backward-paragraph>    org-backward-paragraph
<remap> <delete-backward-char>  org-delete-backward-char
<remap> <delete-char>           org-delete-char
<remap> <forward-paragraph>     org-forward-paragraph
<remap> <open-line>             org-open-line
<remap> <outline-backward-same-level>
                                org-backward-heading-same-level
<remap> <outline-demote>        org-demote-subtree
<remap> <outline-forward-same-level>
                                org-forward-heading-same-level
<remap> <outline-insert-heading>
                                org-ctrl-c-ret
<remap> <outline-mark-subtree>  org-mark-subtree
<remap> <outline-promote>       org-promote-subtree
<remap> <self-insert-command>   org-self-insert-command
<remap> <show-branches>         org-kill-note-or-show-branches
<remap> <show-subtree>          org-show-subtree
<remap> <transpose-words>       org-transpose-words

C-c TAB         show-children
C-c C-n         outline-next-visible-heading
C-c C-p         outline-previous-visible-heading
C-c C-u         outline-up-heading
C-c C-<         outline-promote
C-c C->         outline-demote

C-c C-M-l       org-insert-all-links
C-c M-b         org-previous-block
C-c M-f         org-next-block
C-c M-w         org-copy

C-c C-v C-a     org-babel-sha1-hash
C-c C-v C-b     org-babel-execute-buffer
C-c C-v C-c     org-babel-check-src-block
C-c C-v C-d     org-babel-demarcate-block
C-c C-v C-e     org-babel-execute-maybe
C-c C-v C-f     org-babel-tangle-file
C-c C-v TAB     org-babel-view-src-block-info
C-c C-v C-j     org-babel-insert-header-arg
C-c C-v C-l     org-babel-load-in-session
C-c C-v C-n     org-babel-next-src-block
C-c C-v C-o     org-babel-open-src-block-result
C-c C-v C-p     org-babel-previous-src-block
C-c C-v C-r     org-babel-goto-named-result
C-c C-v C-s     org-babel-execute-subtree
C-c C-v C-t     org-babel-tangle
C-c C-v C-u     org-babel-goto-src-block-head
C-c C-v C-v     org-babel-expand-src-block
C-c C-v C-x     org-babel-do-key-sequence-in-edit-buffer
C-c C-v C-z     org-babel-switch-to-session
C-c C-v ESC     Prefix Command
C-c C-v I       org-babel-view-src-block-info
C-c C-v a       org-babel-sha1-hash
C-c C-v b       org-babel-execute-buffer
C-c C-v c       org-babel-check-src-block
C-c C-v d       org-babel-demarcate-block
C-c C-v e       org-babel-execute-maybe
C-c C-v f       org-babel-tangle-file
C-c C-v g       org-babel-goto-named-src-block
C-c C-v h       org-babel-describe-bindings
C-c C-v i       org-babel-lob-ingest
C-c C-v j       org-babel-insert-header-arg
C-c C-v l       org-babel-load-in-session
C-c C-v n       org-babel-next-src-block
C-c C-v o       org-babel-open-src-block-result
C-c C-v p       org-babel-previous-src-block
C-c C-v r       org-babel-goto-named-result
C-c C-v s       org-babel-execute-subtree
C-c C-v t       org-babel-tangle
C-c C-v u       org-babel-goto-src-block-head
C-c C-v v       org-babel-expand-src-block
C-c C-v x       org-babel-do-key-sequence-in-edit-buffer
C-c C-v z       org-babel-switch-to-session-with-code

C-c C-x C-a     org-archive-subtree-default
C-c C-x C-b     org-toggle-checkbox
C-c C-x C-c     org-columns
C-c C-x C-d     org-clock-display
C-c C-x C-f     org-emphasize
C-c C-x TAB     org-clock-in
C-c C-x C-j     org-clock-goto
C-c C-x C-l     org-preview-latex-fragment
C-c C-x RET     Prefix Command
C-c C-x C-n     org-next-link
C-c C-x C-o     org-clock-out
C-c C-x C-p     org-previous-link
C-c C-x C-q     org-clock-cancel
C-c C-x C-r     org-clock-report
C-c C-x C-s     org-advertized-archive-subtree
C-c C-x C-t     org-toggle-time-stamp-overlays
C-c C-x C-u     org-dblock-update
C-c C-x C-v     org-toggle-inline-images
C-c C-x C-w     org-cut-special
C-c C-x C-x     org-clock-in-last
C-c C-x C-y     org-paste-special
C-c C-x C-z     org-resolve-clocks
C-c C-x ESC     Prefix Command
C-c C-x !       org-reload
C-c C-x ,       org-timer-pause-or-continue
C-c C-x -       org-timer-item
C-c C-x .       org-timer
C-c C-x 0       org-timer-start
C-c C-x :       org-timer-cancel-timer
C-c C-x ;       org-timer-set-timer
C-c C-x <       org-agenda-set-restriction-lock
C-c C-x >       org-agenda-remove-restriction-lock
C-c C-x A       org-archive-to-archive-sibling
C-c C-x D       org-shiftmetadown
C-c C-x E       org-inc-effort
C-c C-x G       org-feed-goto-inbox
C-c C-x L       org-shiftmetaleft
C-c C-x M       org-insert-todo-heading
C-c C-x P       org-set-property-and-value
C-c C-x R       org-shiftmetaright
C-c C-x U       org-shiftmetaup
C-c C-x [       org-reftex-citation
C-c C-x \\       org-toggle-pretty-entities
C-c C-x \_       org-timer-stop
C-c C-x a       org-toggle-archive-tag
C-c C-x b       org-tree-to-indirect-buffer
C-c C-x c       org-clone-subtree-with-time-shift
C-c C-x d       org-insert-drawer
C-c C-x e       org-set-effort
C-c C-x f       org-footnote-action
C-c C-x g       org-feed-update-all
C-c C-x i       org-insert-columns-dblock
C-c C-x l       org-metaleft
C-c C-x m       org-meta-return
C-c C-x o       org-toggle-ordered-property
C-c C-x p       org-set-property
C-c C-x q       org-toggle-tags-groups
C-c C-x r       org-metaright
C-c C-x u       org-metaup
C-c C-x v       org-copy-visible
C-c C-x <left>  org-shiftcontrolleft
C-c C-x <right>                 org-shiftcontrolright
C-c C-v C-M-h   org-babel-mark-block
C-c C-x C-M-v   org-redisplay-inline-images
C-c C-x M-w     org-copy-special
C-c C-x RET g   org-mobile-pull
C-c C-x RET p   org-mobile-push

## Remappings

<C-S-down>      org-shiftcontroldown
<C-S-left>      org-shiftcontrolleft
<C-S-return>    org-insert-todo-heading-respect-content
<C-S-right>     org-shiftcontrolright
<C-S-up>        org-shiftcontrolup
<C-return>      org-insert-heading-respect-content
<C-tab>         org-force-cycle-archived
<M-S-down>      org-shiftmetadown
<M-S-left>      org-shiftmetaleft
<M-S-return>    org-insert-todo-heading
<M-S-right>     org-shiftmetaright
<M-S-up>        org-shiftmetaup
<M-down>        org-metadown
<M-left>        org-metaleft
<M-return>      org-meta-return
<M-right>       org-metaright
<M-up>          org-metaup
<S-down>        org-shiftdown
<S-iso-lefttab>                 org-shifttab
<S-left>        org-shiftleft
<S-right>       org-shiftright
<S-tab>         org-shifttab
<S-up>          org-shiftup


ESC <S-down>    org-shiftmetadown
ESC <S-left>    org-shiftmetaleft
ESC <S-return>  org-insert-todo-heading
ESC <S-right>   org-shiftmetaright
ESC <S-up>      org-shiftmetaup
ESC <down>      org-metadown
ESC <left>      org-metaleft
ESC <return>    org-meta-return
ESC <right>     org-metaright
ESC <tab>       pcomplete
ESC <up>        org-metaup
