'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import { useEffect, useState } from 'react';
import { TypingEffect } from '@/components/typing-effect';

export function FloatingWhatsApp() {
  const whatsappLink = "https://wa.me/34613997841?text=¡Hola!%20Tengo%20una%20pregunta%20sobre%20la%20formación%20de%20IA.";
  const [isBubbleVisible, setIsBubbleVisible] = useState(true);
  const [animationCount, setAnimationCount] = useState(0);

  const handleAnimationComplete = () => {
    setAnimationCount(prevCount => prevCount + 1);
  };

  useEffect(() => {
    if (animationCount >= 3) {
      setIsBubbleVisible(false);
      const hideTimeout = setTimeout(() => {
        setAnimationCount(0);
        setIsBubbleVisible(true);
      }, 60000); // 1 minuto

      return () => clearTimeout(hideTimeout);
    }
  }, [animationCount]);

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {isBubbleVisible && (
       <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-full right-0 mb-2 w-max max-w-[calc(100vw-5rem)]"
      >
        <div className="bg-background border border-border/50 rounded-lg px-4 py-2 text-sm text-foreground shadow-lg relative">
          <p className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4 text-primary" />
            <TypingEffect text=" ¿Quieres Saber mas? Habla con Cometín" onAnimationComplete={handleAnimationComplete} />
          </p>
          <div className="absolute right-4 -bottom-2 h-4 w-4 bg-background border-r border-b border-border/50 transform rotate-45"></div>
        </div>
      </motion.div>
      )}
      <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="Hablar por WhatsApp">
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ 
                opacity: 1, 
                scale: 1,
            }}
            transition={{
                delay: 0.5,
                duration: 0.5,
                type: 'spring',
                stiffness: 120,
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="rounded-full bg-gradient-to-tr from-green-500 to-green-400 p-3 shadow-lg shadow-primary/30 animate-pulse hover:animate-none cursor-pointer border-2 border-white/80"
        >
          <Image
            src="/Whatsaap.webp"
            alt="WhatsApp Icon"
            width={32}
            height={32}
            className="h-8 w-8"
          />
        </motion.div>
      </Link>
    </div>
  );
}
