import React from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Zap, 
  Puzzle, 
  RefreshCw, 
  Eye,
  Sparkles
} from "lucide-react";

export default function Home() {
  const steps = [
    {
      icon: Zap,
      title: "Choose",
      desc: "Purpose-built AI for specific tasks"
    },
    {
      icon: Puzzle,
      title: "Connect",
      desc: "Integrates with your existing tools"
    },
    {
      icon: Eye,
      title: "Control",
      desc: "Full oversight and approval workflows"
    },
    {
      icon: RefreshCw,
      title: "Scale",
      desc: "Expand automation as you grow"
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen text-gray-950 overflow-x-hidden bg-neutral-50">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Geist:wght@100;200;300;400;500;600;700;800;900&display=swap');
          
          * {
            font-family: 'Geist', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
            font-feature-settings: 'cv02', 'cv03', 'cv04', 'cv11';
          }
          
          .grain {
            position: relative;
          }
          
          .grain::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0.03;
            background-image: 
              radial-gradient(circle at 25% 25%, #000 2px, transparent 0),
              radial-gradient(circle at 75% 75%, #000 2px, transparent 0);
            background-size: 30px 30px;
            background-position: 0 0, 15px 15px;
            pointer-events: none;
          }
        `}
      </style>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-50/80 backdrop-blur-xl border-b border-neutral-200/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="text-lg font-medium tracking-tight text-gray-950"
          >
            Millionfold
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Button 
              variant="ghost" 
              size="sm"
              className="text-gray-600 hover:text-gray-950 hover:bg-transparent font-medium px-0"
            >
              Sign in
            </Button>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-16 grain">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl text-center"
        >
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-light tracking-[-0.02em] mb-6 text-gray-950 leading-[0.9]"
            {...fadeInUp}
          >
            Modular AI for<br />
            <span className="text-gray-400">your business</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-600 max-w-lg mx-auto mb-12 font-light leading-relaxed"
            {...fadeInUp}
            style={{transitionDelay: '0.1s'}}
          >
            Automate workflows with purpose-built agents
          </motion.p>
          
          <motion.div 
            {...fadeInUp}
            style={{transitionDelay: '0.2s'}}
          >
            <Button 
              size="lg" 
              className="bg-gray-950 hover:bg-gray-900 text-white px-8 py-3 text-base font-medium border-0 shadow-none hover:shadow-none transition-colors duration-200"
            >
              Request demo
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-light tracking-[-0.02em] text-gray-950 leading-tight">
              Simple automation,<br />
              <span className="text-gray-400">powerful results</span>
            </h2>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-4 gap-1 bg-neutral-100 p-1"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {steps.map((step, index) => (
              <motion.div key={step.title} variants={fadeInUp}>
                <Card className="h-full bg-white border-0 shadow-none hover:bg-neutral-50 transition-colors duration-200">
                  <CardContent className="p-8">
                    <div className="w-8 h-8 flex items-center justify-center mb-6">
                      <step.icon className="w-5 h-5 text-gray-400" />
                    </div>
                    <h3 className="text-base font-medium text-gray-950 mb-3 tracking-tight">{step.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-light">{step.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-6 bg-neutral-50 grain">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-8 h-8 bg-gray-950 flex items-center justify-center mx-auto mb-8">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-light tracking-[-0.02em] text-gray-950 mb-8 leading-tight">
            The operational AI layer for growing companies
          </h2>
          <p className="text-lg text-gray-600 mb-12 font-light leading-relaxed max-w-xl mx-auto">
            Human-centered automation that empowers teams through clear, collaborative workflows
          </p>
          <Button 
            size="lg" 
            className="bg-gray-950 hover:bg-gray-900 text-white px-8 py-3 text-base font-medium border-0 shadow-none hover:shadow-none transition-colors duration-200"
          >
            Start automating
          </Button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-white border-t border-neutral-200/50">
        <div className="text-center">
          <div className="text-sm font-medium text-gray-400 tracking-tight">
            Millionfold
          </div>
        </div>
      </footer>
    </div>
  );
}