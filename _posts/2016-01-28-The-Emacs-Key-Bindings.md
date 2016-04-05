---
author: "Heinrich Hartmann"
layout: "text"
---

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                                            {{ page.date | date: "%Y-%m-%d" }}

                         ----------------------
                         THE EMACS KEY-BINDINGS
                         ----------------------


This note contains a full annotated list of Emacs default key bindings,
as produced by


    $ emacs -q -e describe-bindings


using GNU Emacs 24.4.1., with the exception of mouse commands, arrow
key commands (since they distract the flow) key translations and pure
prefix commands (like `C-x`). The bindings categorized and sorted by
my personal preference.

This post started as a private exercise while reading the Emacs
documentation on a flight (without internet access). The aim is to get
a firm grip around the default key bindings, that are available the
packaged Emacs versions.

On the way I discovered quite a few nifty bindings, that I was not
aware of before, and started using since then. They are marked with an
'awesome'-tag on the left fringe, of-course ony reflects my personal            *AWESOME*
oppionion. In addition, the following markers are used in the comments:

- !, !!, !!! --  Bindings I use often
- #          --  Bindings I have never used. (Not always annotated)
- ?, ??, ??? --  Bindings I find confusing ... really stupid.

Try searching for `!???` to see major pain-points.

/Customization is bad/.  There is an argument to be made, that
customization is dangerous.  It's too easy to invest too much time
into fiddling around with it, and end up with overall worse usability!

Also, configuration is sometimes misused, to avoid learning new
workflows and keybindings. "I already have my way of doing this, I
want emacs to behave the same". This might work at the beginning, but
youare digging yourself a hole. There are just too many commands to
change, and if you include external plugins and extensions, conflicts
are inevitable. Yes. I have been there.

By avoiding configuration you get another bonus, that, if you are
using remote machines, that come with a plain emacs
installation. Copying configurations and reinstalling packages is
often problematic, and not really worth it if you are just editing
some config files.

/Completeness is good/. Only after reading the whole list of
keybindings, you can be sure, not to have missed that super-useful
command that Emacs provides per default. In fact while going through
this exercise I discovered quit a few handy bindings that I was not
aware of. Even if you do not remember all the bindings, knowing about
the feature will allow you to lookup the binding in the help menu or
type in the function name into the `M-x` command input.

PS: Sorry, for making this an ASCII post. After fiddeling with HTML
tables for too long, I went for the plaint text version.

PPS: The best way to read this post is, of course, in emacs:
- `M-x eww` open browser and load `heinrichhartmann.com`
- navigate to this blog post
- Read the post and try things out as you move along.
- To get more information about a function move the cursor to the
  function name, and press `C-h f`.


1 Standard Global Keybindings
=============================

1.1 Basic Editing
~~~~~~~~~~~~~~~~~

1.1.1 View control
------------------

  Commands that change the current view port, without moving the cursor
  (i.e. 'point').

  -----------------------------------------------------------------------
   Key      Lisp function        Comment
  -----------------------------------------------------------------------
   `C-l`    recenter-top-bottom  Move cursor to center -> top -> bottom.
   `C-v`    scroll-up-command    !?
   `M-v`    scroll-down-command  !??? This is so bad.
   `C-x <`  scroll-left          # I have never used this.
   `C-x >`  scroll-right         # I have never used this.

1.1.2 Cursor Movement
---------------------

* 1.1.2.1 Horizontal Movement

   `C-f`    forward-char
   `C-b`    backward-char
   `M-f`    forward-word
   `M-b`    backward-word
   `C-M-f`  forward-sexp
   `C-M-b`  backward-sexp

   `C-a`    move-beginning-of-line
   `C-e`    move-end-of-line
   `M-a`    backward-sentence
   `M-e`    forward-sentence
   `C-M-a`  beginning-of-defun
   `C-M-e`  end-of-defun

  These bindings are intended for microscopic editing. They are much
  better accessible than arrow keys. But still a little awkward. I don't
  get why you would bind a command like `backward-char` that is used
  multiple times per minute to a key (`C-b`) that is easy to remember,
  but not ideally placed on the keyboard. Vi's jk bindings seem superior
  here. The only excuse might be that the authors of Emacs wanted to
  actively discourage cursor movement by line or character.

  The `C-a/e` combo seems to me a better trade-off than `C-f/b` above.

