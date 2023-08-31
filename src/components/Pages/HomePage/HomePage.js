//Components
import Footer from "./Footer/Footer";
import Email from "./EmailSubscription/Email";
import HeroSection from "./Hero/HeroSection";
import FeatureSection from "./FeatureSection/FeatureSection";


export default function HomePage() {
  return (
    <div className="HomePage">
        <HeroSection/>
        <FeatureSection/>
        <Email/>
        <Footer/>
    </div>
  )
}
