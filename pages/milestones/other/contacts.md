---
layout: default
title: Contacts
permalink: /milestones/1-7-send/contacts
nav_order: 185
indent: true
---

# Contacts

**Status: Early design exploration**

These are early stage mockups for a global contact list feature that extends the address book functionality currently implemented in Bitcoin Core QT. More details and specs are described in [this issue](https://github.com/BitcoinDesign/Bitcoin-Core-App/issues/134).

### Contact list

The Bitcoin Core App allows users to create contacts for people or organizations that they transact with regularly, such as their family, friends, employer or customers. 

{% include picture.html
	image = "/assets/images/send/contacts.png"
	retina = "/assets/images/send/contacts@2x.png"
	big = "/assets/images/send/contacts-big.png"
	alt-text = "A screen with a list of contacts and a detail screen showing contact information."
	width = 800
	height = 366
%}

Apart from the convenience benefits for repeated payments, the contacts feature also helps users organize and track payments for accounting and bookkeeping, since the app allows them to associate any incoming or outgoing transactions or payment request with a contact.

### Contact details

A contact can have the following pieces of information associated:

Contact details:
- First name
- Last name
- Note

Payment information:
- Silent payment addresses
- Regular addresses
- Extended Public Keys (XPUBs)

Payment history:
- Incoming transactions
- Outgoing transactions
