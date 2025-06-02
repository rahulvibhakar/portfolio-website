import { PageLayout } from "@/components/PageLayout";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">Contact Me</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out.
          </p>
        </div>

        {/* Full width stacked cards */}
        <div className="max-w-2xl mx-auto flex flex-col gap-6">
          {/* Email */}
          <Card className="p-6 text-center w-full">
            <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold mb-2">Email</h3>
            <p className="text-muted-foreground mb-4">For any queries</p>
            <a href="mailto:rahul.vibhakar04@gmail.com" className="text-primary font-medium break-all">
              rahul.vibhakar04@gmail.com
            </a>
          </Card>

          {/* Phone */}
          <Card className="p-6 text-center w-full">
            <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold mb-2">Phone</h3>
            <p className="text-muted-foreground mb-4"></p>
            <a href="tel:+919483056352" className="text-primary font-medium">
              +91 94830 56352
            </a>
          </Card>

          {/* Location */}
          <Card className="p-6 text-center w-full">
            <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold mb-2">Location</h3>
            <p className="text-muted-foreground mb-4">Based in</p>
            <p className="text-primary font-medium">
              Bengaluru, Karnataka
            </p>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;
