---
layout: default
title: Block clock
permalink: /block-clock/
nav_order: 52
---

# Block clock

For the first version of the application, the block clock is the central part of the user experience. The application is focused on letting users easily run a node, and the block clock provides a simple visual to see the current status.

{% include picture.html
	image = "/assets/images/block-clock/block-clock.png"
	retina = "/assets/images/block-clock/block-clock@2x.png"
	big = "/assets/images/block-clock/block-clock-big.png"
	alt-text = "Application screen showing the block clock"
	width = 800
	height = 622
%}

{% include picture.html
	image = "/assets/images/block-clock/dial-details.png"
	retina = "/assets/images/block-clock/dial-details@2x.png"
	big = "/assets/images/block-clock/dial-details-big.png"
	alt-text = "Explanation of the block clock elements"
	width = 800
	height = 435
%}

{% include picture.html
	image = "/assets/images/block-clock/connection-states.png"
	retina = "/assets/images/block-clock/connection-states@2x.png"
	big = "/assets/images/block-clock/connection-states-big.png"
	alt-text = "Explanation of the peer indicator states"
	width = 800
	height = 467
%}

Every element in the block clock has a function. They can be combined to communicate different application states.

{% include picture.html
	image = "/assets/images/block-clock/states.png"
	retina = "/assets/images/block-clock/states@2x.png"
	big = "/assets/images/block-clock/states-big.png"
	alt-text = "Various states of the block clock"
	width = 800
	height = 419
%}

It takes some time until the application can show initial progress and a somewhat reliable time estimate until completion of the initial block download. To the user, this can look like the application is broken. So a few adjustments are made:
- The progress circle always shows at least a small bit (even at 0%)
- While the percentage value is typically rounded, we show tenths and hundredths below 1% so users can see some progress
- While the estimated time fluctuates drastically and provides not useful information, we only show "Estimating"
- A "~" indicates that this is an estimate
- We only show minutes when we're confident that they are somewhat accurate

{% include picture.html
	image = "/assets/images/block-clock/progress-details.png"
	retina = "/assets/images/block-clock/progress-details@2x.png"
	big = "/assets/images/block-clock/progress-details-big.png"
	alt-text = "Details of the initial block download state"
	width = 800
	height = 168
%}

A network indicator appears below the block clock when the application does not run on mainnet. We need to decide whether this element should have a tool tip, and/or tapping it navigates to the settings for more information and options.

{% include picture.html
	image = "/assets/images/block-clock/network-indicator.png"
	retina = "/assets/images/block-clock/network-indicator@2x.png"
	big = "/assets/images/block-clock/network-indicator-big.png"
	alt-text = "Visual states of the network indicator below the block clock"
	width = 800
	height = 254
%}

And the block clock in light mode, which simply switches the [color variables]({{ '/colors/' | relative_url }}) from the dark set to the light set.

{% include picture.html
	image = "/assets/images/block-clock/light-mode.png"
	retina = "/assets/images/block-clock/light-mode@2x.png"
	big = "/assets/images/block-clock/light-mode-big.png"
	alt-text = "The block clock in light mode"
	width = 800
	height = 622
%}

## Layout logic

By default, the circular block clock is 200x200px in size, centered on the screen. The top bar is 46px tall and absolutely positioned.

When a network indicator is shown, the bounding box of the block clock and network indicator is used for centering within the window.

{% include picture.html
	image = "/assets/images/block-clock/layout-compact.png"
	retina = "/assets/images/block-clock/layout-compact@2x.png"
	big = "/assets/images/block-clock/layout-compact-big.png"
	alt-text = "Default layout logic diagram"
	width = 800
	height = 366
%}

In [showcase]({{ '/showcase/' | relative_url }}) mode, the block clock tries to maintain 1/3 of the screen width or height, whichever value is smaller. It maintains a minimum size of 200x200px.

{% include picture.html
	image = "/assets/images/block-clock/layout-showcase.png"
	retina = "/assets/images/block-clock/layout-showcase@2x.png"
	big = "/assets/images/block-clock/layout-showcase-big.png"
	alt-text = "Layout logic diagram for showcase mode"
	width = 800
	height = 366
%}

At smaller sizes (height < 400), the network indicator moves to the top-left corner of the window, making more room for the block clock, which tries to keep a size of 200x200px.

{% include picture.html
	image = "/assets/images/block-clock/layout-small.png"
	retina = "/assets/images/block-clock/layout-small@2x.png"
	big = "/assets/images/block-clock/layout-small-big.png"
	alt-text = "Layout logic diagram for small window sizes"
	width = 800
	height = 427
%}

At even smaller sizes, the primary factor becomes a minimum side padding of 25px. The block clock shrinks smaller than it's 200x200px default size. The top bar height shrinks to 36px.

{% include picture.html
	image = "/assets/images/block-clock/layout-tiny.png"
	retina = "/assets/images/block-clock/layout-tiny@2x.png"
	big = "/assets/images/block-clock/layout-tiny-big.png"
	alt-text = "Layout logic diagram for very small window sizes"
	width = 800
	height = 693
%}

## Prototype

This web prototype was done to validate if the block clock dial renders well with realistic data (or if segments get too small), to explore animations & interactions, and test widgets.

[Prototype](https://stupefied-jones-dd209f.netlify.app), [Source](https://github.com/GBKS/bitcoin-core-tng-ui-tests)
