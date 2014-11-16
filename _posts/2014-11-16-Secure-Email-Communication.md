# Secure Email Communication

This note explains how to write and receive private email messages.
It will be updated in the future and is ultimately aimed at the
non-expert.

Sending emails is like sending postcards. Everybody who has access to
the transportation infrastructure has acceess to the contents. This
includes:

* The email provider: E.g. Google, GMX, Web.de, ...
* Your telecomunication provider: E.g. Telecom, O2, Verizon, Comcast, ...
* Intelligence services: NSA, GCHQ, BND, ...
* Your geeky roommate who set-up your wifi connection.

You can either trust all of those people to treat your communication
confidential, or you can choose to protect yourself and your
constitutional rights to private communication.

The only real protection against infringement of email contents is
end-to-end encryption (E2EE). This means you encrypt yout messages
before sending and the receiver decrypts the message himself.  Here is
what wikipedia says about
[E2EE](http://en.wikipedia.org/wiki/End-to-end_encryption):

> Typical server-based communications systems do not include
> end-to-end encryption. These systems can only guarantee protection of
> communications between clients and servers, not between the
> communicating parties themselves.
>
> Examples of non-E2EE systems are
> Google Talk, Yahoo Messenger, Facebook, and Dropbox. Some such
> systems, for example LavaBit and SecretInk, have even described
> themselves as offering "end-to-end" encryption when they do not. Some
> systems which normally offer end-to-end encryption have been
> discovered to contain a back door, which causes negotiation of the
> encryption key between the communicating parties to be subverted, for
> example Skype Voltage.

The leading standard for email end-to-end encryption is
[OpenPGP](http://en.wikipedia.org/wiki/Pretty_Good_Privacy#OpenPGP).
An free-software implementation is available at [GnuPG](https://www.gnupg.org/).
Binary distributions are available for all popular operating systems:

- Windows: [GPG4win](http://www.gpg4win.org/index.html)
- Mac: [GPG Suite](https://gpgtools.org/gpgsuite.html)
- Ubuntu Linux: `sudo apt-get install gnupg`

Unfortunately, GnuPG is not entirely easy to use.
Even worse, I was not able to find a good tutorial on the web which explains the basic use cases for the non-expert user.
[Matthew Green](https://twitter.com/matthew_d_green) explained the problem very well for the [The New
Yorker](http://www.newyorker.com/tech/elements/the-daunting-challenge-of-secure-e-mail):

> Encrypting e-mail is just hard. Before you can send your friend an encrypted message, she must first install the software, generate an encryption key pair, and deliver the public portion to you. You must then download and install that key on your own computer and verify that it’s the right key—not a fake one sent to trick you. You must repeat this process for everyone else you want to talk to. And that’s before sending a single message.

Edward Snowden has recorded a famous
[video](http://vimeo.com/56881481) in which he explains how to setup a
secure email account to Glenn Greenwald.

## Sending a Secure Messages with <Encrypt.to>

On the plus side, sending a secure message to somebody who has already
setup his GPG system, is actually very simple! I was very surprised to
learn that these steps can be entirely automated using web
technologies. Use the following form to write secure messages to me.

<https://encrypt.to/consulting@heinrichhartmann.com>

What happens under the hood is explained in the next sections.

## Sending a Secure Message with GOG

If you want to sent a secure message to me via email, you have to (1)
get my public key (2) encrypt the message using gpg and my public key
(3) send the encrypted message to my email address.

My GPG Key is available on MIT's public key repository [pgp.mit.edu](http://pgp.mit.edu/pks/lookup?op=get&search=0xBC5BECF3C359B5C2)
and on [GitHub](https://gist.github.com/HeinrichHartmann/b21454a20c6e103d1365).

In order to send an encrypted message to me you have to imort my public key, e.g. using:

    $ gpg --keyserver pgp.mit.edu --search-keys 'consulting@heinrichhartmann.com'

Then write your message store it as `message.txt`. Instead of a text
message, you can also use arbitrary files. Then encrypt the file
using the imported key:

    $ gpg --encrypt --armor --recipient consulting@heinrichhartmann.com message.txt

This creates a new file `message.txt.gpg` that you can now sent to me
in any way that you like. Email is fine, you can also put it into the
newspaper, nobody will be able to decrypt it except me, who created
the public key in the first place.


## Fingerprints

It is theoretically possible, that someone intercepts your
communication and to the PGP server and sends a modified key. To make
sure you received the correct key, you can compute a fingerprint

    $ gpg --fingerprint consulting@heinrichhartmann.com

and compare the output against the fingerprint provided by an
alternative channel, like phone, business cards, mail or twitter.
Does the output of the above command match with the content of [this
tweet](https://twitter.com/HeinrichHartman/status/534009605567688705)?
Then you can be a bit more sure, that you have the my key and not a
modified copy. If you are paranoid, please give me a call and ask for
the fingerprint.


## Coming Up ...

* How to use GPG with your mail client (e.g. [Outlook Privacy Plugin](https://github.com/dejavusecurity/OutlookPrivacyPlugin))
* How to create your own public key (cf. [GNUPG Manual](https://www.gnupg.org/gph/en/manual.html))


## Further Reading
* [Paul Heinlein -- GPG Quickstart](https://www.madboa.com/geek/gpg-quickstart/)
* [Justin Ellingwood -- How To Use GPG](https://www.digitalocean.com/community/tutorials/how-to-use-gpg-to-encrypt-and-sign-messages-on-an-ubuntu-12-04-vps)
* [GNUPG Manual](https://www.gnupg.org/gph/en/manual.html)
* [Edward Snowden -- GPG for Grennwald](http://vimeo.com/56881481)
