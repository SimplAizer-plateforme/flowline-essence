import { Button } from "@/components/ui/button";

const InsightsSection = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-muted/30 to-primary/5">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Chart Illustration */}
          <div className="order-2 lg:order-1 animate-slide-up">
            <div className="bg-white rounded-2xl card-shadow p-8 border border-border">
              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-text-primary mb-4">Performance Analytics</h4>
                
                {/* Chart Bars */}
                <div className="space-y-4">
                  {[
                    { label: "Task Completion", value: 85, color: "bg-primary" },
                    { label: "Time Saved", value: 92, color: "bg-primary/80" },
                    { label: "Productivity", value: 78, color: "bg-primary/60" },
                    { label: "Efficiency", value: 95, color: "bg-primary/40" }
                  ].map((item) => (
                    <div key={item.label} className="flex items-center space-x-4">
                      <span className="text-sm text-text-secondary w-24 text-right">{item.label}</span>
                      <div className="flex-1 bg-muted/50 rounded-full h-3">
                        <div 
                          className={`${item.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${item.value}%` }}
                        />
                      </div>
                      <span className="text-sm font-semibold text-text-primary w-8">{item.value}%</span>
                    </div>
                  ))}
                </div>
                
                {/* Mini Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">4.2h</div>
                    <div className="text-xs text-text-secondary">Daily Saved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">98%</div>
                    <div className="text-xs text-text-secondary">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">24/7</div>
                    <div className="text-xs text-text-secondary">Monitoring</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6 tracking-tight">
              Make informed decisions 
              <span className="text-gradient">instantly</span>
            </h2>
            
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              Get real-time insights and data-driven recommendations. Our advanced analytics 
              help you make smarter decisions faster, with complete visibility into your 
              team's performance and productivity patterns.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                "Real-time performance tracking",
                "Predictive analytics and forecasting", 
                "Custom reporting and dashboards",
                "AI-powered recommendations"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-text-secondary">{feature}</span>
                </div>
              ))}
            </div>
            
            <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground px-7 py-4 text-base font-semibold rounded-xl transition-all duration-200">
              View Analytics Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;