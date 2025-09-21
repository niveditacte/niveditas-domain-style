import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="font-display font-bold text-2xl mb-2">
              Nivedita Vishwakarma
            </h3>
            <p className="text-primary-foreground/80">
              Data Science & Food Process Engineering Enthusiast
            </p>
          </div>
          
          <div className="border-t border-primary-foreground/20 pt-6">
            <p className="flex items-center justify-center gap-2 text-primary-foreground/70">
              Built with 
              <Heart className="h-4 w-4 text-red-400 fill-current" />
              using React, TypeScript & Tailwind CSS
            </p>
            <p className="text-primary-foreground/60 text-sm mt-2">
              © {new Date().getFullYear()} Nivedita Vishwakarma. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;