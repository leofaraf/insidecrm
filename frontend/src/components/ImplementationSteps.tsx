import stepCardImage from "@/assets/step-card.svg";
import Wrappers from "@/components/common/Wrappers";

type ImplementationStepsProps = {
  title?: string;
  steps: string[];
};

function ImplementationSteps({
  title = "Шаги внедрения",
  steps,
}: ImplementationStepsProps) {
  const visibleSteps = steps.slice(0, 4);

  if (!visibleSteps.length) {
    return null;
  }

  return (
    <section className="w-full py-10">
      <Wrappers className="w-full">
        <div className="mb-6">
          <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {visibleSteps.map((step, index) => (
            <div
              key={`${step}-${index}`}
              className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm"
            >
              <div className="text-4xl font-bold leading-none text-zinc-900">{index + 1}</div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">{step}</p>
              <img
                src={stepCardImage}
                alt={`Иллюстрация шага ${index + 1}`}
                className="mt-4 h-24 w-full rounded-lg border border-zinc-200 object-cover"
              />
            </div>
          ))}
        </div>
      </Wrappers>
    </section>
  );
}

export default ImplementationSteps;
