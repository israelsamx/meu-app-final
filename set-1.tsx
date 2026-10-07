import { createFileRoute } from '@tanstack/react-router';
import { ImageScreen } from '@/components/image-screen';

export const Route = createFileRoute('/set-1')({
  head: () => ({ meta: [
    { title: 'First Image Set · Personal Gallery' },
    { name: 'description', content: 'Your first personal image collection.' },
    { property: 'og:title', content: 'First Image Set · Personal Gallery' },
    { property: 'og:description', content: 'Your first personal image collection.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary' },
  ] }),
  component: () => <ImageScreen set={1} />,
});