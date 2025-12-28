import { useState } from "react";
import { Check } from "lucide-react";

export default function RegistrationSection() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<"card" | "upi">("card");

  const registrationTiers = [
    {
      id: "student",
      title: "Student",
      price: "₹500",
      description: "For currently enrolled students",
      features: [
        "Conference access (3 days)",
        "Conference materials & proceedings",
        "Accommodation (Mysore)",
        "All meals included",
        "Networking certificate",
      ],
      cta: "Register as Student",
    },
    {
      id: "research",
      title: "Research Scholar",
      price: "₹1,000",
      description: "For PhD students and early-career researchers",
      features: [
        "Conference access (3 days)",
        "Conference materials & proceedings",
        "Accommodation (Mysore)",
        "All meals included",
        "Networking certificate",
        "Paper presentation opportunity",
      ],
      cta: "Register as Research Scholar",
    },
    {
      id: "academic",
      title: "Academician & Practitioner",
      price: "₹2,000",
      description: "For professors, professionals, and practitioners",
      features: [
        "Conference access (3 days)",
        "Conference materials & proceedings",
        "Accommodation (Mysore)",
        "All meals included",
        "Networking certificate",
        "Paper presentation opportunity",
        "VIP networking dinner",
        "Certificate of participation",
      ],
      cta: "Register as Academician",
    },
  ];

  const handleRegister = (tierId: string) => {
    setSelectedTier(tierId);
    // Scroll to payment section
    setTimeout(() => {
      document
        .getElementById("payment-section")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <section id="registration" className="py-8 md:py-12 bg-white">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Conference Registration
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose your registration tier. Accommodation and meals are included
            in all categories.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {registrationTiers.map((tier) => (
            <div
              key={tier.id}
              className="relative rounded-xl border-2 border-border bg-white hover:shadow-lg transition-all duration-300"
            >

              <div className="p-8">
                {/* Tier Info */}
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {tier.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {tier.description}
                </p>

                {/* Price */}
                <div className="mb-8">
                  <span className="text-4xl font-bold text-primary">
                    {tier.price}
                  </span>
                  <p className="text-sm text-muted-foreground mt-2">
                    One-time registration
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handleRegister(tier.id)}
                  className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 bg-muted text-foreground hover:bg-muted-foreground/10 border border-border"
                >
                  {tier.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Payment Section */}
        {selectedTier && (
          <div id="payment-section" className="bg-gradient-to-b from-gray-50 to-white border border-border rounded-xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Complete Your Registration
            </h3>

            {/* Selected Tier Summary */}
            <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 mb-8">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Selected Registration
                  </p>
                  <p className="text-xl font-bold text-foreground">
                    {
                      registrationTiers.find((t) => t.id === selectedTier)
                        ?.title
                    }
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Amount</p>
                  <p className="text-2xl font-bold text-primary">
                    {
                      registrationTiers.find((t) => t.id === selectedTier)
                        ?.price
                    }
                  </p>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="mb-8">
              <p className="font-semibold text-foreground mb-4">
                Choose Payment Method
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentMethod === "card"}
                    onChange={(e) => setPaymentMethod(e.target.value as "card" | "upi")}
                    className="sr-only"
                  />
                  <div
                    className={`border-2 rounded-lg p-4 transition-all ${
                      paymentMethod === "card"
                        ? "border-primary bg-primary-50"
                        : "border-border hover:border-primary-200"
                    }`}
                  >
                    <p className="font-semibold text-foreground">
                      💳 Card Payment
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Visa, Mastercard, American Express
                    </p>
                  </div>
                </label>

                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="upi"
                    checked={paymentMethod === "upi"}
                    onChange={(e) => setPaymentMethod(e.target.value as "card" | "upi")}
                    className="sr-only"
                  />
                  <div
                    className={`border-2 rounded-lg p-4 transition-all ${
                      paymentMethod === "upi"
                        ? "border-primary bg-primary-50"
                        : "border-border hover:border-primary-200"
                    }`}
                  >
                    <p className="font-semibold text-foreground">
                      📱 UPI / Bank Transfer
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Available in India
                    </p>
                  </div>
                </label>
              </div>
            </div>

            {/* Payment Info Box */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <p className="text-sm text-blue-900 leading-relaxed">
                <span className="font-semibold">Note:</span> You will receive a
                confirmation email with your registration details. Payment
                processing details will be provided upon selection.
              </p>
            </div>

            {/* Payment Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  alert(
                    `Processing ${paymentMethod === "card" ? "card" : "UPI"} payment for ${registrationTiers.find((t) => t.id === selectedTier)?.title}. Payment processing will be configured soon.`
                  );
                }}
                className="flex-1 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-lg"
              >
                {paymentMethod === "card" ? "Pay with Card" : "Pay with UPI"}
              </button>
              <button
                onClick={() => setSelectedTier(null)}
                className="flex-1 px-8 py-4 bg-white border-2 border-border text-foreground font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                Back
              </button>
            </div>

            {/* Secured Payment Badge */}
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <span>🔒</span>
              <span>Secured & Encrypted Payment | Stripe Verified</span>
            </div>
          </div>
        )}

        {/* Info Section */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="bg-gradient-to-br from-primary-50 to-white border border-primary-200 rounded-lg p-6">
            <h4 className="font-bold text-primary mb-2">✅ What's Included</h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• 3 days conference access</li>
              <li>• All meals & refreshments</li>
              <li>• Accommodation in Mysore</li>
              <li>• Conference materials</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-secondary-50 to-white border border-secondary-200 rounded-lg p-6">
            <h4 className="font-bold text-secondary mb-2">📋 Next Steps</h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>1. Choose your tier</li>
              <li>2. Complete payment</li>
              <li>3. Receive confirmation</li>
              <li>4. Access portal</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-accent-50 to-white border border-accent-200 rounded-lg p-6">
            <h4 className="font-bold text-accent mb-2">❓ Support</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Questions about registration?
            </p>
            <p className="text-sm font-semibold text-foreground">
              📧 thebharatsworldview@gmail.com
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 pt-16 border-t border-border text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Explore More</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Learn about the conference topics, guidelines, and important dates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/call-for-papers"
              className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-lg"
            >
              Call for Papers
            </a>
            <a
              href="/important-dates"
              className="px-8 py-3 bg-white border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary-50 transition-colors"
            >
              Important Dates
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
