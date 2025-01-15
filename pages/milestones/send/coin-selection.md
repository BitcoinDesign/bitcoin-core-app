---
layout: default
title: Coin selection
permalink: /milestones/1-7-send/coin-selection
nav_order: 174
indent: true
---

# Coin selection

**Status: Early design exploration**

In coin selection, users can choose which inputs to include in a transaction. 

## Enabling coin selection

Users enable coin selection through the ellipsis menu. 

{% include picture.html
	image = "/assets/images/send/coin-selection-enabling.png"
	retina = "/assets/images/send/coin-selection-enabling@2x.png"
	big = "/assets/images/send/coin-selection-enabling-big.png"
	alt-text = "Multiple screens showing the process of enabling coin selection"
	width = 800
	height = 366
%}

## Selecting coins (UTXOs)

In the coin selection screen, users select from their list of UTXOs. The screen shows the total amount of the selected coins as well as the amount that remains to be selected.

{% include picture.html
	image = "/assets/images/send/coin-selection.png"
	retina = "/assets/images/send/coin-selection@2x.png"
	big = "/assets/images/send/coin-selection-big.png"
	alt-text = "Coin selection screen with multiple inputs to choose from"
	width = 800
	height = 551
%}

## Under consideration

- Recommendation/selection for different coin selection algorithms (e.g. most private, economic, etc.) 
- Tabbed views for "list view" and "visual coin flow" view