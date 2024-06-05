---
layout: default
title: 1.4 Create
permalink: /milestones/1-4-create/
nav_order: 140
header: true
---

# Milestone 1.4: Wallet creation

**Status: Early design exploration**

_[Design milestone](https://github.com/BitcoinDesign/Bitcoin-Core-App/milestone/4), [Figma](https://www.figma.com/file/ek8w3n3upbluw5UL2lGhRx/Bitcoin-Core-App-Design?type=design&node-id=7516%3A13170&mode=design&t=sZSBHpOLLJmoMf57-1)_

In this milestone, we add the wallet creation flow. This will only include single-key wallets, but the design and development process will consider and plan for more options in future milestones.

{% include picture.html
	image = "/assets/images/milestones/1-4-create.png"
	retina = "/assets/images/milestones/1-4-create@2x.png"
	big = "/assets/images/milestones/1-4-create-big.png"
	alt-text = "A visual map of which screens will be added in the 1.4 milestone"
	width = 800
	height = 384
%}

Below is an iteration of the wallet creation flow, including single-key, multi-key, view-only, and custom paths. Many details need to be refined. Click to see it larger.

{% include picture.html
	image = "/assets/images/create-wallet/flow.png"
	retina = "/assets/images/create-wallet/flow@2x.png"
	big = "/assets/images/create-wallet/flow-big.png"
	alt-text = "User flow mock-ups for creating a new wallet."
	width = 800
	height = 415
%}

## Create single-sig wallet
During the onboarding flow, the user is informed that only single-sig wallets are currently available, but that other options will be added in future implementations.

{% include picture.html
	image = "/assets/images/create-wallet/onboarding-wallet-features.png"
	retina = "/assets/images/create-wallet/onboarding-wallet-features@2x.png"
	big = "/assets/images/create-wallet/onboarding-wallet-features-big.png"
	alt-text = "An informational screen describing supported wallet features"
	width = 800
	height = 711
%}

Creating single-sig wallet starts with a screen that introduces user to the concept of wallet stored on user's hard drive with option to protect it with a password.

{% include picture.html
	image = "/assets/images/create-wallet/wallet-info.png"
	retina = "/assets/images/create-wallet/wallet-info@2x.png"
	big = "/assets/images/create-wallet/wallet-info.png"
	alt-text = "An informational screen describing introducing single-sig wallet"
	width = 800
	height = 711
%}

Next step is to come up with wallet name, that will also be used as the name of the .dat file stored on user's hard drive.

{% include picture.html
	image = "/assets/images/create-wallet/name.png"
	retina = "/assets/images/create-wallet/name@2x.png"
	big = "/assets/images/create-wallet/name.png"
	alt-text = "Screen prompting user to input wallet name"
	width = 800
	height = 711
%}

Now it's time to decide, If the wallet should be encrypted by a password. This step is critical, because in case of loosing the password, restoring the wallet is virtually impossible. That's why this step is forcing users to slow down a bit and confirm they understand the significance of this by using a toggle, which enables them to continue the flow. Users can also skip this step to create a wallet without encryption.

{% include picture.html
	image = "/assets/images/create-wallet/password.png"
	retina = "/assets/images/create-wallet/password.png"
	big = "/assets/images/create-wallet/password.png"
	alt-text = "Screen that allows to encrypt the wallet with a password"
	width = 800
	height = 711
%}

Moving forward, private keys are generated in the software and the wallet has been created. Immediately after that, the user is encouraged to create a backup copy of the wallet .dat file. 

{% include picture.html
	image = "/assets/images/create-wallet/wallet-created.png"
	retina = "/assets/images/create-wallet/wallet-created.png"
	big = "/assets/images/create-wallet/wallet-created.png"
	alt-text = "Screens showing wallet creation confirmation and encouragement to back up wallet file"
	width = 800
	height = 711
%}

Now, If it's the first use of Bitcoin Core, onboarding user can initiate download of the blockchain. It's a time-consuming activity that users are typically not familiar with from other applications. The following screen ensures that they understand what will happen next, when they will navigate the application independently.

Bandwidth may also be limited or expensive for the user, particularly on mobile. The initial block download is particularly problematic, so we may want to ensure that users are guided towards the best option. Also see [connection settings]({{ '/settings/connection/' | relative_url }}).

{% include picture.html
	image = "/assets/images/create-wallet/ibd-and-connection.png"
	retina = "/assets/images/create-wallet/ibd-and-connection@2x.png"
	big = "/assets/images/create-wallet/ibd-and-connection-big.png"
	alt-text = "Screen that prepares the user for the initial block download, as well as connection settings"
	width = 800
	height = 417
%}

On Android, a persistent system notification is required to prevent the operating system from pausing the node. This screen explains that to users and prepares them for making an informed decision about accepting or rejecting notification permissions. "Enable" then presents the user with the OS permission request. This can be changed later in OS settings (not in application settings).

{% include picture.html
	image = "/assets/images/create-wallet/notifications.png"
	retina = "/assets/images/create-wallet/notifications@2x.png"
	big = "/assets/images/create-wallet/notifications-big.png"
	alt-text = "Screen explaining the rationale and use of notifications"
	width = 800
	height = 551
%}

After these steps, users are navigated to the [block clock]({{ '/block-clock/' | relative_url }}), which in case of first use then connects to the network and starts the initial block download. If IBD already has occurred, user arrives at their new empty wallet interface that is ready to use.