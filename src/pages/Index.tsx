import { motion, AnimatePresence } from "framer-motion";
import ContactForm from "../components/ContactForm";
import { Star, Building, Shield, Award, Check, Clock, Gift, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import CountdownTimer from "@/components/marketing/CountdownTimer";
import ProductImages from "@/components/marketing/ProductImages";
import QuickCheckoutForm from "@/components/marketing/QuickCheckoutForm";
import FacebookBanner from "@/components/marketing/FacebookBanner";

const Index = () => {
  return (
    <AnimatePresence>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 py-8 space-y-12">
          {/* Facebook Banner */}
          <FacebookBanner />

          {/* Limited Time Offer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-primary/10 px-4 py-3 rounded-xl text-center space-y-2"
          >
            <p className="text-primary font-medium">🎉 Limited Time Offer Ending Soon!</p>
            <CountdownTimer />
          </motion.div>

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-6"
          >
            <div className="space-y-2">
              <Badge variant="secondary" className="mb-4">
                TRUSTED BY 50,000+ PROFESSIONALS
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-300">
                AutoCAD 2024 Professional
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Get the industry-leading CAD software at the best price. Lifetime license with instant delivery.
              </p>
            </div>

            <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <Shield className="text-primary" size={16} />
                Official License
              </span>
              <span className="flex items-center gap-2">
                <Clock className="text-primary" size={16} />
                Instant Delivery
              </span>
              <span className="flex items-center gap-2">
                <Gift className="text-primary" size={16} />
                Bonus Templates
              </span>
            </div>
          </motion.div>

          {/* Product Images */}
          <ProductImages />

          {/* Price and Checkout Section */}
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Price Card */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="glass-card p-8 rounded-2xl space-y-6"
            >
              <div className="text-center">
                <span className="text-gray-400 line-through">$1,999</span>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-4xl font-bold">$1,399</span>
                  <Badge variant="destructive">Save $600</Badge>
                </div>
                <p className="text-sm text-gray-400 mt-2">One-time payment, lifetime license</p>
              </div>

              <ul className="space-y-3">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <Check className="text-primary" size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Quick Checkout Form */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="glass-card p-8 rounded-2xl"
            >
              <h3 className="text-xl font-semibold mb-6">Quick Checkout</h3>
              <QuickCheckoutForm />
            </motion.div>
          </div>

          {/* Trust Indicators and Reviews Section */}
          <div className="space-y-12">
            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
            >
              {trustIndicators.map((indicator) => (
                <div key={indicator.title} className="text-center space-y-2">
                  <div className="text-4xl font-bold text-primary">{indicator.value}</div>
                  <p className="text-sm text-gray-400">{indicator.title}</p>
                </div>
              ))}
            </motion.div>

            {/* Contact Form */}
            <div className="max-w-4xl mx-auto">
              <ContactForm />
            </div>

            {/* Money-back Guarantee */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center space-y-4 max-w-2xl mx-auto"
            >
              <div className="p-6 rounded-xl glass-card">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">30-Day Money-Back Guarantee</h3>
                <p className="text-gray-400">
                  Try AutoCAD 2024 risk-free. If you're not completely satisfied, we'll refund your purchase. No questions asked.
                </p>
              </div>
              <p className="text-sm text-gray-500">
                Secure payment processing by PayPal. All licenses are genuine and backed by Autodesk.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

const features = [
  "✓ Lifetime License - No Subscription Required",
  "✓ Official Autodesk Product Key",
  "✓ Instant Digital Delivery",
  "✓ Free Installation Support",
  "✓ All 2024 Features Included",
  "✓ Compatible with Windows & Mac",
];

const trustIndicators = [
  { value: "50K+", title: "Active Users" },
  { value: "99.9%", title: "Satisfaction Rate" },
  { value: "24/7", title: "Support" },
  { value: "10+", title: "Years of Service" },
];

export default Index;