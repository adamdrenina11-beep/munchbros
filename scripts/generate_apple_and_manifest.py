from PIL import Image
from pathlib import Path

root = Path(__file__).resolve().parents[1]
src = root / 'public' / 'images' / 'logo.png'
out = root / 'public'

if not src.exists():
    print('Source logo not found:', src)
    raise SystemExit(1)

img = Image.open(src).convert('RGBA')
max_size = max(img.width, img.height)
canvas = Image.new('RGBA', (max_size, max_size), (0,0,0,0))
canvas.paste(img, ((max_size - img.width)//2, (max_size - img.height)//2), img)

apple = canvas.resize((180,180), Image.LANCZOS)
apple_path = out / 'apple-touch-icon.png'
apple.save(apple_path)
print('Wrote', apple_path)

manifest = {
    "name": "Munch Bro's Senec",
    "short_name": "MunchBro's",
    "start_url": "/",
    "display": "standalone",
    "background_color": "#ffffff",
    "theme_color": "#000000",
    "icons": [
        {"src": "/favicon-192.png", "sizes": "192x192", "type": "image/png"},
        {"src": "/favicon-512.png", "sizes": "512x512", "type": "image/png"},
        {"src": "/apple-touch-icon.png", "sizes": "180x180", "type": "image/png"}
    ]
}

import json
(manifest_path := out / 'manifest.webmanifest').write_text(json.dumps(manifest, indent=2))
print('Wrote', manifest_path)
