from PIL import Image
import os

SRC = 'public/images/logo.png'
BACKUP = 'public/images/logo.backup_for_remove_browns.png'
PALETTE_COLORS = 8


def is_brown(rgb):
    r, g, b = rgb
    # heuristic: brown/tan tones: r relatively high, g medium, b low
    return (r > 70 and g > 40 and b < 140 and (r - g) < 100 and (r - b) > 10)


def meat_score(rgb):
    r, g, b = rgb
    # meat is redder: r significantly greater than g and b
    return r - max(g, b)


if not os.path.exists(SRC):
    print('Source not found:', SRC)
    raise SystemExit(1)

# backup
if not os.path.exists(BACKUP):
    print('Creating backup:', BACKUP)
    Image.open(SRC).save(BACKUP)

img = Image.open(SRC).convert('RGBA')
# quantize to small palette to group similar colors
img_q = img.convert('RGB').quantize(colors=PALETTE_COLORS, method=Image.MEDIANCUT)
palette = img_q.getpalette()  # flat list
palette_colors = [tuple(palette[i:i+3]) for i in range(0, len(palette), 3)][0:PALETTE_COLORS]

print('Palette colors:', palette_colors)

# map each palette index to whether it's brown
pal_is_brown = [is_brown(c) for c in palette_colors]
pal_meat_scores = [meat_score(c) for c in palette_colors]
meat_idx = max(range(len(pal_meat_scores)), key=lambda i: pal_meat_scores[i])

print('Brown flags:', pal_is_brown)
print('Meat scores:', pal_meat_scores)
print('Detected meat palette index:', meat_idx, 'color:', palette_colors[meat_idx])

# We'll remove (make transparent) all palette colors that are brown-like except meat_idx
remove_palette = [i for i, b in enumerate(pal_is_brown) if b and i != meat_idx]
print('Palette indices to remove:', remove_palette)

# Create RGBA output
w, h = img.size
px_q = img_q.load()
px_orig = img.load()
removed = 0
for y in range(h):
    for x in range(w):
        idx = px_q[x, y]
        if idx in remove_palette:
            r, g, b, a = px_orig[x, y]
            if a != 0:
                px_orig[x, y] = (r, g, b, 0)
                removed += 1

print('Removed (made transparent) pixels:', removed)

# Trim
bbox = img.getbbox()
if bbox:
    cropped = img.crop(bbox)
    cropped.save(SRC)
    print('Saved cropped:', SRC, 'size', cropped.size)
else:
    img.save(SRC)
    print('Saved (no crop):', SRC)
