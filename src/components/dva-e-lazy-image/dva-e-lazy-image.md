---
name: Lazy Image
category: Atoms
---

Image which is lazy loaded if near viewport.

### Supported aspect-ratios:
- `21:9`
- `16:9`
- `4:3`
- `2:1`
- `1:1`
- `2:3`
- `9:16`
- `cover` (the image keeps its aspect ratio and fills the given dimension. The image will be clipped to fit)
- `contain` (the image keeps its aspect ratio, but is resized to fit within the given dimension)
- `fill` (is handled as "no-ratio", e.g. used in [C40] Image Gallery](index.html#c-40-image-gallery))

```dva-e-lazy-image:dva-e-lazy-image.html
```

```dva-e-lazy-image.css hidden
.dva-e-lazy-image {
	width:300px;
}
```