import React from 'react'
import Image from 'next/image'

const ImageDisplay = ({ images }) => {
  return (
    <div className="flex gap-4 flex-wrap">
      {images && images.map((url, idx) => (
        <Image
          key={idx}
          src={url}
          alt={`image ${idx + 1}`}
          className="rounded-sm w-48 h-48 object-cover"
          width={192}
          height={192}
        />
      ))}
    </div>
  );
};


export default ImageDisplay