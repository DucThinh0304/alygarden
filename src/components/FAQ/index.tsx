"use client";

import React, { useState } from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const FAQComponent = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const questions = [
    {
      id: 1,
      question: "Việc vận chuyển thường tốn bao nhiêu thời gian?",
      answer: "Vận chuyển thường sẽ tốn tầm 5 tới 10 ngày",
    },
    {
      id: 2,
      question: "Việc mua hàng trên nền tảng của bạn hoạt động như thế nào?",
      answer:
        "Bạn có thể duyệt danh sách theo người bán, thêm mặt hàng vào giỏ hàng và thanh toán một cách an toàn. Chúng tôi tạo điều kiện thuận lợi cho các giao dịch và vận chuyển.",
    },
    {
      id: 3,
      question: "Can I just purchase the stand?",
      answer:
        "Unfortunatley, we are only selling the bundle which includes the stand",
    },
    {
      id: 4,
      question: "How can I track my order?",
      answer: "You can go to your dashboard and view all of your orders",
    },
    {
      id: 5,
      question: "How many years does this lamp last?",
      answer:
        "We would hope a lifetime, but you never know what could happen. ",
    },
  ];

  return (
    <div id="faq" className="w-full py-5">
      <div className="bg-[#e0e1dd] p-8 rounded-lg shadow-md w-[89%] max-w-[1400px] m-auto">
        <h2 className="text-2xl mb-6 font-semibold">
          Những câu hỏi thường gặp
        </h2>

        {questions.map((q) => (
          <div key={q.id} className="mb-4 last:mb-0">
            <button
              className="faq-question w-full text-left text-xl focus:outline-none p-4 bg-gray-100 rounded-lg shadow-md flex justify-between items-center"
              onClick={() =>
                setActiveQuestion(activeQuestion === q.id ? null : q.id)
              }
            >
              {q.question}
              {activeQuestion === q.id ? (
                <FaMinusCircle className="text-black" size={20} />
              ) : (
                <FaPlusCircle className="text-black" size={20} />
              )}
            </button>
            <AnimatePresence>
              {activeQuestion === q.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-2 text-gray-600 ml-4"
                >
                  <p>{q.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQComponent;
