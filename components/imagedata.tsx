"use client"
const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const GalleryPhotos = [
    { width: 1312, height: 1968, src: '/img/gallery/DSC05403_50.jpg', title:'123', description: '456' },
    { width: 3000, height: 2000, src: '/img/gallery/DSC03387_50.jpg', title:'', description: '' },
    { width: 3000, height: 2000, src: '/img/gallery/DSC02415_50.jpg', title:'', description: '' },
    { width: 3000, height: 1688, src: '/img/gallery/DSC00742_50.jpg', title:'', description: '' },
    { width: 3000, height: 1688, src: '/img/gallery/DSC04362_50.jpg', title:'', description: '' },
    { width: 1968, height: 1108, src: '/img/gallery/DSC06039_50.jpg', title:'', description: '' },
    { width: 1312, height: 1968, src: '/img/gallery/DSC07189_50.jpg', title:'', description: '' },
    { width: 3000, height: 2000, src: '/img/gallery/DSC02706_50.jpg', title:'', description: '' },
    { width: 2000, height: 1125, src: '/img/gallery/DJI_0142_50.jpg', title:'', description: '' },
    { width: 3000, height: 2000, src: '/img/gallery/DSC03356_50.jpg', title:'', description: '' },
    { width: 2000, height: 1125, src: '/img/gallery/DJI_0249_50.jpg', title:'', description: '' },
    { width: 3000, height: 2000, src: '/img/gallery/DSC02401_50.jpg', title:'', description: '' },
    { width: 1968, height: 1312, src: '/img/gallery/DSC05325_50.jpg', title:'', description: '' },
    { width: 3000, height: 2000, src: '/img/gallery/DSC02544_50.jpg', title:'', description: '' },
    { width: 2000, height: 3000, src: '/img/gallery/DSC01936_50.jpg', title:'', description: '' },
    { width: 1312, height: 1968, src: '/img/gallery/DSC06854_50.jpg', title:'', description: '' },
    { width: 1312, height: 1968, src: '/img/gallery/DSC07215_50.jpg', title:'', description: '' },
    { width: 2000, height: 1125, src: '/img/gallery/DJI_0266_50.jpg', title:'', description: '' },
    { width: 3000, height: 2000, src: '/img/gallery/DSC02750_50.jpg', title:'', description: '' },
    { width: 1968, height: 1312, src: '/img/gallery/DSC05269_50.jpg', title:'', description: '' },
    { width: 1968, height: 1312, src: '/img/gallery/DSC06229_50.jpg', title:'', description: '' },
    { width: 3000, height: 2000, src: '/img/gallery/DSC01792_50.jpg', title:'', description: '' },
    { width: 2000, height: 1125, src: '/img/gallery/DJI_0348_50.jpg', title:'', description: '' },
    { width: 3000, height: 2000, src: '/img/gallery/DSC02932_50.jpg', title:'', description: '' },
    { width: 3000, height: 2000, src: '/img/gallery/DSC02123_50.jpg', title:'', description: '' },
    { width: 1968, height: 1312, src: '/img/gallery/DSC05588_50.jpg', title:'', description: '' },
    { width: 3000, height: 2000, src: '/img/gallery/DSC03271_50.jpg', title:'', description: '' },
    { width: 2000, height: 1125, src: '/img/gallery/DJI_0270_50.jpg', title:'', description: '' },
    { width: 3000, height: 2000, src: '/img/gallery/DSC00175_50.jpg', title:'', description: '' },
    { width: 1968, height: 1108, src: '/img/gallery/DSC05699_50.jpg', title:'', description: '' },
];

const photos = GalleryPhotos.map((photo) => {

    const width = breakpoints[0];
    const height = (photo.height / photo.width) * width;
    const src = photo.src
    const title = photo.title
    const description = photo.description

    return {
        src: photo.src,
        width,
        height,
        title,
        description,
        srcSet: breakpoints.map((breakpoint) => {
            const height = Math.round((photo.height / photo.width) * breakpoint);
            return {
                src: photo.src,
                width,
                height,
                title:photo.title,
                des:photo.description,
            };
        }),
    };
});

export default photos;
