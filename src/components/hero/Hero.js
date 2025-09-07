import "./Hero.css";
import { Button } from "../common/Button";
import { useEffect, useRef } from "react";
import { useScrollTo } from "../../hooks/useScrollTo";
import { motion } from "framer-motion";

export const Hero = () => {
  const vidRef = useRef();

  useEffect(() => {
    vidRef.current.playbackRate = 0.5;
  }, []);

  const scrollTo = useScrollTo();

  return (
    <section id="hero" className="section">
      <video ref={vidRef} autoPlay loop muted poster="assets/logistics.jpg">
        <source src="assets/exported.mov" />
      </video>
      <div className="hero__content-container">
        <div className="hero__content">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Driving Growth Across Africa’s Natural Resources & Trade
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            A diversified investment company operating across Mineral
            Exploration, Mineral Processing, Logistics & Transport, and
            Agri‑Commodities & Trading.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50, x: -50 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hero__content-ctas"
          >
            <Button
              onClick={() => {
                scrollTo("#divisions");
              }}
            >
              Explore Divisions
            </Button>
            <Button
              className="secondary-btn"
              onClick={() => {
                scrollTo("#about");
              }}
            >
              Learn More →
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
