---
author: "Heinrich Hartmann"
layout: "post"
category: "opinion"
redirect_from:
  - /2016/11/15/A-Ditigal-Passport-for-Digital-Citizens.html
  - /opinion/2016/11/15/A-Ditigal-Passport-for-Digital-Citizens.html
---

<img src="/assets/digitalpassportbanner_pixbay_cc0.png" width="100%">

## The Internet has changed

The internet is a largely unregulated platform, where everyone can
find and publish information.  While this worked well for the
scientific community in the 90ies mainstream adoption of web and
internet technologies has led to serious problems for society such
as:

- Hate speech and harassment are rampant social networks and web
  forums.

- Fake news websites (from Macedonia) publish propaganda.

- Bots and trolls (from Russia) flood social networks with fake comments.

- Scammers (from Nigeria) try to steal money from people by making
  false claims in emails.

For a long time these problems have been well known and identified but
the general consensus was, that we can not do something about it and
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

>I was robbed at 19:23am at the McDonald at Marienplatz, these are
> three bystanders who can testify the event and describe the suspect.

## Linking Digital Identities

So what can we do to improve this situation?

It turns out, it's actually well possible to **link** identities on the
internet.  The concept is called [oAuth](https://en.wikipedia.org/wiki/OAuth) and is most commonly met in
form of a button `[Log in with facebook]`.

When a user authenticates with such a button, the service is able to
establish the following information:

-   The fact that the user currently has an account at facebook
-   The ID of that facebook account

Furthermore the service can request access to meta information that is
stored on facebook like:

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

As we have seen above, both Google and facebook accounts are easily
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
authentication (2FA).

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

## Applications of the Digital Passport

The Digital Passport allows the holder to proof the following aspects
of it's real-world identity to the a third party service:

(a) that the user is a citizen of the corresponding country.

(b) that the user is the holder of a passport with a given ID.

(c) that the user has the name he is claiming to have.

(d) that the users lives at address he claims to live.

Establishing these facts unlocks a great number of applications.

### Strong Identities for Civilized Discussions

Services like news outlets, social networks, could require users to
log in with the digital passport if they want to publish their
comments on their site. There is little reason you should allow people
to participate in political discussions if they are not willing to
provide any form of identification, like: "I am a holder of a German
Passport and live in Berlin".

0. Bots don't have a digital passport and can't participate.

2. In case a person violates the discussion policies, this person can
   be banned from the site without the possibility to re-join with
   another user-name.

3. In particular, payed trolls would have to disclose their nationality
   to participate, and could be banned once they have been called out
   once.

4. In case a person commits a criminal offense by harassing other
   users or spreading propaganda the service provider can file a legal
   case against the user.

On the flip-side, users can be sure, that there is an effective way to
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

On the flip-side, news sites and web-stores could be urged to sign their
offers and emails, in order to establish trust. Browser vendors could
automatically check these signatures and warn the user when these are
missing. (Similar to HTTPS but with email support and even stronger
authorities).

If a Nigerian Scammer claims to be a widow from Australia and want's
to lure me into sending over money, I can ask him to disclose his name
and sign his emails with a DP.

# Conclusion

In my eyes the question of online identity lies at the core of the
problems we are seeing for a digital society.  Without a trusted
identity provider, we can not hold people accountable for their doings
in the digital space. Without accountability there is no trust
and without trust society falls apart.

However it looks to me that we there are effective ways to establish
identity on the net. And that our government has the means to do so,
by issuing digital passports. Moreover this approach does not require
citizens to give up their privacy and anonymity while consuming
material on the internet, as do other approaches to law enforcement on
the web.

Here is the time. Here is the place. Let's make it happen.

# Comments

## Archived Diqus Comments

These comments were submitted in Disqus, but did not survive an URL
redirect, I had to introduce.

> [Martin] But it's also more than a tad dangerous. I've been thinking about this
> a while and the new passport has laid the groundwork for a future that
> will inevitably go on this direction. But the current state of affairs
> is that there are lots of computer-illiterate people out there. As
> long as software is involved such as a private key (-file), software
> to communicate with the card reader accessing your passport, software
> running those web platforms accessing your identity via the passport
> reader or your fingerprint etc., identity theft is going to be an
> issue. And by implementing such a link, not only is your privacy going
> to go down (they will easily establish a link that goes far beyond
> those services you access with your identity pass), but also other
> issues will become more pressing. For example: how do you protect the
> government servers holding your information if they have to have an
> interface to the web? How do you make sure the hardware side cannot be
> forged and the software be spied on? And how do you make sure that
> data cannot be abused to identify critics should a repressive party
> such as the AfD come to power? How would you give citizens of
> repressive countries the chance to voice their options without fear of
> being prosecuted for it?  Currently, we can't. Which is why, in my
> opinion, we have to start with the content. Fact-check websites in a
> manner that goes beyond projects such as "Web of Trust" (which wasn't
> very trustworthy after all) and we need to make transparent in a
> concise manner why the information we deem trustworthy is
> trustworthy. And this should apply to all information. But that still
> wouldn't solve the problem of trust, some people don't trust the
> "official truth" so how do we make it accessible and tangible enough
> to earn that trust back?  Don't get me wrong, a system of "guaranteed
> identity" would alleviate the problems we're facing, i just think
> there's insurmountable problems with that approach today.

> [Heinrich] Thanks Martin, you raise a number of issues there:
>
> (a) What about comuter-illiterate people. Is identity theft is going
> to be an issue?
>
> Banks have the same problem. TFA seems to work well in this space,
> with Password + TAN Lists, SMS or Apps as second factor. Why can't
> this work for the DPA? Note that I am not advocating the current
> "electronic passport" in Germany. IMO the card reader is too expensive
> and clunky to be practical.
>
> (b) How do you protect gov servers?
>
> The governemnt already holds this information now. E.g. Tax
> authorities, or Einwohnermeldeamt. So the problem does not change. You
> have to employ good security exports.
>
> (c) How do you make sure users are not spied on?
>
> Again, this is a separate concern. Your PC is not a safe platform.
> Don't store your passwords on disk. Use TFA to keep your identity when
> your PC is compromised.
>
> (d) How would you give citizens of repressive countries the chance to
> voice their options without fear of being prosecuted for it?
>
> No one is stopping you from accepting anonymous information and
> re-publishing it. But it becomes your responsibility to check that
> this is indeed legit information if you want to be taken
> seriously. The Guardian had to do this with Snowden as well, before
> they published their material.

> [Martin]
> A) To make sure no information is held on your device that could be compromised and access the data in a secure fashion, thus you need a gate that can talk to the government server or access to the government server via the Internet. 2FA is relatively safe (i use it everywhere) but can still be compromised plus no server is safe especially when exposed to the internet (gateway or otherwise)
>
> B) That is true but currently there's a lot of "security through obscurity" I.e. fractioning of data via lack of centralization (would need to change for this approach) and most government servers holding such sensitive information are only connected to internal networks and not exposed to the Internet (would need to change) plus they would need a standardized format/database construction again facilitating compromising it (think monolithic crop cultures versus bacteria/mold)
>
> C) I am thinking more along the lines of atlas cookie/hardware fingerprint and leaked information through cookies. They can now track you across devices and once you log in anywhere using your name, that information is linked to your name. Kind of like Tor network, it's all anonymous until you log in somewhere and it all unravels.
>
> D) That one is mostly true, provided there are anonymous lines and dump sites, if all communication were encrypted that would also be alleviated. Still, it would mean that the most honest information would become the most shady since it would not be linked to names and people but to anonymous accounts. Which is something we can already see being instrumentalized: far-right publications using the cover of being whistle-blowers because they claim their opinion was oppressed. They would continue doing that and magnify the problem, i suppose.

