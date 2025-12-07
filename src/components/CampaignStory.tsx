import { User, Shield, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const CampaignStory = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="max-w-2xl">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
          <User className="w-4 h-4 text-muted-foreground" />
        </div>
        <span className="font-medium text-foreground">Sonika Sonika</span>
        <span className="text-muted-foreground text-sm">is organizing this fundraiser.</span>
      </div>

      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[hsl(var(--badge-green-bg))] text-[hsl(var(--badge-green-text))] rounded-md text-sm font-medium mb-6">
        <Shield className="w-4 h-4" />
        Donation protected
      </div>

      <div className={`prose prose-sm max-w-none ${!expanded ? 'line-clamp-6' : ''}`}>
        <p className="text-foreground font-semibold mb-4">
          Support Vijay Kumar Sheoran's family for Repatriation of His Mortal Remains to India
        </p>
        
        <p className="text-foreground mb-4">
          Vijay Kumar Sheoran was an MBA student of University of West England, Bristol. He came to the UK in January 2025 for which his family has incurred significant expenses. He had a lot of future plans for himself and family which have been cut short tragically as he was stabbed to death in Worcester on 25.11.2025 (
          <a 
            href="https://www.westmercia.police.uk/news/west-mercia/news/2025/november/officers-continue-to-appeal-for-information-following-mans-death-in-worcester/" 
            className="text-primary hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.westmercia.police.uk/news/west-mercia/news/2025/november/officers-continue-to-appeal-for-information-following-mans-death-in-worcester/
          </a>
          ). While West Mercia police are investigating the murder case, Vijay's body is still in police custody. Vijay's family in India wish to get his mortal remains repatriated to India for performing last rites as soon as possible.
        </p>

        {expanded && (
          <>
            <p className="text-foreground mb-4">
              We reach out to you with heavy hearts to seek your support & compassion for Vijay's family and kindly request your generous contribution to assist with the repatriation of Vijay's body to India and help to the family. Your support, no matter how small or large, would make a meaningful difference to the family to come out of the financial distress in Vijay's absence.
            </p>

            <p className="text-foreground mb-4">
              Money is being collected in the account of Sonika. She is cousin sister of Vijay and lives in the UK. Funds are collected in Sonika's account because Vijay's family is based in India and do not have bank account in the UK. Support received will be used towards the cost of repatriation of Vijay's mortal remains to India and remaining amount, if any, will be transferred to Vijay's parents to support them.
            </p>

            <p className="text-foreground font-semibold">
              Humble appeal for support!
            </p>
          </>
        )}
      </div>

      <button 
        onClick={() => setExpanded(!expanded)}
        className="text-foreground font-medium mt-4 hover:underline flex items-center gap-1"
      >
        {expanded ? 'Show less' : 'Read more'}
        <ChevronDown className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`} />
      </button>

      <div className="flex gap-3 mt-8">
        <Button className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
          Donate
        </Button>
        <Button variant="outline" className="rounded-full border-foreground text-foreground font-semibold px-8 hover:bg-muted">
          Share
        </Button>
      </div>
    </div>
  );
};

export default CampaignStory;
