import Includes from "@/components/Includes";
import ImplementationSteps from "@/components/ImplementationSteps";
import PageTitle from "@/components/PageTitle";

const includesItems = [
  "Сегментация базы по этапам и поведению клиентов",
  "Проработка стратегии email-цепочек и триггеров",
  "Подготовка шаблонов писем в фирменном стиле",
  "Настройка сервисов отправки и доменной репутации",
  "Конфигурация SPF, DKIM и DMARC записей",
  "Интеграция email с CRM и событиями воронки",
  "Автоматизация welcome, follow-up и реактиваций",
  "A/B-тесты тем, контента и CTA",
  "Контроль доставляемости и engagement-метрик",
  "Регулярная оптимизация по результатам кампаний",
];

const problemsItems = [
  "Письма попадают в спам и не дочитываются",
  "База не сегментирована по этапам и интересам",
  "Нет автоматических цепочек после действий клиента",
  "Результаты рассылок не связаны с продажами",
];

const stepsItems = [
  "Аудитируем базу, инфраструктуру домена и текущие сценарии рассылок.",
  "Проектируем сегменты и цепочки писем под этапы воронки.",
  "Настраиваем отправку, триггеры и интеграции с CRM.",
  "Запускаем кампании, измеряем метрики и оптимизируем контент.",
];

function ServicePage() {
  return (
    <>
      <PageTitle word={"Email-рассылки"}>
        <div>
          <p className="text-3xl sm:max-w-[60%] font-bold ">
            Email-рассылки, которые возвращают клиентов и греют лидов
          </p>
          <p className="sm:max-w-[60%]">
            Сегментируем базу, выстраиваем цепочки и повышаем открываемость.
          </p>
          <p className="sm:max-w-[60%]">
            Следим за доставляемостью и помогаем писать письма, которые читают.
          </p>
        </div>
      </PageTitle>
      <Includes
        title="Email-рассылки включают:"
        items={includesItems}
        problems={problemsItems}
      />
      <ImplementationSteps steps={stepsItems} />
    </>
  );
}

export default ServicePage;
