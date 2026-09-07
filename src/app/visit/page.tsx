import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { SectionShell } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { church, serviceTimes } from "@/lib/content";

export const metadata: Metadata = {
  title: "처음 방문하셨다면",
};

const firstVisitSteps = [
  {
    step: 1,
    image: "/img/visit/step1.png",
    lines: [
      "시선교회를 방문하셨다면",
      "즉시 새가족팀의 환영을",
      "받으실 수 있습니다.",
    ],
  },
  {
    step: 2,
    image: "/img/visit/step2.png",
    lines: [
      "예배당 앞에 있는 웰컴데스크에서",
      "방문카드를 작성해 주시면,",
      "자리를 안내해 드립니다.",
    ],
  },
  {
    step: 3,
    image: "/img/visit/step3.png",
    lines: [
      "예배를 마치고 난 후에는",
      "잠시 담임목사와 인사를 나누는",
      "시간을 가집니다.",
    ],
  },
  {
    step: 4,
    image: "/img/visit/step4.png",
    lines: [
      "이후 새가족 스탭의 인도를 따라",
      "식사를 함께 하거나",
      "소그룹에 참여할 수 있습니다.",
    ],
  },
];

const afterVisitSteps = [
  {
    step: 5,
    image: "/img/visit/step5.png",
    lines: [
      "등록을 결심하셨다면,",
      "담당 교역자의 심방을 받게 됩니다.",
    ],
  },
  {
    step: 6,
    image: "/img/visit/step6.png",
    lines: [
      "새가족 소그룹(6-7주)을 거쳐",
      "소그룹에 배정됩니다.",
    ],
  },
  {
    step: 7,
    image: "/img/visit/step7.png",
    lines: [
      "이후에 담임목사와의 만남을 가지고,",
      "새가족교육(7주) 프로그램을 이수하면",
      "정식으로 등록교인이 됩니다.",
    ],
  },
];