* 1.1.2.2 Vertical Movement

   `C-n`    next-line         ??
   `C-p`    previous-line     ??
   `C-M-n`  forward-list      # for code (LISP) editing
   `C-M-p`  backward-list     #
   `C-M-d`  down-list         # for code (LISP) editing
   `C-M-u`  backward-up-list  #

  So, why is M-n/p not bound at all? It seems quite natural to bind
  forward/backward paragraph on those keys.

   `M-<`    beginning-of-buffer  ! This also sets mark where left off
   `M->`    end-of-buffer
   `M-}`    forward-paragraph    Why not `M-n` ?
   `M-{`    backward-paragraph   Why not `M-p` ?
   `C-x [`  backward-page        # The concept of a pages is rather arcane.
   `C-x ]`  forward-page         # I don't use these.

  Update 2016-03-17: It turns out, that `M-p` and `M-n` are frequently
  used by other modes. E.g. in the buffer finder, file finder and
  shell-mode has `M-p/-n` bound to `previous-history` /
  `next-history`, in org-mode it can be used to move a subtree up or
  down.

* 1.1.2.3 Smart Cursor Positioning

   `M-m`      back-to-indentation             Use this instead of `C-n` to
                                              move through source code.
   `M-r`      move-to-window-line-top-bottom  This is a counterpart to `C-l`
   `C-M-l`    reposition-window               Careful with logout in gnome.
   `C-x C-n`  set-goal-column                 Change the default column
                                              that `C-n`,`C-p` jump to.

   I never used these controls. Some modes are overwriting the `C-n`,
   `C-p` and RET to automatically indent. This seems to be better,
   than using these semi-generic keybindings.

* 1.1.2.4 Goto Commands

   `M-g g`    goto-line
   `M-g M-g`  goto-line       !! Better tempo then M-g g
   `M-g TAB`  move-to-column  # maybe useful in kbd-macros.
   `M-g c`    goto-char       counted from the beginning of the buffer

   When editing source code, the following commands are available:

   `C-x \``   next-error
   `M-g n`    next-error
   `M-g M-n`  next-error
   `M-g p`    previous-error
   `M-g M-p`  previous-error


1.1.3 Search/Replace/Filter
---------------------------

  Incremental search is a very powerful movement method.

   `C-s`    isearch-forward             !!!
   `C-r`    isearch-backward
   `C-M-s`  isearch-forward-regexp
   `C-M-r`  isearch-backward-regexp
   `M-%`    query-replace               !??? awkward binding!
   `C-M-%`  query-replace-regexp        #??? Even `M-x query-repl..` seems
                                        better than that.

   `M-s .`  isearch-forward-symbol-at-point
   `M-s _`  isearch-forward-symbol
   `M-s w`  isearch-forward-word

   `M-s o`  occur                        Filter contents of buffer         *AWESOME*


1.1.4 Kill/Yank
---------------

  This is the Emacs version of copy/paste

  With the following bindings, you can kill very precise regions of
  text.  Don't forget that you can use these in conjunction with prefix
  arguments: `M--` or `C-u 4`.

   `M-d`      kill-word
   `C-k`      kill-line          !!!
   `M-k`      kill-sentence
   `C-M-k`    kill-sexp
   `C-x k`    kill-buffer
   `C-w`      kill-region        The equivalent of cut
   `C-x r k`  kill-rectangle

  Kill/copy/mark up to the (N-th) occurrence of char:

   `M-z`  zap-to-char                                                      *AWESOME*

* 1.1.4.1 Backspace/Delete Combos

   `backspace`        delete-backward-char
   `C-backspace`      backward-kill-word
   `M-backspace`      backward-kill-word
   `C-S-backspace`    kill-whole-line
   `ESC C-backspace`  backward-kill-sexp
   `C-x backspace`    backward-kill-sentence

   `delete`    delete-forward-char
   `C-delete`  kill-word
   `S-delete`  kill-region


