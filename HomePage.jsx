import React from "react";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-900 via-lime-800 to-yellow-600 text-white p-4">
      <header className="flex justify-between items-center py-6 border-b border-white/10">
        <h1 className="text-3xl font-bold text-yellow-300">وسيطك الذكي</h1>
        <nav className="space-x-4 rtl:space-x-reverse">
          <a className="hover:underline">الرئيسية</a>
          <a className="hover:underline">بيع وشراء</a>
          <a className="hover:underline">الخدمات</a>
          <a className="hover:underline">المشاريع</a>
        </nav>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 py-16 items-center">
        <div>
          <motion.h2 
            className="text-4xl font-extrabold text-white mb-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            منصة الوساطة الذكية التي تفهمك قبل أن تبحث
          </motion.h2>
          <p className="text-lg text-white/80 mb-4">
            اجعل رحلتك في الشراء أو تنفيذ مشروعك أسهل، أسرع، وأكثر دقة. وساطة شاملة بين المتعاملين والبائعين والحرفيين.
          </p>
          <button className="bg-yellow-400 text-green-900 px-4 py-2 rounded font-bold mt-4 hover:bg-yellow-500 transition">
            ابدأ الآن
          </button>
        </div>

        <motion.div 
          className="w-full h-64 bg-white/10 rounded-2xl shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
        </motion.div>
      </section>

      <section className="py-12">
        <h3 className="text-2xl font-bold text-yellow-200 mb-6 text-center">ماذا نقدم لك؟</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-green-800 p-6 rounded-xl shadow">
            <h4 className="text-xl font-semibold text-yellow-300 mb-2">تحليل شخصي دقيق</h4>
            <p>نقدّم لك توصيات بناءً على شخصيتك وذوقك لتجربة شراء أو تنفيذ خدمة مثالية.</p>
          </div>
          <div className="bg-green-800 p-6 rounded-xl shadow">
            <h4 className="text-xl font-semibold text-yellow-300 mb-2">وساطة موثوقة</h4>
            <p>نربطك بالحرفي المناسب أو البائع المثالي بأمان وشفافية كاملة.</p>
          </div>
          <div className="bg-green-800 p-6 rounded-xl shadow">
            <h4 className="text-xl font-semibold text-yellow-300 mb-2">خدمات متكاملة</h4>
            <p>من بيع وشراء، إلى تجهيز ديكور وتنفيذ مشاريع... كل شيء في منصة واحدة.</p>
          </div>
        </div>
      </section>
    </main>
  );
}