function StepCard({
  step,
  image,
  lines,
}: {
  step: number;
  image: string;
  lines: string[];
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative h-28 w-28 md:h-32 md:w-32">
        <Image
          src={image}
          alt={`STEP ${step}`}
          fill
          className="object-contain"
          sizes="128px"
        />
      </div>
      <p className="mt-4 text-sm font-bold tracking-wide text-accent">
        STEP {step}
      </p>
      <p className="mt-3 text-[15px] leading-relaxed text-foreground">
        {lines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </p>
    </div>
  );
}

function StepRow({
  steps,
}: {
  steps: { step: number; image: string; lines: string[] }[];
}) {
  return (
    <div className="mt-10 flex flex-col items-stretch gap-8 md:flex-row md:items-start md:justify-between md:gap-4">
      {steps.map((item, index) => (
        <div key={item.step} className="flex flex-1 flex-col items-center md:flex-row md:items-start">
          <div className="w-full max-w-[220px]">
            <StepCard {...item} />
          </div>
          {index < steps.length - 1 ? (
            <div className="relative my-2 h-8 w-6 shrink-0 rotate-90 md:mx-1 md:mt-12 md:h-14 md:w-8 md:rotate-0">
              <Image
                src="/img/visit/arrow.png"
                alt=""
                fill
                className="object-contain opacity-50"
                sizes="32px"
              />
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default function VisitPage() {
  return (
    <>
      <PageHero eyebrow="The first visit" title="처음 방문하셨다면" />

      <section className="border-b border-line bg-surface">
        <SectionShell className="!py-14 md:!py-16">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-2xl font-bold tracking-tight md:text-3xl">
                환영합니다.
              </p>
              <p className="mt-6 text-[17px] leading-[1.9] text-muted">
                새가족팀이 여러분들을 맞이할 준비를 하고 있습니다.
                <br className="hidden sm:block" />
                조용히 예배만 드리고 가고 싶으시다면 안내하는 저희 교우에게
                말씀해 주세요.
                <br className="hidden sm:block" />
                미리 상황을 확인하고 싶으시다면 아래로 연락주세요.
              </p>
              <p className="mt-8 text-[16px] leading-relaxed text-foreground">
                tel :{" "}
                <a
                  href={`tel:${church.phone.replace(/-/g, "")}`}
                  className="font-semibold text-accent hover:underline"
                >
                  {church.phone}
                </a>
              </p>
              <p className="mt-3 text-sm text-muted">{church.address}</p>
            </div>
          </Reveal>
        </SectionShell>
      </section>

      <section className="border-b border-line bg-background">
        <SectionShell className="!py-12 md:!py-14">
          <Reveal>
            <div className="mx-auto max-w-3xl">
              <h2 className="text-center text-xl font-bold md:text-2xl">
                예배 안내
              </h2>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold text-accent">예배 장소</p>
                  <p className="mt-2 text-[15px] leading-relaxed text-foreground">
                    {church.address}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-accent">예배 시간</p>
                  <ul className="mt-2 space-y-1.5 text-[15px] text-foreground">
                    {serviceTimes.map((item) => (
                      <li
                        key={item.name}
                        className="flex justify-between gap-4"
                      >
                        <span>{item.name}</span>
                        <span className="shrink-0 text-muted">{item.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </SectionShell>
      </section>

      <section className="bg-background">
        <SectionShell>
          <Reveal>
            <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
              처음 방문하셨다면?
            </h2>
            <div className="mx-auto mt-8 max-w-3xl text-center">
              <p className="text-xl font-bold">환영합니다!</p>
              <p className="mt-4 text-[17px] leading-[1.9] text-muted">
                새가족팀이 여러분들을 맞이할 준비를 하고 있습니다.
                <br className="hidden sm:block" />
                조용히 예배만 드리고 가고 싶으시다면 안내하는 저희 교우에게
                말씀해 주세요.
                <br className="hidden sm:block" />
                미리 상황을 확인하고 싶으시다면 아래로 연락주세요.
              </p>
              <p className="mt-6 text-[15px] text-foreground">
                tel{" "}
                <a
                  href={`tel:${church.phone.replace(/-/g, "")}`}
                  className="font-semibold text-accent hover:underline"
                >
                  {church.phone}
                </a>
              </p>
            </div>
          </Reveal>

          <Reveal>
            <h3 className="mt-16 text-center text-xl font-bold md:text-2xl">
              주일예배 첫 방문
            </h3>
            <StepRow steps={firstVisitSteps} />
          </Reveal>

          <Reveal>
            <div className="mx-auto mt-14 max-w-3xl rounded-2xl bg-accent-soft px-6 py-8 text-center md:px-10">
              <p className="text-[16px] leading-[1.9] text-muted">
                시선교회는 매주 성찬을 합니다. 하지만 처음 방문하신 분들에게는
                성찬을 드리지 않으니,{" "}
                <strong className="font-semibold text-foreground">
                  처음 방문하신 분 중 성찬에 참여하고자 하시는 분은 먼저
                  교역자를 찾아주시기 바랍니다.
                </strong>
                이는 방문하신 분들을 배제하기 위해서가 아니라, 신앙고백을
                확인한 후에 성찬을 함께 나누기 위해서입니다. 교역자와 대화하며
                신앙고백을 확인한 후, 성찬에 참여하시면 됩니다.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <h3 className="mt-16 text-center text-xl font-bold md:text-2xl">
              주일예배 첫 방문 후
            </h3>
            <StepRow steps={afterVisitSteps} />
          </Reveal>

          <Reveal>
            <p className="mx-auto mt-14 max-w-2xl text-center text-[17px] leading-[1.9] text-muted">
              이 과정들을 통해 복음을 새롭게 다시 만나고,
              <br />
              공동체에 적응하는 시간을 가질 수 있습니다.
            </p>
          </Reveal>
        </SectionShell>
      </section>
    </>
  );
}
