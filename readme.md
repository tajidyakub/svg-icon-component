# SVG Icon Component

> Menggunakan inline SVG melalui custom component.

![SVG Icon Component](https://cdn.jsdelivr.net/gh/tajidyakub/svg-icon-component@master/svg-icon-component.png)

- Tajid Yakub <tajid.yakub@gmail.com>
- https://github.com/tajidyakub/svg-icon-component




## Instalasi

Penggunaan dapat dilakukan dengan memasukkan script yang dibutuhkan melalui `<script>` di dalam `<head>`

``` html
<script src="https://cdn.jsdelivr.net/gh/tajidyakub/svg-icon-component@latest/dist/svicon.js"></script>
```

Gunakan icon menggunakan custom tag `<sv-icon>` atau `<sv-icon-sprite>` di halaman HTML.

```html
<sv-icon scale="2.4" icon-path="/assets/svgs/link-2.svg" stroke-color="green"></sv-icon>
```

## Pengembangan

Pengembangan lebih lanjut menggunakan `nodejs` dan `npm` melalui git repositori yang dihost di github.

### Clone

```bash
$ git clone https://github.com/tajidyakub/svg-icon-component <project-folder>
$ cd <project-folder>
$ npm install
$ npm start
```
### Source Files dan build

Dikembangkan menggunakan stencil dan typescript, source file dapat ditemukan di dalam `src`. `src/components` untuk `class component` serta `src/assets` untuk default svg icon dan sprites yang diambil dari https://feathericons.com/.

`build` dapat dilakukan menggunakan `npm run build` sementara `npm start` dapat digunakan di tahapan pengembangan.

## Custom HTML Tag

Custom `html tag` dapat dimanfaatkan di halaman HTML anda melalui dua tag custom sebagai berikut;

- `<sv-icon icon-path="/path/ke/file.svg"></sv-icon>`
- `<sv-icon-sprite icon="idIcon"></sv-icon-sprite>`

## `sv-icon` dan `sv-icon-sprite` tag

`sv-icon` mengambil data vektor SVG dari file SVG yang ditentukan pada saat tag tersebut digunakan di halaman HTML, sementara `sv-icon-sprite` akan menginject file SVG Sprite ke halaman HTML dan memanggil data vektor berdasarkan id dari symbol yang didefinisikan di sprite tekait.

### Attribute Tag

Berikut properties yang dapat diubah melalui tag attribute beserta default value dari masing-masig properti.

- `scale` default `1`
- `fill-color` default `none`
- `stroke-color` default `currentColor`
- `stroke-width` default `2`

### Contoh penggunaan

Berikut beberapa contoh penggunaan dengan attribute yang berbeda;

``` html
<sv-icon scale="2.4" icon-path="/assets/svgs/map-pin.svg" stroke-color="blue"></sv-icon>
```

```html
<sv-icon scale="2.4" icon-path="/assets/svgs/grid.svg" stroke-color="black" fill-color="red" stroke-width="1"></sv-icon>
```

## SVG Sprites
### Sprite format


File sprite secara default diletakkan di dalam direktori `src/assets/sprites` dengan nama file `sprites.svg` dan memiliki format sebagai berikut;


``` html
<svg xmlns="https://www.w3.org/2000/svg">
  <defs>
    <symbol id="airplay" viewBox="0 0 24 24">
      <!--SVG Paths-->
    </sybol>
    <symbol id="chevron-right" viewBox="0 0 24 24">
      <!--SVG Paths-->
    </sybol>
  </defs>
</svg>
```

### Caching

Inject SVG Sprites dilakukan di dalam html dengan secara default memiliki hidden attributes sehingga tidak membutuhkan ruang representasi di dalam DOM.

Hal ini hanya dilakukan pada `request` pertama dan melalui `cache` pada `request` berikutnya.
