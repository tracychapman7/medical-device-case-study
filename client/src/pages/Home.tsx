import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, BarChart3, CheckCircle2, Shield, Target, TrendingUp, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border/40">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary flex items-center justify-center text-white font-bold font-display">M</div>
            <span className="font-display font-bold text-lg tracking-tight text-primary">MEDSTRAT</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#challenge" className="hover:text-primary transition-colors">The Challenge</a>
            <a href="#strategy" className="hover:text-primary transition-colors">Strategy</a>
            <a href="#results" className="hover:text-primary transition-colors">Results</a>
            <Button size="sm" className="rounded-none font-semibold">Download PDF</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <Badge variant="outline" className="mb-6 rounded-none border-primary/20 text-primary px-4 py-1 uppercase tracking-widest text-xs font-bold">
                Case Study 2025
              </Badge>
              <h1 className="font-display font-bold text-5xl lg:text-7xl leading-[1.1] text-primary mb-8">
                STRATEGIC <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">MARKET DEFENSE</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl mb-10 font-light">
                How a leading medical device manufacturer protected 95% of its market share against aggressive low-cost competition through value-based positioning.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-none h-14 px-8 text-base font-semibold bg-primary hover:bg-primary/90">
                  Read Analysis <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="outline" size="lg" className="rounded-none h-14 px-8 text-base font-semibold border-primary/20 hover:bg-secondary/50">
                  View Metrics
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-50 to-slate-50 rounded-none -z-10 opacity-50 transform rotate-3" />
              <img 
                src="/images/hero-medical-device.jpg" 
                alt="Advanced Medical Device" 
                className="w-full h-auto shadow-2xl shadow-primary/10 grayscale-[20%] contrast-[1.1]"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 shadow-xl border border-border/50 max-w-xs hidden lg:block">
                <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">Market Impact</div>
                <div className="text-4xl font-display font-bold text-primary mb-1">95%</div>
                <div className="text-sm text-muted-foreground">Retention rate achieved within 18 months of strategy implementation.</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Profile & Challenge */}
      <section id="challenge" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="font-display font-bold text-3xl text-primary mb-6">THE CONTEXT</h2>
              <Separator className="mb-8 bg-primary/20" />
              <p className="text-muted-foreground mb-6 leading-relaxed">
                The client, a global leader in surgical robotics, faced an unprecedented threat from new market entrants offering "good enough" alternatives at 40% lower price points.
              </p>
              <div className="space-y-6">
                <div className="bg-white p-6 border border-border/50 shadow-sm">
                  <h4 className="font-display font-bold text-sm uppercase tracking-wider text-primary mb-2">Industry</h4>
                  <p className="text-muted-foreground">Medical Devices / Surgical Robotics</p>
                </div>
                <div className="bg-white p-6 border border-border/50 shadow-sm">
                  <h4 className="font-display font-bold text-sm uppercase tracking-wider text-primary mb-2">Region</h4>
                  <p className="text-muted-foreground">North America & EMEA</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-8">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="rounded-none border-none shadow-lg bg-white">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-50 flex items-center justify-center mb-4">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="font-display font-bold text-xl">The Threat</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      Competitors were aggressively targeting price-sensitive hospital procurement departments, commoditizing a highly specialized technology market.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="rounded-none border-none shadow-lg bg-white">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-50 flex items-center justify-center mb-4">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="font-display font-bold text-xl">The Objective</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      Defend market share without engaging in a destructive price war, while maintaining premium brand positioning and margins.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-12 relative h-80 w-full overflow-hidden">
                <img 
                  src="/images/market-growth.jpg" 
                  alt="Market Analysis" 
                  className="w-full h-full object-cover grayscale-[10%]"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section id="strategy" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display font-bold text-4xl text-primary mb-6">STRATEGIC RESPONSE</h2>
            <p className="text-xl text-muted-foreground font-light">
              We implemented a three-pillar defense strategy focused on redefining value beyond the initial purchase price.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Total Cost of Ownership",
                icon: BarChart3,
                desc: "Shifted the conversation from CAPEX to OPEX, demonstrating long-term savings through superior reliability and lower maintenance costs."
              },
              {
                title: "Clinical Outcomes",
                icon: Users,
                desc: "Leveraged real-world evidence to prove superior patient outcomes, reducing readmission rates and overall hospital stay duration."
              },
              {
                title: "Ecosystem Integration",
                icon: TrendingUp,
                desc: "Enhanced the digital ecosystem surrounding the device, creating high switching costs through seamless data integration."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="group border border-border p-8 hover:border-primary/50 transition-colors bg-white"
              >
                <div className="mb-6 p-3 bg-secondary inline-block">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-xl mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="/images/strategy-meeting.jpg" 
                alt="Strategic Planning" 
                className="w-full h-auto shadow-2xl grayscale-[20%]"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="font-display font-bold text-2xl mb-6">Execution Excellence</h3>
              <ul className="space-y-6">
                {[
                  "Developed a proprietary TCO calculator for sales teams.",
                  "Launched a 'Clinical Excellence' certification program.",
                  "Integrated predictive maintenance AI into the platform."
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/images/medical-tech-abstract.jpg" alt="Background" className="w-full h-full object-cover" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-display font-bold text-4xl mb-6">MEASURABLE IMPACT</h2>
            <p className="text-blue-100 text-lg font-light">
              The strategy delivered results exceeding initial projections, securing the client's market leadership position.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: "95%", label: "Market Share Retained" },
              { value: "12%", label: "YoY Revenue Growth" },
              { value: "3x", label: "ROI on Strategy" },
              { value: "#1", label: "Customer Satisfaction" }
            ].map((stat, i) => (
              <div key={i} className="text-center p-8 border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="font-display font-bold text-5xl mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-blue-200 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-primary flex items-center justify-center text-white font-bold text-xs font-display">M</div>
              <span className="font-display font-bold text-primary">MEDSTRAT</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2025 MedStrat Consulting. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
