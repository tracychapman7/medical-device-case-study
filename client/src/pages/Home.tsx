import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, BarChart3, CheckCircle2, Layers, Target, TrendingUp, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border/40">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Branding removed */}
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#challenge" className="hover:text-primary transition-colors">Challenge</a>
            <a href="#strategy" className="hover:text-primary transition-colors">Strategy</a>
            <a href="#results" className="hover:text-primary transition-colors">Results</a>
            <Button size="sm" className="rounded-none font-semibold" asChild>
              <a href="https://www.calendly.com/lucidstrategies/ls" target="_blank" rel="noopener noreferrer">Schedule Consultation</a>
            </Button>
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
                Medical Device Case Study
              </Badge>
              <h1 className="font-display font-bold text-5xl lg:text-6xl leading-[1.1] text-primary mb-8">
                STRATEGIC <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">MARKET DEFENSE</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl mb-10 font-light">
                Medical device manufacturer reclaims 78% market share by optimizing direct sales channels against marketplace competition.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-none h-14 px-8 text-base font-semibold bg-primary hover:bg-primary/90" asChild>
                  <a href="#challenge">Read Analysis <ArrowRight className="ml-2 w-4 h-4" /></a>
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
                src="/images/team-collaboration.jpg" 
                alt="Team Collaboration" 
                className="w-full h-auto shadow-2xl shadow-primary/10 grayscale-[10%] contrast-[1.05]"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 shadow-xl border border-border/50 max-w-xs hidden lg:block">
                <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">Market Share</div>
                <div className="text-4xl font-display font-bold text-primary mb-1">78%</div>
                <div className="text-sm text-muted-foreground">Reclaimed from 47% initial position within 90 days.</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-20 bg-white border-y border-border/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-3xl text-primary mb-4">Medical Device Industry Leader</h2>
              <p className="text-lg text-muted-foreground">Orthopedic Solutions Innovator</p>
            </div>
            
            <div className="bg-secondary/20 p-8 mb-12 border-l-4 border-primary">
              <p className="text-lg leading-relaxed text-foreground/80">
                A Southern California-based medical device company, established in 2008, specializing in advanced mobility solutions. With $50M+ annual revenue and 35% direct market share, they faced critical channel conflict between direct sales and marketplace distribution.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Industry Challenge", desc: "Marketplace partners captured 40% of branded search traffic, creating direct competition for high-intent customers" },
                { title: "Revenue Impact", desc: "Diversion of direct sales reduced margins by 22% and eroded customer lifetime value" },
                { title: "Strategic Goal", desc: "Reclaim branded search territory while maintaining profitable marketplace partnerships" },
                { title: "Implementation Timeline", desc: "90-day phased approach with measurable weekly performance tracking" }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-display font-bold text-sm uppercase tracking-wider text-primary mb-3">{item.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section id="challenge" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <h2 className="font-display font-bold text-3xl text-primary mb-6">Core Business Challenge</h2>
              <Separator className="mb-8 bg-primary/20" />
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  When potential customers searched for the company's specific medical devices—indicating the highest purchase intent—they encountered competing ads from the very marketplace partners who distributed the products.
                </p>
                <p>
                  This created a critical business conflict: bidding against distribution partners for customer attention at the decisive moment of purchase. The manufacturer was effectively funding competition against its own direct sales channel.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white p-4 border border-border/50">
                  <div className="text-2xl font-bold text-primary mb-1">40%</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">Customer Journey Disruption</div>
                </div>
                <div className="bg-white p-4 border border-border/50">
                  <div className="text-2xl font-bold text-primary mb-1">18-25%</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">Margin Erosion</div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <div className="relative">
                <img 
                  src="/images/digital-marketing-ads.jpg" 
                  alt="Digital Marketing Competition" 
                  className="w-full h-auto shadow-xl border border-border/50"
                />
                <div className="absolute bottom-0 right-0 bg-white/95 backdrop-blur p-6 border-t border-l border-border max-w-sm">
                  <h4 className="font-bold text-sm uppercase tracking-wider text-primary mb-4">Pre-Implementation Traffic</h4>
                  <div className="space-y-3">
                    {[
                      { label: "Direct Manufacturer", val: 47, color: "bg-primary" },
                      { label: "Primary Marketplace", val: 32, color: "bg-blue-400" },
                      { label: "Secondary Retailers", val: 21, color: "bg-slate-300" }
                    ].map((stat, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-xs mb-1 font-medium">
                          <span>{stat.label}</span>
                          <span>{stat.val}%</span>
                        </div>
                        <div className="h-2 bg-secondary w-full overflow-hidden">
                          <div className={`h-full ${stat.color}`} style={{ width: `${stat.val}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Strategy */}
      <section id="strategy" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display font-bold text-4xl text-primary mb-6">Three-Layer Defense Strategy</h2>
            <p className="text-xl text-muted-foreground font-light">
              A systematic approach to reclaiming branded search territory while optimizing the entire customer journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                title: "Direct Conversion Layer",
                icon: Target,
                desc: "Precision targeting of high-intent branded searches with optimized landing pages and conversion paths. Focus on capturing customers at the moment of purchase decision with superior user experience."
              },
              {
                title: "Demand Capture Layer",
                icon: Layers,
                desc: "Automated campaign architecture targeting broader commercial intent signals and retargeting abandoned cart visitors. Expands reach while maintaining efficiency through machine learning optimization."
              },
              {
                title: "Market Education Layer",
                icon: Users,
                desc: "Strategic content campaigns educating medical professionals and end-users about treatment innovations. Builds brand preference before purchase consideration enters the commercial phase."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="group border border-border p-8 hover:border-primary/50 transition-colors bg-white shadow-sm"
              >
                <div className="mb-6 p-3 bg-secondary inline-block rounded-full">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-xl mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="bg-secondary/20 p-12 rounded-none border border-border/50">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-display font-bold text-2xl mb-6">Revenue Channel Prioritization</h3>
                <div className="space-y-4">
                  {[
                    { name: "Direct E-commerce", val: "Primary Revenue", icon: CheckCircle2 },
                    { name: "Medical Referrals", val: "Strategic Growth", icon: TrendingUp },
                    { name: "Insurance Partners", val: "Stable Stream", icon: Users },
                    { name: "Marketplace Sales", val: "Controlled Volume", icon: BarChart3 }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between bg-white p-4 border border-border/50 shadow-sm">
                      <div className="flex items-center gap-3">
                        <item.icon className="w-5 h-5 text-primary/60" />
                        <span className="font-semibold text-primary">{item.name}</span>
                      </div>
                      <Badge variant="secondary" className="font-normal">{item.val}</Badge>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-full min-h-[300px]">
                 <img 
                  src="/images/customer-journey-people.jpg" 
                  alt="Customer Journey" 
                  className="w-full h-full object-cover rounded-sm shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
          <img src="/images/growth-chart-people.jpg" alt="Growth Background" className="w-full h-full object-cover" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-display font-bold text-4xl mb-6">Measured Business Outcomes</h2>
            <div className="grid grid-cols-3 gap-8 mt-12">
              {[
                { value: "+25%", label: "Direct Conversions" },
                { value: "-22%", label: "Acquisition Cost" },
                { value: "9.8/10", label: "Quality Score" }
              ].map((stat, i) => (
                <div key={i} className="text-center p-6 border border-white/10 bg-white/5 backdrop-blur-sm">
                  <div className="font-display font-bold text-4xl lg:text-5xl mb-2">{stat.value}</div>
                  <div className="text-sm font-medium text-blue-200 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 bg-white text-foreground p-12 shadow-2xl">
            <div>
              <h3 className="font-display font-bold text-2xl mb-6 text-primary">Sustainable Competitive Advantage</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                The strategy established superior auction positions through consistently high Quality Scores (9-10/10). This efficiency advantage allowed the manufacturer to secure prime ad placements at reduced costs compared to marketplace competitors.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                By transforming a defensive position into offensive growth, the company increased direct channel impression share from 47% to 78%, effectively recapturing branded search territory while maintaining profitable marketplace partnerships.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-secondary/30 p-4 border-l-4 border-primary">
                  <div className="font-bold text-primary text-sm uppercase mb-1">Key Achievement</div>
                  <div className="text-sm">31% increase in direct channel market share within 90 days</div>
                </div>
                <div className="bg-secondary/30 p-4 border-l-4 border-primary">
                  <div className="font-bold text-primary text-sm uppercase mb-1">Long-term Benefit</div>
                  <div className="text-sm">Established sustainable competitive moat in search auction dynamics</div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-primary mb-6">Market Share Evolution</h4>
              <div className="space-y-6">
                {[
                  { label: "Initial Position", val: 47 },
                  { label: "Phase 1 Complete", val: 62 },
                  { label: "Full Implementation", val: 78 }
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2 font-medium">
                      <span>{item.label}</span>
                      <span className="text-primary font-bold">{item.val}% Direct Share</span>
                    </div>
                    <div className="h-4 bg-secondary w-full overflow-hidden rounded-full">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.val}%` }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-primary" 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white p-12 shadow-lg border-t-4 border-primary">
            <h3 className="font-display font-bold text-2xl text-center mb-10 text-primary">Strategic Impact Summary</h3>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
              {[
                "Increased direct channel market share from 47% to 78% within 90 days",
                "Reduced customer acquisition cost by 22% through auction efficiency gains",
                "Achieved 9.8/10 average Quality Score for superior search positioning",
                "Established sustainable competitive advantage in branded search auctions",
                "Maintained profitable marketplace partnerships while growing direct sales",
                "Increased direct conversion rate by 25% through optimized customer journeys"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display font-bold text-4xl text-primary mb-6">Secure Your Market Position</h2>
          <p className="text-xl text-muted-foreground font-light mb-10 leading-relaxed">
            Optimize your direct sales channel performance and protect your branded search territory against marketplace competition. Implement a proven defense strategy to maximize direct revenue and maintain customer relationship control.
          </p>
          <Button size="lg" className="h-16 px-10 text-lg font-semibold bg-primary hover:bg-primary/90 shadow-xl hover:shadow-2xl transition-all" asChild>
            <a href="https://www.calendly.com/lucidstrategies/ls" target="_blank" rel="noopener noreferrer">Schedule Strategic Consultation</a>
          </Button>
          <p className="mt-6 text-muted-foreground font-light">
            45-minute comprehensive analysis of your current market position and optimization opportunities
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm text-muted-foreground">
              © 2025 All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
