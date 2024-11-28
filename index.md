---
layout: default
title: Bitcoin Core App design docs
permalink: /
classes: -home
---

# Introduction

These are work-in-progress design documents for the QML-based Bitcoin Core application that is currently in early development. The goal of this site is to document and make easily accessible various considerations and decisions that went into the design of the user interface and user experience.

- [Project planning board](https://github.com/orgs/BitcoinDesign/projects/7){:target="_blank"}
- [Bitcoin Core website](https://bitcoincore.org){:target="_blank"}
- [Design repo](https://github.com/BitcoinDesign/Bitcoin-Core-App){:target="_blank"}
- [Current design tasks](https://github.com/orgs/BitcoinDesign/projects/5/views/1){:target="_blank"}
- [Figma community file](https://www.figma.com/community/file/1185218794459295422) ([working file](https://www.figma.com/file/ek8w3n3upbluw5UL2lGhRx/Bitcoin-Core-App-Design?node-id=616%3A0){:target="_blank"}, [previous](https://www.figma.com/file/GaCoOSNHB2yMB9ThiDtred/Bitcoin-Core-App-(Old)?node-id=616%3A0){:target="_blank"})
- [Code repository](https://github.com/bitcoin-core/gui-qml){:target="_blank"}
- [Current code tasks](https://github.com/users/johnny9/projects/2/views/1){:target="_blank"}
- [Web prototype](https://lively-kashata-cfde7e.netlify.app){:target="_blank"}

## Provide early feedback

You are invited to be an early tester of the application and provide your feedback to help us in creating a great experience. Keep in mind that the application is experimental, you are installing and running it at your own risk.

The current application only includes a simple [onboarding process]({{ '/first-use/' | relative_url }}) and the [block clock]({{ '/block-clock/' | relative_url }}). It does **not** include wallet features (those will be added in [future milestones]({{ '/milestones/1-x/' | relative_url }})). It is available for Linux, Windows, MacOS, and Android operating systems.

{% include picture.html
	image = "/assets/images/feedback-cover.png"
	retina = "/assets/images/feedback-cover@2x.png"
	big = "/assets/images/feedback-cover-big.png"
	alt-text = "Desktop and mobile screens showing the block clock"
	width = 800
	height = 551
%}

{% include picture.html
	image = "/assets/images/onboarding-flow.png"
	retina = "/assets/images/onboarding-flow@2x.png"
	big = "/assets/images/onboarding-flow-big.png"
	alt-text = "All screens in the initial onboarding flow"
	width = 800
	height = 281
%}

#### Feedback we are looking for right now

- Did you install it on a phone, tablet or desktop?
- What is the device brand and model?
- Which operating system did you use? 
- Were the download instructions easy to understand?
- How was the initial installation process?
- How long did it take to sync?
- How did the installation affect the battery of your device?
- What do you think of the block clock?
- How was the overall experience for you?

#### A few notes

- Older Android devices may not allow you to install the application
- If the application crashes on start, see if you have a bitcoin.conf file and all settings it contains are correct
- Pull requests are likely set to signet, the switch to mainnet will come soon
- To ensure you see the onboarding flow, start the application with ```--resetguisettings```

#### Test the latest code

This is the latest code that has been reviewed and merged code, but not a milestone, tag, or release.
- Log in to GitHub
- Navigate to the [Actions page](https://github.com/bitcoin-core/gui-qml/actions?query=is%3Asuccess){:target="_blank"}
- Find the latest successful "Merge" entry and click it
- Scroll down to artifacts and download the one for your operating system

##### A note for Apple Silicon macOS devices

There are two things you might need to do before you can run the application.

If MacOS sees the downloaded file as a document and not as an application, run this code in the Terminal (in the folder you download the file to):

	chmod +x ./bitcoin-qt

It must also be signed before it can be run, via this command: 

	codesign -s - ./bitcoin-qt

Then right-click the file and select “Open”. On newer macOS versions, you may also need to allow execution of the application in your Privacy & Security settings ([more here](https://support.apple.com/en-us/102445#openanyway){:target="_blank"}).

#### Test work-in-progress

Pull requests include work-in-progress code and features that have not been finalized and reviewed yet. You may help test these updates by finding a pull request you are interested in (find the full list [here](https://github.com/bitcoin-core/gui-qml/pulls){:target="_blank"}), finding the latest successful build on the [Actions page](https://github.com/bitcoin-core/gui-qml/actions){:target="_blank"} (make sure you are logged in), and using the respective download link for your operating system. If you provide comments on these, focus on the specific part of the application that the pull request is about.

#### How to provide feedback

We sincerely appreciate your feedback. We will review it and create tasks and issues as appropriate. Before pointing out missing features, familiarize yourself with what is included in the application and what is not (see above). Please also review issues filed by others first to avoid duplication.

There are 4 ways you can submit feedback:

- For general feedback, please complete [this Google Form](https://docs.google.com/forms/d/e/1FAIpQLSfgBdQ0aCsNyF-ee6e14FA3Dg6LedzknDh-32Jr8xN-340nRA/viewform){:target="_blank"}
- You can also share your general feedback and discuss with others in [this GitHub discussion](https://github.com/BitcoinDesign/Bitcoin-Core-App/discussions/45){:target="_blank"}
- Report a specific user experience problem as an issue in [the design GitHub repository](https://github.com/BitcoinDesign/Bitcoin-Core-App/issues){:target="_blank"}
- Report a specific technical problem as an issue in [the code GitHub repository](https://github.com/bitcoin-core/gui-qml/issues){:target="_blank"}

Thank you for your help.