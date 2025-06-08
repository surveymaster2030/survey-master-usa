"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function ProductTabs({ product }) {
  const [activeTab, setActiveTab] = useState(0);
  const [underlineStyle, setUnderlineStyle] = useState({});
  const tabsRef = useRef([]);

  const tabs = ["Overview", "Specifications", "Download"];

  useEffect(() => {
    const currentTab = tabsRef.current[activeTab];
    if (currentTab) {
      setUnderlineStyle({
        width: currentTab.offsetWidth,
        left: currentTab.offsetLeft,
      });
    }
  }, [activeTab]);

  return (
    <div className="mx-auto mt-8 w-full max-w-3xl">
      <div className="relative border-b border-gray-300">
        <div className="flex">
          {tabs.map((tab, index) => (
            <button
              key={index}
              ref={(el) => (tabsRef.current[index] = el)}
              className={`flex-1 cursor-pointer py-2 text-center font-medium transition-colors ${
                activeTab === index
                  ? "text-secondary"
                  : "hover:text-secondary text-gray-500"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </button>
          ))}
        </div>
        <span
          className="bg-secondary absolute bottom-0 h-0.5 transition-all duration-300"
          style={{
            width: underlineStyle.width,
            left: underlineStyle.left,
          }}
        />
      </div>

      {/* Tabs Content */}
      <div className="min-h-[150px] rounded-b-md border border-t-0 border-gray-300 bg-white p-6 shadow-sm">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 0 && (
              <div className="space-y-4 leading-relaxed text-gray-800">
                {product.description.map((desc, i) => (
                  <p key={i}>{desc}</p>
                ))}
              </div>
            )}

            {activeTab === 1 && (
              <div className="text-center">
                <Image
                  src={product.Specifications}
                  width={800}
                  height={1200}
                  alt={product.name}
                />
              </div>
            )}

            {activeTab === 2 && (
              <div className="text-center">
                <a
                  href={product.dataSheet}
                  download
                  rel="noopener noreferrer"
                  className="bg-mint_green/70 mt-6 inline-block w-fit rounded-md px-8 py-4 text-xs font-medium tracking-wider text-white transition-all duration-300 hover:px-10"
                >
                  Download (PDF)
                </a>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
