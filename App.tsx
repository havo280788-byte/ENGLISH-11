
import React, { useState, useEffect, useMemo } from 'react';
import { ViewType, UserStats, UserAccount } from './types';
import { COURSE_DATA } from './constants';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import VocabularyModule from './components/VocabularyModule';
import GrammarModule from './components/GrammarModule';
import SpeakingModule from './components/SpeakingModule';
import WritingModule from './components/WritingModule';
import Auth from './components/Auth';

const TOTAL_MODULES = 20;
const SCHOOL_BG_IMAGE = "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=2070&auto=format&fit=crop";
const STORAGE_KEY_PREFIX = 'ELITE_ENG_USER_DATA_V1';

const INITIAL_STATS = (username: string, name: string): UserStats => ({
  username,
  name,
  level: "Grade 11 - Intermediate",
  xp: 0,
  streak: 1,
  badges: [],
  lastVisit: new Date().toISOString(),
  selectedUnitId: COURSE_DATA[0].id,
  completedModules: 0,
  completedModuleIds: [],
  moduleProgress: {},
  progress: {
    vocabulary: 0,
    grammar: 0,
    speaking: 0,
    writing: 0
  }
});

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<ViewType>('dashboard');
  
  const [currentUser, setCurrentUser] = useState<UserAccount | null>(() => {
    const saved = localStorage.getItem('elite_eng_current_user');
    return saved ? JSON.parse(saved) : null;
  });

  const [stats, setStats] = useState<UserStats | null>(() => {
    const savedUser = localStorage.getItem('elite_eng_current_user');
    if (!savedUser) return null;
    const user = JSON.parse(savedUser);
    const savedStats = localStorage.getItem(`${STORAGE_KEY_PREFIX}_${user.username}`);
    return savedStats ? JSON.parse(savedStats) : INITIAL_STATS(user.username, user.name);
  });

  useEffect(() => {
    if (stats && currentUser) {
      localStorage.setItem(`${STORAGE_KEY_PREFIX}_${currentUser.username}`, JSON.stringify(stats));
    }
  }, [stats, currentUser]);

  const handleLogin = (user: UserAccount) => {
    setCurrentUser(user);
    localStorage.setItem('elite_eng_current_user', JSON.stringify(user));
    const savedStats = localStorage.getItem(`${STORAGE_KEY_PREFIX}_${user.username}`);
    if (savedStats) {
      setStats(JSON.parse(savedStats));
    } else {
      setStats(INITIAL_STATS(user.username, user.name));
    }
  };

  const currentUnit = useMemo(() => {
    const unitId = stats?.selectedUnitId || COURSE_DATA[0].id;
    return COURSE_DATA.find(u => u.id === unitId) || COURSE_DATA[0];
  }, [stats?.selectedUnitId]);

  const handleLogout = () => {
    setCurrentUser(null);
    setStats(null);
    setActiveView('dashboard');
    localStorage.removeItem('elite_eng_current_user');
  };

  const handleResetProgress = () => {
    if (currentUser && window.confirm("Are you sure you want to reset all progress? This cannot be undone.")) {
      const resetStats = INITIAL_STATS(currentUser.username, currentUser.name);
      setStats(resetStats);
      localStorage.setItem(`${STORAGE_KEY_PREFIX}_${currentUser.username}`, JSON.stringify(resetStats));
      setActiveView('dashboard');
    }
  };

  const handleTaskCompletion = (moduleId: string, score: number) => {
    if (!stats) return;
    setStats(prev => {
      if (!prev) return null;
      
      const currentModule = prev.moduleProgress[moduleId] || { status: 'not_started', score: 0, attempts: 0 };
      const isNewCompletion = currentModule.status !== 'completed';
      
      const newAttempts = currentModule.attempts + 1;
      const newScore = Math.max(currentModule.score, score);
      
      const newModuleProgress = {
        ...prev.moduleProgress,
        [moduleId]: {
          status: 'completed' as const,
          score: newScore,
          attempts: newAttempts
        }
      };

      const newCompletedModules = isNewCompletion ? prev.completedModules + 1 : prev.completedModules;
      const newXp = isNewCompletion ? prev.xp + 50 : prev.xp + 10; // Bonus for repeat
      
      const newBadges = [...prev.badges];
      if (newCompletedModules === 5 && !newBadges.includes('Beginner Learner')) newBadges.push('Beginner Learner');
      if (newCompletedModules === 10 && !newBadges.includes('dedicated')) newBadges.push('dedicated');

      return {
        ...prev,
        xp: newXp,
        completedModules: newCompletedModules,
        moduleProgress: newModuleProgress,
        badges: newBadges
      };
    });
  };

  const updateProgressValue = (skill: keyof UserStats['progress'], amount: number) => {
    setStats(prev => {
      if (!prev) return null;
      return {
        ...prev,
        progress: { ...prev.progress, [skill]: Math.min(100, prev.progress[skill] + amount) }
      };
    });
  };

  const navigateToDashboard = () => setActiveView('dashboard');

  const handleUnitChange = (unitId: string) => {
    setStats(prev => prev ? ({ ...prev, selectedUnitId: unitId }) : null);
    setActiveView('dashboard');
  };

  if (!currentUser || !stats) {
    return <Auth onLogin={handleLogin} />;
  }

  const renderContent = () => {
    const vocabGameId = `${stats.selectedUnitId}_vocabulary_memory`;
    const grammarQuizId = `${stats.selectedUnitId}_grammar_quiz`;
    const speakingId = `${stats.selectedUnitId}_speaking`;
    const writingId = `${stats.selectedUnitId}_writing`;

    switch (activeView) {
      case 'dashboard': 
        return <Dashboard stats={stats} unitTitle={currentUnit.title} totalModules={TOTAL_MODULES} />;
      case 'vocabulary': 
        return (
          <VocabularyModule 
            vocabData={currentUnit.vocab} 
            progress={stats.moduleProgress}
            vocabGameId={vocabGameId}
            onGameComplete={(id, score) => {
              handleTaskCompletion(id, score);
              updateProgressValue('vocabulary', 5);
            }} 
            onReturn={navigateToDashboard} 
          />
        );
      case 'grammar': 
        return (
          <GrammarModule 
            grammarData={currentUnit.grammar} 
            progress={stats.moduleProgress}
            quizId={grammarQuizId}
            onComplete={(score) => {
              handleTaskCompletion(grammarQuizId, score);
              updateProgressValue('grammar', 15);
            }} 
            onReturn={navigateToDashboard} 
          />
        );
      case 'speaking': 
        return (
          <SpeakingModule 
            targetSentence={currentUnit.speaking.target} 
            onComplete={(score) => {
              handleTaskCompletion(speakingId, score);
              updateProgressValue('speaking', 20);
            }} 
            onReturn={navigateToDashboard} 
          />
        );
      case 'writing': 
        return (
          <WritingModule 
            writingData={currentUnit.writing} 
            onComplete={(score) => {
              handleTaskCompletion(writingId, score);
              updateProgressValue('writing', 25);
            }} 
            onReturn={navigateToDashboard} 
          />
        );
      default: 
        return <Dashboard stats={stats} unitTitle={currentUnit.title} totalModules={TOTAL_MODULES} />;
    }
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${SCHOOL_BG_IMAGE})` }}>
      <div className="absolute inset-0 bg-white/90 backdrop-blur-[2px] z-0"></div>

      <div className="relative z-10 flex flex-col md:flex-row min-h-screen">
        <Sidebar 
          activeView={activeView} 
          setActiveView={setActiveView} 
          selectedUnitId={stats.selectedUnitId}
          onUnitChange={handleUnitChange}
          user={currentUser}
          onLogout={handleLogout}
          onReset={handleResetProgress}
        />
        <main className="flex-1 p-4 md:p-8 overflow-y-auto">
          <div className="max-w-5xl mx-auto">
            <header className="flex justify-between items-center mb-8">
              <div className="animate-fadeIn" key={currentUnit.id}>
                <h1 className="text-2xl font-black text-red-700 uppercase tracking-tight">
                  {activeView}
                </h1>
                <p className="text-slate-500 font-medium">{currentUnit.title}</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 text-blue-600 px-4 py-2 rounded-2xl font-black flex items-center shadow-sm">
                  <i className="fa-solid fa-star mr-2"></i> {stats.xp} XP
                </div>
                <div className="bg-orange-100 text-orange-600 px-4 py-2 rounded-2xl font-black flex items-center shadow-sm">
                  <i className="fa-solid fa-fire mr-2"></i> {stats.streak}
                </div>
                <div className="w-12 h-12 rounded-2xl bg-red-700 flex items-center justify-center text-white font-black shadow-lg shadow-red-100 border-2 border-white">
                  {stats.name.charAt(0)}
                </div>
              </div>
            </header>
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
