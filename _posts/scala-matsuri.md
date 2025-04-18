---
layout: post
title: Scala Matsuri 2017
date: "2017-02-28T09:35:07.322Z"
categories: programming
excerpt: "Functional programming, the state of Dotty, Deep Learning for Recommendation, Meta-programming, and Scala Native"
tags:
- programming
- Scala
- scala matsuri
- scalameta
modified_time: "2023-01-11T09:35:07.322Z"
thumbnail: https://3.bp.blogspot.com/-rlNAN4M7Vd8/WLU0tpoNt8I/AAAAAAAAAi0/HX2e36c5ZVcNOQAc7so-iJOIYVBaA5KAACLcB/s72-c/img_main_txt.2.png
blogger_id: tag:blogger.com,1999:blog-7835395644559909128.post-8370262533023862481
blogger_orig_url: http://blog.solutions.asia/2017/02/scala-matsuri-2017.html

author:
  name: James Sullivan
  picture: "/assets/blog/authors/js.png"
coverImage: "/assets/blog/scala-matsuri/scala-matsuri.png"
ogImage:
  url: "/assets/blog/scala-matsuri/scala-matsuri.png"
---

<div class="separator" style="clear: both; text-align: center;"><a href="https://3.bp.blogspot.com/-rlNAN4M7Vd8/WLU0tpoNt8I/AAAAAAAAAi0/HX2e36c5ZVcNOQAc7so-iJOIYVBaA5KAACLcB/s1600/img_main_txt.2.png" style="clear: right; float: right; margin-bottom: 1em; margin-left: 1em;"><img height="109" src="https://3.bp.blogspot.com/-rlNAN4M7Vd8/WLU0tpoNt8I/AAAAAAAAAi0/HX2e36c5ZVcNOQAc7so-iJOIYVBaA5KAACLcB/s320/img_main_txt.2.png" width="320" alt="Scala Matsuri" /></a></div>
<span data-preserver-spaces="true" style="background: transparent; color: #0e101a; margin-bottom: 0pt; margin-top: 0pt;">This weekend I was at&nbsp;</span><a class="editor-rtfLink" href="http://2017.scalamatsuri.org/index_en.html" style="background: transparent; color: #0e101a; color: #4a6ee0; margin-bottom: 0pt; margin-top: 0pt;" target="_blank"><span data-preserver-spaces="true" style="background: transparent; color: #0e101a; color: #4a6ee0; margin-bottom: 0pt; margin-top: 0pt;">ScalaMatsuri 2017</span></a><span data-preserver-spaces="true" style="background: transparent; color: #0e101a; margin-bottom: 0pt; margin-top: 0pt;">, the largest international Scala conference in Asia, which I have been lucky enough to attend for a few years now. The videos are available at&nbsp;</span><a class="editor-rtfLink" href="https://freshlive.tv/search/Scala" style="background: transparent; color: #0e101a; color: #4a6ee0; margin-bottom: 0pt; margin-top: 0pt;" target="_blank"><span data-preserver-spaces="true" style="background: transparent; color: #0e101a; color: #4a6ee0; margin-bottom: 0pt; margin-top: 0pt;">https://freshlive.tv/search/Scala</span></a><span data-preserver-spaces="true" style="background: transparent; color: #0e101a; margin-bottom: 0pt; margin-top: 0pt;">. As they left the video recording all day, you should fast-forward to the various presentations. There is always a lot of interest going on there, but a few things seemed to stick out to me this year:</span>
<div style="min-height: 8pt; padding: 0px;"><br /></div>

## Functional Programming

