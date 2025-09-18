import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Upload, 
  FileSpreadsheet, 
  BarChart3, 
  CheckCircle, 
  AlertTriangle,
  Zap
} from "lucide-react";

export const LoadProfileUpload = () => {
  const { toast } = useToast();
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      setIsProcessing(true);
      
      // Simulate AI processing
      setTimeout(() => {
        setIsProcessing(false);
        setAnalysisComplete(true);
        toast({
          title: "Load Profile Analyzed",
          description: "AI has successfully analyzed your energy consumption data",
        });
      }, 2000);
    }
  };

  const mockAnalysisData = {
    peakDemand: "485 kW",
    averageConsumption: "320 kWh/day",
    loadFactor: "67%",
    optimalSystemSize: "650 kW",
    estimatedSavings: "R 2,450,000/year",
    tariffOptimization: "32% reduction in demand charges"
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Load Profile Analysis</h2>
            <p className="text-muted-foreground text-lg">
              Upload your energy consumption data for AI-powered analysis and optimization
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Upload Section */}
            <Card className="shadow-elevated">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5 text-primary" />
                  Upload Load Data
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center hover:border-solar-orange transition-colors">
                  <FileSpreadsheet className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <div className="space-y-2">
                    <Label htmlFor="file-upload" className="text-lg font-medium cursor-pointer">
                      Drop your CSV/XLSX file here
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Supports single-phase and three-phase load profiles
                    </p>
                  </div>
                  <Input
                    id="file-upload"
                    type="file"
                    accept=".csv,.xlsx,.xls"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <Button variant="outline" className="mt-4" onClick={() => document.getElementById('file-upload')?.click()}>
                    Choose File
                  </Button>
                </div>

                {uploadedFile && (
                  <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                    <FileSpreadsheet className="h-8 w-8 text-success" />
                    <div className="flex-1">
                      <p className="font-medium">{uploadedFile.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {(uploadedFile.size / 1024).toFixed(1)} KB
                      </p>
                    </div>
                    {isProcessing && (
                      <Badge variant="outline" className="animate-pulse">
                        Processing...
                      </Badge>
                    )}
                    {analysisComplete && (
                      <CheckCircle className="h-5 w-5 text-success" />
                    )}
                  </div>
                )}

                <div className="space-y-2">
                  <Label className="text-sm font-medium">Supported Formats</Label>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">CSV</Badge>
                    <Badge variant="outline">XLSX</Badge>
                    <Badge variant="outline">Time-series data</Badge>
                    <Badge variant="outline">kW/kVA/kWh</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Analysis Results */}
            <Card className="shadow-elevated">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-solar-orange" />
                  AI Analysis Results
                </CardTitle>
              </CardHeader>
              <CardContent>
                {!analysisComplete ? (
                  <div className="text-center py-12">
                    <AlertTriangle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      Upload a load profile to see AI-powered analysis
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-panel p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">Peak Demand</p>
                        <p className="text-2xl font-bold text-foreground">{mockAnalysisData.peakDemand}</p>
                      </div>
                      <div className="bg-gradient-panel p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">Load Factor</p>
                        <p className="text-2xl font-bold text-success">{mockAnalysisData.loadFactor}</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-sm text-muted-foreground">Average Daily Consumption</span>
                        <span className="font-medium">{mockAnalysisData.averageConsumption}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-sm text-muted-foreground">Optimal System Size</span>
                        <span className="font-medium text-solar-orange">{mockAnalysisData.optimalSystemSize}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-sm text-muted-foreground">Estimated Annual Savings</span>
                        <span className="font-bold text-success">{mockAnalysisData.estimatedSavings}</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-sm text-muted-foreground">Tariff Optimization</span>
                        <span className="font-medium text-warning">{mockAnalysisData.tariffOptimization}</span>
                      </div>
                    </div>

                    <Button variant="energy" className="w-full mt-6">
                      <Zap className="h-4 w-4" />
                      Generate Proposal
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};