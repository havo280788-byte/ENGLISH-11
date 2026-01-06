
import { UnitData, ClozeQuestion } from './types';

export const unit1GameData: ClozeQuestion[] = [
  {
    id: 1,
    sentence: "My parents and I have a _______ because they don't like my new flashy hairstyle.",
    options: ["conflict", "norm", "brand", "trend"],
    correctAnswer: "conflict",
    explanation: "Conflict (xung đột) mô tả sự bất đồng quan điểm giữa các thế hệ về phong cách cá nhân.",
    illustrationUrl: "https://images.unsplash.com/photo-1573497619954-612f710d5183?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    sentence: "Living in a _______ family with only parents and children is becoming the norm in modern Vietnam.",
    options: ["extended", "nuclear", "conservative", "flashy"],
    correctAnswer: "nuclear",
    explanation: "Nuclear family (gia đình hạt nhân) gồm 2 thế hệ: bố mẹ và con cái.",
    illustrationUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    sentence: "My grandparents are quite _______; they want me to follow traditional career paths instead of being a YouTuber.",
    options: ["open-minded", "conservative", "independent", "elegant"],
    correctAnswer: "conservative",
    explanation: "Conservative (bảo thủ/truyền thống) là người ít chấp nhận những thay đổi mới mẻ.",
    illustrationUrl: "https://images.unsplash.com/photo-1543269664-7eef42226a21?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    sentence: "Many Vietnamese parents try to _______ their own career choices on their children.",
    options: ["obey", "impose", "respect", "nag"],
    correctAnswer: "impose",
    explanation: "Impose (áp đặt) thường đi với giới từ 'on', thể hiện việc bắt ép người khác theo ý mình.",
    illustrationUrl: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    sentence: "It is important to be _______ when talking to older family members, especially during Tet holiday.",
    options: ["flashy", "respectful", "strict", "selfish"],
    correctAnswer: "respectful",
    explanation: "Respectful (lễ phép, kính trọng) là đức tính quan trọng trong văn hóa Việt Nam.",
    illustrationUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    sentence: "Good _______, like not using Zalo or TikTok during family meals, are strictly taught in my house.",
    options: ["table manners", "hairstyles", "trends", "beliefs"],
    correctAnswer: "table manners",
    explanation: "Table manners (quy tắc bàn ăn) giúp duy trì không khí lịch sự trong bữa cơm gia đình.",
    illustrationUrl: "https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 7,
    sentence: "Teens often value their _______ and feel uncomfortable when parents check their private messages.",
    options: ["privacy", "burden", "norm", "curfew"],
    correctAnswer: "privacy",
    explanation: "Privacy (sự riêng tư) là nhu cầu cá nhân mà thanh thiếu niên hiện nay rất coi trọng.",
    illustrationUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 8,
    sentence: "My teacher is very _______ and always encourages us to express our unique hobbies.",
    options: ["conservative", "old-fashioned", "open-minded", "strict"],
    correctAnswer: "open-minded",
    explanation: "Open-minded (cởi mở) chỉ những người sẵn sàng lắng nghe và chấp nhận cái mới.",
    illustrationUrl: "https://images.unsplash.com/photo-1524178232363-1fb28f74b671?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 9,
    sentence: "In an _______ family, three or more generations live together, which helps children learn about their ancestors.",
    options: ["nuclear", "extended", "independent", "elegant"],
    correctAnswer: "extended",
    explanation: "Extended family (gia đình đa thế hệ) bao gồm ông bà, cô chú và con cháu sống chung.",
    illustrationUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 10,
    sentence: "To maintain family harmony, children should learn to _______ the house rules set by their parents.",
    options: ["break", "obey", "nag", "impose"],
    correctAnswer: "obey",
    explanation: "Obey (vâng lời, tuân theo) giúp giảm bớt căng thẳng và xung đột trong gia đình.",
    illustrationUrl: "https://images.unsplash.com/photo-1536640712247-c45474762888?q=80&w=800&auto=format&fit=crop"
  }
];

