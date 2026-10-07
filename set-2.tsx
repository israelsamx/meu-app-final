import { createFileRoute } from '@tanstack/react-router';
import { ImageScreen } from '@/components/image-screen';

export const Route = createFileRoute('/set-2')({
  head: () => ({ meta: [
    { title: 'Second Image Set · Personal Gallery' },
    { name: 'description', content: 'Your second personal image collection.' },
    { property: 'og:title', content: 'Second Image Set · Personal Gallery' },
    { property: 'og:description', content: 'Your second personal image collection.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary' },
  ] }),
  component: () => <ImageScreen set={2} />,
});