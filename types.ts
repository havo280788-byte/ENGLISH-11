
export interface VocabularyWord {
  id: string;
  english: string;
  phonetic?: string;
  vietnamese: string;
  example: string;
  wordFamily?: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface ClozeQuestion {
  id: number;
  sentence: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  illustrationUrl?: string;
}

export interface GrammarGame {
  id: number;
  fragments: string[];
  correct: string;
  type: string;
}

export interface UnitData {
  id: string;
  title: string;
  vocab: VocabularyWord[];
  grammar: {
    topic: string;
    theory?: string;
    questions: QuizQuestion[];
    games: GrammarGame[];
  };
  speaking: {
    target: string;
  };
  writing: {
    topic: string;
    prompt: string;
  };
}

export interface ModuleProgress {
  status: 'completed' | 'in_progress' | 'not_started';
  score: number;
  attempts: number;
}

export interface UserStats {
  username: string;
  name: string;
  level: string;
  xp: number;
  streak: number;
  badges: string[];
  lastVisit: string;
  selectedUnitId: string;
  completedModules: number;
  completedModuleIds: string[];
  moduleProgress: Record<string, ModuleProgress>;
  progress: {
    vocabulary: number;
    grammar: number;
    speaking: number;
    writing: number;
  };
}

export interface UserAccount {
  username: string;
  password: string;
  name: string;
}

export type ViewType = 'dashboard' | 'vocabulary' | 'grammar' | 'speaking' | 'writing';
