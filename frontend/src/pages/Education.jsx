import React, { useState } from "react";
import Header from "../components/Header";

const articles = [
  {
    id: 1,
    title: "Загрязнение воздуха: глобальная проблема",
    summary: "Как загрязнение воздуха влияет на окружающую среду и что можно сделать для его сокращения?",
    content: "Загрязнение воздуха представляет собой серьезную угрозу для экосистем и здоровья человека. Основные источники загрязнения включают транспорт, промышленность и бытовые выбросы. Меры по снижению включают переход на возобновляемые источники энергии, развитие общественного транспорта и улучшение очистных сооружений."
  },
  {
    id: 2,
    title: "Влияние загрязнённого воздуха на здоровье",
    summary: "Разбираем, как загрязнение воздуха связано с заболеваниями дыхательной системы и сердечно-сосудистыми проблемами.",
    content: "Длительное воздействие загрязненного воздуха может привести к астме, хроническому бронхиту и даже болезням сердца. Мелкодисперсные частицы (PM2.5) особенно опасны, так как они проникают глубоко в легкие и кровоток."
  },
  {
    id: 3,
    title: "Как защитить себя от загрязненного воздуха?",
    summary: "Простые способы снизить воздействие загрязненного воздуха на организм.",
    content: "Использование масок с фильтрами, очистителей воздуха в помещениях, а также мониторинг качества воздуха помогут снизить риск негативного воздействия загрязненного воздуха."
  }
];

const Education = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <>
    <Header />
    <div className="container mx-auto px-4 pt-28 pb-16">
      <h1 className="text-3xl font-bold text-center mb-8">Образовательные статьи</h1>
      {selectedArticle ? (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <button className="text-blue-500 underline mb-4" onClick={() => setSelectedArticle(null)}>
            ← Назад к списку
          </button>
          <h2 className="text-2xl font-semibold mb-4">{selectedArticle.title}</h2>
          <p className="text-lg">{selectedArticle.content}</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div 
              key={article.id} 
              className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition"
              onClick={() => setSelectedArticle(article)}
            >
              <h3 className="text-xl font-semibold">{article.title}</h3>
              <p className="text-gray-600 mt-2">{article.summary}</p>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
};

export default Education;
