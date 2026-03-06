import PageTitle from "@/components/PageTitle";
import Wrappers from "@/components/common/Wrappers";
import { casesStore } from "@/casesStore";
import { Link, useParams } from "react-router-dom";

function formatResult(change: number | string) {
  if (typeof change === "number") {
    const sign = change > 0 ? "+" : "";
    return `${sign}${change}%`;
  }
  return change;
}

function Page() {
  const { caseid } = useParams();
  const caseItem = casesStore.find((item) => {
    const slug = item.preview_url.replace(/\/+$/, "").split("/").pop();
    return slug === caseid;
  });

  if (!caseItem) {
    return (
      <main>
        <PageTitle word={"КЕЙС"}>
          <div>
            <p className="text-3xl sm:max-w-[60%] font-bold">Кейс не найден</p>
            <p className="sm:max-w-[60%]">
              Проверьте ссылку или вернитесь к списку кейсов.
            </p>
          </div>
        </PageTitle>
        <div className="w-full bg-white relative -mb-5 rounded-b-3xl pt-10">
          <Wrappers className="w-full py-6">
            <Link to="/cases" className="text-lg underline">
              Все кейсы
            </Link>
          </Wrappers>
        </div>
      </main>
    );
  }

  const renderDescriptionLine = (line: string, index: number) => {
    const trimmedLine = line.trim();

    if (!trimmedLine) {
      return <div key={`description-space-${index}`} className="h-2" />;
    }

    if (trimmedLine.startsWith("###")) {
      return (
        <h4 key={`description-h3-${index}`} className="text-xl font-semibold">
          {trimmedLine.replace(/^###\s*/, "")}
        </h4>
      );
    }

    if (trimmedLine.startsWith("##")) {
      return (
        <h3 key={`description-h2-${index}`} className="text-2xl font-semibold">
          {trimmedLine.replace(/^##\s*/, "")}
        </h3>
      );
    }

    if (trimmedLine.startsWith("#")) {
      return (
        <h2 key={`description-h1-${index}`} className="text-3xl font-semibold">
          {trimmedLine.replace(/^#\s*/, "")}
        </h2>
      );
    }

    if (trimmedLine.startsWith("- ") || trimmedLine.startsWith("* ")) {
      return (
        <p key={`description-bullet-${index}`} className="text-lg leading-relaxed">
          {"\u2022 "}
          {trimmedLine.replace(/^[-*]\s*/, "")}
        </p>
      );
    }

    return (
      <p key={`description-text-${index}`} className="text-lg leading-relaxed">
        {trimmedLine}
      </p>
    );
  };

  return (
    <main>
      <PageTitle word={"КЕЙС"}>
        <div>
          <p className="text-3xl sm:max-w-[60%] font-bold">
            {caseItem.title ?? caseItem.category}
          </p>
          <p className="sm:max-w-[60%]">{caseItem.category}</p>
        </div>
      </PageTitle>
      <div className="w-full bg-white relative -mb-5 rounded-b-3xl pt-10">
        <Wrappers className="w-full py-8 space-y-10">
          <div className="overflow-hidden rounded-3xl bg-muted">
            {caseItem.cover_url ? (
              <img
                alt={caseItem.title ?? caseItem.category}
                className="h-[360px] w-full object-cover"
                src={caseItem.cover_url}
              />
            ) : (
              <div className="h-[360px] w-full" />
            )}
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {caseItem.results?.slice(0, 3).map((result, idx) => (
              <div
                key={`${caseItem.category}-result-${idx}`}
                className="rounded-2xl bg-zinc-100 px-6 py-5"
              >
                <div className="text-2xl font-semibold">
                  {formatResult(result.change)}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  {result.description}
                </div>
              </div>
            ))}
          </div>

          <section className="space-y-4">
            {caseItem.description?.map((line, idx) => renderDescriptionLine(line, idx))}
          </section>
        </Wrappers>
      </div>
    </main>
  );
}

export default Page;
