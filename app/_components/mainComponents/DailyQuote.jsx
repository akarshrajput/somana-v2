"use client";
import { Quotes } from "@phosphor-icons/react/dist/ssr";
import { useEffect, useState } from "react";

const quotesArray = [
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Believe you can and you're halfway there.",
  "It does not matter how slowly you go as long as you do not stop.",
  "Success usually comes to those who are too busy to be looking for it.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Keep your eyes on the stars, and your feet on the ground.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Dream it. Wish it. Do it.",
  "Great things never come from comfort zones.",
  "Success doesn’t just find you. You have to go out and get it.",
  "The key to success is to focus on goals, not obstacles.",
  "Dream bigger. Do bigger.",
  "Don’t wait for opportunity. Create it.",
  "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",
  "The only limit to our realization of tomorrow is our doubts of today.",
  "Work hard in silence, let your success be the noise.",
  "The only place where success comes before work is in the dictionary.",
  "Good things come to those who hustle.",
  "Focus on being productive instead of busy.",
  "It’s not whether you get knocked down, it’s whether you get up.",
  "The road to success and the road to failure are almost exactly the same.",
  "Failure is the condiment that gives success its flavor.",
  "People who are crazy enough to think they can change the world, are the ones who do.",
  "Don’t be afraid to give up the good to go for the great.",
  "I find that the harder I work, the more luck I seem to have.",
  "Success is walking from failure to failure with no loss of enthusiasm.",
  "If you really look closely, most overnight successes took a long time.",
  "The only way to do great work is to love what you do.",
  "The secret of success is to do the common thing uncommonly well.",
];
const DailyQuote = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    // Get the current day of the year (0-364/365)
    const today = new Date().getDate();
    // Select a quote based on the current day
    const dailyQuote = quotesArray[today % quotesArray.length];
    setQuote(dailyQuote);
  }, []);

  return (
    <div className="bg-stone-100 dark:bg-stone-700 p-2 rounded-md">
      <p className="font-bold flex items-center gap-1 mb-1">
        Quote of the day
        <Quotes weight="fill" />
      </p>
      <div>
        <p className="text-sm font-medium dark:text-green-100 text-green-800">
          {quote}
          <span>
            <Quotes
              weight="bold"
              className="text-stone-800 dark:text-stone-50"
            />
          </span>
        </p>
      </div>
    </div>
  );
};

export default DailyQuote;
