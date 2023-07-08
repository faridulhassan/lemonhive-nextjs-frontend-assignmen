import TopCompanies from "@/components/TopCompanies";
import TopHeader from "@/components/TopHeader";
import FlippedBanner from "@/components/FlippedBanner/FlippedBanner";
import FeaturedCards from "@/components/FeaturedCards/FeaturedCards";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="pt-28 pb-4">
        <TopHeader />
      </section>
      <section className="py-10">
        <FlippedBanner />
      </section>

      <section className="py-28">
        <TopCompanies />
      </section>
      <section className="">
        <FeaturedCards />
      </section>
    </div>
  );
}
