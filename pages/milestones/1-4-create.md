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
	height = 417
%}

Creating single-sig wallet starts with a screen that introduces user to the concept of wallet stored on user's hard drive with option to protect it with a password.

{% include picture.html
	image = "/assets/images/create-wallet/wallet-info.png"
	retina = "/assets/images/create-wallet/wallet-info@2x.png"
	big = "/assets/images/create-wallet/wallet-info-big.png"
	alt-text = "An informational screen describing introducing single-sig wallet"
	width = 800
	height = 417
%}

Next step is to come up with wallet name, that will also be used as the name of the .dat file stored on user's hard drive.

{% include picture.html
	image = "/assets/images/create-wallet/name.png"
	retina = "/assets/images/create-wallet/name@2x.png"
	big = "/assets/images/create-wallet/name-big.png"
	alt-text = "Screen prompting user to input wallet name"
	width = 800
	height = 418
%}

Now it's time to decide, If the wallet should be encrypted by a password. This step is critical, because in case of loosing the password, restoring the wallet is virtually impossible. That's why this step is forcing users to slow down a bit and confirm they understand the significance of this by using a toggle, which enables them to continue the flow. Users can also skip this step to create a wallet without encryption.

{% include picture.html
	image = "/assets/images/create-wallet/password.png"
	retina = "/assets/images/create-wallet/password@2x.png"
	big = "/assets/images/create-wallet/password-big.png"
	alt-text = "Screen that allows to encrypt the wallet with a password"
	width = 800
	height = 417
%}

Moving forward, private keys are generated in the software and the wallet has been created. Immediately after that, the user is encouraged to create a backup copy of the wallet .dat file. 

{% include picture.html
	image = "/assets/images/create-wallet/wallet-created.png"
	retina = "/assets/images/create-wallet/wallet-created@2x.png"
	big = "/assets/images/create-wallet/wallet-created-big.png"
	alt-text = "Screens showing wallet creation confirmation and encouragement to back up wallet file"
	width = 800
	height = 417
%}

After these steps, users are navigated to the [block status]({{ '/block-status/' | relative_url }}). If IBD already has occurred, users can immediately start using their new empty wallet.