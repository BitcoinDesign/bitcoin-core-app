---
layout: default
title: Research
permalink: /research/
classes: -research
nav_order: 3
---

## Introduction

In the field of software development, it’s important to prioritize understanding the user's perspective. This ensures that the products we craft align seamlessly with the genuine needs and preferences of the end-users. Without this crucial insight, projects run the risk of delivering technically sound solutions that lack resonance with users' actual requirements.

By integrating user experience research into the development process in Bitcoin Core App we have gained some insights into user behaviours, needs, and challenges as well as an overview of the competitive environment.

Research in the Bitcoin Core App project takes varied forms, initiated by a central question guiding the projects focus. The [Bitcoin UX Research toolkit](https://bitcoinresearch.xyz/) adheres to a question-first approach, helping us tailor methodologies to the specific questions at hand.

## Completed research efforts

There have been various research efforts around this project and the Bitcoin Core QT GUI, and the research sprints that have been done have had various roles within the project.

Privacy is a cornerstone in bitcoin user research, affecting two critical areas:

- Transcripts:
In the realm of bitcoin, privacy concerns may restrict the public availability of user interview transcripts. Consent obtained at the outset allows us to share resources openly, respecting participants' sensitivities.

- Processing:
Researchers utilizing AI and tools for data processing must secure consent to mitigate the risk of unintentional data exposure. Privacy is paramount, and ensuring participants are comfortable with data processing is essential.

## How research is organized

The research done on this project so far has been organized and initiated within the [Bitcoin Design Community](https://bitcoin.design). An additional research initiative on nodes has been done by a Bitcoin Core developer as well.  Within the Bitcoin Design Community there have been calls organized so that people can contribute, as well as understand the research efforts.

The project will continue to conduct more research as it is in development. This process of deciding on the research goals will be done by gaining consensus in the project on what insights need to be understood and identifying if those insights will have an impact on the product.

There has also been a [public repository](https://github.com/users/mouxdesign/projects/5/views/1) created for this project where snippets from the various research efforts have been captured. This public repository was created to ensure that as much as possible of the research insights are publicly available.

## Past research efforts
{% include picture.html
	image = "/assets/images/research/research-illustration.png"
	retina = "/assets/images/research/research-illustration@2x.png"
	big = "/assets/images/research/research-illustration-big.png"
	alt-text = "A flow chart showing the different research efforts that have been done on the project. The chart shows three branches; discover, qualitative research, quantitative research"
	width = 800
	height = 500
%}

### Comparative Interfaces
Early in the project, we assessed interfaces comparable to the Bitcoin Core GUI.
We aimed to identify the most popular applications based on:
- Github stars
- Google reviews
- Node capabilities

The most popular direct and indirect competing UI’s were [identified](https://docs.google.com/spreadsheets/d/1igEgshDrDrf5g_ZBbmeA44pwxtT2t059xJwW82ItD2A/edit#gid=0).

### User stories

[User stories](https://www.interaction-design.org/literature/topics/user-stories) are specific use cases describing when and how a person might use an application. Think of a user story as a singular task which a user would aim to achieve when opening the application. User stories are usually first created by stakeholders and then verified by conducting research and speaking with users.

As a community, we ideated on various user stories that we hypothesized would be daily use cases when opening or using Bitcoin Core app. These were separated into 4 larger groups:
- Learners
- Casual users
- Experienced users
- Developers

Links to resources:
- [Google doc](https://docs.google.com/document/d/19eYP5e8qp5SCdNIzPHC49C5LFlnAvgiEjmUi3JTRmtc/edit?usp=sharing
- [User stories - Hypothesis](https://www.figma.com/file/Oc70eiTlQ1KNWXfaoNdLig/USER-STORIES?type=whiteboard&t=lDP87yWgNeDszMPF-01MoIRqlaKiNR-NqBYU1nrCorhGlopCtCKDiZbcsX8ddM/edit)
The goal of creating these user stories is to then test if these various user flows were possible and convenient in the proposed design.

### Testing and surveys

Specific research, particularly on the node and wallet sides, involved surveys and guerilla testing. The former provided a deeper understanding of node operators, while the latter provided feedback on the onboarding flow of the new Bitcoin Core App.

#### Node
At the beginning of 2021 a survey was run by Ava Chow, a Bitcoin Core developer. This survey was sponsored by [MIT's Digital Currency Initiative] (https://dci.mit.edu/) and in partnership with [Maiden Labs](https://maiden.global/).  Its goal was to better understand the people who run nodes and use the Bitcoin Core wallet, as well as people familiar with Bitcoin but who maybe don’t run a node (yet).

The [survey](https://survey.alchemer.com/s3/6081474/8acd79087feb) took 15-20 minutes to complete.

Links to resources:
Node research survey
- [Spreadsheet](https://docs.google.com/spreadsheets/d/13biTEOBsTIWbzCrsi7Wo8hQSno9DIbTLF8BwzgI6gro/edit?usp=sharing)
- [Research summary](https://docs.google.com/spreadsheets/d/1VyRADD0weXDTJoU-8goxvlE-sNxn3CuvhlqU-5f_ZfI/edit#gid=1577805006)

#### Wallet

[Guerilla testing](https://www.usertesting.com/blog/what-is-guerrilla-testing#:~:text=Guerrilla%20testing%20is%20a%20means,a%20valuable%20UX%20testing%20method) is the process of taking a design live into the field and showing it to users and getting peoples thoughts on the design. It is a quick way of getting initial feedback on designs and quickly iterating on those.

We took the onboarding flow of the new Bitcoin Core App and had a call in the Bitcoin Design Community where designers and developers were invited to test the design live. It provided insight into the main friction points people were experiencing with the design.

Links to resources:
- [Public repository](https://github.com/users/mouxdesign/projects/5/views/1)
- [Call recording](https://www.youtube.com/watch?v=FR3y6AlrGdg&t=1s)
- [Raw transcript](https://docs.google.com/document/d/1MoIRqlaKiNR-NqBYU1nrCorhGlopCtCKDiZbcsX8ddM/edit)

### Current and potential user interviews
This initiative was to understand both current as well as potential users of the Bitcoin Core App. One on one interviews were done to understand the pushes, pulls as well as use cases of people using Bitcoin Core.

Links to resources:
- [Research plan](https://docs.google.com/document/d/1UhDR1K9q4y5zEuACdUZe3cLvYSIRfL71BUetqNgnLPM/edit?usp=sharing)
- [Current user script](https://docs.google.com/document/d/1fbjGQMWDoMNKcBvZz4lbh_AWo3p5X_LTEerAgFaGBVI/edit)
- [Potential user script](https://docs.google.com/document/d/1fbjGQMWDoMNKcBvZz4lbh_AWo3p5X_LTEerAgFaGBVI/edit)


## How to contribute

Contributing to research efforts on Bitcoin Core App is open to everyone. Contributors are encouraged to first get a feel of the project by:
- Joining a call: This allows contributors to get a feel of the project as well as which areas of the UI are being worked on at the moment. Calls are added to the [Bitcoin Design Community calender](https://bitcoin.design/calendar/).
- Reading: Reading through the past research efforts and documents will provide an idea of how research has been conducted as well as provide templates for future research initiatives.
- Community activity: Suggesting or kicking off research initiatives within the community by sharing thoughts and ideas.
