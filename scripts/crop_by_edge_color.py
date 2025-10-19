from PIL import Image
from collections import deque
import os
import math

SRC = 'public/images/logo.png'
BACKUP = 'public/images/logo.orig.png'
TOLERANCE = 80  # color distance tolerance (0-442)
ALPHA_THRESHOLD = 250  # treat near-transparent as background


def color_dist(c1, c2):
    return math.sqrt(sum((a - b) ** 2 for a, b in zip(c1, c2)))


def average_color(cols):
    r = sum(c[0] for c in cols) / len(cols)
    g = sum(c[1] for c in cols) / len(cols)
    b = sum(c[2] for c in cols) / len(cols)
    return (int(r), int(g), int(b))


def main():
    if not os.path.exists(SRC):
        print('Source image not found:', SRC)
        return

    # Backup original if not already backed up
    if not os.path.exists(BACKUP):
        print('Creating backup:', BACKUP)
        Image.open(SRC).save(BACKUP)

    img = Image.open(SRC).convert('RGBA')
    w, h = img.size
    px = img.load()

    # Sample border colors
    border_colors = []
    for x in range(w):
        border_colors.append(px[x, 0][:3])
        border_colors.append(px[x, h - 1][:3])
    for y in range(h):
        border_colors.append(px[0, y][:3])
        border_colors.append(px[w - 1, y][:3])

    avg = average_color(border_colors)
    print('Sampled average border color:', avg)

    visited = [[False] * w for _ in range(h)]
    q = deque()

    # Enqueue border pixels within tolerance
    for x in range(w):
        r, g, b, a = px[x, 0]
        if a < ALPHA_THRESHOLD or color_dist((r, g, b), avg) <= TOLERANCE:
            q.append((x, 0))
            visited[0][x] = True
        r, g, b, a = px[x, h - 1]
        if a < ALPHA_THRESHOLD or color_dist((r, g, b), avg) <= TOLERANCE:
            q.append((x, h - 1))
            visited[h - 1][x] = True

    for y in range(h):
        r, g, b, a = px[0, y]
        if (a < ALPHA_THRESHOLD or color_dist((r, g, b), avg) <= TOLERANCE) and not visited[y][0]:
            q.append((0, y))
            visited[y][0] = True
        r, g, b, a = px[w - 1, y]
        if (a < ALPHA_THRESHOLD or color_dist((r, g, b), avg) <= TOLERANCE) and not visited[y][w - 1]:
            q.append((w - 1, y))
            visited[y][w - 1] = True

    removed = 0
    dirs = [(1, 0), (-1, 0), (0, 1), (0, -1)]

    while q:
        x, y = q.popleft()
        r, g, b, a = px[x, y]
        if px[x, y][3] == 0:
            continue
        if a >= ALPHA_THRESHOLD and color_dist((r, g, b), avg) > TOLERANCE:
            continue
        px[x, y] = (r, g, b, 0)
        removed += 1
        for dx, dy in dirs:
            nx, ny = x + dx, y + dy
            if 0 <= nx < w and 0 <= ny < h and not visited[ny][nx]:
                visited[ny][nx] = True
                nr, ng, nb, na = px[nx, ny]
                if na < ALPHA_THRESHOLD or color_dist((nr, ng, nb), avg) <= TOLERANCE:
                    q.append((nx, ny))

    print('Removed', removed, 'edge-connected pixels (made transparent)')

    bbox = img.getbbox()
    if bbox:
        cropped = img.crop(bbox)
        cropped.save(SRC)
        print('Cropped size:', cropped.size)
    else:
        print('No bbox found; image left unchanged')


if __name__ == '__main__':
    main()