* 1.1.4.2 Kill-Save

   `M-w`        kill-ring-save            The equivalent of copy
   `C-x r M-w`  copy-rectangle-as-kill

* 1.1.4.3 Kill Append

  Append to current kill-ring-entry:

   `C-M-w`  append-next-kill                                               *AWESOME*

* 1.1.4.4 Yanking

   `C-y`      yank            The equivalent of paste
   `M-y`      yank-pop        Cycle through kill-ring.
                              Only allowed after `C-y` or `M-y`
   `C-x r y`  yank-rectangle


1.1.5 Inserting Text
--------------------

  use the keyboard to insert characters as usual new lines

   `C-j`      electric-newline-and-maybe-indent
   `M-j`      indent-new-comment-line
   `C-M-j`    indent-new-comment-line
   `C-o`      open-line
   `C-x r o`  open-rectangle

   `<insert>`   overwrite-mode
   `C-d`        delete-char
   `C-q`        quoted-insert   use e.g. for new lines by `C-q RET`
                                or tab `C-q TAB`
   `C-x 8 RET`  insert-char     insert Unicode character


1.1.6 Undo
----------

   `C-/`    undo
   `C-x u`  undo keyboards         useful on international keyboards
   `C-_`    undo


1.1.7 Transpose
---------------

   `C-t`      transpose-chars
   `M-t`      transpose-words
   `C-M-t`    transpose-sexps
   `C-x C-t`  transpose-lines

  These functions can also be used to drag text snippets forward with
  the point.


