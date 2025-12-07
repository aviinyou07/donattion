import Header from "@/components/Header";
import { Link } from "react-router-dom";
import DonationSidebar from "@/components/DonationSidebar";
import CampaignStory from "@/components/CampaignStory";
import OrganizerCard from "@/components/OrganizerCard";
import TrustBadges from "@/components/TrustBadges";
import campaignImage from "@/assets/campaign-image.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-2xl font-bold text-foreground mb-6">
          Repatriation of Vijay's Mortal Remains to India
        </h1>

        <div className="grid lg:grid-cols-[1fr,380px] gap-8">
          <div>
            {/* Campaign Image */}
            <div className="relative rounded-xl overflow-hidden mb-6 bg-muted">
              <img 
                src={campaignImage} 
                alt="Vijay Kumar Sheoran" 
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute bottom-4 right-4 flex gap-2">
                <button className="w-10 h-10 rounded-full bg-background/80 backdrop-blur flex items-center justify-center hover:bg-background transition-colors">
                  <ChevronLeft className="w-5 h-5 text-foreground" />
                </button>
                <button className="w-10 h-10 rounded-full bg-background/80 backdrop-blur flex items-center justify-center hover:bg-background transition-colors">
                  <ChevronRight className="w-5 h-5 text-foreground" />
                </button>
              </div>
            </div>

            {/* Campaign Story */}
            <CampaignStory />

            {/* Organizer Card */}
            <OrganizerCard />

           
          </div>

          {/* Donation Sidebar - Desktop */}
          <div className="hidden lg:block">
            <DonationSidebar />
          </div>
        </div>

         {/* Trust Badges */}
            <TrustBadges />

            <Footer/>

        {/* Mobile Sticky Donate Button */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-background border-t border-border">
          <div className="flex gap-3">
            <button className="flex-1 h-12 rounded-full border border-foreground text-foreground font-semibold hover:bg-muted transition-colors">
              Share
            </button>
            <Link to="/donate" className="flex-1 h-12 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center">
              Donate
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
