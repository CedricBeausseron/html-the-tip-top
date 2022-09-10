https://pixlr.com/x/#editor

Bootstrap breakpoints :
xs: 0,
sm: 576px,
md: 768px,
lg: 992px,
xl: 1200px,
xxl: 1400px

tailles images
600x1024
768x1280
1024x600
1280x800
1440x900
1920x1080

Appel images :
<picture>
    <source media="(max-width: 576px)" srcset="../assets/img/600-1024/image.webp">
    <source media="(max-width: 768px)" srcset="../assets/img/768-1280/image.webp">
    <source media="(max-width: 992px)" srcset="../assets/img/1024-600/image.webp">
    <source media="(max-width: 1200px)" srcset="../assets/img/1280-800/image.webp">
    <source media="(max-width: 1400px)" srcset="../assets/img/1440-900/image.webp">
    <img class="img-fluid" src="../assets/img/1920-1080/image.webp" alt="description image">
</picture>