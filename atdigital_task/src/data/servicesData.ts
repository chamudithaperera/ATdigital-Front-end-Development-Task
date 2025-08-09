export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  image: string;
  layout: 'imageLeft' | 'imageRight';
}

import computerImage from '../assets/computerImage.png';
import searchImage from '../assets/searchImage.png';

export const servicesData: ServiceItem[] = [
  {
    id: 'web-mobile-development',
    title: 'Web & Mobile App Development',
    description:
      'Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.',
    buttonText: 'LEARN MORE',
    buttonLink: '/services/web-development',
    image: computerImage,
    layout: 'imageLeft',
  },
  {
    id: 'digital-strategy-consulting',
    title: 'Digital Strategy Consulting',
    description:
      'Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.',
    buttonText: 'LEARN MORE',
    buttonLink: '/services/digital-strategy',
    image: searchImage,
    layout: 'imageRight',
  },
];

export default servicesData;
