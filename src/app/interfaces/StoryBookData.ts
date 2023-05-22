export interface StoryBookImages {
  src: string,
  descriptionAlt: string,
  scripts: string[]
}

export interface StoryBookData {
  id: number,
  title: string,
  description: string,
  images: StoryBookImages[],
}
