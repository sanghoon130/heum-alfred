import Image from "next/image";
export default function Section2() {
  return (
    <>
      {/* Mobile */}
      <section className="w-full pt-[64px] pb-[28px] md:hidden bg-[#FFF]">
        <h2 className="text-center text-[24px] font-[700] leading-[138%] tracking-[-0.8px] text-[#0F65BA]">
        내야 할 세금 알려주고 바로 납부<br/>까지, <span className="text-[#000]">이제 세무도 시스템으로 간편하게</span>
        </h2>
        <div className="py-[32px] flex flex-col items-center w-[308px] h-[577px] box-border rounded-[24px] overflow-hidden mx-auto">
          <div className="flex-1 w-full h-[411px] bg-[#0F65BA] flex items-end rounded-t-[24px] justify-center">
            <Image
              src="/images/TAXMAN_Section2_BG1_Mobile.png"
              alt="graph1"
              width={235}
              height={392}
              className="w-[235px] h-full"
            />
          </div>
          <div className="flex flex-col gap-[24px] rounded-b-[24px] items-center bg-[#E9F3FD] py-[40px] px-[24px]">
            <h3 className="text-[#0F65BA] text-center text-[20px] font-[700] leading-[156%] tracking-[-0.4px] w-full">
              납부기한 챙겨주는<br/>세금 알람
            </h3>
            <div className="text-[#6D6D6D] text-center text-[16px] font-[400] leading-[156%] tracking-[-0.32px] w-full">
              내야 할 세금 안내부터 납부기한 알람까지, 놓치는 세금 없도록 알아서 꼼꼼하게 챙겨 드려요.
            </div>
          </div>
        </div>
        <div className="py-[32px] flex flex-col items-center w-[308px] box-border rounded-[24px] overflow-hidden mx-auto">
          <div className="flex-1 w-full bg-[#0F65BA] flex items-end rounded-t-[24px] justify-center">
            <Image
              src="/images/TAXMAN_Section2_BG2_Mobile.png"
              alt="graph1"
              width={401}
              height={190}
              className="h-[190px] flex-shrink-0 w-[308px] my-[23px]"
            />
          </div>
          <div className="flex flex-col gap-[24px] flex-shrink-0 rounded-b-[24px] w-full items-center bg-[#E9F3FD] py-[40px] px-[24px]">
            <h3 className="text-[#0F65BA] text-center text-[20px] font-[700] leading-[156%] tracking-[-0.4px] w-full">
              간편하게 납부하는<br/> 국세, 지방세
            </h3>
            <div className="text-[#6D6D6D] text-center text-[16px] font-[400] leading-[156%] tracking-[-0.32px] w-full">
              원천세, 부가세, 법인세, 종합소득세 등<br/> 납부할 세금 세부내역을
              <br /> 간편하게 확인하고 바로 납부까지<br/> 한 번에 해결할 수 있어요.
            </div>
          </div>
        </div>
        <div className="py-[32px] flex flex-col items-center w-[308px] box-border rounded-[24px] overflow-hidden mx-auto">
          <div className="flex-1 w-full h-[195px] bg-[#0F65BA] flex items-end rounded-t-[24px] justify-center">
            <Image
              src="/images/TAXMAN_Section2_BG3_Mobile.png"
              alt="graph1"
              width={314}
              height={155}
              className="h-[155px] flex-shrink-0 w-[308px] my-[20px]"
            />
          </div>
          <div className="flex flex-col gap-[24px] rounded-b-[24px] w-full min-h-[235px] flex-shrink-0 box-border items-center bg-[#E9F3FD] py-[40px] px-[24px]">
            <h3 className="text-[#0F65BA] text-center text-[20px] font-[700] leading-[156%] tracking-[-0.4px] w-full">
              각종 증명서 간편 발급
            </h3>
            <div className="text-[#6D6D6D] text-center text-[16px] font-[400] leading-[156%] tracking-[-0.32px] w-full">
              사업자등록증, 원천징수영수증, 재무상태표, 손익계산서 등<br />
              사업에 필요한 각종 서류 발급을 연동 한 번으로 간편하게 발급해요.
            </div>
          </div>
        </div>
      </section>

    
      {/* Tablet */}
      <section className="hidden md:block xl:hidden w-full bg-[#FFF] box-border pt-[56px] pb-[72px]">
        <h2 className="text-center text-[40px] font-[700] leading-[138%] tracking-[-0.8px] text-[#0F65BA]">
          내야 할 세금 알려주고 바로 납부까지,
          <br />
          <span className="text-[#2F2F2F]">이제 세무도 시스템으로 간편하게</span>
        </h2>
        <div className="py-[56px] flex flex-col items-center w-[720px] rounded-[24px] overflow-hidden mx-auto">
          <div className="flex-1 w-full h-[411px] bg-[#0F65BA] flex items-end rounded-t-[24px] justify-center">
            <Image
              src="/images/TAXMAN_Section2_BG1.png"
              alt="graph1"
              width={335}
              height={385}
              className="w-[335px] h-[385px]"
            />
          </div>
          <div className="flex flex-col gap-[24px] rounded-b-[24px] w-full items-center bg-[#E9F3FD] py-[40px] px-[24px]">
            <h3 className="text-[#0F65BA] text-center text-[32px] font-[700] leading-[138%] tracking-[-0.64px] w-full">
              납부 기한 챙겨주는 세금 알람
            </h3>
            <div className="text-[#6D6D6D] text-center text-[18px] font-[400] leading-[156%] tracking-[-0.36px] w-full">
              내야 할 세금 안내부터 납부기한 알람까지,
              <br /> 놓치는 세금 없도록 알아서 꼼꼼하게 챙겨 드려요.
            </div>
          </div>
        </div>
        <div className="py-[56px] flex flex-col items-center w-[720px] rounded-[24px] overflow-hidden mx-auto">
          <div className="w-full max-h-[411px] bg-[#0F65BA] box-border pt-[37px] overflow-hidden flex rounded-t-[24px] justify-center">
            <Image
              src="/images/TAXMAN_Section2_BG2_Tab.png"
              alt="graph1"
              width={661}
              height={392}
              className="w-[661px] h-[392px]"
            />
          </div>
          <div className="flex flex-col gap-[24px] rounded-b-[24px] w-full items-center bg-[#E9F3FD] py-[40px] px-[24px]">
            <h3 className="text-[#0F65BA] text-center text-[32px] font-[700] leading-[138%] tracking-[-0.64px] w-full">
              간편하게 납부하는 국세, 지방세
            </h3>
            <div className="text-[#6D6D6D] text-center text-[18px] font-[400] leading-[156%] tracking-[-0.36px] w-full">
              원천세, 부가세, 법인세, 종합소득세 등 납부할 세금 세부내역을
              <br /> 간편하게 확인하고 바로 납부까지 한 번에 해결할 수 있어요.
            </div>
          </div>
        </div>
        <div className="py-[56px] flex flex-col items-center w-[720px] rounded-[24px] overflow-hidden mx-auto">
          <div className="w-full max-h-[276px] pt-[32px] bg-[#0F65BA] flex items-end rounded-t-[24px] justify-center">
            <Image
              src="/images/TAXMAN_Section2_BG3_Tab.png"
              alt="graph1"
              width={661}
              height={244}
              className="w-[661px] h-full"
            />
          </div>
          <div className="flex flex-col gap-[24px] rounded-b-[24px] w-full items-center bg-[#E9F3FD] py-[40px] px-[24px]">
            <h3 className="text-[#0F65BA] text-center text-[32px] font-[700] leading-[138%] tracking-[-0.64px] w-full">
              각종 증명서 간편 발급
            </h3>
            <div className="text-[#6D6D6D] text-center text-[18px] font-[400] leading-[156%] tracking-[-0.36px] w-full">
              사업자등록증, 원천징수영수증, 재무상태표, 손익계산서 등<br />
              사업에 필요한 각종 서류 발급을 연동 한 번으로 간편하게 발급해요.
            </div>
          </div>
        </div>
      </section>

      {/* Desktop */}
      <section className="w-full hidden xl:block bg-[#FFF] box-border pt-[120px]">
        <h2 className="text-center text-[48px] font-[700] leading-[138%] tracking-[-0.96px] text-[#0F65BA]">
          내야 할 세금 알려주고 바로 납부까지,
          <br />
          <span className="text-[#2F2F2F]">이제 세무도 시스템으로 간편하게</span>
        </h2>
        <div className="my-[72px] flex items-center w-[1123px] h-[411px] rounded-[24px] overflow-hidden mx-auto">
          <div className="flex flex-col items-start justify-center gap-[24px] w-[414px] h-[411px] bg-[#E9F3FD] px-8">
            <h3 className="text-[#0F65BA] text-[32px] font-[700] leading-[138%] tracking-[-0.64px] w-[350px]">
              납부 기한 챙겨주는
              <br />
              세금 알람
            </h3>
            <div className="text-[#6D6D6D] text-[18px] font-[400] leading-[156%] tracking-[-0.36px] w-[350px]">
              내야 할 세금 안내부터 납부기한 알람까지, 놓치는 세금 없도록 알아서
              꼼꼼하게 챙겨 드려요.
            </div>
          </div>
          <div className="flex-1 h-[411px] bg-[#0F65BA] flex items-end justify-center">
            <Image
              src="/images/TAXMAN_Section2_BG1.png"
              alt="graph1"
              width={335}
              height={385}
              className="w-[335px] h-[385px]"
            />
          </div>
        </div>
        <div className="my-[144px] flex items-center w-[1123px] h-[411px] rounded-[24px] overflow-hidden mx-auto">
          <div className="flex-1 h-[411px] bg-[#0F65BA] flex items-end justify-end">
            <Image
              src="/images/TAXMAN_Section2_BG2.png"
              alt="graph1"
              width={672}
              height={378}
              className="w-[672px] h-[378px]"
            />
          </div>
          <div className="flex flex-col items-start justify-center gap-[24px] w-[414px] h-[411px] bg-[#E9F3FD] px-8">
            <h3 className="text-[#0F65BA] text-[32px] font-[700] leading-[138%] tracking-[-0.64px] w-[350px]">
              간편하게 납부하는
              <br /> 국세, 지방세
            </h3>
            <div className="text-[#6D6D6D] text-[18px] font-[400] leading-[156%] tracking-[-0.36px] w-[350px]">
              원천세, 부가세, 법인세, 종합소득세 등 납부할 세금 세부내역을
              간편하게 확인하고 바로 납부까지 한 번에 해결할 수 있어요.
            </div>
          </div>
        </div>
        <div className="my-[144px] flex items-center w-[1123px] h-[411px] rounded-[24px] overflow-hidden mx-auto">
          <div className="flex flex-col items-start justify-center gap-[24px] w-[414px] h-[411px] bg-[#E9F3FD] px-8">
            <h3 className="text-[#0F65BA] text-[32px] font-[700] leading-[138%] tracking-[-0.64px] w-[350px]">
              각종 증명서 간편 발급
            </h3>
            <div className="text-[#6D6D6D] text-[18px] font-[400] leading-[156%] tracking-[-0.36px] w-[350px]">
              사업자등록증, 원천징수영수증, 재무상태표, 손익계산서 등 사업에
              필요한 각종 서류 발급을 연동 한 번으로 간편하게 발급해요.
            </div>
          </div>
          <div className="flex-1 h-[411px] bg-[#0F65BA] flex pt-[68px] pl-[33px] overflow-hidden">
            <Image
              src="/images/TAXMAN_Section2_BG3.png"
              alt="graph1"
              width={705}
              height={348}
              className="w-[705px] h-[348px]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
