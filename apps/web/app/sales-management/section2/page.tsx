import Image from "next/image";
export default function Section2() {
  return (
  <>
  {/* Mobile */}
        <section className="w-full pt-[64px] pb-[32px] md:hidden bg-[#F0F3F3]">
          <div className="text-center text-[24px] font-[700] leading-[148%] tracking-[-0.48px] text-[#138FA8]">
          PG, 온라인 매출 현황은 기본,
          </div>
          <div className="text-center text-[24px] font-[700] leading-[148%] tracking-[-0.48px] text-[#2F2F2F]">
          세금계산서 발행까지 손쉽게
          </div>
          <div className="py-[32px] flex flex-col items-center gap-[24px]">
            <div className="flex flex-col items-center gap-[24px]">
              <div className="text-[#138FA8] text-center text-[20px] font-[700] leading-[156%] tracking-[-0.4px] w-[308px]">
              세금계산서 발행을 손쉽게
              </div>
              <div className="text-[#6D6D6D] text-center text-[16px] font-[400] leading-[156%] tracking-[-0.32px] w-[308px]">
              홈택스 연동 한 번으로 간편하게<br/>세금계산서를 발급해 보세요.
              </div>
            </div>
            <Image
              src="/images/SALMAN_Section2_BG1.png"
              alt="graph1"
              width={299}
              height={174}
              className="w-[299px] h-[174px]"
            />
          </div>
          <div className="py-[32px] flex flex-col items-center gap-[24px]">
            <div className="flex flex-col items-center gap-[24px]">
              <div className="text-[#138FA8] text-center text-[20px] font-[700] leading-[156%] tracking-[-0.4px] w-[308px]">
              매출•매입 내역을  한 곳에
              </div>
              <div className="text-[#6D6D6D] text-center text-[16px] font-[400] leading-[156%] tracking-[-0.32px] w-[308px]">
              홈택스, 카드사, 여신금융협회, PG사, 쇼핑몰, 배달앱 등 각각 퍼져있던 매출•매입 자료들을 실시간으로 한 번에 볼 수 있어요.
              <br/>
              <br/>
              메모 작성, 검색 기능으로 깜빡하기 쉬운 결제 특이사항도 꼼꼼히 관리해요.
              </div>
            </div>
            <Image
              src="/images/SALMAN_Section2_BG2.png"
              alt="graph1"
              width={299}
              height={174}
              className="w-[299px] h-[174px]"
            />
          </div>
          <div className="py-[32px] flex flex-col items-center gap-[24px]">
            <div className="flex flex-col items-center gap-[24px]">
              <div className="text-[#138FA8] text-center text-[20px] font-[700] leading-[156%] tracking-[-0.4px] w-[308px]">
              은행별 입출금 내역을 한 곳에
              </div>
              <div className="text-[#6D6D6D] text-center text-[16px] font-[400] leading-[156%] tracking-[-0.32px] w-[308px]">
              각 은행 별 잔액, 최근 거래일,<br/> 만기일 확인부터 상세 거래 내역 확인까지,
              <br/>
              은행 별로 조회해야 했던 은행 별 입출금 내역과<br/> 주요 거래 정보를 실시간으로 한 번에 볼 수 있어요.
              </div>
            </div>
            <Image
              src="/images/SALMAN_Section2_BG3.png"
              alt="graph1"
              width={299}
              height={174}
              className="w-[299px] h-[174px]"
            />
          </div>
          </section>
          
         
  {/* Tablet */}
   <section className="hidden md:block xl:hidden w-full bg-[#F0F3F3] box-border pt-[112px] pb-[56px]">
        <h2 className="text-center text-[40px] font-[700] leading-[138%] tracking-[-0.8px] text-[#138FA8]">
        PG, 온라인 매출 현황은 기본,<br/><span className="text-[#000]">세금계산서 발행까지 손쉽게</span>
        </h2>
        <div className="py-[56px] flex flex-col items-center gap-[28px]">
        <div className="flex flex-col items-center gap-[24px]">
          <h3 className="text-[#138FA8] text-center text-[32px] font-[700] leading-[138%] tracking-[-0.64px] w-[350px]">세금계산서 발행을 손쉽게</h3>
          <div className="text-[#6D6D6D] text-center text-[18px] font-[400] leading-[156%] tracking-[-0.36px] w-[350px]">홈택스 연동 한 번으로 간편하게 세금계산서를 발급해 보세요.</div>
        </div>
        <Image src="/images/SALMAN_Section2_BG1.png" alt="graph1" width={651} height={516} className="w-[651px] h-[516px]" />
      </div>
      <div className="py-[56px] flex flex-col items-center gap-[28px]">
        <div className="flex flex-col items-center gap-[24px]">
          <h3 className="text-[#138FA8] text-center text-[32px] font-[700] leading-[138%] tracking-[-0.64px] w-[350px]">매출•매입 내역을 한 곳에</h3>
          <div className="text-[#6D6D6D] text-center text-[18px] font-[400] leading-[156%] tracking-[-0.36px] w-[350px]">홈택스, 카드사, 여신금융협회, PG사, 쇼핑몰, 배달앱 등 각각 퍼져있던 매출•매입 자료들을 실시간으로 한 번에 볼 수 있어요.<br/><br/>
          메모 작성, 검색 기능으로 깜빡하기 쉬운 결제 특이사항도 꼼꼼히 관리해요.</div>
        </div>
        <Image src="/images/SALMAN_Section2_BG2.png" alt="graph1" width={651} height={542} className="w-[651px] h-[542px]" />
      </div>
      <div className="py-[56px] flex flex-col items-center gap-[28px]">
        <div className="flex flex-col items-center gap-[24px]">
          <h3 className="text-[#138FA8] text-center text-[32px] font-[700] leading-[138%] tracking-[-0.64px] w-[350px]">은행별 입출금 내역을<br/>한 곳에</h3>
          <div className="text-[#6D6D6D] text-center text-[18px] font-[400] leading-[156%] tracking-[-0.36px] w-[350px]">각 은행 별 잔액, 최근 거래일, 만기일 확인부터 상세 거래 내역 확인까지,<br/><br/>
          은행 별로 조회해야 했던 은행 별 입출금 내역과 주요 거래 정보를 실시간으로 한 번에 볼 수 있어요.</div>
        </div>
        <Image src="/images/SALMAN_Section2_BG3.png" alt="graph1" width={651} height={527} className="w-[651px] h-[527px]" />
      </div>
      </section>
  {/* Desktop */}
  <section className="w-full hidden xl:block bg-[#F0F3F3] box-border pt-[120px] pb-[125px]">
    <h2 className="text-center text-[48px] font-[700] leading-[138%] tracking-[-0.96px] text-[#138FA8]">
      현금 흐름을 한 눈에 파악해<br/> <span className="text-[#000]">중요 의사 결정을 도와 드려요</span>
    </h2>
    <div className="py-[72px] flex items-center justify-between w-[1123px] mx-auto">
      <div className="flex flex-col items-start gap-[24px]">
        <h3 className="text-[#138FA8] text-[32px] font-[700] leading-[138%] tracking-[-0.64px] w-[350px]">세금계산서 발행을 손쉽게</h3>
        <div className="text-[#6D6D6D] text-[18px] font-[400] leading-[156%] tracking-[-0.36px] w-[350px]">홈택스 연동 한 번으로 간편하게 세금계산서를 발급해 보세요.</div>
      </div>
      <Image src="/images/SALMAN_Section2_BG1.png" alt="graph1" width={651} height={515} className="w-[651px] h-[515px]" />
    </div>
    <div className="py-[72px] flex items-center justify-between w-[1123px] mx-auto">
    <Image src="/images/SALMAN_Section2_BG2.png" alt="graph1" width={651} height={542} className="w-[651px] h-[542px]" />
      <div className="flex flex-col items-start gap-[24px]">
        <h3 className="text-[#138FA8] text-[32px] font-[700] leading-[138%] tracking-[-0.64px] w-[350px]">매출•매입 내역을 한 곳에</h3>
        <div className="text-[#6D6D6D] text-[18px] font-[400] leading-[156%] tracking-[-0.36px] w-[350px]">홈택스, 카드사, 여신금융협회, PG사, 쇼핑몰, 배달앱 등 각각 퍼져있던 매출•매입 자료들을 실시간으로 한 번에 볼 수 있어요. <br/> <br/>
        메모 작성, 검색 기능으로 깜빡하기 쉬운 결제 특이사항도 꼼꼼히 관리해요.</div>
      </div>
    </div>
    <div className="py-[72px] flex items-center justify-between w-[1123px] mx-auto">
      <div className="flex flex-col items-start gap-[24px]">
        <h3 className="text-[#138FA8] text-[32px] font-[700] leading-[138%] tracking-[-0.64px] w-[350px]">은행별 입출금 내역을<br/>한 곳에</h3>
        <div className="text-[#6D6D6D] text-[18px] font-[400] leading-[156%] tracking-[-0.36px] w-[350px]">각 은행 별 잔액, 최근 거래일, 만기일 확인부터 상세 거래 내역 확인까지,<br/><br/> 은행 별로 조회해야 했던 은행 별 입출금 내역과 주요 거래 정보를 실시간으로 한 번에 볼 수 있어요.</div>
      </div>
      <Image src="/images/SALMAN_Section2_BG3.png" alt="graph1" width={651} height={527} className="w-[651px] h-[527px]" />
    </div>
  </section>
  </>
  );
}
