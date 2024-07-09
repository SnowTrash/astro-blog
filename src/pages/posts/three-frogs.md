---
layout: '@/templates/BasePost.astro'
title: Three Frogs oscilator 
description: Problema del libro de caos y dinámica no linear, capitulo 8.6.2
pubDate: 2020-02-06T00:00:00Z
imgSrc: '/assets/images/image-post.jpeg'
imgAlt: 'Image post'
---

8.6.9
(Japanese tree frogs) Many thanks to Bard Ermentrout for suggesting the
following exercise. An isolated male Japanese tree frog will call nearly periodically.
When two frogs are placed close together (say, 50 cm apart), they can hear each
other calling and tend to adjust their croak rhythms so that they call in alternation,
half a cycle apart—a form of phase-locking known as antiphase synchronization.
So what happens when three frogs interact? This situation frustrates them;
there’s no way all three can get half a cycle away from everyone else. Aihara et al.
(2011) found experimentally that in this case, the three frogs settle into one of two
distinctive patterns (and they occasionally seem to switch between them, probably
due to noise in the environment). One stable pattern involves a pair of frogs calling
in unison, with the third frog calling approximately half a cycle out of phase from
both of them. The other stable pattern has the three frogs maximally out of sync,
with each calling one-third of a cycle apart from the other two.
Aihara et al. (2011) explored a coupled oscillator model of these phenomena, the
essence of which is contained in the following systems for two frogs,
θ1 = ω + H (θ2 − θ1 )
θ = ω + H (θ − θ ),
2
1
2
and three frogs,
θ1 = ω + H (θ2 − θ1 ) + H (θ3 − θ1 )
θ = ω + H (θ − θ ) + H (θ − θ )
2
1
2
3
2
θ3 = ω + H (θ1 − θ3 ) + H (θ2 − θ3 ).
Here Ri denotes the phase of the calling rhythm of frog i, and the function H
quantifies the interaction between any two of them. For simplicity we’ll assume all
the frogs are identically coupled (same H for all of them) and have identical natural
frequencies X . Furthermore, assume that H is odd, smooth, and 2Q-periodic.
a) Rewrite the systems for both two and three frogs in terms of the phase differ-
ences φ = θ1 − θ2 and ψ = θ2 − θ3 .
b) Show that the experimental results for two frogs are consistent with the simplest
possible interaction function, H ( x )  a sin x , if the sign of a is chosen appro-
priately. But then show that this simple H cannot account for the three-frog
results.
c) Next, consider more complicated interaction functions of the form
H ( x ) = a sin x + b sin 2 x . For the three-frog model, use a computer to plot the
phase portraits in the (φ, ψ ) plane for various values of a and b. Show that for
suitable choices of a and b, you can explain all the experimental results for two
and three frogs. That is, you can find a domain in the ( a, b ) parameter space for
which the system has:

i) a stable antiphase solution for the two-frog model;
ii) a stable phase-locked solution for the three-frog model, in which
frogs 1 and 2 are in sync and approximately Q out of phase from
frog 3;
iii) a co-existing stable phase-locked solution with the three frogs one-
third of a cycle apart.
d) Show numerically that adding a small even periodic component to H does not
alter these results qualitatively.
Caveat: The three-frog model studied here is more symmetrical than that con-
sidered by Aihara et al. (2011). They assumed unequal coupling strengths because
in their experiments one frog was positioned midway between the other two. The
frogs at either end therefore interacted less strongly with each other than with the
frog in the middle.



## H2 For example

Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vero esse non molestias eos excepturi, inventore atque cupiditate. Sed voluptatem quas omnis culpa, et odit.


Strong emphasis, aka bold, with **asterisks** or **underscores**.

Strikethrough uses two tildes. ~~Scratch this.~~

## Blockquotes

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

### Mixed list

1. First ordered list item
2. Another item
   - Unordered sub-list.
3. Actual numbers don't matter, just that it's a number
   1. Ordered sub-list
4. And another item.

## Links

[Inline-style link](https://www.google.com)

[Inline-style link with title](https://www.google.com "Google's Homepage")

[Reference-style link][arbitrary case-insensitive reference text]

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com

## Images

Images included in _\_posts_ folder are lazy loaded.

Inline-style:
![alt text](/src/images/random.jpeg 'Logo Title Text 1')

## Table

| Tables        |      Are      | Cool |
| ------------- | :-----------: | ---: |
| col 3 is      | right-aligned | 1600 |
| col 2 is      |   centered    |   12 |
| zebra stripes |   are neat    |    1 |

| Markdown | Less      | Pretty     |
| -------- | --------- | ---------- |
| _Still_  | `renders` | **nicely** |
| 1        | 2         | 3          |
