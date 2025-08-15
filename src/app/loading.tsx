import { Loader } from 'lucide-react';

export default function Loading() {
  return (
    <main className="flex h-dvh w-full items-center justify-center">
      <Loader className="text-primary size-6 animate-spin" />
    </main>
  );
}
