import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const courses = [
  {
    title: "Стратегия через примеры",
    category: "Базовый курс",
    description:
      "Как принимать решения, когда нет данных. Методики для повседневных ситуаций и бизнес-задач.",
    price: "от 1 790 ₽",
    tags: ["Теория игр", "PDF", "Базовая практика"],
  },
  {
    title: "Решения под давлением",
    category: "Продвинутый",
    description:
      "Методики для кризисов и переговоров. Как сохранять хладнокровие и находить лучшие варианты.",
    price: "от 890 ₽",
    tags: ["Кризисное мышление", "Чек-листы", "Бонусы"],
  },
  {
    title: "Управление рисками",
    category: "Специализированный",
    description:
      "Оценка вероятностей и минимизация потерь. Инструменты для инвесторов и предпринимателей.",
    price: "от 1 990 ₽",
    tags: ["Вероятности", "EV-модель", "Кейсы"],
  },
  {
    title: "Психология контроля",
    category: "Прикладной",
    description:
      "Работа с импульсами и когнитивными искажениями. Как не поддаваться эмоциям в важные моменты.",
    price: "от 1 350 ₽",
    tags: ["Когнитивные ловушки", "Самоконтроль", "Упражнения"],
  },
  {
    title: "Анализ данных для новичков",
    category: "Базовый курс",
    description:
      "Основы работы с информацией. Как извлекать выводы из чисел и фактов без специальных знаний.",
    price: "от 1 200 ₽",
    tags: ["Статистика", "Визуализация", "Практика"],
  },
  {
    title: "Принятие решений без данных",
    category: "Продвинутый",
    description:
      "Действия в условиях неопределённости. Как выбирать, когда информации мало или нет совсем.",
    price: "от 1 190 ₽",
    tags: ["Эвристики", "Интуиция", "Методы"],
  },
  {
    title: "Коммуникация без конфликтов",
    category: "Специализированный",
    description:
      "Переговоры и управление ожиданиями. Как находить общий язык без компромиссов по существу.",
    price: "от 2 990 ₽",
    tags: ["Переговоры", "Конфликты", "Стратегии"],
  },
  {
    title: "Фокус и внимание в цифровой среде",
    category: "Прикладной",
    description:
      "Борьба с отвлечениями и цифровым шумом. Как концентрироваться на важном в эпоху перегрузок.",
    price: "от 1 790 ₽",
    tags: ["Концентрация", "Цифровая гигиена", "Техники"],
  },
  {
    title: "Индивидуальная консультация",
    category: "Персональный формат",
    description:
      "Разбор вашей конкретной задачи. 30–60 минут с экспертом для анализа ситуации и решения.",
    price: "по запросу",
    tags: ["1:1", "Персональный подход", "Экспертиза"],
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Наши курсы</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Выберите курс под вашу задачу — от базовых методик до профессиональных инструментов.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent className="p-6">
                <p className="text-sm text-primary font-semibold mb-2">{course.category}</p>
                <h3 className="text-xl font-bold mb-3">{course.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{course.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-primary">{course.price}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {course.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button size="sm" className="w-full group/btn" asChild>
                  <a href="#pricing">
                    Подробнее
                    <Icon name="ArrowRight" className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}