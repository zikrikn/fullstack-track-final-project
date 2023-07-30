const MenuWithYouTube = () => {
    return (
        <div>
            <h2>Judul Youtube dari DB</h2>
            <div>
                {/* Ganti kode iframe di bawah dengan kode embed video YouTube Anda */}
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/NdA6aQR-s4U"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default MenuWithYouTube;
