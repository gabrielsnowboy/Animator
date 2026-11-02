# Animator

Lip-sync 2D characters to your audio and export videos, right in your browser.

Import a voice recording or gameplay audio, pick a character, and Animator moves its mouth with the speech. Export the result as an MP4 with a studio, green-screen, blue or black background.

## Features

- **Lip-sync from audio:** MP3, WAV, M4A, OGG, FLAC and more. Mouth shapes for open, wide, round and closed sounds.
- **Voice focus:** ignores steady game sounds and music, or load a separate voice-only track.
- **Your own characters:** import an SVG drawing, or an HTML model file that plays its own animation.
- **Fast export:** encodes on your graphics card, much faster than real time, with a timer and time left.
- **Works offline and installs like an app** in Chrome and Edge.
- **Private:** everything runs in your browser. Nothing is uploaded.

## Use it

Open the site's GitHub Pages address in **Chrome** or **Edge** (Firefox and Safari can play and preview, but fast export needs Chrome or Edge).

To install it: click **Install app** in the top bar, or the install icon in the browser's address bar.

## Make your own character

Animator reads any SVG drawing. Give these parts an `id` so Animator can move them:

| id | What it is | Needed? |
|---|---|---|
| `smile` | closed mouth | yes (or `mRest`) |
| `mouth` | open mouth | yes (or `mA`) |
| `mE`, `mO`, `mM` | wide, round and pressed-lips mouth shapes | optional |
| `eyes` | both eyes, for blinking | optional |
| `head` | the head, for tilting | optional |
| `armL`, `armR` | arms, drawn pointing up from the shoulder | optional |
| `pony` | a hair piece that sways | optional |

Imported models are saved in your browser on that computer only.

## Host your own copy

1. Create a new repository on GitHub and upload all the files in this folder (keep the `fonts`, `icons` and `vendor` folders).
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**, choose **main** and **/ (root)**, then **Save**.
4. After a minute, your site is live at `https://<your-username>.github.io/<repository-name>/`.

## Credits

- Fonts: Bricolage Grotesque, Figtree and JetBrains Mono (SIL Open Font License)
- [mp4-muxer](https://github.com/Vanilagy/mp4-muxer) (MIT) for building MP4 files
- [mpg123-decoder](https://github.com/eshaz/wasm-audio-decoders) (MIT) as a backup MP3 decoder

Made by Gabriel Snowboy.
