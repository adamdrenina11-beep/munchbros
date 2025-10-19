from PIL import Image
from pathlib import Path

src = Path(__file__).resolve().parents[1] / 'public' / 'images' / 'logo.png'
out = Path(__file__).resolve().parents[1] / 'public'

if not src.exists():
    print(f"Source logo not found: {src}")
    raise SystemExit(1)

print(f"Using source: {src}")

img = Image.open(src).convert('RGBA')
# Ensure square canvas for favicons
max_size = max(img.width, img.height)
canvas = Image.new('RGBA', (max_size, max_size), (0,0,0,0))
canvas.paste(img, ((max_size - img.width)//2, (max_size - img.height)//2), img)

sizes = [16, 32, 64, 192, 512]
for s in sizes:
    out_path = out / f'favicon-{s}.png'
    resized = canvas.resize((s, s), Image.LANCZOS)
    resized.save(out_path)
    print(f"Wrote {out_path}")

# Create favicon.ico combining multiple sizes
ico_sizes = [16, 32, 48, 64]
ico_images = [canvas.resize((i, i), Image.LANCZOS) for i in ico_sizes]
ico_path = out / 'favicon.ico'
ico_images[0].save(ico_path, sizes=[(i, i) for i in ico_sizes])
print(f"Wrote {ico_path}")

print('Done')
