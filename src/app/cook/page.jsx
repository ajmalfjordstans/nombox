import { StickyNavbar } from "@/components/header";
import CookHero from "./hero";
import RegisteredChef from "./chef-registered";
import GettingStarted from "./getting-started";
import Benefits from "./benefits";
import PaymentFeatures from "./payment-features";
import ChefFAQ from "./chef-faq";

export default function ChefPage() {
  return (
    <div>
      <CookHero />
      <RegisteredChef/>
      <GettingStarted/>
      <Benefits/>
      <PaymentFeatures/>
      <ChefFAQ/>
    </div>
  )
}