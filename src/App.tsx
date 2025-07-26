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
import NavBanner from "./components/ui/NavBanner";

function App() {
  const steps = [
    {
      icon: Zap,
      title: "Choose your agents",
      desc: "From image editing to smart email follow-ups, each agent handles a specific business task."
    },
    {
      icon: Puzzle,
      title: "Plug into your workflow",
      desc: "Our agents connect to the tools you already use."
    },
    {
      icon: Eye,
      title: "Run with or without oversight",
      desc: "You stay in control. Agents can act autonomously or pause for approval."
    },
    {
      icon: RefreshCw,
      title: "Scale as you grow",
      desc: "Start with one task, then automate more over time."
    }
  ];

  const fadeInUp = {
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
    <div className="min-h-screen text-gray-950 overflow-x-hidden" style={{ backgroundColor: "#fde7ce" }}>
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

      {/* Banner */}
      <NavBanner />
      {/* Navigation */}
      <nav className="fixed top-8 left-0 right-0 z-40" style={{ backgroundColor: "#fde7ce", backdropFilter: "blur(12px)" }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="text-lg font-medium tracking-tight text-gray-950"
          >
            <img src="/logo.png" alt="Logo" className="h-6 w-auto" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Button
              size="sm"
              className="bg-gray-950 hover:bg-gray-900 text-white px-4 py-2 text-sm font-medium border-0 shadow-none hover:shadow-none transition-colors duration-200"
            >
              Sign in
            </Button>
          </motion.div>
        </div>
      </nav>
      <NavBanner />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-16 grain">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl text-center"
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-light tracking-[-0.02em] mb-6 text-gray-950 leading-[0.9]"
            {...fadeInUp}
          >
            Kill inefficiency.<br />
            Scale productivity.
          </motion.h1>
          
          <p
            className="text-lg md:text-xl text-gray-600 max-w-lg mx-auto mb-12 font-light leading-relaxed"
          >
            Millionfold AI agents handle your repetitive business tasks, freeing your team to focus on what matters.
          </p>
          
          <div>
            <Button
              size="lg"
              className="bg-gray-950 hover:bg-gray-900 text-white px-8 py-3 text-base font-medium border-0 shadow-none hover:shadow-none transition-colors duration-200"
            >
              <span className="flex items-center">
                Request demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Trusted By Section */}
      <section className="py-24 px-6 bg-white border-t border-[#f5d6b3]">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-light text-gray-950">
            Your next hire isn’t human. <span className="font-medium">These teams know.</span>
          </h3>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10 max-w-5xl mx-auto">
          <img src="https://cdn.brandfetch.io/idSyAvLsWb/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1667905670683" alt="Apploving" className="h-12 w-auto opacity-80 grayscale hover:grayscale-0 transition" />
          <img src="https://cdn.brandfetch.io/iddByYpFsc/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1667560744132" alt="Redbull" className="h-12 w-auto opacity-80 grayscale hover:grayscale-0 transition" />
          <img src="https://cdn.brandfetch.io/idry7rM6vS/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1671429045740" alt="Google" className="h-12 w-auto opacity-80 grayscale hover:grayscale-0 transition" />
          <img src="https://cdn.brandfetch.io/idmlRiz-2q/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1726643945271" alt="Netflix" className="h-12 w-auto opacity-80 grayscale hover:grayscale-0 transition" />
        </div>
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
              Automate your business, <br />
              <span className="text-gray-400">one task at a time</span>
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
      <section className="py-40 px-6 bg-neutral-50 grain">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-8 h-8 bg-gray-950 flex items-center justify-center mx-auto mb-12">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-light tracking-[-0.02em] text-gray-950 mb-12 leading-tight">
            The operational AI layer for growing companies
          </h2>
          <p className="text-lg text-gray-600 mb-16 font-light leading-relaxed max-w-xl mx-auto">
            We believe every business task should have an AI agent. Our mission is to empower teams through clear, collaborative, human-centered automation.
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
      <footer className="py-8 px-6" style={{ backgroundColor: "#141413" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-center justify-between">
          <div className="text-sm font-medium tracking-tight mb-4 md:mb-0" style={{ color: "#faf9f5" }}>
            &copy; {new Date().getFullYear()} Millionfold
          </div>
          <div className="flex space-x-6">
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="X" style={{ color: "#faf9f5" }} className="hover:text-gray-400 transition-colors">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path fill="currentColor" d="M17.53 3H21L13.62 11.51L22.24 21H16.16L10.97 14.89L5.13 21H1.72L9.57 12.01L1.25 3H7.48L12.23 8.61L17.53 3ZM16.4 19.13H18.08L7.96 4.77H6.15L16.4 19.13Z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: "#faf9f5" }} className="hover:text-gray-400 transition-colors">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v4.75z"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;