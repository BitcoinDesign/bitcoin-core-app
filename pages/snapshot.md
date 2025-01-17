---
layout: default
title: Snapshot
permalink: /snapshot/
nav_order: 201
indent: true
---

# Snapshot (assumeUTXO)

**Status: In development**

_[Github issue](https://github.com/BitcoinDesign/Bitcoin-Core-App/issues/79){:target="_blank"}, [Figma](https://www.figma.com/file/ek8w3n3upbluw5UL2lGhRx/Bitcoin-Core-App-Design?type=design&node-id=8842%3A848807&mode=design&t=URVaraZVchEvzHX0-1){:target="_blank"}, [Prototype](https://www.figma.com/proto/0w5xLsEd9CHwqEfE1QHUIm/Assume-UTXO-Prototype?page-id=0%3A1&type=design&node-id=1-2083&viewport=755%2C475%2C0.3&t=xoUBLFcWlpCH1VEI-1&scaling=min-zoom&starting-point-node-id=1%3A2083&mode=design){:target="_blank"}_

The initial block download can take quite some time. [assumeUTXO](https://github.com/bitcoin/bitcoin/blob/master/doc/design/assumeutxo.md){:target="_blank"} is a method for allowing users to interact with their wallet more quickly by importing a snapshot of all UTXOs. This allows for calculation of the balance and listing transactions in a wallet that have been received, and not yet spent.

The application only temporarily relies on this snapshot. It still downloads and validates the whole history of blocks in the background. Once it has caught up with the snapshot, it discards it. While there is some data validation, users still trust the data in the snapshot for some time.

This feature can speed things up for the user, and also introduces a new interaction. They need to find and download a trustworthy snapshot file and import it. It is not quite clear yet where users will find these files. Alternatively, users can create their own snapshots from a fully synced node, and import it into another node or share it with others.

**Both design and implementation of this feature likely need iteration over time, as best practices for usage become more clear.**

The image below shows the two user flows for creating and importing snapshots.

{% include picture.html
	image = "/assets/images/snapshot/user-flows.png"
	retina = "/assets/images/snapshot/user-flows@2x.png"
	big = "/assets/images/snapshot/user-flows-big.png"
	alt-text = "16 screen showing the user flows for snapshot import and generation"
	width = 800
	height = 160
%}

The feature is named _snapshot_ to be more broadly understandable. Some other terms were discussed, like _quick-start file_ and _bootstrap file_. Neither term can fully convey all important aspects of the feature. That can be achieved with short, contextual descriptions.

{% include picture.html
	image = "/assets/images/snapshot/framing.png"
	retina = "/assets/images/snapshot/framing@2x.png"
	big = "/assets/images/snapshot/framing-big.png"
	alt-text = "Onboarding screens introducing users to the snapshot feature"
	width = 800
	height = 366
%}

When a snapshot file was imported, but is still being validated, that status is shown in next to the block clock.

{% include picture.html
	image = "/assets/images/snapshot/verification-status.png"
	retina = "/assets/images/snapshot/verification-status@2x.png"
	big = "/assets/images/snapshot/verification-status-big.png"
	alt-text = "Two screen showing the block clock with verification status, and a third screen showing a verification success message"
	width = 800
	height = 247
%}

Transactions that have not been verified by the local node show that status (instead of the date). Users can still easily see the date by clicking the transaction.

{% include picture.html
	image = "/assets/images/snapshot/activity.png"
	retina = "/assets/images/snapshot/activity@2x.png"
	big = "/assets/images/snapshot/activity-big.png"
	alt-text = "Wallet activity screen showing one transaction with a verification status"
	width = 800
	height = 445
%}

Snapshot files are created at certain points in time. The application source code includes a hash for a specific one, against which downloaded files can be compared. Users should be presented the basic information they need to decide whether to trust the snapshot, and what to convey when sharing their own snapshots with others. The designs are starting points and likely need iteration.

{% include picture.html
	image = "/assets/images/snapshot/completion.png"
	retina = "/assets/images/snapshot/completion@2x.png"
	big = "/assets/images/snapshot/completion-big.png"
	alt-text = "Two screens showing completed snapshot import and generation"
	width = 800
	height = 366
%}

Further designs are needed for the [send]({{ '/milestones/1-7-send/' | relative_url }}) flow. Users may need to be informed when including UTXOs in their transactions that have not been verified yet.