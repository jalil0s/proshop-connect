import { motion, AnimatePresence } from "framer-motion";
import ContactForm from "../components/ContactForm";
import { Star, Building, Shield, Award, Check, Clock, Gift, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16 space-y-16">
        {/* Top Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-primary/10 text-primary px-4 py-2 rounded-full text-center text-sm font-medium mb-8"
        >
          🎉 Special Offer: Save 30% on AutoCAD 2024 Licenses Today Only!
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

        {/* Price Card */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-md mx-auto glass-card p-8 rounded-2xl space-y-6"
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

        {/* Product Showcase */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          <div className="glass-card rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
              alt="AutoCAD Professional Workspace"
              className="w-full h-[300px] object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Why Choose Our AutoCAD License?</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Shield className="text-primary mt-1" size={20} />
                <div>
                  <span className="font-medium">100% Genuine License</span>
                  <p className="text-sm text-gray-400">Official Autodesk license with full support and updates</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Award className="text-primary mt-1" size={20} />
                <div>
                  <span className="font-medium">Latest 2024 Version</span>
                  <p className="text-sm text-gray-400">Access to all premium features and tools</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Building className="text-primary mt-1" size={20} />
                <div>
                  <span className="font-medium">Business Ready</span>
                  <p className="text-sm text-gray-400">Perfect for professionals and enterprises</p>
                </div>
              </li>
            </ul>
          </div>
        </motion.div>

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

        {/* Customer Reviews */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-2xl font-semibold text-center mb-8">Trusted by Industry Leaders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="p-6 rounded-xl glass-card"
              >
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < review.rating ? "fill-primary text-primary" : "text-gray-600"}
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">{review.text}</p>
                <div className="flex items-center gap-4">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium">{review.name}</p>
                    <p className="text-sm text-gray-400">{review.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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

const reviews = [
  {
    name: "John Smith",
    company: "Architectural Innovations",
    rating: 5,
    text: "The license activation was instant, and their support team helped me get started right away. Best deal I've found for AutoCAD!",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
  },
  {
    name: "Sarah Johnson",
    company: "Engineering Solutions Ltd",
    rating: 5,
    text: "We purchased multiple licenses for our team. The process was smooth, and the prices are unbeatable. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
  },
];

export default Index;