import Includes from "@/components/Includes";
import ImplementationSteps from "@/components/ImplementationSteps";
import PageTitle from "@/components/PageTitle";

const includesItems = [
  "Аудит текущих сценариев записи и работы с клиентами",
  "Настройка услуг, сотрудников и расписаний",
  "Конфигурация онлайн-записи и виджетов на сайте",
  "Подключение уведомлений и напоминаний клиентам",
  "Интеграция Yclients с amoCRM и телефонией",
  "Настройка статусов, тегов и этапов обработки",
  "Синхронизация клиентской базы без дублей",
  "Автоматизация повторных визитов и реактиваций",
  "Настройка отчетности по загрузке и выручке",
  "Обучение администраторов и руководителей",
];

const problemsItems = [
  "Записи клиентов ведутся в разных системах вручную",
  "Администраторы тратят время на рутинные операции",
  "История клиента и статусы теряются между сервисами",
  "Повторные визиты не управляются системно",
];

const stepsItems = [
  "Разбираем текущий путь клиента от записи до оплаты услуги.",
  "Настраиваем Yclients под ваши роли, услуги и расписания.",
  "Интегрируем Yclients с CRM и автоматизируем обмен данными.",
  "Проводим тестовый запуск и закрепляем процесс на команде.",
];

function ServicePage() {
  return (
    <>
      <PageTitle word={"Внедрение Yclients"}>
        <div>
          <p className="text-3xl sm:max-w-[60%] font-bold ">
            Внедрение Yclients для удобной записи и контроля загрузки
          </p>
          <p className="sm:max-w-[60%]">
            Настраиваем услуги, расписания, сотрудников и уведомления для клиентов.
          </p>
          <p className="sm:max-w-[60%]">
            Интегрируем с CRM и помогаем автоматизировать повторные визиты.
          </p>
        </div>
      </PageTitle>
      <Includes
        title="Внедрение Yclients включает:"
        items={includesItems}
        problems={problemsItems}
      />
      <ImplementationSteps steps={stepsItems} />
    </>
  );
}

export default ServicePage;
