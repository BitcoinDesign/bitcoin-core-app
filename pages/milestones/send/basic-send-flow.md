---
layout: default
title: Basic send flow
permalink: /milestones/1-7-send/basic-send-flow
nav_order: 171
indent: true
---

# Basic send flow

**Status: Early design exploration**

## Overview

From a user's perspective, the send flow consists of three basic steps:

1. Enter the transaction information
1. Review & sign the transaction
1. Broadcast the transaction to the bitcoin network

## Send form

On the send form users specify the details of the transaction. They can do this in a few different ways:

- Fill out the form manually
- Click on an invoice URI link
- Paste an invoice from the clipboard
- Scan a QR code
- Import the invoice from a file. Either via drag and drop or by selecting a file.

{% include picture.html
	image = "/assets/images/send/send-form-empty.png"
	retina = "/assets/images/send/send-form-empty@2x.png"
	big = "/assets/images/send/send-form-empty-big.png"
	alt-text = "Send screen with everything filled out"
	width = 800
	height = 551
%}

The goal is to keep the primary screen simple and focused for regular transactions, and hide less frequently used options in the menu, accessed easily via the ellipsis button.


{% include picture.html
	image = "/assets/images/send/send-form-menu.png"
	retina = "/assets/images/send/send-form-menu@2x.png"
	big = "/assets/images/send/send-form-menu-big.png"
	alt-text = "Overlay menu with send screen options"
	width = 800
	height = 551
%}

After all the information has been provided, the screen looks like this.

{% include picture.html
	image = "/assets/images/send/send-form-filled.png"
	retina = "/assets/images/send/send-form-filled@2x.png"
	big = "/assets/images/send/send-form-filled-big.png"
	alt-text = "Send screen with everything filled out"
	width = 800
	height = 551
%}

#### Clipboard detection

To make it easier for users to fill out the form, the application automatically detects if payment information is saved on user's clipboard. Specifically, the following types of information are detected: 

1. A full invoice (URI format)
1. A bitcoin address

{% include picture.html
	image = "/assets/images/send/clipboard-detection.png"
	retina = "/assets/images/send/clipboard-detection@2x.png"
	big = "/assets/images/send/clipboard-detection-big.png"
	alt-text = "Send screen with an info message that the user has a bitcoin invoice on their clipboard."
	width = 800
	height = 551
%}

#### Additional information

Payment requests can contain additional information that the recipient wants the sender to know, such as a personal message or their name. Check out the [receive]({{ '/milestones/1-6-receive/' | relative_url }}) page for how this works.

If such information is present in the payment request, it is displayed at the top of the form. Note that the additional information will not be included in the transaction data.

{% include picture.html
	image = "/assets/images/send/additional-information.png"
	retina = "/assets/images/send/additional-information@2x.png"
	big = "/assets/images/send/additional-information-big.png"
	alt-text = "Filled out send screen with a message from the recipient."
	width = 800
	height = 551
%}

Note that when importing a payment request, the address cannot be changed manually.

#### Validation errors

{% include picture.html
	image = "/assets/images/send/validation-errors.png"
	retina = "/assets/images/send/validation-errors@2x.png"
	big = "/assets/images/send/validation-errors-big.png"
	alt-text = "Filled out send screen with a message from the recipient."
	width = 800
	height = 551
%}


## 2. Review transaction (TO DO)

Before the transaction is broadcast, the user has another chance to review it.

{% include picture.html
	image = "/assets/images/send/review-screen.png"
	retina = "/assets/images/send/review-screen@2x.png"
	big = "/assets/images/send/review-screen-big.png"
	alt-text = "Screen showing the transaction details."
	width = 800
	height = 551
%}

## 3. Broadcast transaction (TO DO)

{% include picture.html
	image = "/assets/images/send/broadcast-screen.png"
	retina = "/assets/images/send/broadcast-screen@2x.png"
	big = "/assets/images/send/broadcast-screen-big.png"
	alt-text = "Screen showing the option to broadcast or delete the approved transaction."
	width = 800
	height = 551
%}


## 4. Transaction confirmation

After the transaction has been broadcast to the network, a success message is displayed. 

{% include picture.html
	image = "/assets/images/send/confirmation-message.png"
	retina = "/assets/images/send/confirmation-message@2x.png"
	big = "/assets/images/send/confirmation-message-big.png"
	alt-text = "Confirmation screen."
	width = 800
	height = 551
%}

#### Error handling

There are scenarios in which the broadcasting of a transaction fails.

{% include picture.html
	image = "/assets/images/send/error-message.png"
	retina = "/assets/images/send/error-message@2x.png"
	big = "/assets/images/send/error-message-big.png"
	alt-text = "Confirmation screen."
	width = 800
	height = 551
%}

## 5. Replace-by-fee

{% include picture.html
	image = "/assets/images/send/rbf.png"
	retina = "/assets/images/send/rbf@2x.png"
	big = "/assets/images/send/rbf-big.png"
	alt-text = "Transaction detail screen."
	width = 800
	height = 366
%}
