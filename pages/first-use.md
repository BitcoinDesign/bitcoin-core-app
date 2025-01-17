---
layout: default
title: First use
permalink: /first-use/
nav_order: 51
---

# First use

The first time a user tries an application is an essential experience that can make them appreciate the features and happily return for repeat use, or it can turn them away forever. The reality is usually somewhere in between and depends on the user and their context. But, with a well-considered first-use experience, we can help them get a good start.

The cover screen also offers access to the [about]({{ '/settings/about' | relative_url }}) screen and [developer options]({{ '/settings/developer' | relative_url }}).

{% include picture.html
	image = "/assets/images/first-use/cover.png"
	retina = "/assets/images/first-use/cover@2x.png"
	big = "/assets/images/first-use/cover-big.png"
	alt-text = "Cover, about and developer option screens"
	width = 800
	height = 551
%}

Ideally, users already clearly understand the application benefits and unique features. The website from which it is downloaded should already have communicated these. However, it can still be beneficial to repeat them. This clears up false expectations and prepares users for what they are about to do next. 

{% include picture.html
	image = "/assets/images/first-use/info.png"
	retina = "/assets/images/first-use/info@2x.png"
	big = "/assets/images/first-use/info-big.png"
	alt-text = "Info screens to explain the app purpose and essential features"
	width = 800
	height = 418
%}

Since the application requires a lot of storage, we may want to offer users some simple options, particularly on smart phones. Ideally, the application detects available drives and space, and makes an appropriate recommendation that the user only needs to confirm.

First, the user chooses between pruning and storing all downloaded blocks. They also have the option to customize the maximum amount of storage to use. Also see [storage settings]({{ '/settings/storage/' | relative_url }}).

{% include picture.html
	image = "/assets/images/first-use/storage-amount.png"
	retina = "/assets/images/first-use/storage-amount@2x.png"
	big = "/assets/images/first-use/storage-amount-big.png"
	alt-text = "Screens for choosing between pruned or full block data storage"
	width = 800
	height = 418
%}

Then the user decides where to keep downloaded data. They can easily choose desired storage location if the default one is not preferred or has not enough space available. 

{% include picture.html
	image = "/assets/images/first-use/storage-location.png"
	retina = "/assets/images/first-use/storage-location@2x.png"
	big = "/assets/images/first-use/storage-location-big.png"
	alt-text = "Screen for choosing default or custom storage location"
	width = 800
	height = 418
%}

After that, user can continue to [create wallet]({{ '/milestones/1-4-create' | relative_url }}), where at the end of the process they begin initial block download. It's a time-consuming activity that users are typically not familiar with from other applications. The following screen ensures that they understand what will happen next, when they will navigate the application independently.

Bandwidth may also be limited or expensive for the user, particularly on mobile. The initial block download is particularly problematic, so we may want to ensure that users are guided towards the best option. Also see [connection settings]({{ '/settings/connection/' | relative_url }}).

{% include picture.html
	image = "/assets/images/first-use/ibd-and-connection.png"
	retina = "/assets/images/first-use/ibd-and-connection@2x.png"
	big = "/assets/images/first-use/ibd-and-connection-big.png"
	alt-text = "Screen that prepares the user for the initial block download, as well as connection settings"
	width = 800
	height = 418
%}

On Android, a persistent system notification is required to prevent the operating system from pausing the node. This screen explains that to users and prepares them for making an informed decision about accepting or rejecting notification permissions. "Enable" then presents the user with the OS permission request. This can be changed later in OS settings (not in application settings).

{% include picture.html
	image = "/assets/images/first-use/notifications.png"
	retina = "/assets/images/first-use/notifications@2x.png"
	big = "/assets/images/first-use/notifications-big.png"
	alt-text = "Screen explaining the rationale and use of notifications"
	width = 800
	height = 418
%}

After these steps, users are navigated to the [block clock]({{ '/block-clock/' | relative_url }}), which in case of first use then connects to the network and starts the initial block download.