import type { Project, Experience, Skill, Certification } from "./types";
import project1 from "./assets/project1.png";
import project2 from "./assets/project2.png";
import project3 from "./assets/project3.png";
import project4 from "./assets/project4.png";

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "AI 미국 주식 분석기",
    description: "한국투자증권 API와 Gemini AI를 활용한 주식 분석기",
    tags: ["React", "Gemini", "Tailwind"],
    imageUrl: project1,
    link: "https://ai-finance-coral.vercel.app/",
    category: "web",
  },
  {
    id: "2",
    title: "딸깍 영어",
    description: "OPENAI API를 활용한 영어 학습 앱",
    tags: ["React", "OpenAI", "MUI"],
    imageUrl: project3,
    link: "https://ddalkkak-english.netlify.app/",
    category: "web",
  },
  {
    id: "3",
    title: "냉털 한끼",
    description: "식품의약안전처 API를 활용한 레시피 검색 서비스",
    tags: ["React"],
    imageUrl: project2,
    link: "https://react-2nd-team5-cqrk.vercel.app/",
    category: "web",
  },
  {
    id: "4",
    title: "뉴진스\n(뉴스를 진짜 스마트하게)",
    description: "프리트레이닝한 BERT모델을 활용한 뉴스 요약 서비스",
    tags: ["React Native", "AI"],
    imageUrl: project4,
    link: "https://github.com/SK-flyai/NateNews",
    category: "mobile",
  },
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Frontend Developer",
    role: "Job Seeker",
    period: "2023 - Present",
    description:
      "React 기반 웹 서비스 개발과 성능 최적화를 통해 실무 중심의 포트폴리오를 구축하며 프론트엔드 개발 직무를 준비 중.",
  },
  {
    company: "Developer",
    role: "SKT FLY AI",
    period: "2022.12. - 2023.02.(400h)",
    description: "AI 교육 수료 및 관련 서비스 개발",
  },
  {
    company: "전자공학과 졸업",
    role: "선문대학교",
    period: "2015 - 2022",
    description: "",
  },
];

export const SKILLS: Skill[] = [
  { name: "React", level: 70, icon: "⚛️" },
  { name: "Tailwind", level: 65, icon: "🎨" },
  { name: "AI/LLM", level: 65, icon: "🤖" },
];
export const CERTIFICATIONS: Certification[] = [
  {
    name: "ADsP",
    issuer: "한국데이터산업진흥원",
    year: "2022",
  },
  {
    name: "SQLD",
    issuer: "한국데이터산업진흥원",
    year: "2025",
  },
];
