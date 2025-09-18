import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Users, 
  FileText, 
  Zap, 
  Clock, 
  CheckCircle,
  AlertCircle,
  ArrowUpRight
} from "lucide-react";

export const Dashboard = () => {
  const metrics = [
    {
      title: "Active Projects",
      value: "24",
      change: "+12%",
      icon: FileText,
      color: "text-primary"
    },
    {
      title: "Qualified Leads",
      value: "156",
      change: "+23%",
      icon: Users,
      color: "text-success"
    },
    {
      title: "Proposals Generated",
      value: "89",
      change: "+18%",
      icon: TrendingUp,
      color: "text-solar-orange"
    },
    {
      title: "Total Capacity",
      value: "12.5 MW",
      change: "+31%",
      icon: Zap,
      color: "text-solar-amber"
    }
  ];

  const recentProjects = [
    {
      id: "P001",
      name: "Industrial Complex - Cape Town",
      status: "Design Phase",
      capacity: "500 kW",
      completion: 65,
      statusColor: "bg-warning"
    },
    {
      id: "P002", 
      name: "Retail Center - Johannesburg",
      status: "Permitting",
      capacity: "750 kW",
      completion: 85,
      statusColor: "bg-solar-orange" 
    },
    {
      id: "P003",
      name: "Manufacturing Plant - Durban",
      status: "Construction",
      capacity: "1.2 MW",
      completion: 40,
      statusColor: "bg-primary"
    },
    {
      id: "P004",
      name: "Office Building - Pretoria",
      status: "Completed",
      capacity: "300 kW",
      completion: 100,
      statusColor: "bg-success"
    }
  ];

  return (
    <section className="py-12 bg-gradient-panel">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">Project Dashboard</h2>
            <p className="text-muted-foreground">Monitor your solar projects and key metrics</p>
          </div>
          <Button variant="solar" size="lg">
            <ArrowUpRight className="h-4 w-4" />
            View All Projects
          </Button>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <Card key={index} className="shadow-elevated hover:shadow-solar transition-all duration-300">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      {metric.title}
                    </CardTitle>
                    <IconComponent className={`h-5 w-5 ${metric.color}`} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline gap-2">
                    <div className="text-3xl font-bold text-foreground">{metric.value}</div>
                    <Badge variant="outline" className="text-success">
                      {metric.change}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Recent Projects */}
        <Card className="shadow-elevated">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Recent Projects
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentProjects.map((project) => (
                <div key={project.id} className="flex items-center justify-between p-4 rounded-lg bg-gradient-panel hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className={`w-3 h-3 rounded-full ${project.statusColor}`} />
                    <div>
                      <h4 className="font-semibold text-foreground">{project.name}</h4>
                      <p className="text-sm text-muted-foreground">{project.id} • {project.capacity}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <Badge variant="outline" className="mb-1">
                        {project.status}
                      </Badge>
                      <div className="text-sm text-muted-foreground">
                        {project.completion}% Complete
                      </div>
                    </div>
                    
                    <div className="w-20 bg-muted rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${project.statusColor}`}
                        style={{ width: `${project.completion}%` }}
                      />
                    </div>
                    
                    {project.completion === 100 ? (
                      <CheckCircle className="h-5 w-5 text-success" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-warning" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};