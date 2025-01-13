---
layout: default
title: Multiple recipients
permalink: /milestones/1-7-send/multiple-recipients
nav_order: 173
indent: true
---

# Multiple recipients

**Status: Early design exploration**

Batch transactions can be enabled via the main menu in the send form.

### Send form

Users can add more recipients by clicking on the plus icon to add a transaction to the batch. For the individual transactions, the same options are available as for a regular transaction. The horizontal arrows are used to navigate between transactions and edit them.

{% include picture.html
	image = "/assets/images/send/batch-transactions.png"
	retina = "/assets/images/send/batch-transactions@2x.png"
	big = "/assets/images/send/batch-transactions-big.png"
	alt-text = "Send screen with a pagination for batch transactions"
	width = 800
	height = 551
%}

Just like in the basic send flow, users can use import payment request to fill out the payment details for individual transactions. 

{% include picture.html
	image = "/assets/images/send/batch-payment-request.png"
	retina = "/assets/images/send/batch-payment-request@2x.png"
	big = "/assets/images/send/batch-transactions-big.png"
	alt-text = "Send screen showing a message that an invoice has been detected in the clipboard."
	width = 800
	height = 436
%}

### Review screen

The review screen lists all transactions in a simple list and shows the total amount to be sent.

{% include picture.html
	image = "/assets/images/send/batch-review.png"
	retina = "/assets/images/send/batch-review@2x.png"
	big = "/assets/images/send/batch-review-big.png"
	alt-text = "Review screen with a summary of all transactions"
	width = 800
	height = 551
%}

If the user has added a note to an individual transaction, it is displayed on the transaction list on the review screen. Users can hover over the info icon next to the text to check the destination address for that transaction. If no note is present, the shortened destination address is displayed in the transaction list. 

{% include picture.html
	image = "/assets/images/send/batch-review-tooltip.png"
	retina = "/assets/images/send/batch-review-tooltip@2x.png"
	big = "/assets/images/send/batch-review-big.png"
	alt-text = "Review screen with a tooltip that shows the destination address for one transaction in the list"
	width = 800
	height = 739
%}