import PageTitle from "@/components/PageTitle";
import Wrappers from "@/components/common/Wrappers";
import { store } from "@/store";
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
  const caseItem = store.cases.find((item) => {
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

          <Link to="/cases" className="text-lg underline">
            Все кейсы
          </Link>
        </Wrappers>
      </div>
    </main>
  );
}

export default Page;
