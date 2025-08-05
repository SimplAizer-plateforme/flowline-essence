import { Button } from "@/components/ui/button";

const ComparisonSection = () => {
  const comparisons = [
    { feature: "Real-time collaboration", flowline: true, others: false },
    { feature: "Advanced automation", flowline: true, others: false },
    { feature: "Custom integrations", flowline: true, others: true },
    { feature: "24/7 support", flowline: true, others: false },
    { feature: "Data analytics", flowline: true, others: true },
    { feature: "Mobile app", flowline: true, others: false },
    { feature: "Team management", flowline: true, others: true },
    { feature: "Security & compliance", flowline: true, others: false },
    { feature: "Unlimited storage", flowline: true, others: false },
    { feature: "API access", flowline: true, others: true }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-muted/20 to-primary/5">
      <div className="container-max">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6 tracking-tight">
            Your competitors are 
            <span className="text-gradient">automating for a reason!</span>
          </h2>
          
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            See how Flowline stacks up against traditional productivity tools. 
            Don't let your competition get ahead.
          </p>
        </div>
        
        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto animate-slide-up">
          <div className="bg-white rounded-2xl card-shadow border border-border overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-muted/30 border-b border-border">
              <div className="p-6">
                <span className="text-lg font-semibold text-text-primary">Features</span>
              </div>
              <div className="p-6 text-center border-l border-border">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-6 h-6 bg-primary rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg font-semibold text-text-primary">Flowline</span>
                </div>
              </div>
              <div className="p-6 text-center border-l border-border">
                <span className="text-lg font-semibold text-text-secondary">Others</span>
              </div>
            </div>
            
            {/* Table Body */}
            <div>
              {comparisons.map((comparison, index) => (
                <div 
                  key={comparison.feature}
                  className={`grid grid-cols-3 ${index !== comparisons.length - 1 ? 'border-b border-border' : ''} hover:bg-muted/10 transition-colors`}
                >
                  <div className="p-4 flex items-center">
                    <span className="text-text-primary font-medium">{comparison.feature}</span>
                  </div>
                  <div className="p-4 flex items-center justify-center border-l border-border">
                    {comparison.flowline ? (
                      <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    ) : (
                      <div className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="p-4 flex items-center justify-center border-l border-border">
                    {comparison.others ? (
                      <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    ) : (
                      <div className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA */}
          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground px-7 py-4 text-base font-semibold rounded-xl transition-all duration-200">
              Choose Flowline Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;