import { motion, AnimatePresence } from "framer-motion";
import ContactForm from "../components/ContactForm";
import { Star, Building, Shield, Award } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16 space-y-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4"
        >
          <span className="px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
            Premium Authorized Reseller
          </span>
          <h1 className="text-4xl md:text-5xl font-bold">
            AutoCAD 2024
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Professional CAD software at unbeatable prices. 100% genuine licenses with instant delivery.
          </p>
        </motion.div>

        {/* Product Image and Description */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          <div className="glass-card rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800"
              alt="AutoCAD Professional Workspace"
              className="w-full h-[300px] object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Industry-Leading CAD Software</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Shield className="text-primary mt-1" size={20} />
                <span>Official Autodesk license with full support</span>
              </li>
              <li className="flex items-start gap-3">
                <Award className="text-primary mt-1" size={20} />
                <span>Latest 2024 version with all features included</span>
              </li>
              <li className="flex items-start gap-3">
                <Building className="text-primary mt-1" size={20} />
                <span>Perfect for professionals and businesses</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="p-6 rounded-xl glass-card"
            >
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Customer Reviews */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-2xl font-semibold text-center mb-8">Customer Reviews</h2>
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
                <p className="font-medium">{review.name}</p>
                <p className="text-sm text-gray-400">{review.company}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto">
          <ContactForm />
        </div>

        {/* Company Info */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center space-y-4 max-w-2xl mx-auto"
        >
          <div className="p-6 rounded-xl glass-card">
            <h3 className="text-xl font-semibold mb-4">About Our Company</h3>
            <p className="text-gray-400">
              As an authorized Autodesk reseller, we provide genuine software licenses at competitive prices. 
              With over 10 years of experience, we've helped thousands of professionals and businesses 
              acquire their essential software tools.
            </p>
          </div>
          <p className="text-sm text-gray-500">
            Secure payment processing by PayPal. All licenses are genuine and backed by Autodesk.
          </p>
        </motion.footer>
      </div>
    </div>
  );
};

const features = [
  {
    title: "Genuine License",
    description: "100% authentic Autodesk license with full support and updates.",
  },
  {
    title: "Instant Delivery",
    description: "Receive your license key immediately after payment.",
  },
  {
    title: "Lifetime Support",
    description: "Free technical support and installation assistance.",
  },
];

const reviews = [
  {
    name: "John Smith",
    company: "Architectural Innovations",
    rating: 5,
    text: "Excellent service and competitive pricing. The license was delivered instantly, and their support team was very helpful with the installation process.",
  },
  {
    name: "Sarah Johnson",
    company: "Engineering Solutions Ltd",
    rating: 5,
    text: "We've purchased multiple licenses for our team. The process was smooth, and the prices are unbeatable. Highly recommended!",
  },
];

export default Index;