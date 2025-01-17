---
layout: default
title: Speed up & cancel
permalink: /send/replace-by-fee/
nav_order: 172
indent: true
---

# Speed up & cancel transactions

**Status: Early design exploration**

If Replace-By-Fee (RBF) is enabled, users can edit a transaction as long as it has not been confirmed by the network yet. There are two main use cases for this feature: 

- accelerate the transactions
- cancel the transaction

{% include picture.html
	image = "/assets/images/send/rbf.png"
	retina = "/assets/images/send/rbf@2x.png"
	big = "/assets/images/send/rbf-big.png"
	alt-text = "Transaction detail screen with a countdown and editing options."
	width = 800
	height = 712
%}

In all cases, the initial transaction gets replaced with a new transaction that has a higher fee then the initial one. The new transaction will be confirmed first, which in turn invalidates the original transaction.

#### Speed up transaction

Based on the fee selected in the initial transaction, users have a differenet timeframe available to edit a transaction. The application displays a countdown with an estimated confirmation time to let users know how much time they have.

{% include picture.html
	image = "/assets/images/send/rbf-accelerate.png"
	retina = "/assets/images/send/rbf-accelerate@2x.png"
	big = "/assets/images/send/rbf-accelerate-big.png"
	alt-text = "Overlay screen for cancelling the transaction."
	width = 800
	height = 712
%}

When accelerating transactions, users only need select the new fee option or set a custom fee rate. By default, the application chooses the highest fee from the fee option.

#### Cancel transaction

If a user chooses to cancel a transaction, the application replaces the initial transaction with new transaction that spends the funds back into their own wallet. 

{% include picture.html
	image = "/assets/images/send/rbf-cancel.png"
	retina = "/assets/images/send/rbf-cancel@2x.png"
	big = "/assets/images/send/rbf-cancel-big.png"
	alt-text = "Overlay screen for cancelling the transaction."
	width = 800
	height = 712
%}