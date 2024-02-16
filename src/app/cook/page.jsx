import { StickyNavbar } from "@/components/header";
import CookHero from "./hero";
import RegisteredChef from "./chef-registered";
import GettingStarted from "./getting-started";
import Benefits from "./benefits";
import PaymentFeatures from "./payment-features";
import ChefFAQ from "./chef-faq";
import Footer from "@/components/footer";

export default function ChefPage() {
  return (
    <div>
      <StickyNavbar />
      <CookHero />
      <RegisteredChef />
      <GettingStarted />
      <Benefits />
      <PaymentFeatures />
      <ChefFAQ />
      <Footer />
    </div>
  )
}