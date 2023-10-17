//Components
import Footer from "./Footer/Footer";
import Email from "./EmailSubscription/Email";
import HeroSection from "./Hero/HeroSection";
import FeatureSection from "./FeatureSection/FeatureSection";
// import LogoClouds from "./LogoClouds/LogoClouds";


export default function HomePage() {
  return (
    <div className="HomePage">
        <HeroSection/>
        <Email/>

        <FeatureSection/>
        {/* <LogoClouds/> */}
        <div className="pt-5 pb-12 lg:pt-[120px] lg:pb-[90px]"> 
          <Footer />
        </div>
    </div>
  )
}
