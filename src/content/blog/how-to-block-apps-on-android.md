---
title: "How to block apps on Android: the built-in way, and the way that sticks"
description: "Android already has an app timer hidden in Settings. Here's how to use it, where it falls short, and how to set up an app blocker on Android that you won't switch off by Friday. No root needed."
pubDate: 2026-11-19
tags: [app-blocker, android, guides]
pause: "Settings → Digital Wellbeing → you already knew how to undo it."
---

There are two ways to block apps on Android. One is already on your phone. The other takes about ten minutes to set up. Both work without rooting your phone, and both are free. This guide covers each, and is honest about when the first one is enough.

## Option 1: Android's built-in app timers

Most Android phones ship with **Digital Wellbeing**, which includes simple app timers. On a lot of phones the steps look like this:

1. Open **Settings**.
2. Go to **Digital Wellbeing & parental controls**.
3. Open the dashboard and tap the app you want to limit.
4. Set an **app timer**, for example 30 minutes a day.

When you hit the limit, the app is paused and its icon goes grey for the rest of the day. The exact menu names can differ a little between phone makers, but the idea is the same.

### Where the built-in timer falls short

For some people that's all they need. If it is for you, great, stop here.

For a lot of people, though, it runs into a few problems:

- **Undoing it is the same as setting it.** The way past the limit is to go back into Settings and change the timer. After a couple of times, that becomes the routine.
- **It's whole apps only.** You can limit YouTube, but you can't limit *just* YouTube Shorts and keep the tutorials.
- **There's nothing in between.** The app is either open or paused. No "wait ten seconds and think about it first", no note to yourself, no live count.
- **Browsers are a gap.** Limit the Instagram app and the website is still a tap away.

None of this makes it bad. It's a simple timer and it does what a simple timer does. If you find yourself switching it off, that's the sign you need something with more structure. We wrote more about this in [why most app blockers stop working after a week](../why-app-blockers-stop-working/).

## Option 2: Use a dedicated app blocker

A dedicated app blocker can do what the built-in timer can't: make the bypass a real decision, limit parts of apps, cover your browser, and mix hard blocks with softer nudges.

Here's how to set one up with [Curbox](https://curbox.app/), a free and open-source app blocker for Android. It has no ads, no subscription and doesn't need an account.

### Step 1: Install and grant permissions

Get Curbox from the [download page](https://curbox.app/download.html). During setup it asks for a few permissions: Screen Overlay, Notifications, Do Not Disturb access, and two Accessibility services (an App Blocker and a Usage Tracker).

The Accessibility services are what let any Android app blocker **see which app is open and show a block screen over it**. That's a lot of access, which is one reason Curbox is open source. You can [read the code](https://github.com/nethical6/curbox) and check what it does with it.

Two things worth knowing:

- That deep access is why Play Protect or antivirus apps sometimes **flag** blockers like this. It's a false positive caused by the permissions, not a sign of anything wrong.
- If you sideload the APK, newer Android versions may block "restricted settings" for it. Installing through **F-Droid** avoids that.

The full walkthrough is in the [setup guide](https://curbox.app/docs/getting-started/setup/).

### Step 2: Watch before you block

Open the **Usage** tab and leave it alone for two or three days. Don't set anything yet. Most people are surprised by which app actually takes their time, and it's often not the one they would have guessed.

### Step 3: Add one App Pause rule

**App Pause** is Curbox's per-app limit. Pick the app that surprised you most and give it one of three kinds of limit:

- **A daily cap**, like 45 minutes.
- **An allowed time window**, like only after 6pm.
- **A check every time you open it.**

Set it close to what you use now, not what you wish you used. You can lower it next week.

### Step 4: Choose how hard it is to get past

This is the setting that decides whether your app blocker lasts. When you hit a limit, Curbox shows a pause screen, and the **Unlock Challenge** decides what it takes to continue:

| Challenge | What happens | Good for |
| --- | --- | --- |
| **Wait to Unlock** | A countdown, fixed or dynamic. | Breaking autopilot gently. |
| **Require Effort** | Type a sentence, state why you're opening it, or scan a QR code. | Apps you sometimes need. |
| **Never Unlock** | The app stays closed until the limit resets. | The one app you can't moderate. |

You can also add a **Proceed Limit**, which caps how many times a day you can get past a limit at all. Fifteen "just one more" unlocks add up fast.

A trick that works well with Require Effort: print a QR code, stick it somewhere in another room, and make scanning it the way back in. By the time you've walked over there, you often don't want the app any more.

### Step 5: Cover the browser

Turn on **Keywords & Websites**, which watches your browser's address bar. It works in Chrome, Brave, Firefox, Fennec, Opera, Cromite and Vanadium. Add the website version of whatever app you just limited, so the browser isn't the easy way round.

You can block a whole domain, a single path like a site's `/feed` page, or use wildcards and regex for more control. The [website blocking docs](https://curbox.app/docs/reducers/keyword-blocker/) have the full syntax.

### Step 6: Add a nudge somewhere else

Not every app needs a wall. For a second app you use a bit too much, try a **Mindful Message** instead: a short note you write, shown when you open the app. It can include real numbers:

```text
You've spent {app_usage_today} here today. Still worth it?
```

It doesn't block anything. It just makes you look at what you're doing.

## Blocking apps for a set time instead

Daily limits are for habits. If you just want the next hour of work to go well, use **Focus Mode**: pick a length, pick what's blocked, and start. You can block a list of apps, or flip it around so **only** the apps you choose work. Twenty-five minutes is a good first session. See the [Focus Mode docs](https://curbox.app/docs/focus/focus-mode/).

## FAQ

### How do I block an app on Android without root?

Both options here work without root. Android's built-in Digital Wellbeing app timers are under Settings, and dedicated app blockers like Curbox use Accessibility and overlay permissions instead of root.

### How do I block apps on Android for free?

The built-in app timer is free. Curbox is also free, with no ads, subscriptions or paid tiers, and it's open source.

### Can I block an app on Android at certain times only?

Yes. In Curbox, App Pause can use an allowed time window, so an app only works during the hours you pick. Auto DND can also turn on Do Not Disturb on a schedule.

### Can I block websites on Android too?

Yes. Curbox's Keywords & Websites boundary blocks domains, paths and patterns in supported browsers. For computers there's a [browser extension](https://curbox.app/download.html) for Chromium browsers and Firefox.

### How do I stop myself from just turning the app blocker off?

Make the bypass a deliberate step rather than something you can do without thinking. A QR code in another room, a typed reason, or a Proceed Limit all help. It also helps to start with limits you can actually keep.

---

Short-form video is the one place a whole-app block doesn't fit well. That's covered in [how to block Reels and Shorts without deleting the apps](../block-reels-and-shorts/).
