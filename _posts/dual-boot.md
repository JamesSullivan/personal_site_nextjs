---
layout: post
title: "Dual Booting"
description:  "Manufacturers are locking down computers making dual booting more difficult."
excerpt: "Dual booting Ubuntu on a new XPS 8960 with RTX-4090 GPUt"
date: "2023-07-04T09:35:07.322Z"
categories: ML

author:
  name: James Sullivan
  picture: "/assets/blog/authors/js.png"
coverImage: "/assets/blog/dual-boot/NVIDIA_Settings.png"
ogImage:
  url: "/assets/blog/dual-boot/NVIDIA_Settings.png"
---

After much trial and error, I finally got Linux (Ubuntu 22.04.02) to dual boot on my new Dell XPS 8960. You may only need to do some of what I did, but I have listed everything I had to do to get to a working state below, and I am now reluctant to experiment further.

Even more so than usual, please take heed of the standard warning that there is no guarantee this will work for your particular setup and could brick your computer.


### Preparations before installation:

1. Set up Windows 11. If this is a new computer, go through the Windows 11 installation/setup wizard. 

2. Make a backup Windows install USB. You will likely need this, so don't skip this step. I certainly needed the backup. Use a USB drive with 64GB of storage. Windows 11 displays a message that the USB must have a minimum of 32GB of free space. However, the OS calculates a gig strictly using the larger 2 to the power of 10 definition. At the same time, USB drive advertisements use a smaller 1,000,000,000 bits definition, so I recommend using a larger USB drive. Moreover, Windows 11 seems temperamental, and I had to try several times before I could finally create the backup, even with a 64GB USB drive. See the recovery USB section of [Windows 11 and Ubuntu dual-boot...](https://youtu.be/CjxYxdJb_OA?t=127)

3. If you don't have a partition ready for the Linux installation, prepare one. [Windows 11 and Ubuntu dual-boot...](https://youtu.be/CjxYxdJb_OA?t=255)

4. Disable fast startup. [Windows 11 and Ubuntu dual-boot...](https://youtu.be/CjxYxdJb_OA?t=322)

5. Prepare a bootable USB with Ubuntu 22.04. See [create a bootable USB stick on Ubuntu](https://ubuntu.com/tutorials/create-a-usb-stick-on-ubuntu#1-overview) or [Windows 11 and Ubuntu dual-boot..](https://youtu.be/CjxYxdJb_OA?t=353).

 
### Turn off disk encryption and make BIOS changes

Enter into bios by pressing F2 repeatedly after turning on the power.

I had to save and reboot the computer each time for the following three steps.

1. Turn off BitLocker . [More details and background](https://discourse.ubuntu.com/t/ubuntu-installation-on-computers-running-windows-and-bitlocker-turned-on/15338). The following link may also be helpful - [Finding your BitLocker recovery key in Windows](https://support.microsoft.com/en-us/windows/finding-your-bitlocker-recovery-key-in-windows-6b71ad27-0b89-ea08-f143-056f5ab347d6)

2. Under the Secure Boot menu, turn off Secure Boot Mode.

3. Under Storage, changed SATA/NVMe Operation from RAID to AHCI/NVMe. If you don't want to reinstall Windows after changing RAID to AHCI, you should set Windows 11 to Safe Mode beforehand. In Windows, run msconfig.exe, and from the Boot tab, enable Safe Boot (Minimal). This change should require a restart. Then in the BIOS, change to AHCI, and Windows should still boot up. Then you can disable Safe Boot, and in theory, Windows 11 should work the same when you reboot. Check Windows 11 is working properly. Warning: although Windows mostly worked after this, I still had to reinstall Windows 11 using my previously created Windows recovery USB drive to get everything working properly.


### Installation

Insert your Ubuntu USB drive, then turn on your computer and repeatedly click F12 until you get a boot menu. The USB drive should be one of the choices, and select it. 

#### UBUNTU 22.04
At this point, it should be a normal Ubuntu LTS install, so follow the Wizard. However, after you have finished installing Ubuntu to disk and rebooting, you will likely run into the following error:

`nouveau 0000:01:00.0  unknown chipset (192000a1)`

Don't panic; instead, reboot, except this time, press `e` at boot up to enter the bootloader and edit the kernel options. Do this by adding `nomodeset rdblacklist=nouveau` to the end of the line that begins with Linux. Then continue to boot the system. <a href="https://askubuntu.com/questions/38780/how-do-i-set-nomodeset-after-ive-already-installed-ubuntu">Further nomodeset info</a>.

Now that you are in Ubuntu, go to Software & Updates -> Additional Drivers and select Using NVIDIA driver meta package from Nvidia-driver-535 (proprietary, tested). After applying and saving the changes, you should be good for your next restart.

#### UBUNTU 24.04
The installer pretty much works as expected and installs . One item to note is that the installer will not work with certain 4K monitors. In my case I did the install using a non-4k monitor and then after Ubuntu 24.04 was installed switched back to my LG 4K monitor.


The installer defaults to x11 rather than Wayland display server, but at this point, I am just happy to have a working installation.


### Helpful Links:

[Windows 11 and Ubuntu dual-boot on a Dell Inspiron desktop - with Secure Boot & application install](https://www.youtube.com/watch?v=CjxYxdJb_OA)

[How to Install Ubuntu and Windows 8 Through Windows 11 as a Dual Boot on your Dell Computer](https://www.dell.com/support/kbdoc/en-ca/000131253/how-to-install-ubuntu-and-windows-8-or-10-as-a-dual-boot-on-your-dell-pc)

[Dual Boot Linux XPS 9520 Guide](https://www.reddit.com/r/DellXPS/comments/1313xgw/dual_boot_linux_xps_9520_guide/)

[nouveau "unknown chipset" On Installer](https://askubuntu.com/questions/598417/nouveau-unknown-chipset-on-installer/608532#608532)

<br><br>
<img class="cc-icon css-11y11pk" width="32" height="32"  alt="Attribution 4.0 International (CC BY 4.0)" style="display: inline-block;" src="/assets/blog/cc.svg">&nbsp;<img class="cc-icon css-11y11pk" width="32" height="32" style="display: inline-block;" alt="James Sullivan" src="/assets/blog/by.svg">

This article is licensed under a <a href="https://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International</a> license.