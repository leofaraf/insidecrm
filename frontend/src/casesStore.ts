export type CaseResult = {
  change: number | string;
  description: string;
};

export type CaseItem = {
  logo_url: string | null;
  category: string;
  title?: string;
  cover_url?: string;
  preview_url: string;
  results: CaseResult[];
  description: string[];
};

export const casesStore: CaseItem[] = [
  {
    logo_url: "https://upload.wikimedia.org/wikipedia/de/9/9c/Novo-Nordisk-Logo.svg",
    category: "Недвижимость",
    title: "Автоматизация продаж жилой недвижимости",
    cover_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXkKQ36OryBznfROczVR_2GsJZuoLNNDQVGg&s",
    preview_url: "/cases/realestate",
    results: [
      { change: -35, description: "Снижение потерь лидов" },
      { change: -40, description: "Сокращение времени первичной обработки" },
      { change: 25, description: "Дополнительный доход за счет CPA-монетизации" },
    ],
    description: [
      "#Задача: оптимизировать работу amoCRM, наладить корректное распределение заявок и ускорить обработку платежей.",
      "LIFE PAY уже использовала amoCRM вместе с платформой для автоматизации бизнес-процессов Sensei, но система работала нестабильно, что мешало росту. Основные проблемы:",
      "- Потеря данных и сбои в автоматизации из-за большого количества тегов.",
      "#Что сделали",
      "- Настроили единую воронку в amoCRM",
      "- Подключили источники лидов и коллтрекинг",
      "- Внедрили SLA для первого контакта",
      "#Результат",
      "Руководитель получил прозрачную картину по каждому этапу сделки.",
    ],
  },
  {
    logo_url: "https://upload.wikimedia.org/wikipedia/de/9/9c/Novo-Nordisk-Logo.svg",
    category: "Косметология",
    cover_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXkKQ36OryBznfROczVR_2GsJZuoLNNDQVGg&s",
    preview_url: "/cases/beutyagency",
    results: [
      { change: 25, description: "Рост количества записей" },
      { change: "x10", description: "Ускорение обработки обращений (в 10 раз)" },
      { change: 100, description: "Все заявки фиксируются в CRM" },
    ],
    description: [
      "#Контекст",
      "Часть лидов терялась в мессенджерах, а администраторы дублировали действия вручную.",
      "#Решение",
      "- Собрали обращения из всех каналов в CRM",
      "- Автоматизировали напоминания клиентам",
      "- Добавили контроль причин отказов",
      "#Итог",
      "Управление записью стало предсказуемым, а загрузка специалистов выросла.",
    ],
  },
  {
    logo_url: "https://upload.wikimedia.org/wikipedia/de/9/9c/Novo-Nordisk-Logo.svg",
    category: "Автосервис",
    cover_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXkKQ36OryBznfROczVR_2GsJZuoLNNDQVGg&s",
    preview_url: "/cases/carsevice",
    results: [
      { change: 73, description: "Рост записей на ТО" },
      { change: 100, description: "Исключены потерянные звонки" },
      { change: -80, description: "Сокращение времени записи клиента" },
    ],
    description: [
      "#Проблема",
      "Мастера-приемщики не успевали отвечать на входящие обращения в пиковые часы.",
      "#Внедрение",
      "- Добавили сценарии автоответов и распределение заявок",
      "- Связали телефонию с карточкой клиента",
      "- Настроили повторные касания по пропущенным звонкам",
      "#Результат",
      "Отдел сервиса стабильно загружен, а время до записи снизилось.",
    ],
  },
  {
    logo_url: "https://upload.wikimedia.org/wikipedia/de/9/9c/Novo-Nordisk-Logo.svg",
    category: "Аренда катеров",
    cover_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXkKQ36OryBznfROczVR_2GsJZuoLNNDQVGg&s",
    preview_url: "/cases/shipping",
    results: [
      { change: -40, description: "Сокращение времени обработки заявок" },
      { change: 25, description: "Рост подтвержденных бронирований" },
      { change: -30, description: "Снижение потерь клиентов" },
    ],
    description: [
      "#Ситуация",
      "Запросы с сайта и мессенджеров обрабатывались разрозненно, без общей приоритизации.",
      "#Действия",
      "- Объединили все каналы в одну очередь",
      "- Настроили статусы бронирования и оплат",
      "- Добавили уведомления менеджерам о просроченных задачах",
      "#Эффект",
      "Команда быстрее закрывает заявки в бронь и лучше удерживает клиентов.",
    ],
  },
  {
    logo_url: null,
    category: "Интернет-магазин",
    cover_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXkKQ36OryBznfROczVR_2GsJZuoLNNDQVGg&s",
    preview_url: "/cases/flowers",
    results: [
      { change: 40, description: "Ускорение обработки заказов" },
      { change: 28, description: "Рост повторных обращений" },
      { change: 20, description: "Дополнительная выручка за счет SMS-маркетинга" },
    ],
    description: [
      "#Исходные данные",
      "У клиента не было системной работы с повторными продажами.",
      "#Что внедрили",
      "- Сегментацию базы клиентов по частоте покупок",
      "- Автоматические SMS-цепочки после заказа",
      "- Отчет по повторным продажам в разрезе менеджеров",
      "#Что получили",
      "Повторные продажи стали управляемым каналом роста выручки.",
    ],
  },
];
