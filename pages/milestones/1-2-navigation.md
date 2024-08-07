---
layout: default
title: 1.2 Navigation
permalink: /milestones/1-2-navigation/
nav_order: 120
header: true
---

# Milestone 1.2: Navigation

**Status: Complete**

_[Design milestone](https://github.com/BitcoinDesign/Bitcoin-Core-App/milestone/2), [Code milestone](https://github.com/bitcoin-core/gui-qml/milestone/2), [Figma](https://www.figma.com/file/ek8w3n3upbluw5UL2lGhRx/Bitcoin-Core-App-Design?type=design&node-id=7516%3A13168&mode=design&t=sZSBHpOLLJmoMf57-1)_

The application flow in Milestone 1 is very simple. After a mostly linear onboarding flow, the user lands on the block clock. They can navigate into settings, and back.

In the future, the application will be more complex. There will be new distinct areas for viewing activity, sending, and receiving, each with sub-pages, nested user flows, modals, and more.

Goal with this milestone is to restructure the application, focusing on navigation. We can add empty placedholders for all new screens, only containing essential navigation components.

A central part of this will be the new navigation bars, which will differ in look and behavior across desktop and mobile.

One of the consideration is that the application can be built without wallet features, or a user may choose to only use the node features. In the first case, the UI will skip anything related to the wallet. In the second case, the node will be the primary focus point, with a subtle option to add a wallet.

{% include picture.html
	image = "/assets/images/nav/desktop-nav-node-wallet.png"
	retina = "/assets/images/nav/desktop-nav-node-wallet@2x.png"
	big = "/assets/images/nav/desktop-nav-node-wallet-big.png"
	alt-text = "Three desktop screens with different wallet states."
	width = 800
	height = 265
%}

The same states are required on mobile, along with other layout differences to account for the different form factor, interaction model and user needs.

{% include picture.html
	image = "/assets/images/nav/mobile-nav-node-wallet.png"
	retina = "/assets/images/nav/mobile-nav-node-wallet@2x.png"
	big = "/assets/images/nav/mobile-nav-node-wallet-big.png"
	alt-text = "Six mobile screens with different wallet states."
	width = 800
	height = 287
%}

Below are the various interactive states of elements in the navigation bar on desktop.

{% include picture.html
	image = "/assets/images/nav/desktop-states.png"
	retina = "/assets/images/nav/desktop-states@2x.png"
	big = "/assets/images/nav/desktop-states-big.png"
	alt-text = "Various interactive states of the desktop navigation bar"
	width = 800
	height = 665
%}

The wallet selector differs across device types. While the content is identical, it appears as a dropdown on desktop, and a modal that slides up from the bottom on mobile. On desktop, the ellipsis (...) button for each wallet item is only visible when hovering the respective item. Since there is no hover interaction on touch devices, that button is always visible on mobile.

On the technical side, the wallet name is the same as the file name. For closed wallets, we have no further information and cannot show wallet type or balance.

{% include picture.html
	image = "/assets/images/nav/wallet-selector.png"
	retina = "/assets/images/nav/wallet-selector@2x.png"
	big = "/assets/images/nav/wallet-selector-big.png"
	alt-text = "The wallet selector modal on desktop and mobile."
	width = 800
	height = 479
%}

Below are variations of the selector with different amounts of wallets. The list is sorted by the time each wallet as last opened, and becomes scrollable when there are more than ten wallets. The cut-off is so that the eleventh item is half cut-off. This allows users to understand the scoll logic. A light scroll bar indicator appears on the right side when scrolling to indicate the scroll position (and ratio of scrollable content height to the height of the visible window).

{% include picture.html
	image = "/assets/images/nav/wallet-selector-variations.png"
	retina = "/assets/images/nav/wallet-selector-variations@2x.png"
	big = "/assets/images/nav/wallet-selector-big.png"
	alt-text = "Three variations of the wallet selector modals with varying detail."
	width = 800
	height = 697
%}

Renaming and removing wallets opens a modal. In the former case for entering a new name, in the latter for confirming the removal and informing users about how to re-add it later.

{% include picture.html
	image = "/assets/images/nav/wallet-option-modals.png"
	retina = "/assets/images/nav/wallet-option-modals@2x.png"
	big = "/assets/images/nav/wallet-option-modals-big.png"
	alt-text = "Modal designs for entering a new wallet name, and confirming removal of a wallet."
	width = 800
	height = 377
%}

When a wallet is closed (= no wallet is open), the application navigates to the block clock screen. The tabs are no longer visible, and the user has to open one of their wallets for them to appear again.

Below are interactive states of many of the individual elements. For all the visual details, see the Figma file linked above.

{% include picture.html
	image = "/assets/images/nav/element-states.png"
	retina = "/assets/images/nav/element-states@2x.png"
	big = "/assets/images/nav/element-states-big.png"
	alt-text = "Detailed interactive states of individual navigation elements"
	width = 800
	height = 331
%}

Another aspect is to implement navigation and transition patterns that are intuitive and consistent (in that order). Below are some basic patterns, most of which are already implemented in the application.

{% include picture.html
	image = "/assets/images/nav/transition-patterns.png"
	retina = "/assets/images/nav/transition-patterns@2x.png"
	big = "/assets/images/nav/transition-patterns-big.png"
	alt-text = "Wireframe outlines of transition patterns."
	width = 800
	height = 827
%}

On desktop, users can also directly access various options through the application menu, which are slightly different across operating systems. Below is a first mock-up based on the existing QT application. We will refine these as we work through the remaining milestones as we detail the other features.

{% include picture.html
	image = "/assets/images/nav/desktop-menu-options.png"
	retina = "/assets/images/nav/desktop-menu-options@2x.png"
	big = "/assets/images/nav/desktop-menu-options-big.png"
	alt-text = "Desktop menu options."
	width = 800
	height = 340
%}

Everything on this page is a work-in-progress.