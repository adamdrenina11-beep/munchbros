from PIL import Image

# Otvor logo
img = Image.open('public/images/logo.png')

# Zisti rozmery
width, height = img.size
print(f"Original size: {width}x{height}")

# Konvertuj na RGBA ak nie je
if img.mode != 'RGBA':
    img = img.convert('RGBA')

# Vytvor novy obrazok kde nahradime pozadie za transparentne
pixels = img.load()
removed_count = 0

for y in range(height):
    for x in range(width):
        r, g, b, a = pixels[x, y]
        
        # Odstran uz transparentne pixely
        if a < 250:
            pixels[x, y] = (r, g, b, 0)
            removed_count += 1
            continue
        
        # Odstran tmave pozadie (cierne/sive/hnede odtiene)
        # Ak su vsetky RGB hodnoty nizke (tmave farby)
        is_dark_background = (r < 80 and g < 80 and b < 80)
        
        # Odstran hnede/bezove farby (okraj burgera)
        is_brown = (
            (90 < r < 200 and 70 < g < 180 and 50 < b < 160) and
            abs(r - g) < 50 and abs(r - b) < 50
        )
        
        if is_dark_background or is_brown:
            pixels[x, y] = (r, g, b, 0)
            removed_count += 1

print(f"Removed {removed_count} background pixels")

# Najdi boundaries bez transparentnych pixelov
bbox = img.getbbox()

if bbox:
    # Orezaj
    cropped = img.crop(bbox)
    
    # Uloz
    cropped.save('public/images/logo.png')
    print(f"Cropped size: {cropped.size}")
    print("Logo uspesne orezane - pozadie odstranene!")
else:
    print("Nepodarilo sa najst hranice na orezanie")
