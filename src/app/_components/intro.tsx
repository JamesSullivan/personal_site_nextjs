import { CMS_NAME } from "@/lib/constants";

export function Intro() {
  return (
    <section>
    <div className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        solutions.asia
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Data, Analytics, and Digital Product Development{" "}
        <a
          href="https://www.linkedin.com/in/jamesbriansullivan/"
          className="underline hover:text-blue-600 duration-200 transition-colors"
        >
          Linkedin
        </a>
      </h4>
    </div>
      <div className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-6">Services</h2>
      </div>
      <div className="flex flex-row justify-center md:justify-between">
      <div className="box b">
        <div className = "text-3xl font-bold">Digital Product</div>
        <div className="text-2xl pl-3">
          costing<br />prototyping<br />implementation<br />testing &
          integration
        </div>
      </div>
      <div className="box c text-left">
        <div className="text-3xl font-bold text-align: left">Data & Analytics</div>
        <div className="text-2xl pl-3">
          scraping<br />visualization<br />ETL<br />ML<br />
        </div>
      </div>
    </div>
    <br/><br/>
    </section>

  );
}
