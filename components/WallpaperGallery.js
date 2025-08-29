class WallpaperGallery {
    constructor(container) {
        this.container = container;
        this.images = [];
    }

    async loadImages() {
        try {
            const response = await fetch('https://api.example.com/wallpapers'); // Replace with actual API endpoint
            this.images = await response.json();
            this.renderGallery();
        } catch (error) {
            console.error('Error loading images:', error);
        }
    }

    renderGallery() {
        this.container.innerHTML = '';
        this.images.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image.url; // Assuming the image object has a 'url' property
            imgElement.alt = image.description || 'Wallpaper Image'; // Assuming the image object has a 'description' property
            imgElement.classList.add('gallery-image');
            this.container.appendChild(imgElement);
        });
    }
}

export default WallpaperGallery;