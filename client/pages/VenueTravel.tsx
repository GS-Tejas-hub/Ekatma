import { Link } from "react-router-dom";

export default function VenueTravel() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Venue & Travel
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Location and Travel Information
          </p>
        </div>

        <div className="space-y-12">
          {/* Venue Section */}
          <section className="bg-white border border-border rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Conference Venue
            </h2>
            <div className="space-y-4">
              <div>
                <p className="font-bold text-foreground mb-2">Host Institution</p>
                <p className="text-base text-black">
                  Karnataka State Open University (KSOU)
                </p>
              </div>
              <div>
                <p className="font-bold text-foreground mb-2">Location</p>
                <p className="text-base text-black">
                  Belgaum (Belagavi), Karnataka, India
                </p>
              </div>
              <div>
                <p className="font-bold text-foreground mb-2">Dates</p>
                <p className="text-base text-black">
                  25–27 March 2026
                </p>
              </div>
            </div>
          </section>

          {/* Getting There Section */}
          <section className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-8 border border-primary-200">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Getting to Belgaum
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-primary mb-3">✈️ By Air</h3>
                <p className="text-base text-black mb-3">
                  The nearest major airport is Belgaum Airport. Alternatively, international flights operate from:
                </p>
                <ul className="text-base text-black space-y-2">
                  <li>• Bangalore International Airport (BLR) - ~250 km away</li>
                  <li>• Hyderabad International Airport (HYD) - ~400 km away</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary mb-3">🚂 By Train</h3>
                <p className="text-base text-black">
                  Belgaum Railway Station is well-connected to major Indian cities including Bangalore, Pune, and Hyderabad with regular express and passenger trains.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary mb-3">🚗 By Road</h3>
                <p className="text-base text-black">
                  Belgaum is accessible via National Highways and is well-connected by bus services from neighboring states. Taxis and car rentals are available for local travel.
                </p>
              </div>
            </div>
          </section>

          {/* Accommodation Section */}
          <section className="bg-white border border-border rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Accommodation
            </h2>
            <p className="text-base text-black leading-relaxed mb-6">
              Belgaum offers a range of accommodation options for conference participants, from budget hotels to premium resorts. The Reception Committee can provide recommendations and assistance with bookings.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="font-semibold text-foreground mb-2">Accommodation Support</p>
              <p className="text-base text-black">
                For detailed information on partnered hotels, group booking discounts, and accommodation arrangements, please contact the Reception Committee at <Link to="/contact" className="text-primary font-semibold hover:underline">contact@conference.com</Link>.
              </p>
            </div>
          </section>

          {/* Local Travel Section */}
          <section className="bg-white border border-border rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Local Transportation
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <span className="text-2xl text-secondary">✓</span>
                <div>
                  <p className="font-bold text-foreground mb-1">Airport Transfers</p>
                  <p className="text-base text-black">Airport shuttle services will be available for registered participants</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-2xl text-secondary">✓</span>
                <div>
                  <p className="font-bold text-foreground mb-1">Local Transport</p>
                  <p className="text-base text-black">Taxis, auto-rickshaws, and ride-sharing services are readily available</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-2xl text-secondary">✓</span>
                <div>
                  <p className="font-bold text-foreground mb-1">Venue Access</p>
                  <p className="text-base text-black">The conference venue is easily accessible from city center and major hotels</p>
                </div>
              </div>
            </div>
          </section>

          {/* Visa Information Section */}
          <section className="bg-gradient-to-r from-secondary-50 to-accent-50 rounded-lg p-8 border border-secondary-200">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Visa & Travel Requirements
            </h2>
            <p className="text-base text-black leading-relaxed mb-4">
              International participants may require a visa to enter India. We recommend checking with your nearest Indian embassy or consulate for specific visa requirements based on your nationality.
            </p>
            <p className="text-base text-black">
              The conference organizers can provide a letter of invitation to support your visa application. Please contact us with your registration details.
            </p>
          </section>
        </div>

        {/* CTA Section */}
        <div className="mt-16 pt-16 border-t border-border text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Plan Your Visit</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Register for the conference and start planning your travel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/registration"
              className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-lg"
            >
              Register Now
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 bg-white border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary-50 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
