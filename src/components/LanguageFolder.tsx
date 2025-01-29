import { Card } from "@/components/ui/card";
import { Languages, Flame, Trophy } from "lucide-react";

interface LanguageFolderProps {
  language: string;
  streak: number;
  points: number;
  progress: number;
}

export const LanguageFolder = ({ language, streak, points, progress }: LanguageFolderProps) => {
  return (
    <Card className="p-6 card-hover">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <Languages className="w-8 h-8 text-primary" />
          <h3 className="text-xl font-bold gradient-text">{language}</h3>
        </div>
        <div className="flex items-center gap-2">
          <Flame className="w-5 h-5 text-secondary" />
          <span className="font-semibold">{streak}</span>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-yellow-500" />
          <span className="font-medium">{points} points</span>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-primary h-2.5 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </Card>
  );
};