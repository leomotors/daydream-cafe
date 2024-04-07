---
title: Raspberry Pi 5 Home Server Setup
description: A single board computer that runs all my applications/services using Docker
tags: [docker, home server]
updated: 240407
image: /images/blogs/honamipi5real.webp
---

# Honami Pi 5

![](/images/blogs/honamipi5real.webp)

"Honami", Mochizuki Honami (<ruby>望月<rt>もちづき</rt></ruby><ruby>穂波<rt>ほなみ</rt></ruby>)
from Project SEKAI

## Moving to On-Premise

Having server on-premise is fun. With Raspberry Pi 5 powered by ARM64, I don't need
to worry much about power consumption and its powerful enough to powered all of
my docker applications.

## My Setup

- Raspberry Pi 5 8GB RAM
- SSD 250GB (USB Boot)

## Cloudflare Tunnel

No need to worry about not having public IP address, Cloudflare Tunnel can be used
and it is much simpler than configuring nginx.

## Repositories

- [leomotors/honami-backup](https://github.com/leomotors/honami-backup) - Backup files to Blob Storage
- (Private Repo) - Used in GitOps
- [leomotors/honami-gitops](https://github.com/leomotors/honami-gitops) - My custom GitOps

## Home Project

- [leomotors/home-env](https://github.com/leomotors/home-env) - Moving to On-Premise is
  a huge advantage for this project as ESP32 no longer need to send request to
  other country for metrics and all data is within home's local network

## Raspberry Pi 5 Guide

Useful stuff you need to know if you are planning to buy Raspberry Pi 5

- Don't install Raspbian OS, **it's cursed**
- Also don't install Ubuntu Desktop, install Ubuntu Server
- Buy Official PSU, it is mandatory for USB Boot. Regular PD charger won't work
  as most PD charger only support up to 3A at 5V but Pi 5 needs 5.1V 5A
- WLAN Country Config is buggy in Ubuntu Server, avoid connecting to 5GHz network,
  for best network performance, use LAN cable, it is fast, low latency and more reliable
- You need to change netplan renderer to `NetworkManager`, See: https://www.cyberciti.biz/faq/change-netplan-renderer-from-networkd-to-networkmanager. Otherwise it might not
  be able to connect to ethernet even you plugged in the LAN cable.
- Buy Micro HDMI to HDMI cable, you ~~might~~ _will_ need it

## Common Mistakes

- Be aware of what you plugged in to USB port, your Pi 5 maybe trying to boot
  from your keyboard 💀
