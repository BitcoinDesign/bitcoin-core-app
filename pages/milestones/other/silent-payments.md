---
layout: default
title: Silent payments
permalink: /milestones/1-7-send/silent-payments
nav_order: 186
indent: true
---

# Silent payments

**Status: Early design exploration**

### Receiving

When creating a payment request, users can choose whether they would like to use a regular, one-time bitcoin address or reusable, silent payment address.  

{% include picture.html
	image = "/assets/images/silent-payments/sp-receive.png"
	retina = "/assets/images/silent-payments/sp-receive@2x.png"
	big = "/assets/images/silent-payments/sp-receive-big.png"
	alt-text = "Payment request form showing an option to choose between one-time and reusable addresses."
	width = 800
	height = 366
%}

If users have multiple sub-addresses they can choose which one they would like to receive the payment to. Based on their selection, the corresponding label will be auto-applied to any incoming payment made to that address. You can learn more about sub-addresses on the [address management]({{ '/milestones/other/address-management' | relative_url }}) page. There is also an option to create a new sub-address ad hoc.

### Sending

Sending to silent payment addresses works in much the same way as to regular addresses. Users can simply paste a silent payment address into the send form. The main difference is that silent payment addresses are significantly longer.

{% include picture.html
	image = "/assets/images/silent-payments/sp-form.png"
	retina = "/assets/images/silent-payments/sp-form@2x.png"
	big = "/assets/images/silent-payments/sp-form-big.png"
	alt-text = "Send form showing a silent payment address."
	width = 800
	height = 524
%}

One peculiarity is that the final destination address is different to the one the user pasted into the form. It is calculated from different inputs, such as the selected coins. This is why you see two addresses on the review screen.

{% include picture.html
	image = "/assets/images/silent-payments/sp-review.png"
	retina = "/assets/images/silent-payments/sp-review@2x.png"
	big = "/assets/images/silent-payments/sp-review-big.png"
	alt-text = "Review screen showing the silent payment address as well as the derived bitcoin address."
	width = 800
	height = 551
%}