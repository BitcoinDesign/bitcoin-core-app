---
layout: default
title: Features
permalink: /features/
nav_order: 1.5
---

# Planned features

**This is a complete work-in-progress.**

With the initial launch of this new application, we try to maintain feature parity with the QT application. Some options may be removed intentionally, and many options will be found in different places in the application. while also making improvements and creating space for new features and future improvements. On this page you can find a list of features supported across both versions of the client.

The page is called "Planned features", since the new application is under heavy development. "Planned" can mean everything across the feature lifecycle, from early exploration of late development. As development continues, we may change the scope of this page.

### General

| Feature                                                    | App     | QT      |
| ---------------------------------------------------------- | ------- | ------- |
| Android support                                            | ✓       | ✗       |
| [Guided setup experience]({{ '/first-use/' | relative_url }}) | ✓       | ✗       |
| Message signing & verification                             | ✓       | ✓       |

### Wallet management

| Feature                                                    | App     | QT      |
| ---------------------------------------------------------- | ------- | ------- |
| Wallet switching                                           | ✓       | ✓       |
| [Activity]({{ '/milestones/1-5-activity/' | relative_url }}) | ✓       | ✓       |
| [Create single-key wallets]({{ '/milestones/1-4-create/' | relative_url }}) | ✓       | ✓       |
| Create multi-key wallets                                   | ✓       | ✗       |
| Descriptor wallets                                         | ✓       | ✓       |
| Watch-only wallets                                         | ✓       | ✓       |
| Wallet file backup                                         | ✓       | ✓       |
| [Wallet file import]({{ '/milestones/1-3-import/' | relative_url }})  | ✓       | ✓       |
| Password protection                                        | ✓       | ✓       |

### [Sending]({{ '/milestones/1-7-send/' | relative_url }})

| Feature                                                    | App     | QT      |
| ---------------------------------------------------------- | ------- | ------- |
| Transaction creation & broadcast                           | ✓       | ✓       |
| "Send all" option                                          | ✓       | ✓       |
| Legacy address support                                     | ✓       | ✓       |
| Recommended fee rate                                       | ✓       | ✓       |
| Priority-based fee options                                 | ✓       | ✗       |
| Manual fee rate selection                                  | ✓       | ✓       |
| Multiple recipients                                        | ✓       | ✓       |
| Coin selection                                             | ✓       | ✓       |
| Contacts                                                   | ✓       | ✓       |
| Input & output visualization                               | ✓       | ✗       |
| PSBT import & export                                       | ✓       | ✓       |
| Import via clipboard                                       | ✓       | ✓       |
| Import via BIP-21 URI                                      | ✓       | ✓       |
| Replace-by-fee                                             | ✓       | ✓       |
| Include fee in amount                                      | ✓       | ✓       |
| Single-key transaction signing                             | ✓       | ✓       |
| External signer support via HWI                            | ✓       | ✓       |
| Time locks                                                 | ✓       | ✗       |

### [Receiving]({{ '/milestones/1-6-receive/' | relative_url }})

| Feature                                                    | App     | QT      |
| ---------------------------------------------------------- | ------- | ------- |
| Address generation                                         | ✓       | ✓       |
| List of generated wallet addresses                         | ✓       | ✓       |
| Address labeling                                           | ✓       | ✓       |
| Address type selection                                     | ✓       | ✓       |
| Payment request message                                    | ✓       | ✓       |
| Share via QR code                                          | ✓       | ✓       |
| Share via BIP-21 URI                                       | ✓       | ✓       |
| Reusable addresses (Silent Payments)                       | ✓       | ✗       |

### Node management

| Feature                                                                         | App     | QT      |
| ------------------------------------------------------------------------------- | ------- | ------- |
| [Block synchronization status]({{ '/block-clock/' | relative_url }})            | ✓       | ✓       |
| [Pruning]({{ '/settings/storage/' | relative_url }})                            | ✓       | ✓       |
| [Snapshot creation & import]({{ '/snapshot/' | relative_url }}) (assumeUTXO)    | ✓       | ✗       |
| [Network settings]({{ '/settings/network/' | relative_url }})                   | ✓       | ✓       |
| Test networks                                                                   | ✓       | ✓       |
| [Peers screen]({{ '/settings/peers/' | relative_url }})                         | ✓       | ✓       |

### Settings

The structure of the settings has changed quite a bit. Almost all settings are still available, but have been moved to different screens, typically to be available contextually. You can find a more detailed mapping in [this Google Sheet](https://docs.google.com/spreadsheets/d/1JyJDZBR-jyfXJgriTNiybVA1X4r0aK0Pc3D1LfVv_MA/edit?usp=sharing){:target="_blank"}.

| Feature                                                              | App     | QT      |
| -------------------------------------------------------------------- | ------- | ------- |
| [About screen]({{ '/settings/about/' | relative_url }})              | ✓       | ✓       |
| [Display settings]({{ '/settings/display/' | relative_url }})        | ✓       | ✓       |
| [Developer settings]({{ '/settings/developer/' | relative_url }})    | ✓       | ✗       |
| [Console screen]({{ '/console/' | relative_url }})                   | ✓       | ✓       |
| bitcoin.conf access                                                  | ✓       | ✓       |
