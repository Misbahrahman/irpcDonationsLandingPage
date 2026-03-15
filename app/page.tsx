import HeroSection from '@/components/HeroSection';
import DonationCard from '@/components/DonationCard';
import ImpactSection from '@/components/ImpactSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Section 1: Hero + Donation Card */}
      <HeroSection />

      {/* Mobile Donation Card - Outside Hero Section */}
      <div className="lg:hidden bg-gradient-to-b from-gray-50 to-white py-8 px-4">
        <DonationCard />
      </div>

      {/* Section 2: Impact Stats */}
      <ImpactSection />
    </main>
  );
}
