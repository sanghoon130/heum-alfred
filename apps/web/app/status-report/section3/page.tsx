import Image from "next/image";
export default function Section3() {
  return (
    <>
      {/* Mobile */}
      <section className="w-full pt-[64px] pb-[32px] md:hidden bg-[#FFF9F5]">
        <h2 className="text-center text-[24px] font-[700] leading-[148%] tracking-[-0.48px] text-[#E37617]">
          현금 흐름이 한 눈에 보이는<br/> <span className="text-[#2F2F2F]">미수•미지급금, 자금 흐름, 재무<br/> 상태 보고서</span>
        </h2>
        <div className="py-[32px] flex flex-col items-center gap-[7px]">
          <div className="flex flex-col items-center gap-[24px]">
            <h3 className="text-[#E37617] text-center text-[20px] font-[700] leading-[156%] tracking-[-0.4px] w-[308px]">
              월간 손익 현황 보고서
            </h3>
            <div className="text-[#6D6D6D] text-center text-[16px] font-[400] leading-[156%] tracking-[-0.32px] w-[308px]">
              손익현황, 매출현황, 매출총이익, 영업이익, 순이익 등 세무 전문가가
              직접 분석한 월별 손익 현황을 상세하게 확인 할 수 있고, 손익계산서
              상세 내역을 다운받아 중요한 의사결정에 사용할 수 있어요.
            </div>
          </div>
          <Image
            src="/images/Section3_BG1.png"
            alt="graph1"
            width={299}
            height={174}
            className="w-[299px] h-[174px]"
          />
        </div>
        <div className="py-[32px] flex flex-col items-center gap-[16px]">
          <div className="flex flex-col items-center gap-[24px]">
            <h3 className="text-[#E37617] text-center text-[20px] font-[700] leading-[156%] tracking-[-0.4px] w-[308px]">
              미수•미지급금 보고서
            </h3>
            <div className="text-[#6D6D6D] text-center text-[16px] font-[400] leading-[156%] tracking-[-0.32px] w-[308px]">
              미수·미지급 금액 추이와 거래처별 상세 내역을 통해 자금 유출·유입과
              추이를 파악하여 효율적으로 채권 관리를 할 수 있어요.
            </div>
          </div>
          <Image
            src="/images/Section3_BG2.png"
            alt="graph1"
            width={299}
            height={174}
            className="w-[299px] h-[174px]"
          />
        </div>
        <div className="py-[32px] flex flex-col items-center gap-[16px]">
          <div className="flex flex-col items-center gap-[24px]">
            <h3 className="text-[#E37617] text-center text-[20px] font-[700] leading-[156%] tracking-[-0.4px] w-[308px]">
              자금 흐름 보고서
            </h3>
            <div className="text-[#6D6D6D] text-center text-[16px] font-[400] leading-[156%] tracking-[-0.32px] w-[308px]">
              현금 및 단기 유동성 자금의 흐름을 한 눈에 파악하여 보유 자금을
              관리할 수 있어요.
            </div>
          </div>
          <Image
            src="/images/Section3_BG3.png"
            alt="graph1"
            width={299}
            height={174}
            className="w-[299px] h-[174px]"
          />
        </div>
        <div className="py-[32px] flex flex-col items-center gap-[16px]">
          <div className="flex flex-col items-center gap-[24px]">
            <h3 className="text-[#E37617] text-center text-[20px] font-[700] leading-[156%] tracking-[-0.4px] w-[308px]">
              재무 상태 보고서
            </h3>
            <div className="text-[#6D6D6D] text-center text-[16px] font-[400] leading-[156%] tracking-[-0.32px] w-[308px]">
              최종 결산한 날짜 기준으로, 최근의 자산/부채/자본 현황을 볼 수
              있어요.
              <br />
              <br />
              재무 건전성, 안정성, 수익성, 활동성 등 현재 재무 상태를 진단 할 수
              있도록 주요 지표를 그래프로 확인하고 월별 재무 상태를 요약한
              재무상태표도 확인할 수 있어요.
            </div>
          </div>
          <Image
            src="/images/Section3_BG4.png"
            alt="graph1"
            width={299}
            height={174}
            className="w-[299px] h-[174px]"
          />
        </div>
      </section>

      {/* Tablet */}
      <section className="hidden md:block xl:hidden w-full bg-[#FFF9F5] box-border pt-[112px] pb-[56px]">
        <h2 className="text-center text-[40px] font-[700] leading-[138%] tracking-[-0.8px] text-[#E37617]">
          현금 흐름을 한 눈에 파악해<br/> <span className="text-[#2F2F2F]">중요 의사 결정을 도와 드려요</span>
        </h2>
        <div className="py-[56px] flex flex-col items-center gap-[40px]">
          <div className="flex flex-col items-center gap-[24px]">
            <h3 className="text-[#E37617] text-center text-[32px] font-[700] leading-[138%] tracking-[-0.64px] w-[350px]">
              월간 손익 현황 보고서
            </h3>
            <div className="text-[#6D6D6D] text-center text-[18px] font-[400] leading-[156%] tracking-[-0.36px] w-[350px]">
              손익현황, 매출현황, 매출총이익, 영업이익, 순이익 등 세무 전문가가
              직접 분석한 월별 손익 현황을 상세하게 확인 할 수 있고, 손익계산서
              상세 내역을 다운받아 중요한 의사결정에 사용할 수 있어요.
            </div>
          </div>
          <Image
            src="/images/Section3_BG1.png"
            alt="graph1"
            width={636}
            height={362}
            className="w-[636px] h-[362px]"
          />
        </div>
        <div className="py-[56px] flex flex-col items-center gap-[40px]">
          <div className="flex flex-col items-center gap-[24px]">
            <h3 className="text-[#E37617] text-center text-[32px] font-[700] leading-[138%] tracking-[-0.64px] w-[350px]">
              미수•미지급금 보고서
            </h3>
            <div className="text-[#6D6D6D] text-center text-[18px] font-[400] leading-[156%] tracking-[-0.36px] w-[350px]">
              미수·미지급 금액 추이와 거래처별 상세 내역을 통해 자금 유출·유입과
              추이를 파악하여 효율적으로 채권 관리를 할 수 있어요.
            </div>
          </div>
          <Image
            src="/images/Section3_BG2.png"
            alt="graph1"
            width={648}
            height={418}
            className="w-[648px] h-[418px]"
          />
        </div>
        <div className="py-[56px] flex flex-col items-center gap-[40px]">
          <div className="flex flex-col items-center gap-[24px]">
            <h3 className="text-[#E37617] text-center text-[32px] font-[700] leading-[138%] tracking-[-0.64px] w-[350px]">
              자금 흐름 보고서
            </h3>
            <div className="text-[#6D6D6D] text-center text-[18px] font-[400] leading-[156%] tracking-[-0.36px] w-[350px]">
              현금 및 단기 유동성 자금의 흐름을 한 눈에 파악하여 보유 자금을
              관리할 수 있어요.
            </div>
          </div>
          <Image
            src="/images/Section3_BG3.png"
            alt="graph1"
            width={648}
            height={432}
            className="w-[648px] h-[432px]"
          />
        </div>
        <div className="py-[56px] flex flex-col items-center gap-[40px]">
          <div className="flex flex-col items-center gap-[24px]">
            <div className="text-[#E37617] text-center text-[32px] font-[700] leading-[138%] tracking-[-0.64px] w-[350px]">
              재무 상태 보고서
            </div>
            <div className="text-[#6D6D6D] text-center text-[18px] font-[400] leading-[156%] tracking-[-0.36px] w-[350px]">
              최종 결산한 날짜 기준으로, 최근의 자산/부채/자본 현황을 볼 수
              있어요.
              <br />
              <br />
              재무 건전성, 안정성, 수익성, 활동성 등 현재 재무 상태를 진단 할 수
              있도록 주요 지표를 그래프로 확인하고 월별 재무 상태를 요약한
              재무상태표도 확인할 수 있어요.
            </div>
          </div>
          <Image
            src="/images/Section3_BG4.png"
            alt="graph1"
            width={648}
            height={493}
            className="w-[648px] h-[493px]"
          />
        </div>
      </section>

      {/* Desktop */}
      <section className="hidden xl:block w-full bg-[#FFF9F5] box-border pt-[120px] pb-[0px]">
        <h2 className="text-center text-[48px] font-[700] leading-[138%] tracking-[-0.96px] text-[#E37617] mb-[60px]">
          현금 흐름을 한 눈에 파악해<br/><span className="text-[#2F2F2F]">중요 의사 결정을 도와 드려요</span>
        </h2>
        <div className="py-[60px] flex items-center justify-between w-[1113px] mx-auto">
          <div className="flex flex-col items-start gap-[24px]">
            <h3 className="text-[#E37617] text-[32px] font-[700] leading-[138%] tracking-[-0.64px] w-[350px]">
              월간 손익 현황 보고서
            </h3>
            <div className="text-[#6D6D6D] text-[18px] font-[400] leading-[156%] tracking-[-0.36px] w-[350px]">
              손익현황, 매출현황, 매출총이익, 영업이익, 순이익 등 세무 전문가가
              직접 분석한 월별 손익 현황을 상세하게 확인 할 수 있고, 손익계산서
              상세 내역을 다운받아 중요한 의사결정에 사용할 수 있어요.
            </div>
          </div>
          <Image
            src="/images/Section3_BG1.png"
            alt="graph1"
            width={636}
            height={362}
            className="w-[636px] h-[362px]"
          />
        </div>
        <div className="py-[60px] flex items-center justify-between w-[1113px] mx-auto">
          <Image
            src="/images/Section3_BG2.png"
            alt="graph1"
            width={648}
            height={418}
            className="w-[648px] h-[418px]"
          />
          <div className="flex flex-col items-start gap-[24px]">
            <h3 className="text-[#E37617] text-[32px] font-[700] leading-[138%] tracking-[-0.64px] w-[350px]">
              미수•미지급금 보고서
            </h3>
            <div className="text-[#6D6D6D] text-[18px] font-[400] leading-[156%] tracking-[-0.36px] w-[350px]">
              미수·미지급 금액 추이와 거래처별 상세 내역을 통해 자금 유출·유입과
              추이를 파악하여 효율적으로 채권 관리를 할 수 있어요.
            </div>
          </div>
        </div>
        <div className="py-[60px] flex items-center justify-between w-[1113px] mx-auto">
          <div className="flex flex-col items-start gap-[24px]">
            <h3 className="text-[#E37617] text-[32px] font-[700] leading-[138%] tracking-[-0.64px] w-[350px]">
              자금 흐름 보고서
            </h3>
            <div className="text-[#6D6D6D] text-[18px] font-[400] leading-[156%] tracking-[-0.36px] w-[350px]">
              현금 및 단기 유동성 자금의 흐름을 한 눈에 파악하여 보유 자금을
              관리할 수 있어요.
            </div>
          </div>
          <Image
            src="/images/Section3_BG3.png"
            alt="graph1"
            width={648}
            height={432}
            className="w-[648px] h-[432px]"
          />
        </div>
        <div className="py-[60px] flex items-center justify-between w-[1113px] mx-auto">
          <Image
            src="/images/Section3_BG4.png"
            alt="graph1"
            width={648}
            height={493}
            className="w-[648px] h-[493px]"
          />
          <div className="flex flex-col items-start gap-[24px]">
            <h3 className="text-[#E37617] text-[32px] font-[700] leading-[138%] tracking-[-0.64px] w-[350px]">
              재무 상태 보고서
            </h3>
            <div className="text-[#6D6D6D] text-[18px] font-[400] leading-[156%] tracking-[-0.36px] w-[350px]">
              최종 결산한 날짜 기준으로, 최근의 자산/부채/자본 현황을 볼 수
              있어요.
              <br />
              <br />
              재무 건전성, 안정성, 수익성, 활동성 등 현재 재무 상태를 진단 할 수
              있도록 주요 지표를 그래프로 확인하고 월별 재무 상태를 요약한
              재무상태표도 확인할 수 있어요.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
