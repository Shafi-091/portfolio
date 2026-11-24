import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, GraduationCap, Award, Languages, CheckCircle2 } from 'lucide-react';
import './Experience.css';

const experiences = [
  {
    role: 'Software Developer',
    company: 'Fist-o tech Private Limited',
    location: 'Coimbatore',
    period: 'April 2025 – June 2026',
    description: [
      'Developed backend modules using Python, FastAPI, and SQLAlchemy for real-world applications.',
      'Built and tested RESTful APIs following industry best practices.',
      'Designed and managed MySQL database operations using SQLAlchemy ORM.',
      'Collaborated with the development team to implement backend features and resolve technical issues.'
    ]
  }
];

const education = [
  {
    degree: 'B.Sc. Information Technology',
    institution: 'RVS College of Arts & Science, Coimbatore, India',
    period: '2021 – 2024',
    score: 'CGPA: 7.1 / 10'
  }
];

const certifications = [
  { name: 'Python', issuer: 'Udemy' },
  { name: 'MySQL', issuer: 'PrepInsta' }
];

const achievements = [
  '1st Place – Technical Quiz Competition',
  '2nd Place – Paper Presentation',
  'NSS Volunteer'
];

const languages = ['Tamil', 'English', 'Hindi'];

const Experience = () => {
  return (
    <section className="section experience" id="experience">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Professional Journey
        </motion.h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              className="timeline-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className="timeline-marker">
                <div className="marker-icon"><Briefcase size={16} /></div>
                <div className="marker-line"></div>
              </div>
              <div className="timeline-content glass-panel">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <h4 className="timeline-company">{exp.company} <span className="text-muted">| {exp.location}</span></h4>
                  </div>
                  <div className="timeline-date">
                    <Calendar size={14} /> {exp.period}
                  </div>
                </div>
                <ul className="timeline-details">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education & Credentials Grid */}
        <div className="credentials-grid">
          <motion.div 
            className="credentials-card glass-panel"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="credentials-header">
              <GraduationCap className="credentials-icon" size={24} />
              <h3>Education</h3>
            </div>
            <div className="credentials-list">
              {education.map((edu, idx) => (
                <div key={idx} className="edu-item">
                  <div className="edu-title-row">
                    <span className="edu-degree">{edu.degree}</span>
                    <span className="edu-period">{edu.period}</span>
                  </div>
                  <div className="edu-inst-row">
                    <span className="edu-inst">{edu.institution}</span>
                    <span className="edu-score">{edu.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="credentials-card glass-panel"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <div className="credentials-header">
              <Award className="credentials-icon" size={24} />
              <h3>Certifications & Achievements</h3>
            </div>
            <div className="credentials-subgroup">
              <h4 className="subgroup-title">Certifications</h4>
              <div className="cert-tags">
                {certifications.map((c, idx) => (
                  <span key={idx} className="cert-tag">
                    <strong>{c.name}</strong> · {c.issuer}
                  </span>
                ))}
              </div>
            </div>
            <div className="credentials-subgroup">
              <h4 className="subgroup-title">Honors & Activities</h4>
              <ul className="achieve-list">
                {achievements.map((a, idx) => (
                  <li key={idx}><CheckCircle2 size={15} className="achieve-check" /> {a}</li>
                ))}
              </ul>
            </div>
            <div className="credentials-subgroup">
              <h4 className="subgroup-title"><Languages size={16} /> Languages Known</h4>
              <div className="lang-tags">
                {languages.map((l, idx) => (
                  <span key={idx} className="lang-tag">{l}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
