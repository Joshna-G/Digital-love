import { Navbar, Hero, Procedure, Description, DemoLink } from "@/components/Sections";
import Pricing from "@/components/Pricing";
import OrderForm from "@/components/OrderForm";

export default function Home() {
  return (
    <main className="min-h-screen">
      <meta name="google-adsense-account" content="ca-pub-7679235699554731"></meta>
      <Navbar />
      <Hero />
      <Procedure />
      <Description />
      <Pricing />
      <DemoLink />
      <OrderForm />
      
      <footer className="py-8 text-center text-ink/60 text-sm bg-paper">
        <p>© {new Date().getFullYear()} Digital Love. Made with love.</p>
      </footer>
    </main>
  );
}