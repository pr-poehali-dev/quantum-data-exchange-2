import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const formats = [
  {
    title: "Стратегический анализ",
    category: "Базовый формат",
    description:
      "Анализ ситуации через призму стратегического мышления. Письменные рекомендации по принятию решений в типовых задачах.",
    price: "от 990 ₽",
    tags: ["Письменный разбор", "Методические материалы", "Типовые рекомендации"],
  },
  {
    title: "Антикризисный разбор",
    category: "Расширенный формат",
    description:
      "Глубокий аналитический разбор сложных ситуаций. Консультации по действиям в условиях давления и неопределённости.",
    price: "от 1 990 ₽",
    tags: ["Кризисное мышление", "Чек-листы решений", "Аналитика"],
  },
  {
    title: "Управление рисками",
    category: "Глубокий аналитический разбор",
    description:
      "Консультации по оценке вероятностей и минимизации потерь. Методические материалы для работы с неопределённостью.",
    price: "от 2 490 ₽",
    tags: ["Вероятностный анализ", "Модели оценки", "Кейс-разборы"],
  },
  {
    title: "Когнитивный контроль",
    category: "Прикладной формат",
    description:
      "Разбор механизмов принятия решений. Консультации по работе с когнитивными искажениями и импульсивностью.",
    price: "от 1 490 ₽",
    tags: ["Когнитивные ловушки", "Самоконтроль", "Практические техники"],
  },
  {
    title: "Аналитика данных",
    category: "Базовый формат",
    description:
      "Консультации по основам работы с информацией. Методики извлечения выводов из фактов и чисел.",
    price: "от 1 290 ₽",
    tags: ["Основы статистики", "Визуализация данных", "Интерпретация"],
  },
  {
    title: "Решения без данных",
    category: "Расширенный формат",
    description:
      "Аналитические рекомендации для действий в условиях дефицита информации. Эвристики и методы быстрого выбора.",
    price: "от 1 690 ₽",
    tags: ["Эвристики", "Быстрые решения", "Методологии"],
  },
  {
    title: "Переговорная стратегия",
    category: "Глубокий аналитический разбор",
    description:
      "Консультационное сопровождение по управлению коммуникацией. Разбор переговорных сценариев и стратегий.",
    price: "от 2 990 ₽",
    tags: ["Переговоры", "Управление конфликтами", "Стратегии"],
  },
  {
    title: "Управление вниманием",
    category: "Прикладной формат",
    description:
      "Консультации по борьбе с отвлечениями. Методические материалы по концентрации в условиях информационной перегрузки.",
    price: "от 1 790 ₽",
    tags: ["Концентрация", "Цифровая гигиена", "Техники фокуса"],
  },
  {
    title: "Индивидуальное сопровождение",
    category: "Персональный формат",
    description:
      "Детальный разбор вашей конкретной ситуации. Персональные письменные рекомендации и аналитическое сопровождение.",
    price: "по запросу",
    tags: ["Персональный подход", "Глубокий анализ", "Экспертная поддержка"],
  },
]

export function ConsultingFormatsSection() {
  return (
    <section id="formats" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            Форматы работы
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
            Консультационные <span className="text-primary">форматы</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Выберите формат аналитического сопровождения под вашу задачу — от базовых консультаций до глубокого персонального разбора.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {formats.map((format, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-background"
            >
              <CardContent className="p-6">
                <p className="text-sm text-primary font-semibold mb-2">{format.category}</p>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{format.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{format.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-primary">{format.price}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {format.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button size="sm" className="w-full group/btn shadow-lg shadow-primary/20" asChild>
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
