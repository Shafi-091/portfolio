import React from 'react';
import { motion } from 'framer-motion';
import { Server, Database, Bot, Code2 } from 'lucide-react';
import './About.css';

const About = () => {
  const cards = [
    {
      icon: <Server size={32} />,
      title: 'Backend Architecture',
      description: 'Designing scalable REST APIs and secure microservices using FastAPI, Python, and JWT authentication.'
    },
    {
      icon: <Bot size={32} />,
      title: 'Agentic AI Systems',
      description: 'Building autonomous workflows and intelligent AI agents using LangGraph, LangChain, and Generative AI.'
    },
    {
      icon: <Database size={32} />,
      title: 'Database Engineering',
      description: 'Structuring normalized relational databases with MySQL and SQLAlchemy ORM for high-performance data retrieval.'
    },
    {
      icon: <Code2 size={32} />,
      title: 'Clean Code',
      description: 'Committed to writing maintainable, decoupled, and production-ready code using industry best practices.'
    }
  ];

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' }
    })
  };

  return (
    <section className="section about" id="about">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My Engineering Philosophy
        </motion.h2>

        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p>
              I am a <strong>Software Developer</strong> building scalable REST APIs using <strong>Python, FastAPI, SQLAlchemy, and MySQL</strong>. I specialize in designing secure backend systems with JWT authentication and modular architectures.
            </p>
            <p>
              Skilled in developing cutting-edge <strong>Agentic AI applications</strong> using <strong>LangGraph, LangChain, RAG, and Generative AI</strong> to build intelligent, production-ready solutions that reason, execute multi-step workflows, and interface with real-world databases and APIs.
            </p>
            <p>
              Whether it's developing backend modules at Fist-o tech Private Limited, building an intelligent shopping assistant like <strong>Ziya</strong>, or architecting transactional backends like <strong>Dayflow</strong>, I am passionate about solving real-world problems through clean architecture, robust systems, and high-performance engineering.
            </p>
          </motion.div>

          <div className="about-grid">
            {cards.map((card, index) => (
              <motion.div 
                key={index}
                className="about-card glass-panel"
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="card-icon">{card.icon}</div>
                <h3 className="card-title">{card.title}</h3>
                <p className="card-description">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
