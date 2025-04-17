export default interface SpotCardProps {
    className?: string
    imageUrl: string;
    title: string;
    uuid: string;
    type: string;
    location: string;
    rating: number;
    tags?: string[]
  }