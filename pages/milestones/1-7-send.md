---
layout: default
title: 1.7 Send
permalink: /milestones/1-7-send/
nav_order: 170
header: true
---

# Milestone 1.7: Sending bitcoin

**Status: Early design exploration**

_[Design milestone](https://github.com/BitcoinDesign/Bitcoin-Core-App/milestone/7), [Figma](https://www.figma.com/file/ek8w3n3upbluw5UL2lGhRx/Bitcoin-Core-App-Design?type=design&node-id=7516%3A13173&mode=design&t=sZSBHpOLLJmoMf57-1)_

The big goal is to provide full-fledged wallet features for view-only, single-key, and multi-key wallets, as well as hardware wallet support and more. The specifics are yet to be determined and will be tackled via smaller milestone releases.

A major step in development is the moment when the application reaches parity with the existing QT GUI and can take its place. This requires a lot of foundational work in the codebase, and a lot of front-end development work.

Below is a visual map of how we can reach this parity point based on Milestone 1, split up into distinct milestones. Each milestone adds a mostly self-contained set of features, with milestones building on each other. These are explained in more detail in the following pages. 

{% include picture.html
	image = "/assets/images/milestones/1-7-send.png"
	retina = "/assets/images/milestones/1-7-send@2x.png"
	big = "/assets/images/milestones/1-7-send-big.png"
	alt-text = "A visual map of which screens will be added in the 1.7 milestone"
	width = 800
	height = 384
%}

The complexity of the send flow can range dramatically. Some of the features to support:

- [Address book]({{ '/contacts/' | relative_url }})
- Fee estimation, recommendations and customization
- [Coin selection]({{ '/send/coin-selection/' | relative_url }})
- [External signers]({{ '/send/external-key/' | relative_url }})
- [Multiple signers]({{ '/send/multiple-keys/' | relative_url }})
- Multiple signing paths
- [Silent payments]({{ '/silent-payments/' | relative_url }})
- [Transaction batching]({{ '/send/multiple-recipients/' | relative_url }})
- [Transaction (PSBT) import and export]({{ '/send/import-export/' | relative_url }})
- Bitcoin URI scheme support
- Clipboard support

Screens and flows have not been fully designed yet. This page covers the current state.