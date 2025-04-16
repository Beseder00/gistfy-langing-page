import PostToLocalhost from '@/components/PostToLocalhost';

export default function PostTestPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Test Posting to Localhost</h1>
      <div className="max-w-3xl mx-auto">
        <PostToLocalhost />
        
        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">How It Works</h2>
          <p className="mb-2">
            This page demonstrates posting data to a local API endpoint at <code className="bg-gray-200 px-1 rounded">/api/post</code>.
          </p>
          <p className="mb-2">
            The form above collects user input, then sends it as JSON to the server when submitted.
          </p>
          <p>
            The server processes the request and returns a response that is displayed below the form.
          </p>
        </div>
      </div>
    </div>
  );
} 