> [Heinrich]
> (A) I agree that 2FA is not 100% safe. But nothing is 100% safe. Even passports are not. There are people that forge these things and assume another identity. The real question is it good enough for practical use. And the answer is clear: Yes.
> There are good enough ways that a establish you are the same person created that account last month (beyond reasonable dought) and are suitable for general adoption (card readers are not).
>
> (B) There is no such thing as "security through obscurity".
> But it's true that exposed servers are harder to keep safe.
> There are well established ways to do it, though: Hire good admins!
> If you inisit on more decentralization (I don't) you could have the states issue the digital passports.
> As for common data formats, the exposed information (Name, Address, Date Of Birth and maybe 10 more) is so little, that selecting a standard is feasible.
>
> (C) Yes, that's true. Cookies + Fingerprints are a way to link identities which is not steered by the user. But I don't think this is a show stopper for the DP.
>
> (D) I think the main point is. Providing a proof of identity is a great way to establish trust in your actions. If you can't provide such an identity, for whatever reason, you have to find other ways to esatblish trust. The case of whistleblowers is delicate in many ways...

> [Martin]
> A) 2FA is reasonably safe, yes, then again, the higher the interest in circumventing it, the more vulnerabilities will become apparent. I would think that a hardware token integrated with the physical passport would be sufficiently secure, implementing a salt to the time based token to further tighten security might become necessary to increase complexity.
>
> B) My point exactly. It would have to become centralized but centralization is what will make it more vulnerable. The data exposed would have to be strictly limited in such a way that no information that could enable an impostor to fully steal an identity is ever transmitted or can ever be accessed. Preferably, it would be genetic markers, fingerprint etc. which might serve as the hash mentioned in A and can never be accessed by humans (only verified by a machine using hashes for example). Never trust even the best admin (and keep in mind the state doesn't pay enough to attract the best admins unless those are motivated by other motives) . Again, never expect any server can be kept safe.
>
> C) It's no show stopper, but it's a grave concern because it makes the already worrying state of privacy even worse. And there's no way we could prevent this (unless keeping a soft digital identity linked to a hard physical identity that do not overlap unless needed by law) for example: nicknames that are verified as belonging to a real person but aren't traceable to that person unless he/she violates the law).
>
> D) Indeed. We would need a trusted institution to verify the content of leaked information and to keep whistle-blowers safe. It would be a great addition of those could ensure prior that no information damaging state security is leaked in that way but that nonetheless those violations are prosecuted then. But that's another issue.

## Discussion on Reddit

<blockquote class="reddit-card" data-card-created="1479734003"><a href="https://www.reddit.com/r/netsec/comments/5d2obv/a_ditigal_passport_for_digital_citizens/?ref=share&ref_source=embed">A Ditigal Passport For Digital Citizens</a> from <a href="http://www.reddit.com/r/netsec">netsec</a></blockquote>
<script async src="//embed.redditmedia.com/widgets/platform.js" charset="UTF-8"></script>