export const COURSE_DATA: UnitData[] = [
  {
    id: "u1",
    title: "Unit 1: Generation Gap and Independent Life",
    vocab: [
      { id: 'v1', english: 'difficult', phonetic: '/ˈdɪfɪkəlt/', vietnamese: 'khó khăn, khó tính', example: 'The homework was very difficult.', wordFamily: 'difficulty (n): sự khó khăn' },
      { id: 'v2', english: 'easy-going', phonetic: '/ˈiːzɪˌɡəʊɪŋ/', vietnamese: 'dễ tính', example: 'My grandfather is a very easy-going person.' },
      { id: 'v3', english: 'generation gap', phonetic: '/ˌʤɛnəˈreɪʃən ɡæp/', vietnamese: 'khoảng cách thế hệ', example: 'Communication helps bridge the generation gap.' },
      { id: 'v4', english: 'independent', phonetic: '/ˌɪndɪˈpendənt/', vietnamese: 'tự lập', example: 'She wants to be financially independent.', wordFamily: 'independence (n), depend (v), dependence (n), dependant (n)' },
      { id: 'v5', english: 'old-fashioned', phonetic: '/əʊld-ˈfæʃənd/', vietnamese: 'lỗi thời, lạc hậu', example: 'His ideas about fashion are a bit old-fashioned.' },
      { id: 'v6', english: 'strict', phonetic: '/strɪkt/', vietnamese: 'nghiêm khắc', example: 'My parents are very strict about curfews.' },
      { id: 'v7', english: 'worried', phonetic: '/ˈwʌrid/', vietnamese: 'lo lắng', example: 'I am worried about my final exam.', wordFamily: 'worrying (adj), worry (v/n)' },
      { id: 'v8', english: 'powerless', phonetic: '/ˈpaʊələs/', vietnamese: 'bất lực', example: 'He feel powerless to change the situation.', wordFamily: 'powerful (adj), power (n), empower (v)' },
      { id: 'v9', english: 'relationship', phonetic: '/rɪˈleɪʃənʃɪp/', vietnamese: 'mối quan hệ', example: 'They have a very close relationship.', wordFamily: 'relation (n), relate (v), related (adj), relative (adj/n)' },
      { id: 'v10', english: 'reliable', phonetic: '/rɪˈlaɪəbəl/', vietnamese: 'đáng tin cậy', example: 'She is a very reliable student.', wordFamily: 'unreliable (adj), reliability (n), rely (v), reliance (n)' },
      { id: 'v11', english: 'selfish', phonetic: '/ˈselfɪʃ/', vietnamese: 'ích kỷ', example: 'It was selfish of him to take all the food.', wordFamily: 'unselfish (adj), selfishness (n)' },
      { id: 'v12', english: 'trend', phonetic: '/trend/', vietnamese: 'xu hướng', example: 'There is a trend towards healthier eating.', wordFamily: 'on trend (phr), trendy (adj)' },
      { id: 'v13', english: 'break', phonetic: '/breɪk/', vietnamese: 'vi phạm, đổ vỡ', example: 'Don\'t break the school rules.', wordFamily: 'broken (adj)' },
      { id: 'v14', english: 'manner', phonetic: '/ˈmænə/', vietnamese: 'cách cư xử', example: 'It is bad manners to talk with your mouth full.' },
      { id: 'v15', english: 'nag', phonetic: '/næɡ/', vietnamese: 'cằn nhằn', example: 'My mother always nags me about my room.', wordFamily: 'nagging (n/adj)' },
      { id: 'v16', english: 'pocket money', phonetic: '/ˈpɒkɪt ˈmʌni/', vietnamese: 'tiền tiêu vặt', example: 'How much pocket money do you get a week?' },
      { id: 'v17', english: 'carry on', phonetic: '/ˈkæri ɒn/', vietnamese: 'tiếp tục', example: 'Please carry on with your work.' },
      { id: 'v18', english: 'carry out', phonetic: '/ˈkæri aʊt/', vietnamese: 'thực hiện', example: 'They carried out the experiment successfully.' },
      { id: 'v19', english: 'body image', phonetic: '/ˈbɒdi ˈɪmɪʤ/', vietnamese: 'ngoại hình cơ thể', example: 'Many teens struggle with their body image.' },
      { id: 'v20', english: 'school performance', phonetic: '/skuːl pəˈfɔːməns/', vietnamese: 'kết quả học tập', example: 'Pressure can affect school performance.' }
    ],
    grammar: {
      topic: "Tenses & Stative Verbs",
      questions: [
        { id: 1, question: "I ____ (think) your parents are very open-minded.", options: ["think", "am thinking", "thinks", "thought"], correctIndex: 0, explanation: "Stative: 'think' means 'believe'." },
        { id: 2, question: "Right now, I ____ (think) of joining a youth club.", options: ["think", "am thinking", "thinks", "thought"], correctIndex: 1, explanation: "Dynamic: 'think of' means 'considering'." },
        { id: 3, question: "This cake ____ (taste) delicious!", options: ["tastes", "is tasting", "taste", "was tasting"], correctIndex: 0, explanation: "Stative: describing a state/flavor." },
        { id: 4, question: "The chef ____ (taste) the soup to check the salt.", options: ["tastes", "is tasting", "taste", "was tasting"], correctIndex: 1, explanation: "Dynamic: an action of trying food." },
        { id: 5, question: "My sister ____ (always / lose) her keys! It's so annoying.", options: ["loses", "is always losing", "always lose", "is lose"], correctIndex: 1, explanation: "Present Continuous with 'always' for complaints." },
        { id: 6, question: "Water ____ (boil) at 100 degrees Celsius.", options: ["boils", "is boiling", "boil", "boiled"], correctIndex: 0, explanation: "Present Simple for general truths." },
        { id: 7, question: "I ____ (see) the doctor later this afternoon.", options: ["see", "am seeing", "sees", "saw"], correctIndex: 1, explanation: "Present Continuous for planned future arrangements." },
        { id: 8, question: "This perfume ____ (smell) like roses.", options: ["smells", "is smelling", "smell", "smelled"], correctIndex: 0, explanation: "Linking verb describing a state." },
        { id: 9, question: "The bus ____ (leave) at 9:00 AM every morning.", options: ["leaves", "is leaving", "leave", "left"], correctIndex: 0, explanation: "Present Simple for timetables." },
        { id: 10, question: "He ____ (look) very happy today.", options: ["looks", "is looking", "look", "looked"], correctIndex: 0, explanation: "Linking verb describing appearance." },
        { id: 11, question: "I ____ (not / live) with my parents this month.", options: ["don't live", "am not living", "doesn't live", "not living"], correctIndex: 1, explanation: "Temporary situation surrounding the moment of speaking." },
        { id: 12, question: "She ____ (appear) to be very tired.", options: ["appears", "is appearing", "appear", "appeared"], correctIndex: 0, explanation: "Stative: 'appear' meaning 'seem'." },
        { id: 13, question: "They ____ (have) a birthday party tonight.", options: ["have", "are having", "has", "had"], correctIndex: 1, explanation: "Action: 'have' as 'hosting'." },
        { id: 14, question: "I ____ (know) what you mean.", options: ["know", "am knowing", "knows", "knew"], correctIndex: 0, explanation: "Stative verb: mental state." },
        { id: 15, question: "The weather ____ (get) colder and colder.", options: ["gets", "is getting", "get", "got"], correctIndex: 1, explanation: "Gradual change/trend." },
        { id: 16, question: "Why ____ (you / look) at me like that?", options: ["do you look", "are you looking", "you look", "you looking"], correctIndex: 1, explanation: "Action happening now." },
        { id: 17, question: "This shirt ____ (not / fit) me anymore.", options: ["doesn't fit", "isn't fitting", "don't fit", "not fit"], correctIndex: 0, explanation: "Stative: describing size." },
        { id: 18, question: "I ____ (see) what you mean now.", options: ["see", "am seeing", "sees", "saw"], correctIndex: 0, explanation: "Stative: 'see' meaning 'understand'." },
        { id: 19, question: "Listen! Someone ____ (cry) in the next room.", options: ["cries", "is crying", "cry", "was crying"], correctIndex: 1, explanation: "Action happening at the moment of speaking." },
        { id: 20, question: "My father ____ (belong) to a tennis club.", options: ["belongs", "is belonging", "belong", "belonged"], correctIndex: 0, explanation: "Stative verb of possession." },
        { id: 21, question: "What ____ (you / do) this evening?", options: ["do you do", "are you doing", "you do", "you doing"], correctIndex: 1, explanation: "Future plan." },
        { id: 22, question: "I ____ (prefer) coffee to tea.", options: ["prefer", "am preferring", "prefers", "preferred"], correctIndex: 0, explanation: "Stative: personal preference." },
        { id: 23, question: "This soup ____ (not / taste) right.", options: ["doesn't taste", "isn't tasting", "not taste", "tasting"], correctIndex: 0, explanation: "Linking verb describing a state." },
        { id: 24, question: "She ____ (look) for a new job these days.", options: ["looks", "is looking", "look", "looking"], correctIndex: 1, explanation: "Action over a period of time." },
        { id: 25, question: "I ____ (promise) I will be on time.", options: ["promise", "am promising", "promises", "promised"], correctIndex: 0, explanation: "Stative: speech act." },
        { id: 26, question: "The baby ____ (feel) very hot. Is she okay?", options: ["feels", "is feeling", "feel", "felt"], correctIndex: 0, explanation: "Linking verb: texture/state." },
        { id: 27, question: "He ____ (be) very selfish right now.", options: ["is", "is being", "was", "be"], correctIndex: 1, explanation: "Temporary behavior." },
        { id: 28, question: "Does this box ____ (contain) your books?", options: ["contain", "contains", "containing", "contained"], correctIndex: 0, explanation: "Stative verb." },
        { id: 29, question: "How much ____ (this laptop / cost)?", options: ["does this laptop cost", "is this laptop costing", "cost this laptop", "costs"], correctIndex: 0, explanation: "Stative: cost." },
        { id: 30, question: "I ____ (enjoy) this movie very much.", options: ["enjoy", "am enjoying", "enjoys", "enjoyed"], correctIndex: 1, explanation: "Mô tả sự thưởng thức hoạt động cụ thể." }
      ],
      games: []
    },
    speaking: {
      target: "Independent people usually make their own decisions without relying on others."
    },
    writing: {
      topic: "The Generation Gap",
      prompt: "Write 120 words about the common causes of the generation gap in Vietnamese families."
    }
  },
  {
    id: "u2",
    title: "Unit 2: Relationships",
    vocab: [
      { id: 'u2-1', english: 'Romantic relationship', vietnamese: 'Mối quan hệ lãng mạn', example: 'They are in a long-term romantic relationship.' },
    ],
    grammar: {
      topic: "Linking Verbs & Cleft Sentences",
      questions: [],
      games: []
    },
    speaking: { target: "Effective communication is the key to any healthy relationship." },
    writing: { topic: "Building Friendships", prompt: "Write about what makes a good friend." }
  }
];
