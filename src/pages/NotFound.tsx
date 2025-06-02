
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <PageLayout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center">
        <h1 className="text-7xl font-bold mb-6">404</h1>
        <h2 className="text-2xl font-heading font-medium mb-6">Page Not Found</h2>
        <p className="text-muted-foreground max-w-md mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild>
          <Link to="/">Return Home</Link>
        </Button>
      </div>
    </PageLayout>
  );
};

export default NotFound;
