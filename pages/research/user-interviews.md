---
layout: default
title: User Interviews
permalink: /research/user-interviews/
nav_order: 130
header: true
---

# Bitcoin core app user interviews
Early in 2024 the Bitcoin Design Community started an initiative to understand the current users of Bitcoin Core. While there are many users of the current Qt Widgets GUI for Bitcoin Core, there was little information on how the current GUI is being used.

Understanding the goals and needs of people using the [QT widgets GUI](https://github.com/bitcoin-core/gui-qml/tree/main/src/qml) supports the build process of Bitcoin Core App by helping to identify the needs, goals and pain points of current users. These needs and goals and friction points could then be translated into design solutions.

## Research goals

- Understand the personas using Bitcoin Core
- Understand the jobs to be done by each of these personas. This is as if users hire Bitcoin core to perform a job or a set of jobs.
- Understand the parts of the UI that are being used more heavily than others.
- Understand their struggles and hopes of people when using the GUI.
- Understand what frustrates or makes people happy when using the GUI

## Process
### Step 1: Plan the sprint
Initially the group ideated on the research objectives that they wanted to achieve by the end of the sprint.

### Step 2: Create interview script
The methodology was then decided on to get this information. The Jobs to be Done framework was chosen to identify why people had "hired" Bitcoin Core in the first place as well as what jobs they expected it to do.

### Step 3: Connect with people
The next step was to connect with the target group and speak with them. A few of us visited a conference and found this the perfect opportunity to speak with current and potential users.

### Step 4: Evaluate the conversations
Many conversations we had with both potential and current user of Bitcoin Core. This information was then recorded and the conversations were evaluated. All the data from the conversations were moved into an affinity diagram and sorted through. The goal of sorting was to identify bigger buckets or patterns in the data.

The below information then reveals the findings after sorting through the data.

## Bitcoin Core current user profile
#### Duration they have been using a bitcoin wallet
- 10 Years or longer: Larger bucket (more than half)
- The majority of the people we spoke to have been using a wallet for 10 years or longer.

8 Years or less: Smaller bucket (less than half)
The smaller group of people we spoke with have been using a wallet for 8 years or less

## Wallets used next to Bitcoin Core
#### Observations:

- Most people were using at least one or more wallets next to Bitcoin core.
- Every person which we interviewed had more than one wallet.
- Sparrow was by far the most popular wallet choice of current Bitcoin Core users.

The most popular wallets that are being used next to bitcoin core are listed in the order of use. Listed from most to least used:

## Insights
The current user of Bitcoin core tends to be a bitcoiner who is:

- Fairly experienced in the bitcoin space, they have been using a wallet for many years now.
- 4 years: This was the shortest time that an interviewee has been using a bitcoin wallet
- 10 Years: This is the longest time that a interviewee has been using a bitcoin wallet
- These more experienced users are using at the minimum two wallets or more, each one for a different use case.
- Sparrow was by far the wallet that was used the most.

## The push: What pushed them to start using Bitcoin Core?

### Pushes
A push fits under the Jobs to be done framework and assumes that a user “hires” the software to complete a specific job. During the process of “hiring” the software they expect it to perform a specific role.  

During this stage there is a particular reason or “push” that results in them installing the software onto their device.

For Bitcoin core the main reasons that pushed people to install and start using it were the following:

#### The top 3 reasons were:
Self custody, Node running, developer testing

**1. Self custody**
**_There was a bcash fork happening and they wanted to have a self-custodial solution._**
“There was a bcash fork going on, I wanted to have my keys own before it happened.”

**2. Node running**
**_Bitcoin Core was installed to run a node_**
“I wanted a node primarily, and wallet functions was only secondary.”

**3. Consensus making**
They want to help contribute to consensus on the blockchain.
“For me running it its about contributing to the community..”

**4. Curiosity**
They were genuinely curious and just wanted to try out the software.
“At first just to explore. Just to understand bitcoin better.”

**5. Transacting**
They wanted to buy something.

**6. Inscriptions**
They wanted to inscribe ordinals.

**7. Developer testing**
They are a developer working on Bitcoin Core and downloaded it for testing purposes.

“I was trying to recreate a crash that someone reported.”

#### Fears during push stage
During this stage of “hiring” the product the person might have fears.

One of the main fears of people when installing bitcoin core came through the syncing process.

**1. Syncing time**
**I want to be **informed:****

- They were not informed of the time it would take to sync and this resulted in them feeling confused.
- They were not informed as to why the app remained stuck on 0% syncing.

“It was 0% of synchronizing, he wasn't informed about the what's happening or why it didn't started to sync.”

“Didn’t really understand it at first. I was confused the first time I was running it. Mostly the sync process.”

**I want to be **educated:****
- Their fears came mostly from the feeling that they did not understand the software.
- “I had this feeling of maybe it comes from not completely understanding, lets say you have to fly a plane and land it but you’ve never done it before.”

## What do you like the most about the wallet you use?

1. Visualization

- Users like it when the interface design makes them feel in control, what makes them feel in control is the visualization of information. Sparrow wallet was the favorite here in terms of how they visualize information. Some of the points that were mentioned about how Sparrow does this well were:

2. Addresses:

- Shows all the addresses

3. Transaction details:

- Expand transactions and see UTXO’s
- Add transaction notes

4. Transaction construction:
- Visualisation of transaction construction

5. Ease of use

- The interface was easy for them to understand
- It was easy to transfer between wallets
- The onboarding process was easy
- The mobile user experience was good

6. Assurance

- Authentication features are quite important to users, they especially like it when the authentication features are on default.
- Also when the recovery process is important that they feel they can recover their wallet quickly and easily.

- Users also want assurance that their privacy is being protected on Sparrow this is being done by using a color code.  

7. Fees
Being able to adjust fees as well as the ability to consolidate fees is something that is important to users.

8. Self custodial
The wallet being self custodial was also a philosophical reason as to why users mentioned that they could not support a custodial wallet.

9. Testing
A few people who were using Bitcoin QT were using it for testing purposes.

## Insights

- The visualization of constructing transactions, transaction details as well as seeing all of the addresses makes users feel in control.
- Users want to fee that they can recover their wallet easily, Sparrow wallet has a visualization aspect that shows the level of the users privacy, this visualization is something user liked.
- Visualisation and ease of use were the two largest buckets in terms of what users like the most about the current wallets that they use.


## Consumption
When asked when was the last time that they opened bitcoin core as well as the context in which is used. There were 3 main use cases they are mentioned below. Secondary to these 3 main use cases were other smaller use cases.

 We received the following insights:

**- Node runner:** The largest group was running a node
**- Data enthusiast:** The second largest group were using it to access blockchain data
**- Transactor:** The third largest group were using it to transact

### Node runner
I use core to run a node

### Data enthusiast
I use core to access blockchain data

### Transactor
I use core to make transactions

## Enjoy about core
When asked when was they enjoyed about using core, the top two aspects where:

- Reliability and trustworthy
- Visibility of peers

Secondary reasons were:

- Easy installation
- Open source and helping decentralization
- Different features

## Find frustrating
When asked what they found frustrating about using core. There were 3 areas that were the primary frustration points:

- Connecting and syncing
- Interface
- Set-up and configuration process

Next to those larger areas people found on a smaller scale the following to be frustration points:

- Console issues
- Cannot batch transactions
- No multi-sig option
- No option to manage PTSB’s
- No BIP39 support
- Customer support
- Node/wallet separation
- Development process
- Output descriptors
- Ordinal use
