import Image from "next/image";
export default function Section2() {
  return (
    <>
      {/* Mobile */}
      <section className="w-full pt-[64px] pb-[32px] md:hidden bg-[#F0F3F3]">
        <h2 className="text-center text-[24px] font-[700] leading-[148%] tracking-[-0.48px] text-[#1D805F]">
          임직원 관리부터,
          <br /> 급여명세서 발송까지{" "}
          <span className="text-[#000]">한 번에</span>
        </h2>
        <div className="py-[32px] flex flex-col items-center gap-[24px]">
          <div className="flex flex-col items-center gap-[24px]">
            <h3 className="text-[#1D805F] text-center text-[20px] font-[700] leading-[156%] tracking-[-0.4px] w-[292px]">
              인건비 파악이 쉬워지는 인사기록 및 <br /> 계약정보 관리
            </h3>
            <div className="text-[#6D6D6D] text-center text-[16px] font-[400] leading-[156%] tracking-[-0.32px] w-[292px]">
              개인정보는 물론 고용정보, 계약된 급여정보,
              <br /> 피부양자정보, 등 기타 급여 및 세무 신고에 필요한 정보를
              관리할 수 있어요.
              <br />
              <br /> 급여 정산에 연동하면 고용 형태별 인건비를 파악해 총
              인건비를 쉽게 확인해요.
            </div>
          </div>
          <Image
            src="/images/HR_Section2_BG1.png"
            alt="graph1"
            width={298}
            height={267}
            className="w-[298px] h-[267px]"
          />
        </div>
        <div className="py-[32px] flex flex-col items-center gap-[24px]">
          <div className="flex flex-col items-center gap-[24px]">
            <div className="text-[#1D805F] text-center text-[20px] font-[700] leading-[156%] tracking-[-0.4px] w-[292px]">
              한 눈에 파악하는 임직원 재직 현황
            </div>
            <div className="text-[#6D6D6D] text-center text-[16px] font-[400] leading-[156%] tracking-[-0.32px] w-[292px]">
              입사부터 휴직, 퇴직까지 임직원의 재직 상태
              <br />를 실시간으로 파악해요.
              <br />
              <br />
              급여 조정 및 법적 신고, 휴직자 복귀 시점에 따른 업무 누수 방지 등
              재직 상태에 따라 필요한 일들을 쉽게 파악할 수 있어요.
            </div>
          </div>
          <Image
            src="/images/HR_Section2_BG2.png"
            alt="graph1"
            width={298}
            height={146}
            className="w-[298px] h-[146px]"
          />
        </div>
        <div className="py-[32px] flex flex-col items-center gap-[24px]">
          <div className="flex flex-col items-center gap-[24px]">
            <div className="text-[#1D805F] text-center text-[20px] font-[700] leading-[156%] tracking-[-0.4px] w-[292px]">
              정확하고 쉽게 처리하는 소득유형별
              <br /> 급여 정산
            </div>
            <div className="text-[#6D6D6D] text-center text-[16px] font-[400] leading-[156%] tracking-[-0.32px] w-[292px]">
              급여 정산, 급여대장 다운로드, 급여 명세서 이메일 발송 등 급여
              정산부터 명세서 발송까지 급여 업무를 한번에 처리할 수 있어요.
            </div>
          </div>
          <Image
            src="/images/HR_Section2_BG3.png"
            alt="graph1"
            width={299}
            height={244}
            className="w-[299px] h-[244px]"
          />
        </div>
        <div className="py-[32px] flex flex-col items-center gap-[24px]">
          <div className="flex flex-col items-center gap-[24px]">
            <div className="text-[#1D805F] text-center text-[20px] font-[700] leading-[156%] tracking-[-0.4px] w-[292px]">
              정산부터 명세서 발송까지 급여 처리
              <br />를 한번에, 간편하게
            </div>
            <div className="text-[#6D6D6D] text-center text-[16px] font-[400] leading-[156%] tracking-[-0.32px] w-[292px]">
              급여 정산, 급여대장 다운로드, 급여 명세서 이메일 발송 등 <br />
              <br />
              급여 정산부터 명세서 발송까지 급여 업무를
              <br /> 한번에 처리할 수 있어요.
            </div>
          </div>
          <Image
            src="/images/HR_Section2_BG4.png"
            alt="graph1"
            width={299}
            height={198}
            className="w-[299px] h-[198px]"
          />
        </div>
      </section>

      {/* Tablet */}
      <section className="hidden md:block xl:hidden w-full bg-[#ECF2F0] box-border pt-[112px] pb-[56px]">
        <h2 className="text-center text-[40px] font-[700] leading-[138%] tracking-[-0.8px] text-[#1D805F]">
          임직원 관리부터,
          <br />
          급여명세서 발송까지<span className="text-[#000]"> 한 번에</span>
        </h2>
        <div className="py-[56px] flex flex-col items-center gap-[40px]">
          <div className="flex flex-col items-center gap-[24px]">
            <h3 className="text-[#1D805F] text-center text-[32px] font-[700] leading-[138%] tracking-[-0.64px] w-[350px]">
              인건비 파악이 쉬워지는
              <br />
              인사기록 및 계약정보 관리
            </h3>
            <div className="text-[#6D6D6D] text-center text-[18px] font-[400] leading-[156%] tracking-[-0.36px] w-[350px]">
              개인정보는 물론 고용정보, 계약된 급여정보, 피부
              <br />
              양자정보, 등 기타 급여 및 세무 신고에 필요한 정<br />
              보를 관리할 수 있어요.
              <br />
              <br /> 급여 정산에 연동하면 고용 형태별 인건비를 파악해 총
              인건비를 쉽게 확인해요.
            </div>
          </div>
          <Image
            src="/images/HR_Section2_BG1.png"
            alt="graph1"
            width={649}
            height={580}
            className="w-[649px] h-[580px]"
          />
        </div>
        <div className="py-[56px] flex flex-col items-center gap-[16px]">
          <div className="flex flex-col items-center gap-[24px]">
            <h3 className="text-[#1D805F] text-center text-[32px] font-[700] leading-[138%] tracking-[-0.64px] w-[350px]">
              한 눈에 파악하는
              <br />
              임직원 재직 현황
            </h3>
            <div className="text-[#6D6D6D] text-center text-[18px] font-[400] leading-[156%] tracking-[-0.36px] w-[350px]">
              입사부터 휴직, 퇴직까지 임직원의 재직 상태를 실<br />
              시간으로 파악해요.
              <br />
              <br />
              급여 조정 및 법적 신고, 휴직자 복귀 시점에 따른 업무 누수 방지 등
              재직 상태에 따라 필요한 일들을 쉽게 파악할 수 있어요.
            </div>
          </div>
          <Image
            src="/images/HR_Section2_BG2.png"
            alt="graph1"
            width={647}
            height={313}
            className="w-[647px] h-[313px]"
          />
        </div>
        <div className="py-[56px] flex flex-col items-center gap-[16px]">
          <div className="flex flex-col items-center gap-[24px]">
            <h3 className="text-[#1D805F] text-center text-[32px] font-[700] leading-[138%] tracking-[-0.64px] w-[350px]">
              정확하고 쉽게 처리하는
              <br />
              소득유형별 급여 정산
            </h3>
            <div className="text-[#6D6D6D] text-center text-[18px] font-[400] leading-[156%] tracking-[-0.36px] w-[350px]">
              급여 정산, 급여대장 다운로드, 급여 명세서 이메
              <br />일 발송 등 급여 정산부터 명세서 발송까지 급여
              <br /> 업무를 한번에 처리할 수 있어요.
            </div>
          </div>
          <Image
            src="/images/HR_Section2_BG3.png"
            alt="graph1"
            width={647}
            height={527}
            className="w-[647px] h-[527px]"
          />
        </div>
        <div className="py-[56px] flex flex-col items-center gap-[16px]">
          <div className="flex flex-col items-center gap-[24px]">
            <h3 className="text-[#1D805F] text-center text-[32px] font-[700] leading-[138%] tracking-[-0.64px] w-[350px]">
              정산부터 명세서 발송까지
              <br />
              급여 처리를 한번에, 간편하게
            </h3>
            <div className="text-[#6D6D6D] text-center text-[18px] font-[400] leading-[156%] tracking-[-0.36px] w-[350px]">
              급여 정산, 급여대장 다운로드, 급여 명세서 이메일 발송 등<br />
              <br />
              급여 정산부터 명세서 발송까지 급여 업무를 한번
              <br />에 처리할 수 있어요.
            </div>
          </div>
          <Image
            src="/images/HR_Section2_BG4.png"
            alt="graph1"
            width={647}
            height={426}
            className="w-[647px] h-[426px]"
          />
        </div>
      </section>
      
      {/** Desktop */}
      <section className="w-full hidden xl:block bg-[#ECF2F0] box-border pt-[120px] pb-[125px]">
        <div className="text-center text-[48px] font-[700] leading-[138%] tracking-[-0.96px] text-[#1D805F]">
          임직원 관리부터,
        </div>
        <div className="text-center text-[48px] font-[700] leading-[138%] tracking-[-0.96px] text-[#1D805F] mb-[60px]">
          급여명세서 발송까지 <span className="text-[#000]">한 번에</span>
        </div>
        <div className="py-[72px] flex items-center justify-between w-[1120px] mx-auto">
          <div className="flex flex-col items-start gap-[24px]">
            <div className="text-[#1D805F] text-[32px] font-[700] leading-[138%] tracking-[-0.64px] w-[350px]">
              인건비 파악이 쉬워지는
              <br />
              인사기록 및 계약정보 관리
            </div>
            <div className="text-[#6D6D6D] text-[18px] font-[400] leading-[156%] tracking-[-0.36px] w-[350px]">
              개인정보는 물론 고용정보, 계약된 급여정보, 피부양자정보, 등 기타
              급여 및 세무 신고에 필요한 정보를 관리할 수 있어요. 급여 정산에
              연동하면 고용 형태별 인건비를 파악해 총 인건비를 쉽게 확인해요.
            </div>
          </div>
          <Image
            src="/images/HR_Section2_BG1.png"
            alt="graph1"
            width={653}
            height={584}
            className="w-[653px] h-[584px]"
          />
        </div>
        <div className="py-[72px] flex items-center justify-between w-[1120px] mx-auto">
          <Image
            src="/images/HR_Section2_BG2.png"
            alt="graph1"
            width={651}
            height={317}
            className="w-[651px] h-[317px]"
          />
          <div className="flex flex-col items-start gap-[24px]">
            <div className="text-[#1D805F] text-[32px] font-[700] leading-[138%] tracking-[-0.64px] w-[350px]">
              한 눈에 파악하는
              <br />
              임직원 재직 현황
            </div>
            <div className="text-[#6D6D6D] text-[18px] font-[400] leading-[156%] tracking-[-0.36px] w-[350px]">
              입사부터 휴직, 퇴직까지 임직원의 재직 상태를 실시간으로 파악해요.
              급여 조정 및 법적 신고, 휴직자 복귀 시점에 따른 업무 누수 방지 등
              재직 상태에 따라 필요한 일들을 쉽게 파악할 수 있어요.
            </div>
          </div>
        </div>
        <div className="py-[72px] flex items-center justify-between w-[1120px] mx-auto">
          <div className="flex flex-col items-start gap-[24px]">
            <div className="text-[#1D805F] text-[32px] font-[700] leading-[138%] tracking-[-0.64px] w-[350px]">
              정확하고 쉽게 처리하는
              <br />
              소득유형별 급여 정산
            </div>
            <div className="text-[#6D6D6D] text-[18px] font-[400] leading-[156%] tracking-[-0.36px] w-[350px]">
              급여 정산, 급여대장 다운로드, 급여 명세서 이메일 발송 등 급여
              정산부터 명세서 발송까지 급여 업무를 한번에 처리할 수 있어요.
            </div>
          </div>
          <Image
            src="/images/HR_Section2_BG3.png"
            alt="graph1"
            width={651}
            height={531}
            className="w-[651px] h-[531px]"
          />
        </div>
        <div className="py-[72px] flex items-center justify-between w-[1120px] mx-auto">
          <Image
            src="/images/HR_Section2_BG4.png"
            alt="graph1"
            width={651}
            height={430}
            className="w-[651px] h-[430px]"
          />
          <div className="flex flex-col items-start gap-[24px]">
            <div className="text-[#1D805F] text-[32px] font-[700] leading-[138%] tracking-[-0.64px] w-[350px]">
              정산부터 명세서 발송까지
              <br />
              급여 처리를 한번에, 간편하게
            </div>
            <div className="text-[#6D6D6D] text-[18px] font-[400] leading-[156%] tracking-[-0.36px] w-[350px]">
              급여 정산, 급여대장 다운로드, 급여 명세서 이메일 발송 등<br />
              <br />
              급여 정산부터 명세서 발송까지 급여 업무를 한번에 처리할 수 있어요.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
