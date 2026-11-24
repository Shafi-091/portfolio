import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skillCategories = [
  {
    title: "Backend & Languages",
    skills: ["Python", "SQL", "FastAPI", "RESTful API Design", "SQLAlchemy", "Alembic", "Pydantic", "JWT Authentication"]
  },
  {
    title: "Agentic AI & LLMs",
    skills: ["Generative AI", "Agentic AI", "LangGraph", "LangChain", "RAG", "Prompt Engineering", "LLM Tool Calling"]
  },
  {
    title: "Database & Architecture",
    skills: ["MySQL", "MongoDB", "Database Normalization", "Data Pipelines (USPTO)"]
  },
  {
    title: "Tools & Frontend",
    skills: ["Git", "GitHub", "Linux", "HTML", "CSS", "JavaScript", "Figma", "Power BI"]
  }
];

const Skills = () => {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Technical Arsenal
        </motion.h2>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              className="skill-category glass-panel"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
