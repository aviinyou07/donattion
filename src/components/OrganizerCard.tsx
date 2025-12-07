import { User, MapPin, MessageCircle, Calendar, Heart, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const OrganizerCard = () => {
  return (
    <div className="border-t border-border pt-8 mt-8">
      <h2 className="text-xl font-bold text-foreground mb-6">Organizer</h2>
      
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
          <User className="w-6 h-6 text-muted-foreground" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-foreground">Sonika Sonika</h3>
          <p className="text-sm text-muted-foreground mb-1">Organizer</p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" />
            England
          </p>
          <Button variant="outline" size="sm" className="mt-3 rounded-full text-sm">
            <MessageCircle className="w-4 h-4 mr-1" />
            Contact
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap gap-x-6 gap-y-2 mt-6 text-sm text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <Calendar className="w-4 h-4" />
          Created 6 d ago
        </span>
        <a href="#" className="flex items-center gap-1.5 hover:text-foreground">
          <Heart className="w-4 h-4" />
          Funerals & Memorials
        </a>
        <span className="flex items-center gap-1.5">
          <Shield className="w-4 h-4" />
          Donation protected
        </span>
      </div>

      <button className="text-sm text-muted-foreground mt-4 hover:underline">
        Report fundraiser
      </button>
    </div>
  );
};

export default OrganizerCard;
