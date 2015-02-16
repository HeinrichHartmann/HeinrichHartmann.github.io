<!-- # Dissecting Hello World -->

This note is part of an effort to understand how a PC works. What
happens from the writing of code until the actual physical comptation
of inside the CPU?  In particular:

* How does a computer compute? Physical Layout of a CPU, Registers, Boolean Logic.
* How does a computer execute a program?
* What operations are atomic, i.e. hard wired inside the CPU and completed in one cycle?
* How does a computer store data? (RAM or HDD)

Here we follow a simple approach. We write a little program and see how far we can dissect it.

## Hello World

We start with a tiny little program which we choose to write in
[C](http://en.wikipedia.org/wiki/C_Programming_Language), because
people claim it is nearest to the actual processor logic. We call it
"simple.c":

    main(){
      int a,b,c;
      a=5;
      b=8;
      c = a+b;
    }

We compile this program on a Linux box with the command

    gcc simple.c

and get out an executable file a.out. This file is actually quiet long
it already has 8446 bytes. Lets look inside:

    hexedit a.out

We see that the file starts like that:

    00000000   7F 45 4C 46  02 01 01 00  00 00 00 00  00 00 00 00  .ELF............
    00000010   02 00 3E 00  01 00 00 00  E0 03 40 00  00 00 00 00  ..>.......@.....
    00000020   40 00 00 00  00 00 00 00  60 11 00 00  00 00 00 00  @.......`.......

and goes on and on for quiet a while. The output has the following structure:

* In the middle we see the content of the file in a hexadecimal encoding grouped into bytes:  
  For example 7F stands for the bit string: 0111 1111.
* The very left colum is a byte counter in a hexadecimal format.  
  So the 00000010 in the second line means we are starting with byte 16.
* On the right we have a translation of the code into ASCII symbols.

What does ELF mean? A quick search on
[wikipedia](http://en.wikipedia.org/wiki/Executable_and_Linkable_Format
Wikipedia) reveals, that there is a UNIX file format called
*Executable and Linkable Format* which has this very
abreviation. A call of `file a.out` reassures that this wilde guess
might be correct.

## The ELF File format

The best reference on ELF files on the net I could find is the
[John R. Levine - Linkers and Loaders](http://www.iecc.com/linker/). Our
treatment is similar to
[LinuxForums.org - ELF using readelf and objdump](http://www.linuxforums.org/articles/understanding-elf-using-readelf-and-objdump_125.html
).

As far as I understand the ELF format is a container format for executable files suitable for the Linux operating system.
Before a program can run on the CPU a [loader](http://en.wikipedia.org/wiki/Loader_(computing)) or
[dynamic linker](http://en.wikipedia.org/wiki/Dynamic_linker) program (in our case [ld.so](http://www.kernel.org/doc/man-pages/online/pages/man8/ld.so.8.html)) of the OS is called which servers the following tasks:

* Find and load shared libraries
* Load program code and data into the memory
* Translate adresses used inside the program to physical addresses inside the reserved memory block ([Relocation](http://en.wikipedia.org/wiki/Relocation_(computer_science))
* Puts passed commandline arguments onto the stack
* Setup registers (e.g. stack pointer)
* Jumps to the entry point of the program

### Examining the ELF File

According to the
[generic format specification](http://downloads.openwatcom.org/ftp/devel/docs/elf-64-gen.pdf) an ELF file consists of:

* a ''File header'', which must appear at the beginning of the ﬁle.
* ''Section table'' [..]
* ''Program header table'' Describes the [..] data structures required for loading a program [..].
* Contents of the sections and segments

The ELF file is used by the loader and by the linker in two different ways:

1. The linker works with '''sections'''. It rearranges sections and consolidates them over different files.
2. The loader works with '''segments''' specified by the programm headder's. A segment consists of several consecutive segments an is loaded into the memory at once.

### File Header
Diving further into the specification we find that the headder consists of the following components:

* unsigned char e_ident[16]; /* ELF identification */
* Elf64_Half e_type; /* Object file type */
* Elf64_Half e_machine; /* Machine type */
* Elf64_Word e_version; /* Object file version */
* Elf64_Addr e_entry; /* Entry point address */
* Elf64_Off e_phoff; /* Program header offset */
* Elf64_Off e_shoff; /* Section header offset */
* Elf64_Word e_flags; /* Processor-specific flags */
* Elf64_Half e_ehsize; /* ELF header size */
* Elf64_Half e_phentsize; /* Size of program header entry */
* Elf64_Half e_phnum; /* Number of program header entries */
* Elf64_Half e_shentsize; /* Size of section header entry */
* Elf64_Half e_shnum; /* Number of section header entries */
* Elf64_Half e_shstrndx; /* Section name string table index */

The first column describes the bit length of the corresponding entries.
The first line describes char=byte array of length 16, carrying the ELF Identification
In our example this is:

    7F 45 4C 46  02 01 01 00 00 00 00 00  00 00 00 00

These bytes have the following meaning:

* 7F = EI_MAG0 - File identiﬁcation
* 45 = EI_MAG1 = 'E'
* 4C = EI_MAG2 = 'L'
* 46 = EI_MAG3 = 'F'
* 02 = EI_CLASS - File class - 2 for 64 bit
* 01 = EI_DATA  - Data encoding - 1 for [http://en.wikipedia.org/wiki/Endianness little-endian] byte sorting
* 01 = EI_VERSION - File version
* 00 = EI_OSABI - OS/ABI identiﬁcation - 0 for System V ABI
* 00 = EI_ABIVERSION - ABI version
* 00 = EI_PAD - Start of padding bytes
* [..]
* 00 = EI_NIDENT - Size of e_ident[]

Fortunately we do not need to do all this byte matching by hand. There is already a linux tool that does that for you:
''readelf -h'' produces:

    Magic:   7f 45 4c 46 02 01 01 00 00 00 00 00 00 00 00 00
    Class:                             ELF64
    Data:                              2's complement, little endian
    Version:                           1 (current)
    OS/ABI:                            UNIX - System V
    ABI Version:                       0
    Type:                              EXEC (Executable file)
    Machine:                           Advanced Micro Devices X86-64
    Version:                           0x1
    Entry point address:               0x4003e0
    Start of program headers:          64 (bytes into file)
    Start of section headers:          4448 (bytes into file)
    Flags:                             0x0
    Size of this header:               64 (bytes)
    Size of program headers:           56 (bytes)
    Number of program headers:         9
    Size of section headers:           64 (bytes)
    Number of section headers:         31
    Section header string table index: 28

What do we learn from this information:

* The file is to be executed on a UNIX - System V compatible machine, with a 64bit Processor
* There are 31 sections with each having a header of size 64 bytes
* There are 9 segments each haveing a program header of size 56 bytes
* The executable code starts at offset 0x3e0 = 992

### ELF File structure

We see that the file has the following structure (byte offsets in []-braces):

    [0 - 63]                   File headder          (64 bytes)
    [64-120][..][511-567]      Program headders      (9*56 bytes)
    [568-4447]                 ???                   (4327 bytes)
    [4448-4512][..][6368-6431] Section headders      (31*64 bytes)
    [6432-8445]                ???                   (3932 bytes)

### Sections

Lets go ahead and instpect the section headders. Fortunately the byte
matching to the reference greatly simplyfied by use 'readelf
--sections'. We see that there are 31 section headers, starting at
offset 0x1160:

Section Headers:

    [Nr] Name              Type             Address           Offset
         Size              EntSize          Flags  Link  Info  Align
    [ 0]                   NULL             0000000000000000  00000000
         0000000000000000  0000000000000000           0     0     0
    [ 1] .interp           PROGBITS         0000000000400238  00000238
         000000000000001c  0000000000000000   A       0     0     1
    [ 2] .note.ABI-tag     NOTE             0000000000400254  00000254
         0000000000000020  0000000000000000   A       0     0     4
    [..]
    [12] .init             PROGBITS         00000000004003a8  000003a8
         0000000000000018  0000000000000000  AX       0     0     4
    [13] .plt              PROGBITS         00000000004003c0  000003c0
         0000000000000020  0000000000000010  AX       0     0     4
    [14] .text             PROGBITS         00000000004003e0  000003e0
         00000000000001e8  0000000000000000  AX       0     0     16
    [15] .fini             PROGBITS         00000000004005c8  000005c8
         000000000000000e  0000000000000000  AX       0     0     4
    [16] .rodata           PROGBITS         00000000004005d8  000005d8
         0000000000000004  0000000000000004  AM       0     0     4
    [..]
    [22] .dynamic          DYNAMIC          0000000000600e40  00000e40
         00000000000001a0  0000000000000010  WA       7     0     8
    [..]
    [25] .data             PROGBITS         0000000000601008  00001008
         0000000000000010  0000000000000000  WA       0     0     8
    [26] .bss              NOBITS           0000000000601018  00001018
         0000000000000010  0000000000000000  WA       0     0     8
    [27] .comment          PROGBITS         0000000000000000  00001018
         0000000000000048  0000000000000001  MS       0     0     1
    [28] .shstrtab         STRTAB           0000000000000000  00001060
         00000000000000fe  0000000000000000           0     0     1
    [29] .symtab           SYMTAB           0000000000000000  00001920
         0000000000000600  0000000000000018          30    47     8
    [30] .strtab           STRTAB           0000000000000000  00001f20
         00000000000001de  0000000000000000           0     0     1

    Key to Flags:
    W (write), A (alloc), X (execute), M (merge), S (strings)
    I (info), L (link order), G (group), x (unknown)
    O (extra OS processing required) o (OS specific), p (processor specific)

From this table we first read off the ''offsets'' of the sections,
which is contained in the last column. The first section starts at
00000238 which is the hex code for 568.  And indeed the first gap
`[568-4447]` just starts at this point.  Comparing the further offests
we see that the full gap is populated by the sections `[1 .interp]` -
`[28 .shstrtab]`.  The latter gap `[6432-8845]` is populated by
sections `[29 .symtab]`-`[30 .strtab]`.

Another information we can get from this table is that only the sections:

* [12] .init
* [13] .plt
* [14] .text
* [15] .fini

contain executable data.

### Segments
To extract the information about from the Program header we call 'readelf --segments'

    Elf file type is EXEC (Executable file)
    Entry point 0x4003e0
    There are 9 program headers, starting at offset 64

    Program Headers:
    Type           Offset             VirtAddr           PhysAddr
                   FileSiz            MemSiz              Flags  Align
    PHDR           0x0000000000000040 0x0000000000400040 0x0000000000400040
                   0x00000000000001f8 0x00000000000001f8  R E    8
    INTERP         0x0000000000000238 0x0000000000400238 0x0000000000400238
                   0x000000000000001c 0x000000000000001c  R      1
        [Requesting program interpreter: /lib64/ld-linux-x86-64.so.2]
    LOAD           0x0000000000000000 0x0000000000400000 0x0000000000400000
                   0x000000000000067c 0x000000000000067c  R E    200000
    LOAD           0x0000000000000e18 0x0000000000600e18 0x0000000000600e18
                   0x0000000000000200 0x0000000000000210  RW     200000
    DYNAMIC        0x0000000000000e40 0x0000000000600e40 0x0000000000600e40
                   0x00000000000001a0 0x00000000000001a0  RW     8
    NOTE           0x0000000000000254 0x0000000000400254 0x0000000000400254
                   0x0000000000000044 0x0000000000000044  R      4
    GNU_EH_FRAME   0x00000000000005dc 0x00000000004005dc 0x00000000004005dc
                   0x0000000000000024 0x0000000000000024  R      4
    GNU_STACK      0x0000000000000000 0x0000000000000000 0x0000000000000000
                   0x0000000000000000 0x0000000000000000  RW     8
    GNU_RELRO      0x0000000000000e18 0x0000000000600e18 0x0000000000600e18
                   0x00000000000001e8 0x00000000000001e8  R      1

Section to Segment mapping:

    Segment Sections...
     00
     01     .interp
     02     .interp .note.ABI-tag .note.gnu.build-id .hash .gnu.hash
            .dynsym .dynstr .gnu.version .gnu.version_r .rela.dyn
            .rela.plt .init .plt .text .fini .rodata .eh_frame_hdr .eh_frame
     03     .ctors .dtors .jcr .dynamic .got .got.plt .data .bss
     04     .dynamic
     05     .note.ABI-tag .note.gnu.build-id
     06     .eh_frame_hdr
     07
     08     .ctors .dtors .jcr .dynamic .got

## Program Code

After identifying the executable parts of the program lets inspect these parts.
We disassemble the parts using 'objdump -d' and get:

Disassembly of section .init:

    00000000004003a8 <_init>:
      4003a8:	 48 83 ec 08		sub    $0x8,%rsp
      4003ac:	 e8 5b 00 00 00       	callq  40040c <call_gmon_start>
      4003b1:	 e8 ea 00 00 00       	callq  4004a0 <frame_dummy>
      4003b6:	 e8 d5 01 00 00       	callq  400590 <__do_global_ctors_aux>
      4003bb:	 48 83 c4 08          	add    $0x8,%rsp
      4003bf:	 c3                   	retq

Disassembly of section .plt:

    00000000004003c0 <__libc_start_main@plt-0x10>:
      4003c0:	 ff 35 2a 0c 20 00	pushq  0x200c2a(%rip)
      4003c6:	 ff 25 2c 0c 20 00    	jmpq   *0x200c2c(%rip)
      4003cc:	 0f 1f 40 00          	nopl   0x0(%rax)
    
    00000000004003d0 <__libc_start_main@plt>:
      4003d0:	 ff 25 2a 0c 20 00	jmpq   *0x200c2a(%rip)
      4003d6:	 68 00 00 00 00       	pushq  $0x0
      4003db:	 e9 e0 ff ff ff       	jmpq   4003c0 <_init+0x18>

Disassembly of section .text:

    00000000004003e0 <_start>:
      4003e0:	 31 ed			xor    %ebp,%ebp
      4003e2:	 49 89 d1             	mov    %rdx,%r9
      4003e5:	 5e                   	pop    %rsi
      4003e6:	 48 89 e2             	mov    %rsp,%rdx
      4003e9:	 48 83 e4 f0          	and    $0xfffffffffffffff0,%rsp
      4003ed:	 50                   	push   %rax
      4003ee:	 54                   	push   %rsp
      4003ef:	 49 c7 c0 f0 04 40 00 	mov    $0x4004f0,%r8
      4003f6:	 48 c7 c1 00 05 40 00 	mov    $0x400500,%rcx
      4003fd:	 48 c7 c7 c4 04 40 00 	mov    $0x4004c4,%rdi
      400404:	 e8 c7 ff ff ff       	callq  4003d0 <__libc_start_main@plt>
      400409:	 f4                   	hlt
      40040a:	 90                   	nop
      40040b:	 90                   	nop
    
    000000000040040c <call_gmon_start>:
      40040c:	 48 83 ec 08		sub    $0x8,%rsp
      400410:	 48 8b 05 c9 0b 20 00 	mov    0x200bc9(%rip),%rax
      400417:	 48 85 c0             	test   %rax,%rax
      40041a:	 74 02                	je     40041e <call_gmon_start+0x12>
      40041c:	 ff d0                	callq  *%rax
      ...
    
    0000000000400430 <__do_global_dtors_aux>:
      400430:	 55			push   %rbp
      400431:	 48 89 e5             	mov    %rsp,%rbp
      400434:	 53                   	push   %rbx
      ...
    
    00000000004004a0 <frame_dummy>:
      4004a0:	 55			push   %rbp
      4004a1:	 48 83 3d 8f 09 20 00 	cmpq   $0x0,0x20098f(%rip)
      4004a8:	 00
    
    00000000004004c4 <main>:
      4004c4:	 55			push   %rbp
      4004c5:	 48 89 e5             	mov    %rsp,%rbp
      4004c8:	 c7 45 fc 05 00 00 00 	movl   $0x5,-0x4(%rbp)
      4004cf:	 c7 45 f8 08 00 00 00 	movl   $0x8,-0x8(%rbp)
      4004d6:	 8b 45 f8             	mov    -0x8(%rbp),%eax
      4004d9:	 8b 55 fc             	mov    -0x4(%rbp),%edx
      4004dc:	 8d 04 02             	lea    (%rdx,%rax,1),%eax
      4004df:	 89 45 f4             	mov    %eax,-0xc(%rbp)
      4004e2:	 c9                   	leaveq
      4004e3:	 c3                   	retq
      ...
    
    00000000004004f0 <__libc_csu_fini>:
      ...
    0000000000400500 <__libc_csu_init>:
      ...
    0000000000400590 <__do_global_ctors_aux>:
      ...

Disassembly of section .fini:

    00000000004005c8 <_fini>:
      4005c8:	 48 83 ec 08		sub    $0x8,%rsp
      4005cc:	 e8 5f fe ff ff       	callq  400430 <__do_global_dtors_aux>
      4005d1:	 48 83 c4 08          	add    $0x8,%rsp
      4005d5:	 c3                   	retq

In this view the content of our executable sections grouped into machine operations in the middle column.
The colum to the left is an offset counter and on the right we find a translation of the operations
to the [Assembly Language](http://en.wikipedia.org/wiki/Assembly_language).

Observations:

* The sections are grouped by function names: `< .... >`
* The entry point was the adress 0x3e0 and points to the beginning of the `<_start>` function
* There is a function `<main>`, which is also the name of the function in our c Progam.

Let's look inside the `<main>` function:

    push   %rbp
    mov    %rsp,%rbp
    movl   $0x5,-0x4(%rbp)
    movl   $0x8,-0x8(%rbp)
    mov    -0x8(%rbp),%eax
    mov    -0x4(%rbp),%edx
    lea    (%rdx,%rax,1),%eax
    mov    %eax,-0xc(%rbp)
    leaveq

We find our numbers 5 and 8 declared as constants ($) in hexadecimal
format.  These are stored into a memory location specified by the `%rbp`
register with a certain offset.  Then the values are read from memory
and copied into the `%eax` and `%edx` registers.  Afterwards these
registers are added (`lea`) and the result is stored in `%eax`.


### Stepping through the code

We can use the gnu debugger
[gdb](http://en.wikipedia.org/wiki/GNU_Debugger) to see how the program
is executed.  Call `gdb a.out` to start a debuggiong session. Our
comments appear at after (#):

    GNU gdb (GDB) 7.1-ubuntu
    Copyright (C) 2010 Free Software Foundation, Inc.
    [...]
    (gdb) b _start               # Insert a breakpoint at function _start
    Breakpoint 1 at 0x4003e0
    (gdb) r                      # run the program
    Starting program: /home/heinrich/Desktop/C_experiments/b.out
    
    Breakpoint 1, 0x00000000004003e0 in _start ()
    (gdb) stepi                  # one step forwards
    0x00000000004003e2 in _start ()


Pressing [enter] now repeatedly we can step forwards trough the program.
It will display the offset of the current instruction and the function being executed.

The following functions are called:

1. _start ()
2. __libc_start_main@plt ()
3. ?? ()
4. ?? () from /lib64/ld-linux-x86-64.so.2 (ca. 1000 instructions!)
5. __do_global_ctors_aux ()
6. init ()
7. __libc_csu_init ()
8. __libc_start_main () from /lib/libc.so.6
9. _setjmp () from /lib/libc.so.6
10. ?? () from /lib/libc.so.6
11. __libc_start_main () from /lib/libc.so.6
12. '''main ()'''                           ( HERE WE ARE ! -- finally )
13. __libc_csu_init ()
14. ? () from /lib/libc.so.6  (another 500 instructions)


Now we show last command in assembly language using gdb:

    (gdb) display/i $pc
    => 0x4003e2 <_start+2>:	     mov    %rdx,%r9
    (gdb) stepi
    0x00000000004003e5 in _start ()
    1: x/i $pc
    => 0x4003e5 <_start+5>:	pop    %rsi
    (gdb) info registers         # show contents of registers
    rax            0x1c	     28
    rbx            0x0	     0
    rcx            0x7ffff7ffd040	140737354125376
    rdx            0x7ffff7dec250	140737351959120
    rsi            0x7ffff7df7a83	140737352006275
    ...
    r8             0xb	11
    r9             0x7ffff7dec250	140737351959120
    r10            0xb		11
    ...
    gs             0x0	0


## Memory Management

We have been told, that the segments of the ELF file are loaded into the memory
of the computer. Can we see how that really works?

* Which memory segments are reserved for the program?
* What is inside these memoy pages.

A nice explanation of the physical lyout of the memory can be found inside the
[http://dirac.org/linux/gdb/02a-Memory_Layout_And_The_Stack.php#wherearewegoingtogo GDB documentation].

As explained in the note, each program assumes that it can access all the memory of the computer
and starts writing it offset 0. This is of course not the case. The instead the OS provides
reserved spaces inside the memory (virtual memory pages) which are typically 4kb in size.
[http://en.wikipedia.org/wiki/Virtual_memory Wikipedia - Virtual Memory]

The translation of the adresses to the physical location is made on the fly by a special coprocessor called
[http://en.wikipedia.org/wiki/Memory_management_unit Memory Mamagement Unit (MMU)].

The OS binds these VMP to a process. Unless explicitly stated, no other process is allowed
to read out this memory.

So how do whe memory pages look like that we got for our sweet little program?
Linux helps us with that. We first run the program inside the debugger in order to have it in the memory.

    gdb a.out
    (gdb) b main
    (gdb) r

Then we open another terminal and type (cf. [http://linux.die.net/man/5/proc man proc])

    cat /proc/`pgrep a.out`/maps

and get:

    Address                   Per. Offset   Dev.  inode.   Path name
    00400000-00401000         r-xp 00000000 08:05 21775994 /home/.../a.out
    00600000-00601000         r--p 00000000 08:05 21775994 /home/.../a.out
    00601000-00602000         rw-p 00001000 08:05 21775994 /home/.../a.out
    7ffff7a5a000-7ffff7bd4000 r-xp 00000000 08:05 15341246 /lib/libc-2.11.1.so
    7ffff7bd4000-7ffff7dd3000 ---p 0017a000 08:05 15341246 /lib/libc-2.11.1.so
    7ffff7dd3000-7ffff7dd7000 r--p 00179000 08:05 15341246 /lib/libc-2.11.1.so
    7ffff7dd7000-7ffff7dd8000 rw-p 0017d000 08:05 15341246 /lib/libc-2.11.1.so
    7ffff7dd8000-7ffff7ddd000 rw-p 00000000 00:00 0
    7ffff7ddd000-7ffff7dfd000 r-xp 00000000 08:05 15341231 /lib/ld-2.11.1.so
    7ffff7fcf000-7ffff7fd2000 rw-p 00000000 00:00 0
    7ffff7ff9000-7ffff7ffb000 rw-p 00000000 00:00 0
    7ffff7ffb000-7ffff7ffc000 r-xp 00000000 00:00 0        [vdso]
    7ffff7ffc000-7ffff7ffd000 r--p 0001f000 08:05 15341231 /lib/ld-2.11.1.so
    7ffff7ffd000-7ffff7ffe000 rw-p 00020000 08:05 15341231 /lib/ld-2.11.1.so
    7ffff7ffe000-7ffff7fff000 rw-p 00000000 00:00 0
    7ffffffde000-7ffffffff000 rw-p 00000000 00:00 0         [stack]
    ffffffffff600000-ffffffffff601000 r-xp 00000000 00:00 0 [vsyscall]

An better readble version is produced by

    cat /proc/`pgrep a.out`/smaps

but uses up too much space to reproduce it here.  We need to compare
this to the output of the segmet view:

    Type           Offset             VirtAddr           PhysAddr
                   FileSiz            MemSiz              Flags  Align
    PHDR           0x0000000000000040 0x0000000000400040 0x0000000000400040
                   0x00000000000001f8 0x00000000000001f8  R E    8
    INTERP         0x0000000000000238 0x0000000000400238 0x0000000000400238
                   0x000000000000001c 0x000000000000001c  R      1
        [Requesting program interpreter: /lib64/ld-linux-x86-64.so.2]
    LOAD           0x0000000000000000 0x0000000000400000 0x0000000000400000
                   0x000000000000067c 0x000000000000067c  R E    200000
    LOAD           0x0000000000000e18 0x0000000000600e18 0x0000000000600e18
                   0x0000000000000200 0x0000000000000210  RW     200000
    DYNAMIC        0x0000000000000e40 0x0000000000600e40 0x0000000000600e40
                   0x00000000000001a0 0x00000000000001a0  RW     8
    NOTE           0x0000000000000254 0x0000000000400254 0x0000000000400254
                   0x0000000000000044 0x0000000000000044  R      4
    GNU_EH_FRAME   0x00000000000005dc 0x00000000004005dc 0x00000000004005dc
                   0x0000000000000024 0x0000000000000024  R      4
    GNU_STACK      0x0000000000000000 0x0000000000000000 0x0000000000000000
                   0x0000000000000000 0x0000000000000000  RW     8
    GNU_RELRO      0x0000000000000e18 0x0000000000600e18 0x0000000000600e18
                   0x00000000000001e8 0x00000000000001e8  R      1

Comparing the VirtAddr colum to the Address colum above suggests, that the segments:

    PHDR           0x0000000000000040 0x0000000000400040 0x0000000000400040
    INTERP         0x0000000000000238 0x0000000000400238 0x0000000000400238
    LOAD           0x0000000000000000 0x0000000000400000 0x0000000000400000
    NOTE           0x0000000000000254 0x0000000000400254 0x0000000000400254
    GNU_EH_FRAME   0x00000000000005dc 0x00000000004005dc 0x00000000004005dc

Are mapped into the the first memory page. And segments:

    LOAD           0x0000000000000e18 0x0000000000600e18 0x0000000000600e18
    DYNAMIC        0x0000000000000e40 0x0000000000600e40 0x0000000000600e40
    GNU_RELRO      0x0000000000000e18 0x0000000000600e18 0x0000000000600e18

into the second one. The segment:

    GNU_STACK      0x0000000000000000 0x0000000000000000 0x0000000000000000

has only zero entries and seems to have something to do with the program stack,
which has its own VM page:

    7ffffffde000-7ffffffff000 rw-p 00000000 00:00 0         [stack]


### Inspecting the memory
We can use the GNU debugger to look inside these memory locations!
Lets first display the beginning of the first memory page starting at 0x400000:

    (gdb) x/24x 0x00400000
    0x400000:   0x7f	0x45	0x4c	0x46	0x02	0x01	0x01	0x00
    0x400008:   0x00	0x00	0x00	0x00	0x00	0x00	0x00	0x00
    0x400010:   0x02	0x00	0x3e	0x00	0x01	0x00	0x00	0x00

Do you see what this is?? Precisely the beginning of the ELF file: '0x7f ELF'

# Resources

* General
  * [How Computer Memory work](http://computer.howstuffworks.com/computer-memory.htm)
  * [How Operating Systems work](http://computer.howstuffworks.com/operating-system.htm)
  * [Rhode Iseland University - CSC101](http://homepage.cs.uri.edu/courses/fall2005/csc101s1/Readings.html)
* Architecture
  * [Wikipedia x86 ](http://en.wikipedia.org/wiki/X86_architecture)
  * [Wikipedia x86 Prozessor](http://de.wikipedia.org/wiki/X86-Prozessor)
* ELF Files
  * [Wikipedia comparison of executable file formats](http://en.wikipedia.org/wiki/Comparison_of_executable_file_formats)
  * [LinuxForums.org - ELF using readelf and objdump](http://www.linuxforums.org/articles/understanding-elf-using-readelf-and-objdump_125.html)
  * [John R. Levine - Linkers and Loaders](http://www.iecc.com/linker/)
  * [Wikipedia ELF](http://en.wikipedia.org/wiki/Executable_and_Linkable_Format)
  * [Wikipedia objdump](http://en.wikipedia.org/wiki/Objdump)
* Application Binary Interfaces
  * [Wikipedia Application Binary Interface](http://en.wikipedia.org/wiki/Application_binary_interface)
  * [Generic ABI Reference](http://www.sco.com/developers/devspecs/gabi41.pdf)
  * [SysV-386 ABI supplement](http://www.sco.com/developers/devspecs/abi386-4.pdf)
  * [SysV-AMD64 ABI supplement](http://www.x86-64.org/documentation/abi.pdf)
* Assembler
  * [x86 Machine Level Programming](http://www.cs.cmu.edu/~fp/courses/15213-s07/misc/asm64-handout.pdf)
  * [Reverse Engeneering Project](http://www.eresi-project.org/)
  * [Wikipedia x86 Assembly language](http://en.wikipedia.org/wiki/X86_assembly_language)
  * [GCC Output Assembler Code](http://www.delorie.com/djgpp/v2faq/faq8_20.html)
* C Programming
  * [Oxford Computer Science - Programming in C](http://ftp.math.uh.edu/pub/sanders/Math6378-sp12/Documents/C+F77/oxford-CTutorial.pdf)
  * [The C Programming Language](http://zanasi.chem.unisa.it/download/C.pdf)
* Operating System
  * [how OS works](http://computer.howstuffworks.com/operating-system5.htm)
  * [CS101](http://homepage.cs.uri.edu/book/operating_systems/operating_systems.htm)
