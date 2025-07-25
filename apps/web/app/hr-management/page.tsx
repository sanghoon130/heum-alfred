import Section1 from "./section1/page"
import Section2 from "./section2/page"
import Footer from "../footer/footer"

export default function Page() {
  return (
    <div className="w-full overflow-x-hidden">
        <Section1 />
        <Section2 />
        <Footer />
      </div>
  )
}