1.2 Advanced Editing
~~~~~~~~~~~~~~~~~~~~

   `M-SPC`    just-one-space             delete additional white-space     *AWESOME*
                                         between words. Unbind this in
                                         the window manager.
   `M-\`      delete-horizontal-space    delete all spaces and tabs        *AWESOME*
                                         around point.
   `M-(`      insert-parentheses
   `C-M-o`    split-line
   `C-x C-o`  delete-blank-lines
   `M-)`      move-past-close-and-reindent


* 1.2.0.1 Indent

   `C-M-\`    indent-region
   `C-x TAB`  indent-rigidly      interactive! with (S-) arrow keys.       *AWESOME*
   `M-^`      delete-indentation  join line at point with predecessor


* 1.2.0.2 Up- & down-case

   `M-c`      capitalize-word  Operate on current word. Use with
                               prefix arguments: E.g. M-- M-5 M-u
   `M-u`      upcase-word
   `M-l`      downcase-word
   `C-x C-l`  downcase-region
   `C-x C-u`  upcase-region

* 1.2.0.3 Filling

   `M-q`      fill-paragraph           !! use C-u M-q to justify
   `C-x f`    set-fill-column
   `C-x .`    set-fill-prefix          fill comments or quotes
   `M-o M-s`  center-line              center within 0-fill column
   `M-o M-S`  center-paragraph
   `M-o M-o`  font-lock-fontify-block


1.2.1 Tab Stops
---------------

  Yes, appareny Emacs supports tab stops. Try:

    M-x edit-tab-stops                                                     *AWESOME*
    M-x ruler-mode

  or `M-: (setq tab-stop-list '(5 10 30))`
  and checkout the manual!

   `M-i`  tab-to-tab-stop  move to next tab column


1.2.2 Marks and Regions
-----------------------

  Use the following bindings, to mark larger chunks of text, without
  moving the point.

   `M-@`        mark-word          Repeat to mark multiple words.
   `M-h`        mark-paragraph
   `C-M-SPC`    mark-sexp
   `C-M-@`      mark-sexp
   `C-M-h`      mark-defun
   `C-x h`      mark-whole-buffer  I looked for this one for a while.      *AWESOME*
   `C-x C-p`    mark-page

   `C-SPC`      set-mark-command         Use C-u C-SPC to walk through
                                         local mark-ring.
   `C-x C-x`    exchange-point-and-mark
   `C-x SPC`    rectangle-mark-mode
   `C-x C-@`    pop-global-mark
   `C-x C-SPC`  pop-global-mark


1.2.3 Restricted Editing
------------------------

  Narrow down editing area. Great when you have a large file and that
  contains multiple chapters.  I use this a lot with org mode, to narrow
  the scope to the current subtree (`C-s n s`).

   `C-x n n`  narrow-to-region       only show the active region           *AWESOME*
   `C-x n w`  widen                  back to full buffer
   `C-x n d`  narrow-to-defun        Never used these
   `C-x n p`  narrow-to-page
   `C-x $`    set-selective-display  Use with numeric prefix.
                                     Lines whose indentation is >= that
                                     value are not displayed.

1.2.4 Keyboard Macros
---------------------

   `C-x (`        kmacro-start-macro
   `C-x )`        kmacro-end-macro
   `C-x e`        kmacro-end-and-call-macro

Alternatives for e.g. international keyboards:

   `<f3>`         kmacro-start-macro-or-insert-counter
   `<f4>`         kmacro-end-or-call-macro

   `C-x C-k e`    edit-kbd-macro                        when you messed up
   `C-x C-k RET`  kmacro-edit-macro
   `C-x C-k x`    kmacro-to-register                    Store macro.
   `C-x q`        kbd-macro-query
   `C-x C-k C-a`  kmacro-add-counter
   `C-x C-k C-c`  kmacro-set-counter
   `C-x C-k C-d`  kmacro-delete-ring-head
   `C-x C-k C-e`  kmacro-edit-macro-repeat
   `C-x C-k C-f`  kmacro-set-format
   `C-x C-k TAB`  kmacro-insert-counter
   `C-x C-k C-k`  kmacro-end-or-call-macro-repeat
   `C-x C-k C-l`  kmacro-call-ring-2nd-repeat
   `C-x C-k C-n`  kmacro-cycle-ring-next
   `C-x C-k C-p`  kmacro-cycle-ring-previous
   `C-x C-k C-s`  kmacro-start-macro
   `C-x C-k C-t`  kmacro-swap-ring
   `C-x C-k C-v`  kmacro-view-macro-repeat
   `C-x C-k SPC`  kmacro-step-edit-macro
   `C-x C-k b`    kmacro-bind-to-key
   `C-x C-k l`    kmacro-edit-lossage
   `C-x C-k n`    kmacro-name-last-macro
   `C-x C-k q`    kbd-macro-query
   `C-x C-k r`    apply-macro-to-region-lines
   `C-x C-k s`    kmacro-start-macro


1.2.5 Register Commands
-----------------------

I am not using registers ATM.

   `C-x r C-@`    point-to-register
   `C-x r SPC`    point-to-register
   `C-x r +`      increment-register
   `C-x r N`      rectangle-number-lines
   `C-x r b`      bookmark-jump
   `C-x r c`      clear-rectangle
   `C-x r d`      delete-rectangle
   `C-x r f`      frameset-to-register
   `C-x r g`      insert-register
   `C-x r i`      insert-register
   `C-x r j`      jump-to-register
   `C-x r l`      bookmark-bmenu-list
   `C-x r m`      bookmark-set
   `C-x r n`      number-to-register
   `C-x r r`      copy-rectangle-to-register
   `C-x r s`      copy-to-register
   `C-x r t`      string-rectangle
   `C-x r w`      window-configuration-to-register
   `C-x r x`      copy-to-register
   `C-x r C-SPC`  point-to-register


1.2.6 Abbreviations
-------------------

I am not using abbreviations. Maybe I should.

   `C-x '`      expand-abbrev
   `M-'`        abbrev-prefix-mark
   `M-/`        dabbrev-expand
   `C-M-/`      dabbrev-completion
   `C-x a '`    expand-abbrev
   `C-x a C-a`  add-mode-abbrev
   `C-x a +`    add-mode-abbrev
   `C-x a g`    add-global-abbrev
   `C-x a -`    inverse-add-global-abbrev
   `C-x a e`    expand-abbrev
   `C-x a i`    Prefix Command
   `C-x a l`    add-mode-abbrev
   `C-x a n`    expand-jump-to-next-slot
   `C-x a p`    expand-jump-to-previous-slot
   `C-x a i g`  inverse-add-global-abbrev
   `C-x a i l`  inverse-add-mode-abbrev


1.2.7 Tags
----------

Tags allow you to navigate though source code quickly. You need
to install ctags/etags and create a tag file before this works.

   `M-*`    pop-tag-mark
   `M-,`    tags-loop-continue
   `M-.`    find-tag                                                       *AWESOME*
   `C-M-.`  find-tag-regexp


1.2.8 Comments
--------------

   `M-;`    comment-dwim        use this one!                              *AWESOME*
   `C-x ;`  comment-set-column


1.2.9 Get information about the current file
--------------------------------------------

   `M-=`    count-words-region
   `C-x l`  count-lines-page
   `C-x =`  what-cursor-position


1.3 Modes and Commands
~~~~~~~~~~~~~~~~~~~~~~

1.3.1 Dired
-----------

   `C-x C-d`  list-directory
   `C-x d`    dired


1.3.2 Shell
-----------

   `M-!`      shell-command            Use `C-u M-!` to insert response    *AWESOME*
   `M-&`      async-shell-command
   `M-|`      shell-command-on-region  Use `C-u M-!` to insert response.   *AWESOME*

These are powerful functions, that unleash the power of UNIX tools to
your editor. E.g. grep lines, insert line numbers, perform computations.

1.3.3 Ispell
------------

   `M-$`  ispell-word

1.3.4 Lisp
----------

   `C-x C-e` eval-last-sexp
   `M-:`     eval-expression                                               *AWESOME*
   `M-ESC`   eval-expression


1.3.5 Others
------------

   `C-x`  compose-mail   system mail
   `C-x`  calc-dispatch  invoke Emacs Calculator


1.3.6 Two-colum mode
--------------------

  Annotate the current buffer side by side.  I did not know about this
  before. It seems handy.

   `<f2> <f2>`   2C-two-columns                                            *AWESOME*
   `C-x 6 2`     2C-two-columns
   `C-x 6 b`     2C-associate-buffer
   `C-x 6 s`     2C-split
   `C-x 6 <f2>`  2C-two-columns
   `<f2> 2`      2C-two-columns
   `<f2> b`      2C-associate-buffer
   `<f2> s`      2C-split


1.3.7 Highlight
---------------

   `M-s h .`  highlight-symbol-at-point
   `M-s h f`  hi-lock-find-patterns
   `M-s h l`  highlight-lines-matching-regexp
   `M-s h p`  highlight-phrase                                             *AWESOME*
   `M-s h r`  highlight-regexp
   `M-s h u`  unhighlight-regexp
   `M-s h w`  hi-lock-write-interactive-patterns

1.3.8 Version Control Commands
------------------------------

   `C-x v +`  vc-update
   `C-x v =`  vc-diff
   `C-x v D`  vc-root-diff
   `C-x v G`  vc-ignore
   `C-x v I`  vc-log-incoming
   `C-x v L`  vc-print-root-log
   `C-x v O`  vc-log-outgoing
   `C-x v a`  vc-update-change-log
   `C-x v b`  vc-switch-backend
   `C-x v c`  vc-rollback
   `C-x v d`  vc-dir
   `C-x v g`  vc-annotate
   `C-x v h`  vc-insert-headers
   `C-x v i`  vc-register
   `C-x v l`  vc-print-log
   `C-x v m`  vc-merge
   `C-x v r`  vc-retrieve-tag
   `C-x v s`  vc-create-tag
   `C-x v u`  vc-revert
   `C-x v v`  vc-next-action
   `C-x v ~`  vc-revision-other-window


1.4 Display Controls
~~~~~~~~~~~~~~~~~~~~

1.4.1 Text Scale
----------------

   `C-x C-+`  text-scale-adjust
   `C-x C--`  text-scale-adjust
   `C-x C-0`  text-scale-adjust
   `C-x C-=`  text-scale-adjust


1.4.2 Loading and writing files
-------------------------------

   `C-x C-f`  find-file
   `C-x C-q`  read-only-mode
   `C-x C-r`  find-file-read-only
   `C-x C-v`  find-alternate-file         replaces current buffer. Use this if
                                          you accidentally opended the wrong file.
   `C-x i`    insert-file                 instert content of file at point
   `C-x C-s`  save-buffer
   `C-x C-w`  write-file                  save-as
   `C-x s`    save-some-buffers           ask for each buffer.
   `C-x C-c`  save-buffers-kill-terminal

* 1.4.2.1 File encoding

   `C-x RET C-\`  set-input-method
   `C-x RET F`    set-file-name-coding-system
   `C-x RET X`    set-next-selection-coding-system
   `C-x RET c`    universal-coding-system-argument
   `C-x RET f`    set-buffer-file-coding-system
   `C-x RET k`    set-keyboard-coding-system
   `C-x RET l`    set-language-environment
   `C-x RET p`    set-buffer-process-coding-system
   `C-x RET r`    revert-buffer-with-coding-system
   `C-x RET t`    set-terminal-coding-system
   `C-x RET x`    set-selection-coding-system


1.4.3 Swtich Buffers
--------------------

   `C-x b`          switch-to-buffer  !!!
   `C-x C-b`        list-buffers      !
   `C-x <C-left>`   previous-buffer
   `C-x <C-right>`  next-buffer
   `C-x <left>`     previous-buffer
   `C-x <right>`    next-buffer
   `M-~`            not-modified       # never used this


1.4.4 Window control
--------------------

   `C-x o`  other-window          !!!?? This is slightly awkward.
   `C-x 0`  delete-window
   `C-x 1`  delete-other-windows
   `C-x 2`  split-window-below
   `C-x 3`  split-window-right

* 1.4.4.1 Window Sizes

  I use the mouse for this, if I resize windows at all.

   `C-x +`  balance-windows
   `C-x ^`  enlarge-window
   `C-x -`  shrink-window-if-larger-than-buffer
   `C-x {`  shrink-window-horizontally
   `C-x }`  enlarge-window-horizontally


* 1.4.4.2 Other window control

   `C-M-v`       scroll-other-window
   `C-M-S-v`     scroll-other-window-down
   `C-x 4 C-f`   find-file-other-window
   `C-x 4 f`     find-file-other-window
   `C-x 4 C-o`   display-buffer
   `C-x 4 b`     switch-to-buffer-other-window
   `C-x 4 d`     dired-other-window
   `C-h 4 i`     info-other-window              more often needed than `C-h i`
   `<f1> 4 i`    info-other-window
   `<help> 4 i`  info-other-window

  never used these
   `C-x 4 0`  kill-buffer-and-window
   `C-x 4 .`  find-tag-other-window
   `C-x 4 a`  add-change-log-entry-other-window
   `C-x 4 c`  clone-indirect-buffer-other-window
   `C-x 4 m`  compose-mail-other-window
   `C-x 4 r`  find-file-read-only-other-window

  these keys are far away
   `<M-begin>`  beginning-of-buffer-other-window
   `<M-end>`    end-of-buffer-other-window
   `<M-home>`   beginning-of-buffer-other-window
   `<M-prior>`  scroll-other-window-down
   `<M-next>`   scroll-other-window

   `ESC <begin>`  beginning-of-buffer-other-window
   `ESC <end>`    end-of-buffer-other-window
   `ESC <home>`   beginning-of-buffer-other-window
   `ESC <next>`   scroll-other-window
   `ESC <prior>`  scroll-other-window-down


1.4.5 Frame Control
-------------------

   `C-z`        suspend-frame
   `C-x C-z`    suspend-frame
   `<f10>`      menu-bar-open
   `<M-f10>`    toggle-frame-maximized
   `<f11>`      toggle-frame-fullscreen
   `ESC <f10>`  toggle-frame-maximized


* 1.4.5.1 Operate on other frame

  Emacs allows splitting windows like tmux. Hence, use cases for frames
  are limited, to cases where two differen window setups are used in
  parallel. E.g. viewing a pdf, reading email.

   `C-x 5 0`    delete-frame
   `C-x 5 1`    delete-other-frames
   `C-x 5 2`    make-frame-command
   `C-x 5 o`    other-frame
   `C-x 5 b`    switch-to-buffer-other-frame
   `C-x 5 C-f`  find-file-other-frame
   `C-x 5 f`    find-file-other-frame
   `C-x 5 r`    find-file-read-only-other-frame
   `C-x 5 C-o`  display-buffer-other-frame
   `C-x 5 .`    find-tag-other-frame
   `C-x 5 d`    dired-other-frame
   `C-x 5 m`    compose-mail-other-frame


1.5 Emacs Special
~~~~~~~~~~~~~~~~~

   `M-x`  execute-extended-command


1.5.1 Prefix arguments
----------------------

   `C-u`    universal-argument  Provide additional arguments to lisp functions.
   `C--`    negative-argument   new for me. Reverse the direction of e.g. killing
   `M--`    negative-argument
   `C-M--`  negative-argument


1.5.2 Get out of trouble
------------------------

   `C-g`    keyboard-quit         When you are in trouble.
   `C-M-c`  exit-recursive-edit   When you are in recursive trouble.
   `C-]`    abort-recursive-edit

   `C-\`  toggle-input-method
   `M-``  tmm-menubar          tmm is 'transient markup mode'


