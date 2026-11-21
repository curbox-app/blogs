---
title: "Why most app blockers stop working after a week"
description: "You install an app blocker, it works for four days, and then you're back to scrolling. That's usually not a willpower problem. It's a design problem. Here's what separates an app blocker that sticks from one you quietly uninstall."
pubDate: 2026-11-20
tags: [app-blocker, guides, habits]
pause: "Day five. You already know the bypass."
---

There's a familiar arc to installing an app blocker. Day one feels great. Day two, you hit the limit and close the app, a little proud. By day four you've worked out that tapping "ignore for 15 minutes" costs nothing. By the end of the week the blocker is still installed, still showing its little screen, and you're dismissing it without reading it.

The blocker didn't break. It just stopped being something you notice.

After a lot of time spent thinking about this while building [Curbox](https://curbox.app/), a free and open-source app blocker for Android, we think most of the failure comes down to a handful of design choices. If you're shopping for an app blocker, these are the things worth checking.

## 1. The bypass is too easy, or too hard

This is the big one. An app blocker has exactly one important moment: the screen you see when you hit a limit. Everything else is setup.

If getting past that screen is a single tap, your thumb learns the tap. It becomes part of opening the app, like swiping away a notification. You end up with a blocker that slows you down by half a second.

If getting past it is impossible, you have the opposite problem. The first time you genuinely need the app (a two-factor code, a message from your landlord, directions in a group chat), you hit a wall. So you go into settings and turn the blocker off "just for now." It rarely comes back on.

What works is a bypass that is **possible but deliberate**. Something that makes you stop and decide. In Curbox these are called [Unlock Challenges](https://curbox.app/docs/unlock-challenges/overview/), and you pick one per limit:

- **Wait to Unlock.** A countdown you have to sit through. Cravings fade faster than you'd think, and a lot of the time you close the app before the timer ends.
- **Require Effort.** Type a sentence, write down why you're opening the app, or scan a QR code you've stuck to the fridge in another room.
- **Never Unlock.** For the one app you already know you can't moderate.

The right setting is the weakest one that still makes you pause. If you're always fighting it, turn it down. If you skip it on autopilot, turn it up.

## 2. It treats every app the same

"Block Instagram from 9 to 5" is a blunt rule. Instagram is a messaging app, a camera, a feed and an endless video player, all in one icon. Most people don't have a problem with the messaging part.

A blocker that only works at the level of whole apps forces a bad choice: lose the useful bits, or keep the distracting ones. Look for one that can go finer than that. Curbox, for example, can limit **Reels and Shorts specifically** while leaving the rest of Instagram and YouTube alone. We wrote a whole post on [blocking Reels and Shorts without deleting the apps](../block-reels-and-shorts/).

The same goes for websites. Blocking a whole domain is easy. Blocking just a site's `/feed` page while its search still works takes path-level rules, which most simple website blockers don't offer.

## 3. You can just switch to the next app

Limit Instagram Reels to 20 minutes and a lot of people discover YouTube Shorts on minute 21. The habit isn't tied to one app. It's tied to the *format*.

Good limits follow the habit, not the logo. Curbox's short-form limit is **shared across Instagram Reels, YouTube Shorts and Facebook Reels**, so it's one budget for one habit. And the website blocker works across Chrome, Brave, Firefox, Opera and a few others, so the browser isn't an easy way around the app rules.

## 4. It only blocks, it never nudges

Blocking is a wall. Walls are great for the two or three apps that really eat your day. But if every boundary on your phone is a wall, the whole thing starts to feel like a punishment, and people abandon punishments.

A lot of screen time is just autopilot, and autopilot doesn't need a wall. It needs a small interruption. Some of the quieter tools in Curbox exist for exactly this:

- A **Mindful Message** you wrote yourself, shown over an app when you open it. It can include live numbers, like how long you've already spent there today.
- A **live counter** of how many Reels and Shorts you've watched.
- A **grayscale filter** for chosen apps, which takes a surprising amount of the pull out of a feed.

Mixing a few hard blocks with a few soft nudges tends to last a lot longer than blocking everything.

## 5. It's built on the business model it claims to fight

This one is less obvious. A lot of app blockers are free with ads, or push a subscription to unlock the features that actually work. An ad-funded app does better when you spend more time on your phone. That is a strange incentive for a tool whose whole job is to get you to spend less.

It also matters for privacy. To block apps properly on Android, a blocker needs to know which app is on your screen and be able to draw over it. That usually means **Accessibility** access, which is about as much trust as you can give an app. Before granting that, it's fair to ask what the app does with what it sees.

Curbox's answer is to be open source under the [GPL-3.0](https://github.com/nethical6/curbox/blob/main/LICENSE), free with no ads or paid tiers, and usable without an account. Your rules and usage history stay on your phone. You don't have to take our word for any of that, because [the code is public](https://github.com/nethical6/curbox).

## 6. You set it up for the person you wish you were

The most common setup mistake isn't picking the wrong app. It's going from five hours of screen time a day to a 30-minute total cap on day one. That cap gets hit by lunch, gets bypassed by dinner, and gets deleted by the weekend.

A better start:

1. Spend a few days just **watching your usage** without changing anything.
2. Add **one** limit, on the app that surprised you most.
3. Set the limit close to what you already use, then lower it each week.
4. Add a soft nudge to a second app instead of blocking it.

It's slower, but a limit you keep is worth more than an ambitious one you remove.

## 7. It has nothing for the times you actually want to focus

Daily limits are about habits. But sometimes you just need the next hour to go well. A blocker that can only do daily limits leaves you fiddling with rules every time you sit down to work.

Look for a separate **focus mode** you start yourself: pick a length, pick what's blocked, go. Curbox's [Focus Mode](https://curbox.app/docs/focus/focus-mode/) also has an allow-list option, where *only* the apps you pick work. Maps, music, your notes, nothing else. It's the closest a phone gets to being a plain tool again.

## The short checklist

If you're comparing app blockers, here's the whole post in one table.

| Check | Why it matters |
| --- | --- |
| Bypass takes real effort, but is possible | Too easy becomes muscle memory. Too hard gets uninstalled. |
| Can limit parts of apps, not just whole apps | Keep messages, lose the feed. |
| Limits follow the habit across apps | Stops the Reels-to-Shorts switch. |
| Has soft nudges as well as hard blocks | Not every habit needs a wall. |
| Not funded by your attention | The incentives should point the same way you do. |
| Clear about what it does with Accessibility access | It can see every app you open. |
| Has a separate focus mode | Habits and work sessions need different tools. |

## FAQ

### What is the best free app blocker for Android?

It depends on what you need, but for a free option, check whether "free" means free or a trial for a paid plan, whether it shows ads, and whether its bypass actually makes you stop. Curbox is free, has no ads or subscriptions, and is [open source](https://github.com/nethical6/curbox).

### Do app blockers actually work?

They work when the block screen still makes you think after the first week. Most stop working because the bypass becomes a reflex or the limits were set too strict to keep.

### Why does an app blocker need Accessibility permission?

On Android, Accessibility access is how an app can see which app is open and draw a block screen over it. That's why it's worth choosing a blocker whose code you, or someone you trust, can read.

### Can I block just part of an app?

Some blockers can. Curbox can limit Reels and Shorts on their own, and its UI Hider (in beta) can hide things like the YouTube home feed. See [how to block Reels and Shorts](../block-reels-and-shorts/).

---

If you're on Android and want to see how this works in practice, the step-by-step version is in our guide to [blocking apps on Android](../how-to-block-apps-on-android/).
