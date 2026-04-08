import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import MapSection from "@/components/MapSection";
import BlogSection from "@/components/BlogSection";
import RecommendedTours from "@/components/RecommendedTours";
import Footer from "@/components/Footer";
import AdBanner from "@/components/AdBanner";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <AdBanner 
        title="Discover Local Activities" 
        id="SB15271426" 
        src="https://www.trip.com/partners/ad/SB15271426?Allianceid=7974128&SID=300882170&trip_sub1=" 
      />
      <About />
      <AdBanner 
        title="Explore Tbilisi" 
        id="SB15266995" 
        src="https://www.trip.com/partners/ad/SB15266995?Allianceid=7974128&SID=300882170&trip_sub1=%E7%BE%85%E8%A8%A5%E6%B2%B3%E5%8F%A3" 
      />
      <BlogSection />
      <Gallery />
      <Reviews />
      <MapSection />
      <RecommendedTours />
      <AdBanner 
        title="Find Nearby Hotels" 
        id="SB15271076" 
        src="https://www.trip.com/partners/ad/SB15271076?Allianceid=7974128&SID=300882170&trip_sub1=%E7%AC%AC%E6%AF%94%E5%88%A9%E6%96%AF" 
      />
      <Footer />
    </main>
  );
}
