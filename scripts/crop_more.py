from PIL import Image
img = Image.open('public/images/logo.png')
img = img.convert('RGBA')
width,height = img.size
pixels = img.load()
removed=0
for y in range(height):
    for x in range(width):
        r,g,b,a = pixels[x,y]
        if a < 250:
            pixels[x,y] = (r,g,b,0)
            removed+=1
            continue
        # More aggressive brown/pale removal
        if (r>100 and g>60 and b<140 and (r-g)<80 and (r-b)>-20):
            pixels[x,y] = (r,g,b,0)
            removed+=1
print('Removed', removed)
# crop bbox
bbox = img.getbbox()
if bbox:
    cropped = img.crop(bbox)
    cropped.save('public/images/logo.png')
    print('Cropped size:', cropped.size)
else:
    print('No bbox')
