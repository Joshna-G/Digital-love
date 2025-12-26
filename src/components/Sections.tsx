import Link from "next/link";
import { Gift, PenTool, Rocket } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-mauve text-white min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div className="absolute right-0 top-0 w-1/2 h-full bg-mauve-light/30 mix-blend-multiply skew-x-12 transform origin-top-right hidden md:block"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center md:text-left md:flex items-center justify-between">
        <div className="md:w-1/2">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            We create a website for your loved one.
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 font-sans">
            The most unique, lasting digital gift. A space dedicated entirely to them.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#order" className="px-8 py-4 bg-white text-mauve-dark font-bold rounded-md shadow-lg hover:bg-paper transition">
              Book a Build
            </a>
            <a href="#how-it-works" className="px-8 py-4 border-2 border-white text-white font-bold rounded-md hover:bg-white/10 transition">
              How it Works
            </a>
          </div>
        </div>
        <div className="md:w-1/3 mt-12 md:mt-0 hidden md:block opacity-50">
           <Gift size={200} strokeWidth={1} />
        </div>
      </div>
    </section>
  );
}


export function Procedure() {
    const steps = [
        { icon: <Gift size={40} />, title: "1. You Order", desc: "Select a package and tell us about your favorite person in the order form." },
        { icon: <PenTool size={40} />, title: "2. We Create", desc: "Our designers build a beautiful, personalized site based on your input." },
        { icon: <Rocket size={40} />, title: "3. Delivery Day", desc: "We launch the site and send you the link to gift to them!" },
    ];
  return (
    <section id="how-it-works" className="py-20 bg-paper">
      <div className="container mx-auto px-6 max-w-4xl text-center">
         <h2 className="text-3xl md:text-4xl mb-12 text-mauve-dark">The Procedure</h2>
         <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                    <div className="w-20 h-20 bg-mauve/20 text-mauve-dark rounded-full flex items-center justify-center mb-6 shadow-sm">
                        {step.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-ink/70">{step.desc}</p>
                </div>
            ))}
         </div>
      </div>
    </section>
  );
}

export function Description() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl text-center md:text-left flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
            <h2 className="text-3xl md:text-5xl mb-6 text-mauve-dark">More than just a URL.</h2>
            <p className="text-lg leading-relaxed text-ink/80 mb-6">
                You aren't just buying code. You are buying a permanent digital home for someone you care about. It could be a portfolio for their art, a blog for their travels, or a simple page celebrating who they are.
            </p>
             <p className="text-lg leading-relaxed text-ink/80">
                We handle the technical stuff—hosting, domains, design—so you can focus on the surprise.
            </p>
        </div>
        <div className="md:w-1/2 h-64 bg-mauve/10 rounded-xl flex items-center justify-center border-dashed border-4 border-mauve/30">
            <span className="text-mauve font-serif text-2xl italic">A space for them.</span>
        </div>
      </div>
    </section>
  );
}

export function DemoLink() {
  return (
    <section className="py-16 bg-ink text-paper text-center">
       <meta name="google-adsense-account" content="ca-pub-7679235699554731"></meta>
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl mb-6 text-white">Want to see what a gifted site looks like?</h2>
        <Link href="https://love-do.vercel.app/" target="_blank" className="inline-flex items-center px-8 py-4 bg-mauve text-white font-bold rounded hover:bg-mauve-light transition-colors">
          View A Live Demo Project <span className="ml-2">→</span>
        </Link>
      </div>
    </section>
  );
}

export function Navbar() {
    return (
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
         <div className="flex items-center gap-2 cursor-pointer">
          <span className="text-2xl font-bold text-mauve">∞</span>
          <span className="text-xl font-serif font-semibold tracking-wide text-mauve-dark"> Digitial <span className="text-mauve">Love</span> </span></div>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-ink/70">
            <a href="#how-it-works" className="hover:text-mauve transition">How it Works</a>
            <a href="#pricing" className="hover:text-mauve transition">Pricing</a>
            <a href="#order" className="hover:text-mauve transition">Book Now</a>
          </div>
        </div>
      </nav>
    )
  }