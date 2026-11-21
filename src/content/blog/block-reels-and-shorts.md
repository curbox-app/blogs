---
title: "How to block Instagram Reels and YouTube Shorts without deleting the apps"
description: "You don't have a problem with Instagram. You have a problem with Reels. Here's how to block Reels and Shorts on Android, or just put a limit on them, while keeping messages, Stories and YouTube tutorials."
pubDate: 2026-11-17
tags: [app-blocker, short-form-video, android]
pause: "That was reel number 47."
---

Deleting Instagram works right up until someone sends you something on Instagram. Then it's back, and so is the feed. Deleting YouTube works until you need a video on how to fix the sink. Then you're forty Shorts deep and the sink is still broken.

The trouble is that most app blockers only see whole apps. But the part that eats the evening is usually one feature: the endless, swipe-up short-form video feed. If you can block that part and leave the rest, you don't have to choose.

This guide shows how to do that on Android with [Curbox](https://curbox.app/), a free and open-source app blocker.

## Why short-form video is different

A normal feed has an end, at least in theory. Short-form video doesn't. Each video is short enough that "one more" never feels like a decision, and there's no natural place to stop. That's why "I'll just watch a couple" so often turns into an hour.

It also explains why a regular app timer doesn't help much. A 30-minute limit on Instagram also limits your messages. And when Instagram runs out, YouTube Shorts is right there. The habit moves to the next app.

So a good short-form block needs to:

1. Target **Reels and Shorts specifically**, not the whole app.
2. Work **across apps**, so you can't just switch.
3. Use a measure you **actually notice**.

## Step 1: Set a short-form limit

In Curbox, the **Short-Form Video** boundary limits Reels and Shorts in one of two ways:

- **Time based.** A daily allowance of minutes.
- **Count based.** A daily number of videos.

The limit is **shared across Instagram Reels, YouTube Shorts and Facebook Reels**. One budget for one habit. Run out on Instagram and Shorts is closed too.

We'd suggest trying the count-based mode. Time disappears inside a feed, and "17 minutes" doesn't mean much. "20 reels" is easy to picture, and easy to notice when you're at 19.

Start with roughly what you watch on a normal day, then lower it a bit each week. If you want Reels gone entirely, set it as low as it goes and pair it with **Never Unlock**.

Messages, Stories, search and long-form YouTube keep working as normal.

## Step 2: Make the number visible

The **Short-Form Video Counter** keeps a live count on screen of how many Reels and Shorts you've watched today, plus a weekly chart. Even with no limit at all, watching that number go up changes how you scroll. It's hard to watch "38" tick over to "39" and not feel something.

You can put the same number into a **Mindful Message** that shows when you open the app:

```text
That's {reel_count} reels today. Was #{reel_count} worth it?
```

There are also placeholders for time spent in the app today, total screen time, and how long your current session has lasted.

## Step 3: Hide the feed itself

**UI Hider** (currently in beta) removes parts of apps from the screen. Think YouTube's home recommendations, the Instagram feed, or X's "For You" tab. It comes with built-in rules, and you can write your own in a sandboxed scripting language if you want to hide something specific.

With the feed hidden and short-form limited, Instagram goes back to being a messaging app with a camera. YouTube goes back to being a search box.

## Step 4: Take the colour out

The **Grayscale Filter** turns chosen apps black and white. Short-form video leans heavily on colour and movement, and without the colour it gets dull surprisingly fast. This one needs [Shizuku](https://shizuku.rikka.app/), a free helper app.

## Step 5: Close the browser loophole

Once the apps are limited, the mobile website is the obvious way round. Curbox's **Keywords & Websites** boundary can block specific paths rather than whole sites, so you can block the short-form section of a site and leave the rest. For full control you can write a regex rule:

```text
r:^https?://(www\.)?youtube\.com/shorts/
```

That blocks Shorts pages in the browser and leaves normal YouTube videos alone. It works in Chrome, Brave, Firefox, Opera and a few others. The [website blocking docs](https://curbox.app/docs/reducers/keyword-blocker/) cover the syntax.

## A setup that works for most people

| Setting | Suggestion |
| --- | --- |
| Short-Form Video | Count based, starting at your normal daily number. Lower it weekly. |
| Unlock Challenge | Wait to Unlock to start. Move to Require Effort if you skip it. |
| Short-Form Video Counter | On. |
| Mindful Message | On Instagram and YouTube, using `{reel_count}`. |
| UI Hider | Optional: hide the Instagram feed and YouTube home. |

If you're picking an Unlock Challenge for the first time, we wrote about [why the bypass is the most important part of any app blocker](../why-app-blockers-stop-working/).

## FAQ

### Can you block Instagram Reels but keep Instagram?

Yes. Curbox's Short-Form Video limit applies to Reels specifically, so messages, Stories and the rest of Instagram keep working.

### How do I block YouTube Shorts on Android?

Set a Short-Form Video limit in Curbox. It covers YouTube Shorts along with Instagram and Facebook Reels. To block Shorts in the browser too, add a website rule for `youtube.com/shorts`.

### Is there a free app to block Reels and Shorts?

Curbox is free, with no ads, subscriptions or account, and it's [open source](https://github.com/nethical6/curbox) under GPL-3.0.

### Can I limit Reels instead of blocking them completely?

Yes. You can set a daily number of videos or a daily number of minutes, rather than blocking them outright.

### Does this work on iPhone?

No. Curbox is an Android app. There's also a [browser extension](https://curbox.app/download.html) for Chromium browsers and Firefox on computers.

---

New to blocking apps on Android in general? Start with [how to block apps on Android](../how-to-block-apps-on-android/), which covers the built-in option too. The full reference is in the [short-form video docs](https://curbox.app/docs/reducers/short-form-video/).
