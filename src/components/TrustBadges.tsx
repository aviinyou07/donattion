import { Zap, Heart, Shield } from "lucide-react";

const TrustBadges = () => {
  return (
    <div className=" bg-[#f5f5f5] border-t border-border pt-10 mt-10">
      <h2 className="text-2xl font-bold text-foreground text-center mb-8">
        Your easy, powerful, and trusted home for help
      </h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
            <Zap className="w-6 h-6 text-foreground" />
          </div>
          <h3 className="font-semibold text-foreground mb-2">Easy</h3>
          <p className="text-muted-foreground text-sm">
            Donate quickly and easily
          </p>
        </div>
        
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
            <Heart className="w-6 h-6 text-foreground" />
          </div>
          <h3 className="font-semibold text-foreground mb-2">Powerful</h3>
          <p className="text-muted-foreground text-sm">
            Send help right to the people and causes you care about
          </p>
        </div>
        
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
            <Shield className="w-6 h-6 text-foreground" />
          </div>
          <h3 className="font-semibold text-foreground mb-2">Trusted</h3>
          <p className="text-muted-foreground text-sm">
            Your donation is protected by the{" "}
            <a href="#" className="text-primary hover:underline">
              GoFundMe Giving Guarantee
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrustBadges;
