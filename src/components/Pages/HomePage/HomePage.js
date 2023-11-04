//Components
import Footer from "./Footer/Footer";
import Email from "./EmailSubscription/Email";
import HeroSection from "./Hero/HeroSection";
import FeatureSection from "./FeatureSection/FeatureSection";
// import LogoClouds from "./LogoClouds/LogoClouds";


export default function HomePage() {
  return (
    <div>

    <head>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-997BJVMK2H"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'G-997BJVMK2H');
</script>
    </head>
    <div className="HomePage">
    
        <HeroSection/>
        <Email/>

        <FeatureSection/>
        {/* <LogoClouds/> */}
        <div className="pt-5 pb-12 lg:pt-[120px] lg:pb-[90px]"> 
          <Footer />
        </div>
    </div>
    </div>

  )
}
