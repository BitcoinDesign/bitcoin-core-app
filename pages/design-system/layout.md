---
layout: default
title: Layout
permalink: /layout/
nav_order: 10
---

# Layout

The application layout is responsive to the window size, across both mobile and desktop. A set of simple rules is used to ensure broadly balanced layouts. The rules were intentionally kept very simple for the first designs and can be iterated on over time.

Rules include:
- Vertical spacing of content elements
- Horizontal padding of header and content areas
- 3 maximum widths for different content elements
- A fixed bottom bar for primary actions on mobile

{% include picture.html
	image = "/assets/images/desktop-spacing.png"
	retina = "/assets/images/desktop-spacing@2x.png"
	big = "/assets/images/desktop-spacing-big.png"
	alt-text = ""
	width = 800
	height = 713
%}

Rules for the 3 maximum content widths, as well as vertical spacing examples.

{% include picture.html
	image = "/assets/images/desktop-content-width.png"
	retina = "/assets/images/desktop-content-width@2x.png"
	big = "/assets/images/desktop-content-width-big.png"
	alt-text = ""
	width = 800
	height = 711
%}

Examples of how the content adjusts based on window width.

{% include picture.html
	image = "/assets/images/responsive-layout-example.png"
	retina = "/assets/images/responsive-layout-example@2x.png"
	big = "/assets/images/responsive-layout-example-big.png"
	alt-text = ""
	width = 900
	height = 302
%}

Layout rules slightly differ on mobile since applications are always full-screen and slightl overlap with the status bar and home button on iOS, with slight differences on Android. The primary action is fixed to the bottom of the screen on mobile, to make it easier to access during one-handed use.

{% include picture.html
	image = "/assets/images/mobile-spacing.png"
	retina = "/assets/images/mobile-spacing@2x.png"
	big = "/assets/images/mobile-spacing-big.png"
	alt-text = ""
	width = 800
	height = 870
%}

Examples of the sticky layout on mobile.

{% include picture.html
	image = "/assets/images/vertical-layout-example.png"
	retina = "/assets/images/vertical-layout-example@2x.png"
	big = "/assets/images/vertical-layout-example-big.png"
	alt-text = ""
	width = 900
	height = 424
%}