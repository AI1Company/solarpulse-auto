import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Zap, BarChart3, FileCheck } from "lucide-react";
import heroImage from "@/assets/hero-solar.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Commercial solar installation" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero/90" />
      </div>
      
      <div className="relative container mx-auto px-4 py-20 flex items-center min-h-[80vh]">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Automate Your
            <span className="block text-solar-orange">Solar Projects</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl leading-relaxed">
            From lead generation to monitoring - one AI-driven platform that manages 
            the entire lifecycle of commercial solar projects.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="energy" size="lg" className="text-lg px-8 py-6">
              Start Free Trial
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/10 border-white/20 text-white hover:bg-white/20">
              Schedule Demo
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-solar-orange rounded-lg p-2">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">AI-Powered Design</h3>
              </div>
              <p className="text-white/80">Instant system design with optimal placement and sizing</p>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-solar-orange rounded-lg p-2">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">Load Analysis</h3>
              </div>
              <p className="text-white/80">Advanced load profiling with tariff optimization</p>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-solar-orange rounded-lg p-2">
                  <FileCheck className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">Compliance Ready</h3>
              </div>
              <p className="text-white/80">Auto-generated permits and regulatory documentation</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};