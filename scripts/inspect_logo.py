from PIL import Image
img = Image.open('public/images/logo.png')
print('mode, size =', img.mode, img.size)
img = img.convert('RGBA')
px = img.load()
w,h = img.size
trans = 0
for y in range(h):
    for x in range(w):
        if px[x,y][3] == 0:
            trans += 1
print('transparent pixels:', trans)
