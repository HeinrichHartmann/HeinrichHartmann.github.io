---
author: "Heinrich Hartmann"
layout: "post"
---

<img src="/assets/digitalpassportbanner_pixbay_cc0.png" widht="100%">

## The Internet has changed

The internet is a largely unregulated platform, where every can find
and publish information.  While this worked well for the scientific
community in the 90ies. Mainstream adoption of web and internet
technologies has led to serious problems for society, such as:

- Hate speech and harassment are rampant social networks and web
  forums.

- Fake news websites (from Macedonia) which publish propaganda.

- Bots and trolls (from Russia) flood social networks with fake comments/propaganda.

- Scammers (from Nigeria) try to steal money from people by making
  false claims in emails.

For a long time these problems have been well known and identified but
the general consence was, that we can not do something about it and
the impact of these problems is so small, that it does not really
matter.

With the recent popularity of agitators like Nigel Farage (UKIP,
BREXIT), Vladimir Putin (RU) and Donald Trump (US) or PEGIDA (GER)
which exploit these weaknesses of the internet to spread their
populist narratives, it becomes clear that the impact can no longer be
neglected. We are at a point, were truth and lies are no longer
distinguishable on the net. These problems are a real threat to our
liberal society as a whole.

## Without Identity no Law Enforcement

A key difference between the offline and the digital world is only a
very weak concept of identity in the internet. A famous quote goes:

> "In the internet nobody knows you are a dog".

It's trivial to register a new email address. It's trivial to register
new websites without disclosing your identity. It's quite possible
(though not trivial) to setup a fake facebook account, and get some
200 friends. The list goes on.

There are no reliable identity providers on the net.

As a consequence, **there is no effective way to enforce laws.**

If someone commits a fraud or a crime on the internet, you can only
point to an email address or facebook account. The police has little
possibilities to determine the responsible person from a statement
like this:

> A user called "Gandalf1253" with email address
> "gandalf1253@gmx.net" has threatened me on faz.net with the following
> message: ...

Contrary to this in the offline world, you often have a name an
address or a face, as well as a broad sense of location, which allow
to track down a person more effectively

>I was robbed at 19:23am at the McDonalds at Marienplatz, these are
> three bystanders who can testify the event and describe the suspect.

## Linking Digital Identities

So what can we do to improve this situation?

It turns out, it's actually well possible to **link** identities on the
internet.  The concept is called [oAuth](https://en.wikipedia.org/wiki/OAuth) and is most commonly met in
form of a button `[Log in with Facebook]`.

When a user authenticates with such a button, the service is able to
establish the following information:

-   The fact that the user currently has an account at facebook
-   The ID of that facebook account

Furthermore the service can request access to meta information that is
stored on facbook like:

-   The deposited name of the user
-   The deposited nationality of the user
-   The list of facebook friends
-   etc..

Hence, by using oAuth the service can establish a strong link between
an identity of the same person on two different services.

## Are we not done here, then?

We have seen that, we can use oAuth to establish links between identities.
So why can't we use oAuth this to establish **the identity** of the user.

The answer is: We don't know where to start!

As we have seen above, both Google and Facebook accounts are easily
forged. So oAuth establishes strong ties between weak identities.
The open question is:

How can we establish a strong link between the person (in the
offline world) and a digital identity.

## Passports as Bridge to Reality

It turns out that government has the same problem of linking persons
to records in it's administrative body. The solution is called
Passport. The government stores biometrical attributes (at least a
photo) and gives out a physical assets ("the passport") to the person
that serves as a credential.

The passport serves as an effective way to establish the identity of a
person as citizen of a country:

> When I want to board a plane, the airline will link my identity to a
> government owned register, using my Passport ID.  I need to
> authenticate myself, by producing a the passport with the
> corresponding ID including a photo that resembles some similarity to
> myself.

## A Digital Passport

If you have followed me so far you will see where I am heading: The
government has all the means to provide a strong link between a person
and a digital identity. All that is needed is a state-owned oAuth
provider, that I'll call **Digital Passport Authority** or DPA.

Each citizen of a country would get a digital identity, called
**Digital Passport** or DP that is strongly linked to the person by
means of a classical passport.

The Digital Passport is essentially a user account for a citizen at
the DPA. To primary way to get access to this account, is to
authenticate using the physical passport at a government agency.
After the initial authentication, alternative credentials like
passwords or phone numbers, tan lists, PGP keys can be exchanged. Of
course, it's advisable to use more than one credential for
authentication (TFA).

The main purpose of this account is to hold government verified
information about the citizen like:

- The full name
- Current residence
- Date of Birth
- Place of birth
- Tax Identification Number
- Marriage Status
- Religion
- Children

It could be used to facilitate administrative tasks, but this is not
needed for the case in point.

By providing an oAuth endpoint for the digital passport the Government
would provide a strong identity to it's citizens on the internet.

## Applications of the Ditital Passport

The Digital Passport allows the holder to proof the following aspects
of it's real-world identity to the a third party service:

(a) that the user is a citizen of the corresponding country.

(b) that the user is the holder of a passport with a given ID.

(c) that the user has the name he is claiming to have.

(d) that the users lives at address he claims to live.

Establishing these facts unlocks a great number of applications.

### Strong Identities for Civilized Discussions

Services like news outlets, social networks, could require user's to
log in with the digital passport if they want to publish their
comments on their site. There is little reason you should allow people
to participate in political discussions if they are not willing to
provide any form of identification, like: "I am a holder of a German
Passport and live in Berlin".

0. Bots don't have a digital passport and can't participate.

2. In case a person violates the discussion policies, this person can
   be banned from the site without the possibility to re-join with
   another username.

3. In particular, payed trolls would have to disclose their nationality
   to participate, and could be banned once they have been called out
   once.

4. In case a person commits a criminal offence by harassing other
   users or spreading propaganda the service provider can file a legal
   case against the user.

On the flipside, users can be sure, that there is an effective way to
enforce policies that are there for their protection.

### Signing of Documents and Publications

On the web it's often not possible to say who has written an article.
By using digital signatures you can establish a link between a the
content document and the holder of an encryption key.

Using a DPA it's possible to link that such a key to a person. This
enables citizens to proof statements like this:

    My name is Heinrich Hartmann, holder of DP#PIOJDAIE928.
    I live in Munich.
    I wrote the above text on 2015-02-12.
    Click here to verify: <http://dpa.gov/DP/PIOJDAIE928?url=...>

On the fipside, news sites and web-stores could be urged to sign their
offers and emails, in order to establish trust. Browser vendors could
automatically check these signatures and warn the user when these are
missing. (Similar to HTTPS but with email support and even stronger
authorities).

If a Nigerian Scammer claims to be a widdow from Australia and want's
to lure me into sending over money, I can ask him to disclose his name
and sign his emails with a DP.

# Conclusion

In my eyes the question of online identity lies at the core of the
problems we are seeing for a digital society.  Without a trusted
identity provider, we can not hold people accountable for their doings
in the digital space. Without accountability there is no trust
and without trust society falls apart.

However it looks to me that we there are effective way's to establish
identity on the net. And that our government has the means to do so,
by issuing digital passports. Moreover this approach does not require
citizens to give up their privacy and anonymity while consuming
material on the internet, as do other approaches to law enforcement on
the web.

Here is the time. Here is the place. Let's make it happen.
