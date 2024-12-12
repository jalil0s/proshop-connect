import { motion, AnimatePresence } from "framer-motion";
import ContactForm from "../components/ContactForm";
import { Star, Building, Shield, Award, Check, Clock, Gift, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import CountdownTimer from "@/components/marketing/CountdownTimer";
import ProductImages from "@/components/marketing/ProductImages";
import FacebookBanner from "@/components/marketing/FacebookBanner";

const Index = () => {
  const benefits = [
    "✓ Lifetime Updates & Support",
    "✓ Commercial License Included",
    "✓ Premium Template Library ($299 value)",
    "✓ 30-Day Money-Back Guarantee",
    "✓ Instant Digital Delivery",
    "✓ Professional Training Resources",
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Senior Architect",
      company: "Design Masters Inc.",
      content: "AutoCAD 2024 has revolutionized our workflow. The new features are incredible!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Project Manager",
      company: "BuildTech Solutions",
      content: "Best investment for our team. The lifetime license is a game-changer.",
      rating: 5
    }
  ];

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
            <p className="text-primary font-medium">🎉 Flash Sale - Facebook Exclusive Offer!</p>
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
                Transform your design workflow with the most powerful CAD software. Special offer ends soon!
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <Shield className="text-primary" size={16} />
                Official License
              </span>
              <span className="flex items-center gap-2">
                <Gift className="text-primary" size={16} />
                $299 Bonus Templates
              </span>
              <span className="flex items-center gap-2">
                <Zap className="text-primary" size={16} />
                Instant Access
              </span>
            </div>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left Column - Product Info */}
            <div className="space-y-8">
              {/* Product Images */}
              <ProductImages />

              {/* Features List */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="glass-card p-8 rounded-2xl space-y-6"
              >
                <h3 className="text-xl font-semibold">Everything You Need to Succeed</h3>
                <ul className="space-y-3">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3 text-sm">
                      <Check className="text-primary" size={16} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Testimonials */}
              <div className="space-y-4">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="glass-card p-6 rounded-xl"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="fill-primary text-primary" size={16} />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-4">{testimonial.content}</p>
                    <div className="flex items-center gap-2">
                      <div>
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-sm text-gray-400">{testimonial.role} at {testimonial.company}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column - Checkout Form */}
            <div className="sticky top-8">
              <ContactForm />
            </div>
          </div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          >
            {[
              { icon: Building, label: "50,000+ Users" },
              { icon: Shield, label: "Secure Payment" },
              { icon: Award, label: "Official License" },
              { icon: Clock, label: "24/7 Support" }
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="glass-card p-4 rounded-xl">
                <Icon className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-sm">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Index;