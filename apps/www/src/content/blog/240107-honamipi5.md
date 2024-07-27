---
title: Raspberry Pi 5 Home Server Setup
description: A single board computer that runs all my applications/services using Docker
tags: [docker, home server]
updated: 240727
image: /images/blogs/honamipi5real.webp
---

# Raspberry Pi 5 Home Server

![](/images/blogs/honamipi5real.webp)

_Honami Pi 5_, "Honami" for Mochizuki Honami (<ruby>望月<rt>もちづき</rt></ruby><ruby>穂波<rt>ほなみ</rt></ruby>)
from Project SEKAI

## Before using Raspberry Pi

- I used to use Raspberry Pi 3 Model A+ since Q4 2020, it did fine running Discord Bots. Others detail I forgot, its too long.
- Since Mid 2022, I start using Microsoft Azure B2s (2 vCPU, 4GB RAM) as my personal VM for Discord Bots and some web application that need backend. For the price of $12.86/month (Inc. VAT) (fyi: I gave my Pi 3 A+ to my friend)
- Once my Azure for Students expired (1 Year later), to prevent my bill from skyrocket, I moved to Contabo VPS (4 vCPU, 8GB RAM) for the price of around €8-9/month which later reduced to €4.5/month from Black Friday production
- After using Contabo for half a year. One day, Contabo physical SSD failed and cause my VM to be down. Being unsatisfied of speed and SLA of Contabo, I decided to buy a Raspberry Pi 5.

### Is Raspberry Pi 5 cheaper than Contabo VPS?

At first glance, yes! At second glance, no after I bought too much accessories 💀.

But major advantage of Raspberry Pi 5 is that I can use it as a home server, because it's in your home!

## My Setup

- Raspberry Pi 5 8GB RAM
- SSD 250GB (WD Black SN770 via PCIe 3.0 x1)

## What I use Raspberry Pi 5 for?

### Running Docker Container

As of writing this updated blog, there are 31 Docker Containers running

### Hosting Website with Cloudflare Tunnel

No need to worry about not having public IP address, Cloudflare Tunnel can be used
and it is much simpler than configuring nginx.

Visit Uptime Kuma page of this Raspberry Pi 5 at https://kuma.leomotors.me/status/honamipi5

### Home Project

- [leomotors/home-env](https://github.com/leomotors/home-env) - Moving to On-Premise is
  a huge advantage for this project as ESP32 no longer need to send request to
  other country for metrics and all data is within home's local network

### Backup and GitOps

- [leomotors/honami-backup](https://github.com/leomotors/honami-backup) - Backup files to Blob Storage
- (Private Repo) - Defining Docker Compose with version and _all tokens and api keys_
- [leomotors/honami-gitops](https://github.com/leomotors/honami-gitops) - My custom GitOps

### Plex and Jellyfin

Plex is there for compatibility with cheap chinese TV that is not Android TV

### VPN (WireGuard)

Of course I don't expose Jellyfin or Postgres to internet

## Raspberry Pi 5 (Updated) Guide

Useful stuff you need to know if you are planning to buy Raspberry Pi 5

- Don't install GUI, cause you are going to use it as Home Server. Also Raspbian GUI is cursed.
- Even though Raspbian OS is cursed, it is the only OS that you can update Bootloader from inside.
- Buy Official PSU, it is mandatory for USB Boot or NVMe SSD. Regular PD charger won't work
  as most PD charger only support up to 3A at 5V but Pi 5 needs 5.1V 5A
- WLAN Country Config is buggy in Ubuntu Server, avoid connecting to 5GHz network,
  for best network performance, use LAN cable, it is fast, low latency and more reliable
- You need to change netplan renderer to `NetworkManager`, See: https://www.cyberciti.biz/faq/change-netplan-renderer-from-networkd-to-networkmanager. Otherwise it might not
  be able to connect to ethernet even you plugged in the LAN cable.
- Buy Micro HDMI to HDMI cable, you ~~might~~ _will_ need it

### Common Mistakes

- Be aware of what you plugged in to USB port, your Pi 5 maybe trying to boot
  from your keyboard 💀

## Costs

### In Use Parts

- Raspberry Pi 5 8GB RAM - 3550 THB
- Raspberry Pi 5 27W PSU - 510 THB
- SSD M.2 PCIe 4.0 WD BLACK SN770 250GB - 1108 THB (Used Code 9ARM)
- Argon NEO 5 M.2 NVME PCIE Case - 1555 THB
- (Cable) Micro-HDMI to HDMI Cable 122 THB

### Retired Parts

- Raspberry Pi 5 Active Cooler - 216 THB
- SSD SATA WD BLUE SA510 250GB - 1190 THB
- UGREEN USB 3.0 HDD Enclosure - 390 THB
- Geekworm X1001 PCIe to M.2 Key-M NVMe SSD - 652 THB
- Geekworm P579 Metal Case - 399 THB

Total Active Parts: 6845 THB  
Total Retired Parts: 2847 THB  
Total Money Spent: 9692 THB

Note 1: Cytron has 3% Cashback which is not included here  
Note 2: LAN Cable, Electric Bill is not included here

## Case Review

Coming soon

### Naked Pi 5 on a quick start guide paper

### 3D Printed Case (Bottom Only)

### Full 3D Printed Case

very hot

### Naked Pi 5 with Geekworm SSD Hat

### Pi 5 with Geekworm SSD Hat and Geekworm Metal Case

very hot

### Pi 5 with Argon NEO 5 M.2 NVME PCIE Case

currently

### Pironman 5?

my money going to gone
