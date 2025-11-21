import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The product or page you're looking for doesn't exist. Please check the URL or return to our homepage.
        </p>
        <Button asChild size="lg" className="bg-blue-900 hover:bg-blue-800">
          <Link href="/">
            <Home className="mr-2 h-5 w-5" />
            Back to Homepage
          </Link>
        </Button>
      </div>
    </div>
  );
}
