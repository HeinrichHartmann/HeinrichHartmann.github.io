---
layout: "post"
author: "Heinrich Hartmann"
location: Stemwede, Germany
title: Dynamic Tracing with GDB
permalink: /blog/dynamic-tracing-with-gdb.html
hidden: true
categories:
- blog
splash:
  src: "/assets/marc-olivier-jodoin-291607-unsplash.jpg"
  credits: "Photo by Marc-Olivier Jodoin on <a href=\"https://unsplash.com/photos/NqOInJ-ttqM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a>"
---


Dynamic tracing is a very powerful debuging technique, that allows you to observe the behavior of running programs in a deep and meaningful way.
People who have worked with Solaris or FreeBSD know about [dtrace(1)](http://dtrace.org/guide/preface.html) and the great powers it gives you to dynamically observe the system behavior. 
It's one of the things you really miss on Linux, once you have gotten to know it.
If you have not heard about dtrace check out this collection of [one-liners](http://www.brendangregg.com/DTrace/dtrace_oneliners.txt) to get an idea of it's capabilities.

I was extremely happy to learn, that I can emulate some of the key features with gdb quite easily.
The key functions that allow this are:

1. *[dprintf](https://sourceware.org/gdb/current/onlinedocs/gdb/Dynamic-Printf.html#Dynamic-Printf)* Dynamically insert printf statments in your code.

2. *[breakpoint commands](https://sourceware.org/gdb/current/onlinedocs/gdb/Break-Commands.html#Break-Commands)* Script actions to be taken after a breakpoint is hit.

Both of them allow gdb to perform some functions of a dynamic tracer.
The second one is much more powerfull than the first.

Of course, there is a big performance penalty to pay.
Attaching gdb to your process will slow is down a lot.
This limits the applicability of this method to debugging situations in controlled or segregated environments.
You won't be able to debug subtle race conditions, or trace a heavily loaded database.
However, there are plenty of situations where a heavy performance hit is acceptable.

In this post, I'll give you a quick tour of the capabilities and walk through two example debugging sessions.

## dprintf

The general dprintf sytax is:

```
dprintf location, template, expression [,expression…]
```

Let's say you are debgging a program and you want to print the value of the string `http_ctx->url` in file `http_handler.c` line `203` everytime it is hit. 
You can do that using:

```
dprintf http_handler.c:203, "URL: %s\n", http_ctx->url
```

This is the equivalent of inserting the following line at `http_handler.c:203`:

```
printf("URL: %s\n", http_ctx->url);
```

The location argment can also hold function names.

## break commands

In order to use gdb commands for dynamic tracing you can use the following syntax

```
break location [if condition]
commands
  [silent]
  ... command list ...
  continue
end
```

The silent statment tells gdb to ommit the usual status print-outs when a breakpoint is hit ("Breakpoint 1 ...").
The continue statment causes gdb to continue execution after the commands are processed.

The above `dprintf` example can be reproduced using break commands as follows:

```
break http_handler.c:203
commands
  silent
  printf "URL: %s\n", http_ctx->url
  continue
end
```

The possibilities of break commands go far beyond dprintf.
For example you can attach to syscalls and watchpoints as well.
This listing will print the stack trace, each time the read syscall was hit:

```
catch syscall read
commmands
   backtrace
   continue
end
```

Unfortunately more complex commands seem to have issues.
The listing below stops after the first breakpoint was hit.

```
break some_function_name
commands
  finish # return from current function. Print return value
  continue # <- this is not executed
end
```

## Invoking GDB

gdb's default mode of operation is intended for interactive debugging, which we are not interested in here.
Fortunately gdb supports a number of flags on the command line, that allow operations to be scripted
and avoid interruptions of the program.

The relevant sections form the [manual](https://sourceware.org/gdb/onlinedocs/gdb/File-Options.html#File-Options) are:
* `-x file`  
  Execute commands from file file. The contents of this file is evaluated exactly as the source command would. See Command files.

* `-ex command`  
  Execute a single GDB command.
  This option may be used multiple times to call multiple commands. It may also be interleaved with ‘-command’ as required.
  ```
  gdb -ex 'target sim' -ex 'load' -ex 'run' a.out
  ```

* `-batch`  
  Run in batch mode. Exit with status 0 after processing all the command files specified with ‘-x’ (and all commands from initialization files, if not inhibited with ‘-n’).

* `-p number`  
  Connect to process ID number, as with the attach command.

A typical invocation of gdb will looks something like this for me:

```
gdb -p $(pgrep -n some_program_name) -batch \
    -ex 'dprintf some_symbol_name,"hit some_symbol_name w/ var_a=%s\n",var_a' \
    -ex 'continue'
```

For more complex actions I usually pass a script with the `-x` switch.

## Example less

## Example nginx

## Discussion

With the difference, that I don't have to stop the process, and re-compile the program.
You can even do that withought having access to the source code, or setting up a build environment.
Building a complex C program can be an extremely tedious process.
Not having to jump throught that hoop is a big plus.

There are a great number of bugs which disappear once you restart the process.
This is why the advice "Have you tried turning if on and off again?" is given so often.
Stale caches are a primary offender here.
In these cases, inserting printf statements will not help you.
You need to be able to diagnose the running process.

## Appendix

Debugging is one of the major activities while developing software.
Debugging is not only about finding bugs but also about understanding sofware.
As such it has a lot incommon with monitoring and observability.

In this post I'll formulate some goals or principles on what I thing a good debugging session should looks like.
We will then see how far we get to realizing those goals with gdb.

1. **Don't stop the program.**
   We need to be able to observe programs running in the wild.
   Creating process state is a highly delicate process.
   There might be startup scripts involved, that carefully craft an environment.
   There might be multiple forks before the process we are interested in is created.
   Sometimes the condition might be impossible to reproduce in a controlled environment.
   A faulty process state is something precious.
   Don't destroy it needlessly.

2. **No interactive debugging.**
   Setting breakpoints and stepping through code is tedious and often not very enlightening.
   1. Inspect the source or backtraces.
   2. Decide what you want to know next, in the form of a question. ("What are the arguments to this function"?)
   3. Write the instrumentation to answer that question.
   4. Trigger the condition. (E.g. make the web request)
   5. Inspect the answer.

3. **Repeatable.**
   A debugging session should be programmatic and repeatable.
   If the process experiences a similar problem you can build upon what you already have.
