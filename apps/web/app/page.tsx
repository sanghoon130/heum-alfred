import Section1 from "./status-report/section1/page"
import Section2 from "./status-report/section2/page"
import Section3 from "./status-report/section3/page"
import Footer from "./footer/footer"

export default function Page() {
  return (
    <div className="w-full overflow-x-hidden">
        <Section1 />
        <Section2 />
        <Section3 />
        <Footer />
      </div>
  )
}
