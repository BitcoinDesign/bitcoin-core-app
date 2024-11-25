---
layout: default
title: Features
permalink: /features/
nav_order: 1.5
---

# Planned features

**This is a complete work-in-progress.**

With this new application, we try to maintain all existing features from the QT application, while also making improvements and creating space for new features and future improvements. On this page you can find a list of features supported across both versions of the client.

The page is called "Planned features", since the new application is under heavy development. "Planned" can mean everything across the feature lifecycle, from early exploration of late development. As development continues, we may change the scope of this page.

### General

| Feature                                                    | App     | QT      |
| ---------------------------------------------------------- | ------- | ------- |
| Android support                                            | ✓       | ✗       |
| Responsive screen layouts                                  | ✓       | ✗       |
| [Guided setup experience]({{ '/first-use/' | relative_url }}) | ✓       | ✗       |
| Message signing & verification                             | ✓       | ✓       |

### Wallet management

| Feature                                                    | App     | QT      |
| ---------------------------------------------------------- | ------- | ------- |
| Wallet switching                                           | ✓       | ✓       |
| [Create single-key wallets]({{ '/1-4-create/' | relative_url }}) | ✓       | ✓       |
| Create multi-key wallets                                   | ✓       | x       |
| Descriptor wallets                                         | ✓       | ✓       |
| Watch-only wallets                                         | ✓       | ✓       |
| Wallet file backup                                         | ✓       | ✓       |
| [Wallet file import]({{ '/1-3-import/' | relative_url }})  | ✓       | ✓       |
| Encryption                                                 | ✓       | ✓       |
| Password protection                                        | ✓       | ✓       |

### [Sending]({{ '/1-7-send/' | relative_url }})

| Feature                                                    | App     | QT      |
| ---------------------------------------------------------- | ------- | ------- |
| Sending bitcoin                                            | ✓       | ✓       |
| "Send all" option                                          | ✓       | ✓       |
| Legacy address support                                     | ✓       | ✓       |
| Recommended fee rate                                       | ✓       | ✓       |
| Priority-based fee options                                 | ✓       | ✗       |
| Manual fee rate selection                                  | ✓       | ✓       |
| Multiple recipients                                        | ✓       | ✓       |
| Coin selection                                             | ✓       | ✓       |
| Contacts                                                   | ✓       | ✓       |
| Input & output visualization                               | ✓       | x       |
| PSBT import & export                                       | ✓       | ✓       |
| Import via clipboard                                       | ✓       | ✓       |
| Import via BIP-21 URI                                      | ✓       | ✓       |
| Single-key transaction signing                             | ✓       | ✓       |
| Replace-by-fee                                             | ✓       | ✓       |
| Include fee in amount                                      | ✓       | ✓       |
| External signer support via HWI                            | ✓       | ✓       |
| Time locks                                                 | ✓       | ✗       |

### [Receiving]({{ '/1-6-receive/' | relative_url }})

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

| Feature                                                    | App     | QT      |
| ---------------------------------------------------------- | ------- | ------- |
| [Network synchronization status]({{ '/block-clock/' | relative_url }}) | ✓       | ✓       |
| Pruning                                                    | ✓       | ✓       |
| Test networks                                              | ✓       | ✓       |
| [Snapshot creation & import]({{ '/snapshot/' | relative_url }}) (assumeUTXO) | ✓       | x       |
| Information screen                                         | ✓       | ✓       |
| Console screen                                             | ✓       | ✓       |
| Network traffic screen                                     | ✓       | ✓       |
| Peers screen                                               | ✓       | ✓       |

### Settings

| Feature                                                    | App     | QT      |
| ---------------------------------------------------------- | ------- | ------- |
| About screen                                               | ✓       | ✓       |
| Application settings                                       | ✓       | ✓       |
| Wallet settings                                            | ✓       | ✓       |
| Network settings                                           | ✓       | ✓       |
| Display settings                                           | ✓       | ✓       |
| bitcoin.conf support                                       | ✓       | ✓       |