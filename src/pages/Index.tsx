import { motion, AnimatePresence } from "framer-motion";
import ContactForm from "../components/ContactForm";

const Index = () => {
  return (
    <AnimatePresence>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 py-16 space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-4"
          >
            <span className="px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
              Authorized Reseller
            </span>
            <h1 className="text-4xl md:text-5xl font-bold">
              AutoCAD 2024
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Professional CAD software at unbeatable prices. 100% genuine licenses with instant delivery.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="p-6 rounded-xl bg-white/5 border border-gray-700 backdrop-blur-sm"
              >
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <ContactForm />
          </div>

          <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center text-sm text-gray-500 mt-16"
          >
            Secure payment processing by PayPal. All licenses are genuine and backed by Autodesk.
          </motion.footer>
        </div>
      </div>
    </AnimatePresence>
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

export default Index;