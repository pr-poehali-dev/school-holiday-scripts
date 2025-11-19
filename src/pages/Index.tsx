import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const scenarios = [
  {
    id: 1,
    title: 'День знаний – Встреча с школой',
    duration: '45 минут',
    participants: '25 детей',
    age: '1-4 класс',
    icon: 'GraduationCap',
    color: 'bg-primary',
    goals: 'Формирование позитивного отношения к школе, развитие навыков адаптации к учебному коллективу.',
    tasks: ['Стимулировать знакомство одноклассников', 'Развить моторику через игры', 'Ввести в школьные традиции'],
    program: [
      { time: '5 мин', activity: 'Вступление: Приветствие ведущего с песней о школе', description: 'Ведущий встречает детей у входа в зал, включается веселая песня "Первый звонок". Дети входят под музыку и рассаживаются. Ведущий произносит вступительное слово о важности школы и знаний.' },
      { time: '10 мин', activity: 'Игра "Узнай друга" (описания сверстников)', description: 'Каждый ребенок получает карточку, описывает своего соседа (цвет волос, любимый предмет). Остальные угадывают, о ком речь. Развивает внимательность и помогает познакомиться.' },
      { time: '15 мин', activity: 'Конкурс рисунков "Моя мечта в школе"', description: 'Дети получают бумагу и карандаши. Задание: нарисовать свою мечту, связанную со школой (стать отличником, завести друзей, научиться читать). После завершения каждый показывает рисунок и рассказывает о нем.' },
      { time: '10 мин', activity: 'Эстафета с шариками', description: 'Класс делится на две команды. Задание: пронести шарик с буквой от старта до финиша, не уронив его. Побеждает команда, которая быстрее справится. Развивает координацию и командный дух.' },
      { time: '5 мин', activity: 'Завершение: Групповой хоровод и фото', description: 'Все дети встают в круг, водят хоровод под песню "Школьный вальс". Ведущий вручает каждому значок "Я – первоклассник!". В конце делается общее фото на память.' }
    ],
    music: ['"Первый звонок" (детская песня, 2 мин)', 'Маршевые мелодии для эстафеты', 'Фоновая музыка "Школьный вальс"'],
    attributes: ['Шарики с буквами', 'Цветные карандаши и бумага', 'Значки из картона', 'Плакаты "Добро пожаловать в школу"']
  },
  {
    id: 2,
    title: 'Новый год – Зимняя сказка',
    duration: '50 минут',
    participants: '30 детей',
    age: '1-4 класс',
    icon: 'Snowflake',
    color: 'bg-accent',
    goals: 'Создание праздничного настроения, развитие воображения и традиции празднования.',
    tasks: ['Освоить коллективные танцы', 'Расширить знания о зимних обычаях', 'Стимулировать творчество через загадки'],
    program: [
      { time: '5 мин', activity: 'Вступление: Появление Деда Мороза с приветствием', description: 'Под звуки бубенцов и музыку из "Джингл Белз" в зал входит Дед Мороз со Снегурочкой. Они приветствуют детей, рассказывают о зимних чудесах и объявляют начало праздника.' },
      { time: '10 мин', activity: 'Загадки о зиме', description: 'Дед Мороз загадывает детям загадки про снег, елку, подарки, зимние забавы. За правильные ответы дети получают снежинки-наклейки. Развивает логическое мышление и знание о зимних традициях.' },
      { time: '10 мин', activity: 'Танец "Снежинки"', description: 'Девочки надевают белые накидки и шапочки со снежинками. Под музыку "В лесу родилась елочка" исполняют танец с плавными движениями, имитируя падающий снег. Мальчики хлопают и подпевают.' },
      { time: '10 мин', activity: 'Конкурс "Снежные шары" (мячики)', description: 'Команды по 5 человек соревнуются: нужно перебросить мягкие белые мячики ("снежки") в корзину. Побеждает команда с наибольшим количеством попаданий. Снегурочка считает очки и объявляет победителей.' },
      { time: '15 мин', activity: 'Кульминация: Хоровод вокруг елки с подарками, пожелания на будущее', description: 'Все дети берутся за руки и водят хоровод вокруг новогодней елки под песню "Маленькой елочке". Дед Мороз раздает подарки каждому ребенку. Дети по очереди говорят свои пожелания на Новый год.' }
    ],
    music: ['"В лесу родилась елочка" (2 мин)', '"Джингл Белз" в детской аранжировке', 'Ритмичные треки для игр'],
    attributes: ['Искусственная елка', 'Бумажные снежинки', 'Маски животных (мягкие)', 'Мячики как "снежки"']
  },
  {
    id: 3,
    title: 'День учителя – Благодарность наставникам',
    duration: '40 минут',
    participants: '20 детей',
    age: '1-4 класс',
    icon: 'Apple',
    color: 'bg-secondary',
    goals: 'Воспитание уважения к педагогам, развитие навыков выражения благодарности.',
    tasks: ['Организовать творческие сюрпризы', 'Развить выразительность через сценки', 'Укрепить эмоциональные связи'],
    program: [
      { time: '5 мин', activity: 'Вступление: Стихи о учителе', description: 'Дети по очереди читают подготовленные стихотворения о труде учителя, о школе, о знаниях. Учитель сидит в центре зала, дети стоят полукругом. Звучит нежная музыка.' },
      { time: '10 мин', activity: 'Мини-сценка "День из жизни учителя"', description: 'Группа из 5-6 детей разыгрывает юмористическую сценку: один ребенок играет учителя, остальные – учеников. Показывают типичные ситуации из школьной жизни (проверка домашнего задания, объяснение урока). Зал смеется и аплодирует.' },
      { time: '10 мин', activity: 'Конкурс открыток "Спасибо"', description: 'Каждый ребенок получает цветную бумагу, маркеры, наклейки. Задание: сделать открытку с благодарностью учителю. Дети рисуют сердечки, цветы, пишут теплые слова. Лучшие работы отбирают родители-жюри.' },
      { time: '10 мин', activity: 'Концерт номеров (песни, рисунки)', description: 'Дети по желанию выходят и показывают свои таланты: поют песни про школу, показывают свои рисунки, читают стихи. Каждое выступление награждается аплодисментами.' },
      { time: '5 мин', activity: 'Завершение: Чай с угощениями', description: 'Все садятся за большой стол, пьют чай с печеньем и конфетами. Дети вручают учителю все открытки и самодельные грамоты. Звучит песня "Наша учительница".' }
    ],
    music: ['"Наша учительница" (детская версия, 2 мин)', 'Нежные мелодии для сценок'],
    attributes: ['Цветные бумаги', 'Маркеры для открыток', 'Шары', 'Самодельные грамоты']
  },
  {
    id: 4,
    title: 'День матери – Тепло семейного очага',
    duration: '45 минут',
    participants: '25 детей',
    age: '1-4 класс',
    icon: 'Heart',
    color: 'bg-pink-500',
    goals: 'Укрепление семейных ценностей, эмоциональная поддержка через творчество.',
    tasks: ['Развить навыки выражения чувств', 'Интегрировать искусство (танцы, поделки)', 'Стимулировать семейное взаимодействие'],
    program: [
      { time: '5 мин', activity: 'Вступление: Видео-приветствия от детей', description: 'На экране показывают заранее записанное видео, где дети по очереди говорят комплименты своим мамам: "Мама, ты самая добрая", "Спасибо за заботу". Мамы в зале умиляются и вытирают слезы.' },
      { time: '10 мин', activity: 'Танец "Мамины ручки"', description: 'Дети встают в пары: каждый ребенок танцует со своей мамой. Под лирическую музыку "Мамины глаза" выполняют простые движения: кружатся, обнимаются, машут руками. Атмосфера теплая и трогательная.' },
      { time: '15 мин', activity: 'Конкурс "Семейные истории" (стихи)', description: 'Дети рассказывают забавные или трогательные истории из семейной жизни, читают стихи о маме. Некоторые показывают семейные фото на слайдах. Родители слушают с улыбками и аплодируют.' },
      { time: '10 мин', activity: 'Мастер-класс по букетикам', description: 'Учитель показывает, как из цветной бумаги и лент сделать простой букетик. Дети повторяют шаги, вырезают цветы, склеивают, украшают. В конце каждый дарит свой букет маме.' },
      { time: '5 мин', activity: 'Завершение: Песни о семье', description: 'Все вместе поют песню "Мама – первое слово". Делается общее фото детей с мамами. Мамы уходят с букетами и теплыми воспоминаниями.' }
    ],
    music: ['"Мамины глаза" (адаптированная, 2 мин)', 'Баллады для танцев'],
    attributes: ['Бумажные цветы', 'Фотоаппарат', 'Рамки для фото', 'Безопасные декоративные элементы']
  },
  {
    id: 5,
    title: '23 февраля – День защитника Отечества',
    duration: '50 минут',
    participants: '30 детей',
    age: '1-4 класс',
    icon: 'Shield',
    color: 'bg-green-600',
    goals: 'Воспитание патриотизма, развитие физических навыков и командного духа.',
    tasks: ['Осветить исторические аспекты', 'Организовать спортивные эстафеты', 'Формировать уважение к защитникам'],
    program: [
      { time: '5 мин', activity: 'Вступление: Гимн и стихи', description: 'Звучит гимн России, все встают. После этого мальчики в форме (пилотки, галстуки) читают патриотические стихи о защитниках Родины, о солдатах, о мире.' },
      { time: '10 мин', activity: 'Викторина "Герои Родины"', description: 'Ведущий задает вопросы о военной технике (танк, самолет), о родах войск (пехота, флот), о героях войны. Дети отвечают, поднимая руки. За правильные ответы получают звездочки.' },
      { time: '15 мин', activity: 'Эстафета "Военная подготовка"', description: 'Команды по 6 человек проходят полосу препятствий: пролезть под веревкой ("колючая проволока"), перепрыгнуть через кубики ("окопы"), добежать до флага и вернуться. Звучат марши. Родители болеют.' },
      { time: '10 мин', activity: 'Творческие номера (песни)', description: 'Девочки поют песню "Катюша" для мальчиков. Несколько мальчиков показывают сценку "Солдат на посту". Все номера на военную тематику, но в детском, веселом формате.' },
      { time: '10 мин', activity: 'Кульминация: "Салют" из конфетти, вручение медалей', description: 'Ведущий объявляет победителей эстафеты. Всем мальчикам вручают самодельные медали "Лучшему защитнику". В конце запускают конфетти вверх под музыку "День Победы" – имитация салюта. Все аплодируют.' }
    ],
    music: ['"День Победы" (детская аранжировка)', 'Марши для эстафет'],
    attributes: ['Флаги', 'Мягкие "оружия" (палки)', 'Медали из фольги']
  },
  {
    id: 6,
    title: '8 марта – Весенний букет',
    duration: '40 минут',
    participants: '25 детей',
    age: '1-4 класс',
    icon: 'Flower2',
    color: 'bg-rose-400',
    goals: 'Празднование женственности, стимулирование эстетического и креативного развития.',
    tasks: ['Подготовить подарки', 'Развить навыки танца и поделок', 'Воспитать уважение к женщинам'],
    program: [
      { time: '5 мин', activity: 'Весенние песни' },
      { time: '15 мин', activity: 'Мастер-класс "Весенний букет"' },
      { time: '10 мин', activity: 'Танец "Весна пришла"' },
      { time: '5 мин', activity: 'Поздравления' },
      { time: '5 мин', activity: 'Чай' }
    ],
    music: ['"Весенний вальс" (детский)', 'Фольклорные мотивы'],
    attributes: ['Ленты', 'Цветная бумага', 'Зеркала для "причесок"', 'Экологичные материалы']
  },
  {
    id: 7,
    title: 'День рождения школы – Наша "альма-матер"',
    duration: '50 минут',
    participants: '25 детей',
    age: '1-4 класс',
    icon: 'School',
    color: 'bg-indigo-500',
    goals: 'Укрепление школьного духа, историческое воспитание.',
    tasks: ['Знакомство с историей школы', 'Организация флешмоба', 'Развитие чувства принадлежности'],
    program: [
      { time: '10 мин', activity: 'Мини-экскурсия' },
      { time: '15 мин', activity: 'Квест "История школы"' },
      { time: '10 мин', activity: 'Флешмоб-танец' },
      { time: '10 мин', activity: 'Выступления' },
      { time: '5 мин', activity: 'Обещания "Буду хорошим учеником"' }
    ],
    music: ['"Школьный марш"', 'Фанфары для квеста'],
    attributes: ['Старые фото школы', 'Торты (без аллергенов)', 'Значки "Я люблю школу"']
  },
  {
    id: 8,
    title: 'Масленица – Прощание с зимой',
    duration: '60 минут',
    participants: '30 детей',
    age: '1-4 класс',
    icon: 'Sun',
    color: 'bg-amber-500',
    goals: 'Знакомство с фольклором, развитие физической активности и традиций.',
    tasks: ['Освоить народные танцы', 'Провести игры на свежем воздухе', 'Воспитать уважение к культуре'],
    program: [
      { time: '10 мин', activity: 'Хоровод с песнями' },
      { time: '15 мин', activity: 'Конкурс блинов' },
      { time: '20 мин', activity: 'Игры "Солнышко"' },
      { time: '10 мин', activity: 'Символическое "сжигание" зимы' },
      { time: '5 мин', activity: 'Танцы' }
    ],
    music: ['"Ой, то не вечер" (фольклор)', 'Веселые потешки'],
    attributes: ['Блины (готовые)', 'Платки', 'Чучело из соломы (символическое)']
  },
  {
    id: 9,
    title: 'День Земли – Защитим планету',
    duration: '45 минут',
    participants: '25 детей',
    age: '1-4 класс',
    icon: 'Globe',
    color: 'bg-emerald-600',
    goals: 'Экологическое воспитание, развитие командной работы и ответственности.',
    tasks: ['Обсудить проблемы экологии', 'Провести практические действия', 'Сформировать привычку к сохранению природы'],
    program: [
      { time: '5 мин', activity: 'Видео о планете' },
      { time: '10 мин', activity: 'Эко-викторина' },
      { time: '15 мин', activity: 'Посадка семян' },
      { time: '10 мин', activity: 'Создание плакатов' },
      { time: '5 мин', activity: 'Обсуждение' }
    ],
    music: ['"Земля в иллюминаторе"', 'Эко-песни'],
    attributes: ['Семена', 'Горшки', 'Маркеры для плакатов', 'Перчатки', 'Переработанные материалы']
  },
  {
    id: 10,
    title: 'Прощание с Азбукой – Первая школьная победа',
    duration: '50 минут',
    participants: '20-25 детей',
    age: '1 класс',
    icon: 'BookOpen',
    color: 'bg-cyan-500',
    goals: 'Закрепление навыков чтения, воспитание интереса к книгам, развитие познавательной активности.',
    tasks: ['Стимулировать работу в команде через игры', 'Развить мыслительные операции (сбор слов, внимание)', 'Сформировать доверительные отношения в коллективе'],
    program: [
      { time: '10 мин', activity: 'Поздравление учителя и стихи учеников о Азбуке' },
      { time: '5 мин', activity: 'Игра "Это я!" (вопросы о школьных привычках)' },
      { time: '15 мин', activity: 'Сцена с Золушкой и мачехой' },
      { time: '5 мин', activity: 'Сбор слов из слогов' },
      { time: '5 мин', activity: 'Игра "Живые буквы"' },
      { time: '5 мин', activity: 'Музыкальная игра "Все – друзья!"' },
      { time: '5 мин', activity: 'Финальные стихи и хоровод "Благодарю, Азбука!"' }
    ],
    music: ['Музыка из "Золушки" для вальса (2 мин)', '"Все – друзья!" для игры (2 мин)', '"Вперед четыре шага" (2 мин)', 'Школьные песни для вступления и финала'],
    attributes: ['Плакат "Спасибо, тебе, Азбука!"', 'Кухонное полотенце и тарелка для Золушки', '4 конверта со слогами', 'Шляпа', 'Костюмы (фартук для Золушки, простые маски)']
  }
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedScenario, setSelectedScenario] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'Все сценарии', icon: 'List' },
    { id: 'seasonal', name: 'Сезонные', icon: 'Calendar' },
    { id: 'patriotic', name: 'Патриотические', icon: 'Flag' },
    { id: 'family', name: 'Семейные', icon: 'Users' },
    { id: 'educational', name: 'Образовательные', icon: 'BookOpen' }
  ];

  const filterScenarios = () => {
    if (selectedCategory === 'all') return scenarios;
    if (selectedCategory === 'seasonal') return scenarios.filter(s => [2, 6, 8].includes(s.id));
    if (selectedCategory === 'patriotic') return scenarios.filter(s => [3, 5].includes(s.id));
    if (selectedCategory === 'family') return scenarios.filter(s => [4, 6].includes(s.id));
    if (selectedCategory === 'educational') return scenarios.filter(s => [1, 7, 9, 10].includes(s.id));
    return scenarios;
  };

  const filteredScenarios = filterScenarios();
  const currentScenario = selectedScenario ? scenarios.find(s => s.id === selectedScenario) : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/5">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <header className="text-center mb-12 animate-fade-in">
          <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
            <Icon name="Sparkles" size={48} className="text-primary" />
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Сценарии школьных праздников
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            10 готовых сценариев для начальных классов (1-4). Каждый рассчитан на 40-60 минут для 20-30 участников
          </p>
        </header>

        <div className="flex flex-wrap gap-3 justify-center mb-8 animate-fade-in">
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={selectedCategory === cat.id ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(cat.id)}
              className="transition-all hover:scale-105"
            >
              <Icon name={cat.icon} size={18} className="mr-2" />
              {cat.name}
            </Button>
          ))}
        </div>

        {!currentScenario ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredScenarios.map((scenario, index) => (
              <Card
                key={scenario.id}
                className="cursor-pointer transition-all hover:shadow-xl hover:scale-105 animate-scale-in overflow-hidden group"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setSelectedScenario(scenario.id)}
              >
                <div className={`h-2 ${scenario.color} group-hover:h-3 transition-all`}></div>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 ${scenario.color} rounded-lg text-white`}>
                      <Icon name={scenario.icon} size={28} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                        {scenario.title}
                      </CardTitle>
                      <CardDescription className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs">
                          <Icon name="Clock" size={12} className="mr-1" />
                          {scenario.duration}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          <Icon name="Users" size={12} className="mr-1" />
                          {scenario.participants}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          {scenario.age}
                        </Badge>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-2">{scenario.goals}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="animate-fade-in">
            <Button
              variant="ghost"
              onClick={() => setSelectedScenario(null)}
              className="mb-6 hover:scale-105 transition-transform"
            >
              <Icon name="ArrowLeft" size={18} className="mr-2" />
              Назад к каталогу
            </Button>

            <Card className="overflow-hidden">
              <div className={`h-3 ${currentScenario.color}`}></div>
              <CardHeader className="bg-gradient-to-r from-background to-primary/5">
                <div className="flex items-start gap-6">
                  <div className={`p-5 ${currentScenario.color} rounded-xl text-white shadow-lg`}>
                    <Icon name={currentScenario.icon} size={48} />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-3xl mb-3">{currentScenario.title}</CardTitle>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">
                        <Icon name="Clock" size={14} className="mr-1" />
                        {currentScenario.duration}
                      </Badge>
                      <Badge variant="secondary">
                        <Icon name="Users" size={14} className="mr-1" />
                        {currentScenario.participants}
                      </Badge>
                      <Badge variant="secondary">{currentScenario.age}</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="mt-6 space-y-6">
                <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="Target" size={20} className="text-primary" />
                    Цели мероприятия
                  </h3>
                  <p className="text-muted-foreground">{currentScenario.goals}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-secondary" />
                    Задачи
                  </h3>
                  <ul className="space-y-2">
                    {currentScenario.tasks.map((task, i) => (
                      <li key={i} className="flex items-start gap-2 bg-secondary/5 p-3 rounded-lg">
                        <Icon name="Check" size={18} className="text-secondary mt-0.5 flex-shrink-0" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="program">
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                      <div className="flex items-center gap-2">
                        <Icon name="ListChecks" size={20} className="text-accent" />
                        Программа мероприятия
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 mt-3">
                        {currentScenario.program.map((item, i) => (
                          <div key={i} className="bg-accent/5 p-5 rounded-lg border-l-4 border-accent">
                            <div className="flex items-start gap-3 mb-3">
                              <Badge variant="outline" className="shrink-0 font-semibold">
                                {item.time}
                              </Badge>
                              <h4 className="flex-1 font-semibold text-base">{item.activity}</h4>
                            </div>
                            {'description' in item && (
                              <p className="text-sm text-muted-foreground leading-relaxed ml-0 pl-0">
                                {item.description}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="music">
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                      <div className="flex items-center gap-2">
                        <Icon name="Music" size={20} className="text-primary" />
                        Музыкальное сопровождение
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 mt-3">
                        {currentScenario.music.map((track, i) => (
                          <li key={i} className="flex items-start gap-2 bg-primary/5 p-3 rounded-lg">
                            <Icon name="Music2" size={16} className="text-primary mt-1 flex-shrink-0" />
                            <span>{track}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="attributes">
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                      <div className="flex items-center gap-2">
                        <Icon name="Package" size={20} className="text-secondary" />
                        Необходимые атрибуты
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                        {currentScenario.attributes.map((attr, i) => (
                          <div key={i} className="flex items-center gap-2 bg-secondary/5 p-3 rounded-lg">
                            <Icon name="CheckSquare" size={16} className="text-secondary flex-shrink-0" />
                            <span className="text-sm">{attr}</span>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg text-center">
                  <Icon name="Sparkles" size={32} className="mx-auto mb-3 text-primary" />
                  <p className="text-lg font-semibold mb-2">Готовы к проведению праздника?</p>
                  <p className="text-sm text-muted-foreground">
                    Все материалы безопасны и подходят для детей 7-10 лет
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;