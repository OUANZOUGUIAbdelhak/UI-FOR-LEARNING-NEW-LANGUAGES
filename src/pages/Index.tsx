import { Button } from "@/components/ui/button";
import { LanguageFolder } from "@/components/LanguageFolder";
import { Plus } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [languages] = useState([
    { id: 1, name: "French", streak: 5, points: 1200, progress: 65 },
    { id: 2, name: "Spanish", streak: 3, points: 800, progress: 45 },
  ]);

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-background to-muted">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold gradient-text">
            Language Learning Journey
          </h1>
          <p className="text-lg text-muted-foreground">
            Start your language learning adventure today
          </p>
        </div>

        <Button className="w-full max-w-sm mx-auto flex items-center gap-2 bg-primary hover:bg-primary/90">
          <Plus className="w-5 h-5" />
          Add New Language
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {languages.map((lang) => (
            <LanguageFolder
              key={lang.id}
              language={lang.name}
              streak={lang.streak}
              points={lang.points}
              progress={lang.progress}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;