<div data-aria-label-part="0" lang="en"><span face="&quot;helvetica neue&quot; , &quot;arial&quot; , &quot;helvetica&quot; , sans-serif">Paul Szulc, among others, gave a couple of talks on functional programming. The first was about the Free monad (<a class="jive-link-external-small" href="https://freshlive.tv/tech-conference/83829" rel="nofollow">https://freshlive.tv/tech-conference/83829</a>&nbsp;  about 4 hours into the video), allowing you to reason about your  concerns in isolation and combine them together on a higher level. The  second was on recursion schemes. Very interesting but unfortunately my  main take away was that I need to brush up on my functional programming.  Connie Chen gave a talk on monad transformers that I wasn't able to  attend but she did make her slides and code available on line on&nbsp; <a class="jive-link-external-small" href="https://github.com/conniec/scalamatsuri2017" rel="nofollow">GitHub - monad transformers.</a>&nbsp; Naoki Aoyama gave a talk on the basics of&nbsp;<a class="jive-link-external-small" href="https://www.slideshare.net/AoiroAoino/van-laarhoven-lens-72584231" rel="nofollow">Van Laarhoven Lens</a> in Japanese.</span></div>
<br />

## The state of Dotty, the next-generation Scala compiler,

 the next-generation Scala compiler. <span face="&quot;helvetica neue&quot; , &quot;arial&quot; , &quot;helvetica&quot; , sans-serif">Guillaume Martres (EPFL) <a class="jive-link-external-small" href="https://github.com/smarter" rel="nofollow">&nbsp; </a>explained the new, experimental compiler for Scala, Dotty (<a class="jive-link-external-small" href="http://dotty.epfl.ch/" rel="nofollow">http://dotty.epfl.ch</a>). Union, intersection and <a class="jive-link-external-small" href="http://docs.scala-lang.org/sips/pending/42.type.html" rel="nofollow">literal singleton types</a> along with faster compile times are what I am most looking forward to  but there is a lot more there. I was pleasantly surprised to find out  how easy it is to try it out. (<a class="jive-link-external-small" href="https://freshlive.tv/tech-conference/83829" rel="nofollow">https://freshlive.tv/tech-conference/83829</a>&nbsp; about 3 hours into the video)</span><br />
<div style="min-height: 8pt; padding: 0px;"><br /></div>

## Using Deep Learning for Recommendation

<span face="&quot;helvetica neue&quot; , &quot;arial&quot; , &quot;helvetica&quot; , sans-serif">Eduardo  Gonzalez introduced&nbsp; different ways to use Deep Learning for  recommendation systems using DeepLearning4J and Scala on GPUs. His  honesty around the challenges, and there can be many challenges getting  to a good model, was refreshing. I alway enjoy Eduardo's presentations  and am consistently impressed by his presentation skills in Japanese.  (In Japanese <a class="jive-link-external-small" href="https://freshlive.tv/tech-conference/83835" rel="nofollow">https://freshlive.tv/tech-conference/83835</a> around 5 hours and 38 minutes into the video). </span><br />
<div style="min-height: 8pt; padding: 0px;"><br /></div>

## Meta-program and/or shapeless all the things!

<span face="&quot;helvetica neue&quot; , &quot;arial&quot; , &quot;helvetica&quot; , sans-serif">Scala.meta seemed to be very popular topic this year, perhaps because <a class="jive-link-external-small" href="https://github.com/scalameta/scalameta/blob/master/changelog/1.6.0.md" rel="nofollow">scalameta 1.6.0</a> was released just before the conference. Chris Birchall gave some good  examples of implementing a “def macro” and a macro annotation, how to  use scala.meta (which Devon went into more detail in on Sunday), the  next generation of Scala metaprogramming and when when you should NOT  use a macro as well as when to use <a class="jive-link-external-small" href="https://github.com/milessabin/shapeless" rel="nofollow">Shapeless</a>. (<a class="jive-link-external-small" href="https://freshlive.tv/tech-conference/83829" rel="nofollow">https://freshlive.tv/tech-conference/83829</a>&nbsp; about 5 hours and 2 minutes into the video)</span><br />
<div style="min-height: 8pt; padding: 0px;"><br /></div>

## Coding in Scala Native

<span face="&quot;helvetica neue&quot; , &quot;arial&quot; , &quot;helvetica&quot; , sans-serif">Denys  Shabalin (EPFL) took us through the development of a simple game using  Scala Native and on the way explaining the basics of how to interoperate  with native code. It was impressive both how far along Scala Native has  come and the start up times when you are not using the JVM.&nbsp; Having  said that if you are interoperating with C or C++ libraries there is no way you are going to get around having to know C or C++&nbsp; and a  certain amount of verbosity for the interface.</span>

<br><br>
<img class="cc-icon css-11y11pk" width="32" height="32"  alt="Attribution 4.0 International (CC BY 4.0)" style="display: inline-block;" src="/assets/blog/cc.svg">&nbsp;<img class="cc-icon css-11y11pk" width="32" height="32" style="display: inline-block;" alt="James Sullivan" src="/assets/blog/by.svg">

This article is licensed under a <a href="https://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International</a> license.