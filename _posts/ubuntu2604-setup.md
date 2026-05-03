---
layout: post
title: "Post install for a more keyboard driven Ubuntu 26.04"
description: "If you like the Omarchy concept but need to stick to Ubuntu, Gnome and standard keyboard shortcuts"
excerpt: "It takes a bit of manual configuration to get there"
date: "2026-04-29T09:35:07.322Z"
categories: Dev

image: /images/ai_generated_computer.png
image_alt: AI Assisted Computing
image_caption: AI Assisted Computing

author:
  name: James Sullivan
  picture: "/assets/blog/authors/js.png"
coverImage: "/assets/blog/ubuntu2604-setup/ubuntu2604.png"
ogImage:
  url: "/assets/blog/ubuntu2604-setup/ubuntu2604.png"
---

A post install set up for Ubuntu 26.04 for people that like the concept of something like Omarchy but need to stick to Ubuntu, Gnome and keyboard shortcuts that are more in line with Windows and Mac. The combination of Gnome and Wayland does't handle window placement well and makes configuration more manual than it should be. A bit annoying especially as the two projects seem unwilling to even acknowledge there is an issue.


[GPaste – The Best Clipboard Manager for Gnome](https://www.putorius.net/gpaste-best-clipboard-manager-for-gnome.html)

[Kitty - the fast, feature-rich, cross-platform, GPU based terminal](https://github.com/kovidgoyal/kitty)

[Run-or-raise - Feature rich shortcut key app launcher](https://github.com/CZ-NIC/run-or-raise)

``` bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y neovim curl ripgrep wl-clipboard tmux tree gnome-shell-extension-manager
sudo apt install -y p7zip-full unace unrar zip unzip sharutils rar uudeview mpack arj cabextract filezilla
sudo apt install -y gnome-tweaks file-roller gnome-shell-extension-gpaste
sudo apt install ubuntu-restricted-extras vlc libavcodec-extra mpv ffmpeg 
sudo apt install -y fd-find fzf bat kitty lsd jq btop 
mkdir -p ~/.local/bin
ln -s /usr/bin/batcat ~/.local/bin/bat
```

## Settings

Settings > Privacy & Security > Screen: Blank Screen Delay 15 minutes
 
Settings > Online Accounts: Connect Google Account

Settings > Ubuntu Desktop > Desktop Icons >  Position of New Icons: Top Left

Settings > Ubuntu Desktop > Enhanced Tiling > Tiling Popup: Off
(Tiling popup can get in the way when moving Windows by keyboardquickly)

Settings > Keyboard > View and Customize Shortcuts
* System
    * Show the notification list - Shift+Super+V
* GPaste
	* Display the history - Super+V
* Custom Shortcuts.
    * Add Custom Shortcut key
        * Command - nautilus
        * Shortcut - Super + e
    * Add Custom Shortcut key
        * Command - shutdown now
        * Shortcut - Shift + alt + F4


RESTART COMPUTER

## Gnome Extension Manager

### [Gpaste - Clipboard Manager](https://www.putorius.net/gpaste-best-clipboard-manager-for-gnome.html)

Use the \<Super key\> *Extension*  to bring up the Extension Manager and then turn on Gpaste


### [Ubuntu Tiling Assistant](https://github.com/ubuntu/Tiling-Assistant/wiki)

NOTE: Ubuntu 26.04 already has [Ubuntu Tiling Assistant](https://github.com/ubuntu/Tiling-Assistant/wiki) installed so there is no need to install it. However, you may want to change some of the settings. I set up a template to launch all of the apps I usually use with a single key press. 

In *Extension Manager* > *System Extensions* > *Ubuntu Tiling Assistant* click on the gear icon to get to the configuration page. You then have to click on the circled **i** in the top right corner and select **Advanced Settings**. Turn on advanced/experimental settings and only then will you be able to see the *Layouts* tab at the top of the screen that you need. Not very user friendly.

If you mess up your Tiling Assistant Settings, as I did at one point, you can reset it by running the following command in a terminal:
```bash
gsettings reset-recursively org.gnome.shell.extensions.tiling-assistant
```

** NOTE ** Ubuntu Tiling Assistant manager doesn't seem to work reliably, which is probably why they have hidden the advanced settings. Disappointing as a distro, especially a LTS distro, really should have a decent tiling manager that works.


### [Run or Raise](https://github.com/CZ-NIC/run-or-raise)

Use the \<Super key\> *Extension*  to bring up the Gnome extensions manager

*Browse* > Search for __Run or Raise__ and install

Use the gear icon and then the open shortcuts.conf file to configure

Example entries:
```
<Super>f,firefox,,
<Super>k,kitty,,
<Super>g,firefox https://mail.google.com/mail/u/0/#inbox,,/.*Gmail.*$/
<Shift><Super>d,firefox https://drive.google.com/drive/u/0/my-drive,,/$My Drive.*$/
```


## Fonts
```bash
curl -OL https://github.com/ryanoasis/nerd-fonts/releases/latest/download/RobotoMono.tar.xz
curl -OL https://github.com/ryanoasis/nerd-fonts/releases/download/v3.4.0/NerdFontsSymbolsOnly.zip

# 1. Extract the file into folder
mkdir -p RobotoMono && tar -xf RobotoMono.tar.xz -C RobotoMono --strip-components=1
unzip NerdFontsSymbolsOnly.zip -d NerdFontsSymbolsOnly

# 2. Move the folder to the system fonts directory
sudo mv RobotoMono /usr/share/fonts/truetype/
sudo mv NerdFontsSymbolsOnly /usr/share/fonts/truetype/

# 3. Update the font cache so the system recognizes the new files
sudo fc-cache -f -v
```
Now change your ls aliases in ~/.bashrc to use lsd 

```bash
# some more ls aliases
alias ll='lsd -alF'
alias la='lsd -A'
alias l='lsd -CF'
alias ls='lsd'
```

## [Input-remapper - Maps any input to any other input](https://github.com/sezanzeb/input-remapper) (maybe)
```bash
sudo apt install input-remapper
```
remap Caps Lock + hjkl to arrow keys


## Easier Update

If you want to be able to update without entering sudo password everytime. Replace user_name with yours. May be a security consideration. 

```bash
sudo visudo
# add the following to just before the last line to allow apt update without typing pw
# remember to replace user_name below with your actual user name
user_name ALL=(ALL) NOPASSWD: /usr/bin/apt update, /usr/bin/apt upgrade -y, /usr/bin/apt list

Defaults env_keep += "TERMINFO"
```
To save the file with Nano: Ctrl-x Y 

Recommend aliasing to up by adding the following line in ~/.bashrc

`alias up='sudo apt update && sudo apt upgrade -y'`


## Internationalization  (example for Japanese)

`sudo apt install -y fonts-ipafont fonts-vlgothic xfonts-intl-japanese xfonts-intl-japanese-big fonts-roboto`

Settings > System > Region & Language > Manage Installed languages

```bash
sudo apt install ibus-mozc 
ibus restart 
gsettings set org.gnome.desktop.input-sources sources "[('xkb', 'jp'), ('ibus', 'mozc-jp'), ('xkb', 'us')]"
```

`ibus-setup`　if you want to add input languages.

Settings > Keyboard > Input Sources (add your input sources and make sure they are in the order you want).


## Docker Installation

```bash
sudo apt remove docker.io docker-doc docker-compose podman-docker containerd runc
sudo apt install -y ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] \
  https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo ${UBUNTU_CODENAME:-$VERSION_CODENAME}) stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
sudo systemctl enable --now docker
sudo usermod -aG docker $USER
```

Must Restart Computer before verifying installation
```bash
docker --version
docker compose version
docker run hello-world
```


## Dev Tools

### Create directories 
`mkdir -p ~/bin ~/dev/java ~/dev/python ~/dev/ts`

### Git
```bash
sudo apt-get install git
git config --global core.editor "vim"
git config --global user.name "Your Name"
git config --global user.email your.name@email.com
```


#### Do you want to copy the keys or create new ones?


##### Create new ones

```bash
cd ~/.ssh
ssh-keygen -t rsa -b 4096 -C "your.name@email.com"`
# press enter three times
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa
wl-copy < ~/.ssh/id_rsa.pub
```

Open GitHub's [Add new SSH Key](https://github.com/settings/ssh/new) and paste there.

##### Alternatively copy over old ~/.ssh folder to new install


### [mise](https://github.com/jdx/mise) 

one config file to manage tools (node, python, rust, go, etc) 

```bash
curl https://mise.run | sh
# .bashrc should have echo 'eval "$(~/.local/bin/mise activate bash)"' >> ~/.bashrc
mise use --global node@lts
```

### Python 

#### [UV](https://docs.astral.sh/uv/)
```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
# echo 'eval "$(uv generate-shell-completion bash)"' >> ~/.bashrc
uv tool install ipdb 
uv tool install ipython
uv tool install ruff
```

### [Antigravity](https://antigravity.google/download/linux)


### [VS Code](https://code.visualstudio.com/docs/setup/linux#_install-vs-code-on-linux)
```bash
code_url="https://go.microsoft.com/fwlink/?LinkID=760868"
curl -Lo code_latest_amd64.deb "$code_url"
sudo apt install ./code_latest_amd64.deb

```

### [OpenCode](https://opencode.ai/docs/#install)

### [DBeaver - Universal Database Tool](https://dbeaver.io/)
```bash
wget -O- https://dbeaver.io/debs/dbeaver.gpg.key | gpg --dearmor | sudo tee /usr/share/keyrings/dbeaver-archive-keyring.gpg > /dev/null
rm dbeaver.gpg.key
echo "deb [signed-by=/usr/share/keyrings/dbeaver-archive-keyring.gpg] https://dbeaver.io/debs/dbeaver-ce /" | sudo tee /etc/apt/sources.list.d/dbeaver.list
sudo apt-get update && sudo apt-get install dbeaver-ce
```


## Other Misc. Apps

### [Anki - powerful, intelligent flashcards](https://apps.ankiweb.net/#downloads)
```bash
sudo apt install libxcb-xinerama0 libxcb-cursor0 libnss3 mplayer
anki_url="https://github.com/ankitects/anki/releases/download/25.09/anki-launcher-25.09-linux.tar.zst"
curl -OL "$anki_url"
mkdir -p ~/.local/share/anki
tar --use-compress-program=unzstd -xf "${anki_url##*/}" -C ~/.local/share/anki --strip-components=1
ln -s ~/.local/share/anki/anki ~/.local/bin/anki
echo 'export ANKI_WAYLAND-1' >> ~/.bashrc
cp ~/.local/share/anki/anki.desktop ~/.local/share/applications/
sed -i "s|^Exec=.*|Exec=env ANKI_WAYLAND=1 ${HOME}/.local/share/anki/anki %f|" ${HOME}/.local/share/applications/anki.desktop
sed -i "s|^TryExec=.*|TryExec=${HOME}/.local/share/anki/anki|" ${HOME}/.local/share/applications/anki.desktop
sed -i "s|^Icon=.*|Icon=${HOME}/.local/share/anki/anki.png|" ${HOME}/.local/share/applications/anki.desktop
```

Will need to logout of session and back in before using.

HyperTTS - In Anki, click Tools -> Add-ons, then click Get Add-ons. Type in the addon number:  111623432. After installation, restart Anki. Go to to Tools -> HyperTTS: Services Configuration - Enable Free Services