1.5.3 Facemenu
--------------

   `M-o b`  facemenu-set-bold
   `M-o d`  facemenu-set-default
   `M-o i`  facemenu-set-italic
   `M-o l`  facemenu-set-bold-italic
   `M-o o`  facemenu-set-face
   `M-o u`  facemenu-set-underline


1.6 Getting Help
~~~~~~~~~~~~~~~~

  You can use <f1> or <help> instead of <C-h> prefix.

   `C-h m`  describe-mode      !!! learn more about the current major-mode
   `C-h a`  apropos-command    Can't remember key-binding or function name?
   `C-h r`  info-emacs-manual  get proper help; use `C-h r i` to search for topic.


1.6.1 Describe
--------------

   `C-h f`    describe-function      !! default search string is the word at the point
   `C-h k`    describe-key
   `C-h b`    describe-bindings
   `C-h v`    describe-variable
   `C-h .`    display-local-help
   `C-h C-w`  describe-no-warranty
   `C-h C-\`  describe-input-method
   `C-h C`    describe-coding-system
   `C-h I`    describe-input-method
   `C-h L`    describe-language-environment
   `C-h P`    describe-package
   `C-h c`    describe-key-briefly
   `C-h g`    describe-gnu-project
   `C-h s`    describe-syntax
   `C-h C-o`  describe-distribution


1.6.2 Info
----------

   `C-h i`  info
   `C-h S`  info-lookup-symbol
   `C-h F`  Info-goto-emacs-command-node
   `C-h K`  Info-goto-emacs-key-command-node


1.6.3 Others
------------

   `C-h C-h`     help-for-help
   `C-h C-a`     about-emacs
   `C-h C-c`     describe-copying
   `C-h C-d`     view-emacs-debugging
   `C-h C-e`     view-external-packages
   `C-h C-f`     view-emacs-FAQ
   `C-h RET`     view-order-manuals
   `C-h C-n`     view-emacs-news
   `C-h C-p`     view-emacs-problems
   `C-h C-t`     view-emacs-todo
   `C-h ?`       help-for-help
   `C-h d`       apropos-documentation
   `C-h e`       view-echo-area-messages
   `C-h h`       view-hello-file
   `C-h l`       view-lossage
   `C-h n`       view-emacs-news
   `C-h p`       finder-by-keyword
   `C-h q`       help-quit
   `C-h t`       help-with-tutorial
   `C-h w`       where-is
   `C-h <help>`  help-for-help
   `C-h <f1>`    help-for-help

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

## Version History [github](https://github.com/HeinrichHartmann/HeinrichHartmann.github.io/commits/source/_posts/2016-01-28-The-Emacs-Key-Bindings.md)

- 2015-04-02 Updated comments on M-p/M-n
- 2015-04-06 Added highlights to useful bindings
