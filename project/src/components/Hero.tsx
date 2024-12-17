import { motion } from 'framer-motion';
import { MouseParallaxContainer, MouseParallaxChild } from 'react-parallax-mouse';
import { Computer } from './Computer';
import { PowerButton } from './PowerButton';
import { useState } from 'react';

export const Hero = () => {
  const [isPoweredOn, setIsPoweredOn] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-gray-900 to-gray-900"></div>
      
      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <MouseParallaxContainer>
          <MouseParallaxChild factorX={0.03} factorY={0.03}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-6xl md:text-8xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-600">
                  Hi, I'm Periyanan
                </span>
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 mb-8">
                Creating Stunning Websites That Leave a Lasting Impression
              </p>
            </motion.div>
          </MouseParallaxChild>
        </MouseParallaxContainer>

        <div className="h-[500px] relative mt-16">
          <PowerButton isPowered={isPoweredOn} onToggle={() => setIsPoweredOn(!isPoweredOn)} />
          <Computer isOn={isPoweredOn} />
        </div>
      </div>
    </div>
  );
};