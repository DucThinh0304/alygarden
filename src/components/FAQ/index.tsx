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
      question: "Nền tảng của bạn có mức phí bao nhiêu?",
      answer:
        "Chúng tôi tính phí giao dịch cạnh tranh 8% để bạn giữ được 92% giá bán của mình.",
    },
    {
      id: 4,
      question: "Phương thức thanh toán nào được chấp nhận?",
      answer:
        "Chúng tôi chấp nhận phương thức thanh toán như momo, các thẻ ngân hàng, paypal,...",
    },
    {
      id: 5,
      question: "Tôi có thể trả lại sản phẩm nếu không hài lòng?",
      answer:
        "Việc trả lại và hoàn tiền được xử lý trực tiếp giữa người mua và người bán. Vui lòng liên hệ với người bán.",
    },
  ];

  return (
    <div className="w-full py-5">
      <div className="bg-[#e0e1dd] p-8 rounded-lg shadow-md w-[89%] max-w-[1400px] m-auto">
        <h2 className="text-2xl mb-6 font-semibold">
          Những câu hỏi thường gặp
        </h2>

        {questions.map((q) => (
          <div key={q.id} className="mb-4 last:mb-0">
            <button
              className="w-full text-left text-xl focus:outline-none p-4 bg-gray-100 rounded-lg shadow-md flex justify-between items-center"
              onClick={() =>
                setActiveQuestion(activeQuestion === q.id ? null : q.id)
              }
            >
              {q.question}
              <div>
                {activeQuestion === q.id ? (
                  <FaMinusCircle className="text-black" size={25} />
                ) : (
                  <FaPlusCircle className="text-black" size={25} />
                )}
              </div>
            </button>
            <AnimatePresence>
              {activeQuestion === q.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-2 text-gray-600 ml-4"
                >
                  <p className="text-black text-xl">{q.answer}</p>
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
