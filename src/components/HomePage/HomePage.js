//Components
import Footer from "./Footer/Footer";
import Email from "./EmailSubscription/Email";
//ReactRouter
import { Outlet } from "react-router-dom";


export default function HomePage() {
  return (
    <div className="HomePage">
        <Email/>
        <Footer/>
    <Outlet/>
    </div>
  )
}
