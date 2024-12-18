---
layout: default
title: Test transactions
permalink: /milestones/1-7-send/test-transactions
nav_order: 178
indent: true
---

# Automated test transactions

**Status: Early design exploration**

Sending large amounts of bitcoin can be associated with significant anxiety for users. Because they fear making a mistake, like sending bitcoin to the wrong address, many people make a small test transaction before sending the full amount. This approach lowers the likelihood of an error and increases user confidence. There is still room for error, however:

- Because two transactions are created, users have to pay twice as much in fees.
- Even though the receiving address can be verified, users can still make mistakes in the main transaction, like pasting a wrong or incomplete address.  


### Automated test transactions

The Bitcoin Core App uses Replace-by-Fee (RBF) to make this process more robust by offering a more dedicated process for test transactions. If a high-value transaction is detected, users are offered the option to make a test transaction. 

{% include picture.html
	image = "/assets/images/send/test-transaction-form.png"
	retina = "/assets/images/send/test-transaction-form@2x.png"
	big = "/assets/images/send/test-transaction-form.png"
	alt-text = "Send form with a message and option to send a test transaction"
	width = 800
	height = 708
%}

The test transaction has an extremly low fee, which is not configurable by the user. The fee is high enough to get the transaction into the mempool, but so low that miners will not pick it up for confirmation.

{% include picture.html
	image = "/assets/images/send/test-transaction-review.png"
	retina = "/assets/images/send/test-transaction-review@2x.png"
	big = "/assets/images/send/test-transaction-review.png"
	alt-text = "Review screen with a message and option to create the test transaction. Popup screen with instructions about next steps."
	width = 800
	height = 366
%}

Since the transaction is in the mempool, the recipients wallet application is able to detect it. Because of the low transaction fee, sender and recipient have enough time to confirm the correctness of the transaction through an out-of-band communication channel.

Once the recipient confirms the transaction, the sender finalizes the transaction. In the background, the application uses RBF to replace the test transaction. 

{% include picture.html
	image = "/assets/images/send/test-transaction-finalize.png"
	retina = "/assets/images/send/test-transaction-finalize@2x.png"
	big = "/assets/images/send/test-transaction-finalize.png"
	alt-text = "Transaction detail screen with options to cancel or finalize the transaction."
	width = 800
	height = 366
%}


# To be defined

- Let users define the threshold for high-value transactions (absolute and/or relative amount)
- If RBF is not enabled, offer a smooth flow for enabling it.