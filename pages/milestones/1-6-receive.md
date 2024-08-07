---
layout: default
title: 1.6 Receive
permalink: /milestones/1-6-receive/
nav_order: 160
header: true
---

# Milestone 1.6: Receive bitcoin

**Status: Complete**

_[Design milestone](https://github.com/BitcoinDesign/Bitcoin-Core-App/milestone/6), [Figma](https://www.figma.com/file/ek8w3n3upbluw5UL2lGhRx/Bitcoin-Core-App-Design?type=design&node-id=7516%3A13172&mode=design&t=sZSBHpOLLJmoMf57-1)_

In this milestone we add features related to receiving.

{% include picture.html
	image = "/assets/images/milestones/1-6-receive.png"
	retina = "/assets/images/milestones/1-6-receive@2x.png"
	big = "/assets/images/milestones/1-6-receive-big.png"
	alt-text = "A visual map of which screens will be added in the 1.5 milestone"
	width = 800
	height = 384
%}

#### Creating requests

At the center is the form to create new payment requests, which generates a new address with some user-defined payment information attached. One address per transaction is a best practice to improve privacy and for easier identification. Be aware of the note about label functionality at the bottom of this page.

{% include picture.html
	image = "/assets/images/receive/form.png"
	retina = "/assets/images/receive/form@2x.png"
	big = "/assets/images/receive/form-big.png"
	alt-text = "A form to create a new payment request"
	width = 800
	height = 760
%}

##### Clarifying label functionality

The QT application uses the label field for two conflicting purposes. 

1. it is used to describe the newly created address for future reference for the user (which is the intent in [BIP21](https://github.com/bitcoin/bips/blob/master/bip-0021.mediawiki#query-keys)). 
2. the label is shared with the payment request with the expected sender.

The sender most likely wants to label the address (or transaction) differently than the recipient, to match their own organizational setup (like the name of the recipient).

Some examples might help clarify this:

- Alice uses the label "Bob", so she can later tell that she shared the address and payment request with Bob. So Bob receives the payment request with his own name.
- If Alice is aware of this and wants to ensure Bob knows who the payment request is from, she might use the label "Alice". This is helpful for Bob, but now Alice has an address that is labelled with her own name.

That is why we split the label field in this design. One is attached to the address for personal reference, the other is shared with the payment request. The user can, for example, enter their name, so the recipient knows who the payment request is from.

#### Viewing created requests

The application treats payment requests as not-yet-completed transactions, which is why the screen layout matches that of transactions. Some considerations:

- Requests are meant to be shared with the payer, so the share options are in focus on the request details screen.
- Since all fields are optional, a payment request may be as minimal as just an address.
- If the request has been completed, there is a link to the respective transaction.
- The QR code is shown by default on mobile, but not on desktop, to reflect the difference in usage.

{% include picture.html
	image = "/assets/images/receive/request.png"
	retina = "/assets/images/receive/request@2x.png"
	big = "/assets/images/receive/request-big.png"
	alt-text = "Screen showing details of a single payment request"
	width = 800
	height = 644
%}

{% include picture.html
	image = "/assets/images/receive/request-variations.png"
	retina = "/assets/images/receive/request-variations@2x.png"
	big = "/assets/images/receive/request-variations-big.png"
	alt-text = "Content and state variations of the request screen"
	width = 800
	height = 546
%}

#### Request history

All requests the user has created are visible in the [activity]({{ '/milestones/1-5-activity/' | relative_url }}) screen.

The QT application treats payment requests almost as separate objects with their own screens for managing them. In this update, we try to blend them further and treat payment requests essentially as a type of transaction - one that is not completed yet. The screen that lists your own payment requests is removed, and that content is merged into the activity screen.