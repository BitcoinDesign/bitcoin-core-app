---
layout: default
title: Storage
permalink: /settings/storage/
nav_order: 55
indent: true
---

# Storage settings

Lets users define how much data the application should use, and where the data should be stored. This screen is also accessible during [first use]({{ '/first-use/' | relative_url }}).

{% include picture.html
	image = "/assets/images/settings/storage.png"
	retina = "/assets/images/settings/storage@2x.png"
	big = "/assets/images/settings/storage-big.png"
	alt-text = "Screen with basic storage settings"
	width = 800
	height = 712
%}

In the initial implementation, the data directory is not editable. This will be added at a later time, see below. For details, see [this discussion](https://github.com/BitcoinDesign/Bitcoin-Core-App/issues/102#issuecomment-2075242035){:target="_blank"}.

{% include picture.html
	image = "/assets/images/settings/storage-edit-data-dir.png"
	retina = "/assets/images/settings/storage-edit-data-dir@2x.png"
	big = "/assets/images/settings/storage-edit-data-dir-big.png"
	alt-text = "Screen with basic storage settings & editable data directory"
	width = 800
	height = 712
%}


