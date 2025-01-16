---
layout: default
title: Peers
permalink: /settings/peers/
nav_order: 57
indent: true
---

# Peers

Shows other nodes the application is connected to. Provides users a detailed understanding of what is happening under the hood of the block status. The sorting buttons also define what detail is shown in each peer item, based on what is relevant for the selected filter.

{% include picture.html
	image = "/assets/images/settings/peers.png"
	retina = "/assets/images/settings/peers@2x.png"
	big = "/assets/images/settings/peers-big.png"
	alt-text = "Application screen showing network traffic graphs for incoming and outgoing data"
	width = 800
	height = 702
%}

Tapping a peer reveals all the details in a new screen. The information is split up into categories. In addition to showing the value of each field, an evaluation is shown whenever possible to help users understand and act on the data.

Below is a first draft. The details should be refined over time and with practical input from users who closely work with this data. Users should be able to easily understand whether this connection is helpful to them, the peer, and the network. Some ideas:

- Use dots with a mix of red & green to indicate the quality/performance of a value (red is bad, green is good, see the [colors]({{ '/colors/' | relative_url }}) page)
- Tool tips for Strings like the ones used in Services to explain what each one does
- For block data, indicate how it compares to the users node

{% include picture.html
	image = "/assets/images/settings/peer-details.png"
	retina = "/assets/images/settings/peer-details@2x.png"
	big = "/assets/images/settings/peer-details-big.png"
	alt-text = "Application screen showing detailed information about a single connected peer"
	width = 800
	height = 642
%}

Peers can be banned for different time periods.

{% include picture.html
	image = "/assets/images/settings/ban-peer.png"
	retina = "/assets/images/settings/ban-peer@2x.png"
	big = "/assets/images/settings/ban-peer-big.png"
	alt-text = ""
	width = 800
	height = 575
%}

The list of banned peers can be accessed via a small link at the bottom of the connected peers list (see above).

{% include picture.html
	image = "/assets/images/settings/banned-peers.png"
	retina = "/assets/images/settings/banned-peers@2x.png"
	big = "/assets/images/settings/banned-peers-big.png"
	alt-text = ""
	width = 800
	height = 724
%}
