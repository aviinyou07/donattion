import { TrendingUp, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const donations = [
  { name: "Bhupinder Singh", amount: "£10", tag: "Recent donation" },
  { name: "Dharam Mann", amount: "£756", tag: "Top donation" },
  { name: "Anonymous", amount: "£5", tag: "2 d" },
  { name: "Anonymous", amount: "£10", tag: "2 d" },
  { name: "Anonymous", amount: "£10", tag: "2 d" },
];

const DonationSidebar = () => {
  const raised = 9584;
  const goal = 13000;
  const percentage = Math.round((raised / goal) * 100);

  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-sm sticky top-24">
      {/* Header Stats */}
      <div className="flex items-start gap-3 mb-4">
        <div className="relative">
          <div className="w-12 h-12 rounded-full border-4 border-muted flex items-center justify-center">
            <span className="text-xs text-muted-foreground">{percentage}%</span>
          </div>
        </div>
        <div>
          <p className="text-2xl font-bold text-foreground">
            £{raised.toLocaleString()} <span className="text-base font-normal text-muted-foreground">raised</span>{" "}
            <span className="text-base font-normal text-muted-foreground">of {goal >= 1000 ? `${goal / 1000}K` : goal}</span>
          </p>
          <p className="text-sm text-muted-foreground">282 donations</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-muted rounded-full mb-6 overflow-hidden">
        <div 
          className="h-full progress-bar rounded-full transition-all duration-500"
          style={{ width: `${Math.min(percentage, 100)}%` }}
        />
      </div>

      {/* Action Buttons */}
      <div className="space-y-3 mb-6">
        {/* Donate Button: Dark Green BG with Gold Text */}
        <Link to="/donate" className="block w-full">
          <Button className="w-full h-12 rounded-full bg-[#274a34] hover:bg-[#0b4230] text-[#cbf78d] font-bold text-lg shadow-none border-none transition-colors">
            Donate now
          </Button>
        </Link>
        
        {/* Share Button: Light Lime BG with Dark Green Text */}
        <Button className="w-full h-12 rounded-full bg-[#cbf78d] hover:bg-[#d4e8a0] text-[#274a34] font-bold text-lg border-none shadow-none transition-colors">
          Share
        </Button>
      </div>

      {/* Trending Badge */}
      <div className="flex items-center gap-2 text-primary mb-4">
        <TrendingUp className="w-5 h-5" />
        <span className="font-medium">14 people just donated</span>
      </div>

      {/* Donation List */}
      <div className="space-y-4">
        {donations.map((donation, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center">
              <Heart className="w-4 h-4 text-muted-foreground" />
            </div>
            <div>
              <p className="font-medium text-foreground text-sm">{donation.name}</p>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">{donation.amount}</span> · {donation.tag}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Buttons */}
      <div className="flex gap-2 mt-6">
        <Button variant="outline" className="flex-1 rounded-full text-sm">
          See all
        </Button>
        <Button variant="outline" className="flex-1 rounded-full text-sm">
          ☆ See top
        </Button>
      </div>
    </div>
  );
};

export default DonationSidebar;