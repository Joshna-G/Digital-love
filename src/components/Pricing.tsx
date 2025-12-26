export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-paper">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        <h2 className="text-4xl md:text-5xl mb-4 text-mauve-dark">Pricing Combos</h2>
        <p className="text-lg text-ink/70 mb-16 max-w-2xl mx-auto">Transparent pricing for a priceless gift. Choose the tier that fits best.</p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-mauve">
            <h3 className="text-2xl mb-4">The Essential Combo</h3>
            <p className="text-4xl font-bold text-mauve-dark mb-6">₹7,499 <span className="text-base font-normal text-ink/60">one-time</span></p>
            <ul className="text-left space-y-3 mb-8 text-ink/80">
              <li className="flex items-center"><span className="text-mauve mr-2">✓</span> Single Page Landing Site</li>
              <li className="flex items-center"><span className="text-mauve mr-2">✓</span> Mobile Responsive Design</li>
              <li className="flex items-center"><span className="text-mauve mr-2">✓</span> Photo Gallery Section</li>
              <li className="flex items-center"><span className="text-mauve mr-2">✓</span> 1 Year Hosting Included</li>
            </ul>
            <a href="#order" className="block w-full py-3 bg-mauve/20 text-mauve-dark font-bold rounded hover:bg-mauve hover:text-white transition-colors">Select Basic</a>
          </div>

           <div className="bg-mauve p-8 rounded-xl shadow-lg text-white transform md:-translate-y-4">
            <div className="uppercase tracking-widest text-sm mb-4 opacity-80">Most Popular Gift</div>
            <h3 className="text-2xl mb-4 text-white">The Premium Experience</h3>
            <p className="text-4xl font-bold mb-6">₹9,499 <span className="text-base font-normal opacity-70">one-time</span></p>
             <ul className="text-left space-y-3 mb-8">
              <li className="flex items-center"><span className="mr-2">✓</span> Up to 5 pages (About, Gallery, Blog, etc.)</li>
              <li className="flex items-center"><span className="mr-2">✓</span> Custom Interactive Elements</li>
              <li className="flex items-center"><span className="mr-2">✓</span> Domain Name Registration (1 yr)</li>
              <li className="flex items-center"><span className="mr-2">✓</span> Priority Support</li>
            </ul>
            <a href="#order" className="block w-full py-3 bg-white text-mauve-dark font-bold rounded hover:bg-paper transition-colors">Select Premium</a>
          </div>
        </div>

        <div className="bg-mauve/10 p-8 rounded-lg">
            <h3 className="text-2xl mb-2 text-mauve-dark">Need something totally unique?</h3>
            <p className="text-ink/80">Custom projects typically range between <strong>₹10,000 - ₹12,500+</strong> depending on complexity. Use the order form to describe your vision.</p>
        </div>

      </div>
    </section>
  );
}