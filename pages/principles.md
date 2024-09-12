---
layout: default
title: Principles
permalink: /principles/
nav_order: 5
---

# Principles

Design principles, or design philosophies, are helpful when making decisions large and small.

## User guidance

The bitcoin network comes with various technical and economic requirements. Due to the limited block space, transaction fees are relatively high. Fees have increased over time, as the network has found more use cases and users, and the fiat price of bitcoin has increased. This tendency is likely to continue.

High fees mean that transactions below certain amounts are not economically viable. Paying 500 sats in fees for a 2,000 sat transaction is not appropriate. So the application is likely to be used for medium to high-value transactions, with a tendency towards high-value transactions as more time passes.

Higher values are more meaningful and sensitive. Users have more anxiety around making mistakes and will do things like checking the accuracy of an address multiple times before sending.

The application design should take this into consideration and ensure that users feel as comfortable and confident as possible. This can be achieved through means like clear communication of application activity, the use of clear and non-technical language, guidance towards best practices, and ensuring users understand the implications of their actions.

## Simplicity with depth

Oftentimes, application design struggles with the balance of simplicity for regular users with complexity for users who want more control. We can address this by intelligently layering the experience.

1. The application should provide a "happy path" that is simple and convenient and allows the majority of users to quickly get started. Clear explanations that focus on the primary benefits and things to know, reducing options via smart defaults and recommendations, and good support when users get stuck are helpful here.

2. The happy path should allow access to more in-depth settings and options, so users can go deeper if they want to. These should be fairly easy to access, but also easy to ignore, and not crucial to usage of the primary functions.

3. To provide a great developer experience, certain settings and options should be accessible in a way that does not clutter up or distract the other paths, but allows developers to be effective. It is also helpful for designers to be able to launch an application in a certain state to evaluate the experience.

We can embed this pattern in the basic UI architecture. The specific decisions as to which detail goes where will likely change over time as the application is refined with more user feedback. We may also decide to present users with different options based on whether they are on desktop or mobile. The pattern of having users choose between a "simple" and an "advanced" mode was considered, but decided against.

## [Accessibility]({{ '/accessibility/' | relative_url }})

To allow as many people as possible to use the application, the design (and implementation) should be highly accessible. Getting these right can allow people in non-optimal situations to still successfully navigate and interact with bitcoin. This also includes supporting a broad range of device types and operating systems.

## Responsive design

For broadest accessibility, the application should adapt seamlessly to platforms and operating systems. There are practical limits for technical reasons, as well as differences in UX patterns of different environments. Responsive design should also consider accessibility preferences like text size preferences. Also see [layout]({{ '/layout/' | relative_url }}).

## Universal design

While a bitcoin wallet for children can be playful and creative, this application is meant to be visually neutral. Accessibility & ease of use are priority over creative visual expression. That does not mean it should be plain, but that "form follows function](https://en.wikipedia.org/wiki/Form_follows_function)". [Illustrations]({{ '/illustrations/' | relative_url }}), for example, should convey information that helps users better understand the UI and make more informed decisions. Good design is intentional.

## Open design

Just like the application code, the design is intended to be collaborated on openly and collaboratively. Design tools are not as sophisticated as development tools, so git-style collaboration is not possible. But we can still work with the tools we have and find workarounds for the gaps. For more, see [contribute]({{ '/contribute/' | relative_url }}).