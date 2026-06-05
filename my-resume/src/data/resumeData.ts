export interface PersonalInfo {
  surname: string;
  name: string;
  patronymic: string;
  title: string;
  email: string;
  phone: string;
  github: string;
  telegram: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface EducationInfo {
  institution: string;
  degree: string;
  year: string;
}

// 2. Объединяем все в один общий интерфейс данных резюме
export interface ResumeStructure {
  personal: PersonalInfo;
  skills: string[];
  experience: ExperienceItem[];
  education: EducationInfo;
}

export const resumeData: ResumeStructure = {
  personal: {
    surname: "Подлиснюк",
    name: "Ирина",
    patronymic: "Викторовна",
    title: "Frontend Developer",
    email: "irinapodlisnyuk@gmail.com",
    phone: "+7 (993) 311-38-48",
    github: "://github.com",
    telegram: "t.me/IrynaApi",
   
  },
  skills: [
    "JavaScript (ES6+)",
    "TypeScript",
    "React 19",
    "Vite",
    "SCSS Modules",
    "Git / GitHub",
  ],
  experience: [
    {
      company: "Web Studio Global",
      role: "Junior Frontend Developer",
      period: "2025 - Настоящее время",
      description:
        "Разработка адаптивных интерфейсов на React, перенос проектов на TypeScript, оптимизация стилей с помощью SCSS.",
    },
  ],
  education: {
    institution: "SkillBox",
    degree: "Профессия Фронтенд-разработчик",
    year: "2024- 2026гг.",
  },
};
