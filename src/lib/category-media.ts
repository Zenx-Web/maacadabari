const CATEGORY_MEDIA: Record<string, { image: string; video: string }> = {
  animation: {
    image: "/images/coursecard/animation.jpeg",
    video: "/images/coursecard/animation.mp4",
  },
  broadcast: {
    image: "/images/coursecard/broadcast.webp",
    video: "/images/coursecard/broadcast.mp4",
  },
  "digital-design": {
    image: "/images/coursecard/digitaldesign.jpg",
    video: "/images/coursecard/digitaldesign.mp4",
  },
  "digital-filmmaking-photography": {
    image: "/images/coursecard/digitalfilmmaking.jpeg",
    video: "/images/coursecard/digitalfilmmaking.mkv",
  },
  "game-design": {
    image: "/images/coursecard/gamedesign.jpeg",
    video: "/images/coursecard/gamedesign.mp4",
  },
  uiux: {
    image: "/images/coursecard/uiux.webp",
    video: "/images/coursecard/uiux.mp4",
  },
  vfx: {
    image: "/images/coursecard/visualeffect.jpeg",
    video: "/images/coursecard/visualeffect.mp4",
  },
};

export function getCategoryMedia(categorySlug: string) {
  return CATEGORY_MEDIA[categorySlug] ?? null;
}
