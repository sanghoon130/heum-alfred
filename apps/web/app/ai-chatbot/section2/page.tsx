import Image from "next/image";
export default function Section2() {
  return (
    <>
      {/* Mobile */}
      <section className="w-full pt-[64px] pb-[32px] md:hidden bg-[#2F2F2F]">
        <h2 className="text-center w-[308px] mx-auto text-[20px] font-[700] leading-[156%] tracking-[-0.4px] text-[#FFF]">
          채팅으로 간편하게
          <br />
          재무 현황 파악 요청 및 확인
        </h2>
        <div className="text-center w-[308px] mx-auto text-[16px] font-[400] leading-[156%] tracking-[-0.32px] text-[#D5D5D5] mt-[24px]">
          우리 회사 매출, 매입, 계좌 정보가 필요할 땐,
          <br />
          간편하게 채팅으로 요청하고 빠르게 받아보세요.
        </div>
        <Image
          src="/images/AI_Section2_BG1.png"
          alt="graph1"
          width={308}
          height={175}
          className="w-[308px] h-[175px] mt-[32px] mx-auto"
        />
        <h2 className="text-center w-[308px] mx-auto text-[20px] mt-[112px] font-[700] leading-[156%] tracking-[-0.4px] text-[#FFF]">
          채팅으로 빠르게
          <br />
          세무•노무 질문 신속 답변
        </h2>
        <div className="text-center w-[308px] mx-auto text-[16px] font-[400] leading-[156%] tracking-[-0.32px] text-[#D5D5D5] mt-[24px]">
          어렵고 복잡한 세무•노무 문제부터, 금융 용어 질문까지. 전문가의
          답변으로 학습한 알프레드가 정확하게 답변해 드려요.
        </div>
        <Image
          src="/images/AI_Section2_BG1.png"
          alt="graph1"
          width={308}
          height={175}
          className="w-[308px] h-[175px] mt-[32px] mx-auto"
        />
        <h2 className="text-center w-[308px] mx-auto text-[20px] mt-[112px] font-[700] leading-[156%] tracking-[-0.4px] text-[#FFF]">
          채팅으로 손쉽게
          <br />
          각종 증명서•계산서 발급
        </h2>
        <div className="text-center w-[308px] mx-auto text-[16px] font-[400] leading-[156%] tracking-[-0.32px] text-[#D5D5D5] mt-[24px]">
          사업자등록증, 손익계산서, 세금계산서 등<br />
          각종 증명서와 세금계산서를 채팅으로 간편하게 발급하세요.
        </div>
        <Image
          src="/images/AI_Section2_BG1.png"
          alt="graph1"
          width={308}
          height={175}
          className="w-[308px] h-[175px] mt-[32px]  mx-auto"
        />
      </section>
      {/* Tablet */}
      <section
        className="hidden md:block xl:hidden w-full box-border pt-[232px] pb-[56px]"
        style={{
          background:
            "linear-gradient(180deg, rgba(47, 47, 47, 0.97) 0%, #2F2F2F 1.59%)",
        }}
      >
        <h2 className="text-center text-[32px] font-[700] leading-[138%] tracking-[-0.64px] text-[#FFF]">
          채팅으로 간편하게
          <br />
          재무 현황 파악 요청 및 확인
        </h2>
        <div className="text-center text-[18px] font-[400] leading-[156%] tracking-[-0.36px] text-[#D5D5D5] mt-[24px]">
          우리 회사 매출, 매입, 계좌 정보가 필요할 땐,
          <br />
          간편하게 채팅으로 요청하고 빠르게 받아보세요.
        </div>
        <Image
          src="/images/AI_Section2_BG1.png"
          alt="graph1"
          width={720}
          height={408}
          className="w-[720px] h-[408px] mt-[32px] mx-auto"
        />
        <div className="text-center text-[32px] mt-[112px] font-[700] leading-[138%] tracking-[-0.64px] text-[#FFF]">
          채팅으로 빠르게
          <br />
          세무•노무 질문 신속 답변
        </div>
        <div className="text-center text-[18px] font-[400] leading-[156%] tracking-[-0.36px] text-[#D5D5D5] mt-[24px]">
          어렵고 복잡한 세무•노무 문제부터, 금융 용어 질문까지.
          <br />
          전문가의 답변으로 학습한 알프레드가 정확하게 답변해 드려요.
        </div>
        <Image
          src="/images/AI_Section2_BG1.png"
          alt="graph1"
          width={720}
          height={408}
          className="w-[720px] h-[408px] mt-[32px] mx-auto"
        />
        <div className="text-center text-[32px] mt-[112px] font-[700] leading-[138%] tracking-[-0.64px] text-[#FFF]">
          채팅으로 손쉽게
          <br />
          각종 증명서•계산서 발급
        </div>
        <div className="text-center text-[18px] font-[400] leading-[156%] tracking-[-0.36px] text-[#D5D5D5] mt-[24px]">
          사업자등록증, 손익계산서, 세금계산서 등<br />
          각종 증명서와 세금계산서를 채팅으로 간편하게 발급하세요.
        </div>
        <Image
          src="/images/AI_Section2_BG1.png"
          alt="graph1"
          width={720}
          height={408}
          className="w-[720px] h-[408px] mt-[32px]  mx-auto"
        />
      </section>
      {/* Desktop */}
      <section
        className="w-full hidden xl:block pt-[308px] pb-[100px]"
        style={{
          background:
            "linear-gradient(180deg, rgba(47, 47, 47, 0.97) 0%, #2F2F2F 1.59%)",
        }}
      >
        <h2 className="text-center text-[32px] font-[700] leading-[138%] tracking-[-0.64px] text-[#FFF]">
          채팅으로 간편하게
          <br />
          재무 현황 파악 요청 및 확인
        </h2>
        <div className="text-center text-[18px] font-[400] leading-[156%] tracking-[-0.36px] text-[#D5D5D5] mt-[24px]">
          우리 회사 매출, 매입, 계좌 정보가 필요할 땐,
          <br />
          간편하게 채팅으로 요청하고 빠르게 받아보세요.
        </div>
        <Image
          src="/images/AI_Section2_BG1.png"
          alt="graph1"
          width={1123}
          height={636}
          className="w-[1123px] h-[636px] mt-[32px] mx-auto"
        />
        <h2 className="text-center text-[32px] mt-[112px] font-[700] leading-[138%] tracking-[-0.64px] text-[#FFF]">
          채팅으로 빠르게
          <br />
          세무•노무 질문 신속 답변
        </h2>
        <div className="text-center text-[18px] font-[400] leading-[156%] tracking-[-0.36px] text-[#D5D5D5] mt-[24px]">
          어렵고 복잡한 세무•노무 문제부터, 금융 용어 질문까지.
          <br />
          전문가의 답변으로 학습한 알프레드가 정확하게 답변해 드려요.
        </div>
        <Image
          src="/images/AI_Section2_BG1.png"
          alt="graph1"
          width={1123}
          height={636}
          className="w-[1123px] h-[636px] mt-[32px] mx-auto"
        />
        <h2 className="text-center text-[32px] mt-[112px] font-[700] leading-[138%] tracking-[-0.64px] text-[#FFF]">
          채팅으로 손쉽게
          <br />
          각종 증명서•계산서 발급
        </h2>
        <div className="text-center text-[18px] font-[400] leading-[156%] tracking-[-0.36px] text-[#D5D5D5] mt-[24px]">
          사업자등록증, 손익계산서, 세금계산서 등<br />
          각종 증명서와 세금계산서를 채팅으로 간편하게 발급하세요.
        </div>
        <Image
          src="/images/AI_Section2_BG1.png"
          alt="graph1"
          width={1123}
          height={636}
          className="w-[1123px] h-[636px] mt-[32px]  mx-auto"
        />
      </section>
    </>
  );
}
