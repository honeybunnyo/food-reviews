'use client';

import Image from 'next/image';
import { useState } from 'react';

export function SkeletonImage({
  src,
  alt,
  className = '',
  priority = false,
  sizes,
}) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-full overflow-hidden bg-gray-200">
      {/* Skeleton background */}
      {isLoading && (
        <div className="absolute inset-0 animate-pulse bg-gray-300" />
      )}

      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={`object-cover transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'} ${className}`}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}
