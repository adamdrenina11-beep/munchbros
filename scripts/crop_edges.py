from PIL import Image
from collections import deque
import os

SRC = 'public/images/logo.png'
BACKUP = 'public/images/logo.orig.png'

def is_background_pixel(r, g, b, a):
    # Transparent or near-transparent
    if a < 250:
        return True
    # Brown/pale background heuristic (same as previous script)
    if (r > 100 and g > 60 and b < 140 and (r - g) < 80 and (r - b) > -20):
        return True
    return False


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

    visited = [[False] * w for _ in range(h)]
    q = deque()

    # Enqueue border pixels that match background heuristic
    for x in range(w):
        r, g, b, a = px[x, 0]
        if is_background_pixel(r, g, b, a):
            q.append((x, 0))
            visited[0][x] = True
        r, g, b, a = px[x, h - 1]
        if is_background_pixel(r, g, b, a):
            q.append((x, h - 1))
            visited[h - 1][x] = True

    for y in range(h):
        r, g, b, a = px[0, y]
        if is_background_pixel(r, g, b, a) and not visited[y][0]:
            q.append((0, y))
            visited[y][0] = True
        r, g, b, a = px[w - 1, y]
        if is_background_pixel(r, g, b, a) and not visited[y][w - 1]:
            q.append((w - 1, y))
            visited[y][w - 1] = True

    removed = 0
    dirs = [(1, 0), (-1, 0), (0, 1), (0, -1)]

    while q:
        x, y = q.popleft()
        r, g, b, a = px[x, y]
        # If already transparent, skip
        if px[x, y][3] == 0:
            continue
        # Double-check it's still a background pixel
        if not is_background_pixel(r, g, b, a):
            continue
        px[x, y] = (r, g, b, 0)
        removed += 1
        for dx, dy in dirs:
            nx, ny = x + dx, y + dy
            if 0 <= nx < w and 0 <= ny < h and not visited[ny][nx]:
                visited[ny][nx] = True
                nr, ng, nb, na = px[nx, ny]
                if is_background_pixel(nr, ng, nb, na):
                    q.append((nx, ny))

    print('Removed', removed, 'edge-connected background pixels')

    bbox = img.getbbox()
    if bbox:
        cropped = img.crop(bbox)
        cropped.save(SRC)
        print('Cropped size:', cropped.size)
    else:
        print('No bbox found; image left unchanged')


if __name__ == '__main__':
    main()
