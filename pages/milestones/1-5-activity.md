---
layout: default
title: 1.5 Activity
permalink: /milestones/1-5-activity/
nav_order: 150
header: true
---

# Milestone 1.5: Activity

**Status: Complete**

_[Design milestone](https://github.com/BitcoinDesign/Bitcoin-Core-App/milestone/5), [Figma](https://www.figma.com/file/ek8w3n3upbluw5UL2lGhRx/Bitcoin-Core-App-Design?type=design&node-id=7529%3A16730&mode=design&t=sZSBHpOLLJmoMf57-1)_

In previous milestones, we added wallet creation and import. Now we add display of transactions and balances.

{% include picture.html
	image = "/assets/images/milestones/1-5-activity.png"
	retina = "/assets/images/milestones/1-5-activity@2x.png"
	big = "/assets/images/milestones/1-5-activity-big.png"
	alt-text = ""
	width = 800
	height = 384
%}

Below are examples of various activity screen states. Note that activity includes both transactions and payment requests.

- During initial block download when no transaction data is available
- Blocks are downloaded and wallet has no transactions yet
- 3 transactions and blocks are being downloaded
- 3 transactions
- Many transactions requiring pagination, and expanded search & filter options

{% include picture.html
	image = "/assets/images/activity/screens.png"
	retina = "/assets/images/activity/screens@2x.png"
	big = "/assets/images/activity/screens-big.png"
	alt-text = "Five mock-ups of the activity screen showing various content states"
	width = 800
	height = 1009
%}

To find specific transactions, the user has search and filter options available. They are hidden by default.

{% include picture.html
	image = "/assets/images/activity/search.png"
	retina = "/assets/images/activity/search@2x.png"
	big = "/assets/images/activity/search-big.png"
	alt-text = "Five mock-ups of the activity screen showing various content states"
	width = 800
	height = 869
%}

On mobile, the layout slightly changes. Some horizontally stacked elements switch to a vertical layout. The biggest change is that the balance and primary buttons get moved into the screen, since there is no static tab bar.

{% include picture.html
	image = "/assets/images/activity/mobile-screens.png"
	retina = "/assets/images/activity/mobile-screens@2x.png"
	big = "/assets/images/activity/mobile-screens-big.png"
	alt-text = "Two mobile screens showing a short and a long transaction list"
	width = 800
	height = 814
%}

Transaction types and states are visually respresented in shapes and colors.

{% include picture.html
	image = "/assets/images/activity/color-coding.png"
	retina = "/assets/images/activity/color-coding@2x.png"
	mobile = "/assets/images/activity/color-coding-mobile.png"
	mobileRetina = "/assets/images/activity/color-coding-mobile@2x.png"
	alt-text = "Color and shape coding legend for transactions"
	width = 800
	height = 268
%}

Various transaction states on mobile.

{% include picture.html
	image = "/assets/images/activity/transaction-status-examples-mobile.png"
	retina = "/assets/images/activity/transaction-status-examples-mobile@2x.png"
	big = "/assets/images/activity/transaction-status-examples-mobile-big.png"
	alt-text = "Table showing mobile layouts of transactions states with matching labels"
	width = 800
	height = 1432
%}

Various transaction states on desktop.

{% include picture.html
	image = "/assets/images/activity/transaction-status-examples-desktop.png"
	retina = "/assets/images/activity/transaction-status-examples-desktop@2x.png"
	big = "/assets/images/activity/transaction-status-examples-desktop-big.png"
	alt-text = "Table showing desktop layouts of transactions states with matching labels"
	width = 800
	height = 795
%}

#### Transaction details

While a transaction always has the core information from the block chain, the amount of user-added context, which is often the most useful, can differ. So it should be easy for users to annotate the transaction.

If a matching payment request could be identified, that information is also shown, and a link to view the payment request is added.

{% include picture.html
	image = "/assets/images/activity/transaction-details.png"
	retina = "/assets/images/activity/transaction-details@2x.png"
	big = "/assets/images/activity/transaction-details-big.png"
	alt-text = "A transaction details screen"
	width = 800
	height = 580
%}

Also note the point in the [receive]({{ '/milestones/1-6-receive/' | relative_url }}) page, about how transactions and payment requests share the same basic layout.

#### To-dos

- Fee bump interaction flow
- Cancel transaction flow
- Indicator for address re-use
- Clarify how payment request info is shown on the transaction page
- Mock-up various transaction states, to show color and shape coding