"use client";
import { useState } from "react";
export default function ExpandableText() {
  const [expanded, setExpanded] = useState(false);

  const fullText = `Every student is unique — and so is their learning style. That’s why we offer multiple coaching modes to fit every kind of learner: whether you prefer focused individual attention, collaborative group learning, or specialized topic-based sessions. With this flexibility, you can learn at your own pace, focus on your weak areas, and prepare smarter for the Cambridge exams — all under the expert guidance of Dr. Omar. Explore the modes below and pick the one that suits you best. Whichever you choose, rest assured: you’re in expert hands.`;
  const previewLength = 140;

  const textToShow = expanded
    ? fullText
    : fullText.slice(0, previewLength) + "...";

  return (
    <p className="text-white text-center mb-20 font-light">
      {textToShow}
      <span
        onClick={() => setExpanded(!expanded)}
        className="text-blue-400 font-medium cursor-pointer ml-2"
      >
        {expanded ? "Show Less" : "Read More"}
      </span>
    </p>
  );
}
