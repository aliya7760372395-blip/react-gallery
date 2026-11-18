import React, { useState } from "react";
import "./App.css";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      title: "Nature",
      category: "Nature",
      url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600"
    },
    {
      id: 2,
      title: "Mountains",
      category: "Nature",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600"
    },
    {
      id: 3,
      title: "Beach",
      category: "Travel",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600"
    },
    {
      id: 4,
      title: "City",
      category: "City",
      url: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=600"
    },
    {
      id: 5,
      title: "Flowers",
      category: "Nature",
      url: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600"
    },
    {
      id: 6,
      title: "Travel",
      category: "Travel",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600"
    }
  ];

  const [filter, setFilter] = useState("All");

  const filteredImages =
    filter === "All"
      ? images
      : images.filter((image) => image.category === filter);

  return (
    <div className="gallery-container">
      <header>
        <h1>My Photo Gallery</h1>
        <p>Explore the beauty of the world</p>
      </header>

      <div className="filter-buttons">
        {["All", "Nature", "Travel", "City"].map((category) => (
          <button
            key={category}
            className={filter === category ? "active" : ""}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="gallery">
        {filteredImages.map((image) => (
          <div className="image-card" key={image.id}>
            <img
              src={image.url}
              alt={image.title}
              onClick={() => setSelectedImage(image)}
            />
            <h3>{image.title}</h3>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="modal"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="close"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <img src={selectedImage.url} alt={selectedImage.title} />
          <h2>{selectedImage.title}</h2>
        </div>
      )}

      <footer>
        <p>© 2026 My Photo Gallery | React Project</p>
      </footer>
    </div>
  );
}

export default App;