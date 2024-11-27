---
layout: default
title: Basic send flow
permalink: /milestones/1-7-send/basic-send-flow
nav_order: 171
indent: true
---

# Basic send flow

**Status: Early design exploration**

From a user's perspective, the send flow consists of three basic steps:

1. Enter the transaction information
1. Review & sign the transaction
1. Broadcast the transaction to the bitcoin network

### Send form

#### Recipient


This is an initial send screen where the user has a payment request on their clipboard, and the wallet has multiple active spending paths to choose from.

{% include picture.html
	image = "/assets/images/send/send.png"
	retina = "/assets/images/send/send@2x.png"
	big = "/assets/images/send/send-big.png"
	alt-text = "Send screen with a notice at the top about an invoice being on the clipboard"
	width = 800
	height = 711
%}

The goal is to keep the primary screen simple and focused for regular transactions, and hide less frequently used options in the menu, accessed easily via the ellipsis button.

{% include picture.html
	image = "/assets/images/send/send-menu.png"
	retina = "/assets/images/send/send-menu@2x.png"
	big = "/assets/images/send/send-menu-big.png"
	alt-text = "Overlay menu with send screen options"
	width = 800
	height = 318
%}

Before the transaction is broadcast, the user has another chance to review it.

{% include picture.html
	image = "/assets/images/send/approve.png"
	retina = "/assets/images/send/approve@2x.png"
	big = "/assets/images/send/approve-big.png"
	alt-text = "Transaction summary modal for the user to approve or cancel"
	width = 800
	height = 526
%}

Wallet can be set up to be view only. We need to decide whether to offer some type of upgrade path to enable signing.

{% include picture.html
	image = "/assets/images/send/view-only.png"
	retina = "/assets/images/send/view-only@2x.png"
	big = "/assets/images/send/view-only-big.png"
	alt-text = "A send screen with a notice about the view-only state and options to upgrade to a signing wallet"
	width = 800
	height = 711
%}


