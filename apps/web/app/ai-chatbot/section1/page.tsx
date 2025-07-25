"use client";
import Image from "next/image";
import { ChevronUp } from "lucide-react";
import { useState } from "react";

export default function Section1() {
  const [isFeaturesonMouseEntered, setIsFeaturesonMouseEntered] =
    useState(false);
  const [isMenuClicked, setIsMenuClicked] = useState(false); // 클릭 상태 추가

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsFeaturesonMouseEntered(true);
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    // 클릭되지 않은 경우에만 마우스 leave 시 메뉴 숨김
    if (!isMenuClicked) {
      setIsFeaturesonMouseEntered(false);
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation(); // 이벤트 버블링 방지
    setIsMenuClicked(!isMenuClicked); // 클릭 상태 토글
    setIsFeaturesonMouseEntered(!isMenuClicked); // 메뉴 표시 상태도 함께 변경
  };

  // 다른 곳 클릭 시 메뉴 닫기
  const handleDocumentClick = () => {
    setIsMenuClicked(false);
    setIsFeaturesonMouseEntered(false);
  };

  // 메뉴 표시 조건: 호버 상태이거나 클릭된 상태
  const shouldShowMenu = isFeaturesonMouseEntered || isMenuClicked;

  const gradientBorderStyle = {
    position: "relative" as const,
  };

  const pseudoElementStyle = {
    content: '""',
    position: "absolute" as const,
    zIndex: -1,
    inset: 0,
    borderRadius: "12px",
    padding: "1.5px",
    background: "linear-gradient(180deg, #ffffff73 0%, #ffffff10 50%)",
    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    WebkitMask:
      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    WebkitMaskComposite: "xor",
    maskComposite: "exclude",
  };

  const pseudoElementStyle2 = {
    content: '""',
    position: "absolute" as const,
    zIndex: 10,
    inset: -2,
    borderRadius: "12px",
    padding: "1.5px",
    background: "linear-gradient(135deg, #ffffff20 0%, #ffffff10 50%)",
    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    WebkitMask:
      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    WebkitMaskComposite: "xor",
    maskComposite: "exclude",
  };

  return (
    <>
      {/* Mobile */}
      <section
        className="md:hidden min-w-full box-border bg-[#1F1F1F] bg-[url('/images/AI_BG_Stars.png')] bg-cover pt-[30px] h-[800px] relative"
        onClick={handleDocumentClick}
      >
        <div
          style={gradientBorderStyle}
          className="w-[307px] box-border h-[64px] mx-auto border-[1px] border-[#FFFFFF10] border-solid rounded-[30px]"
        >
          <div
            style={pseudoElementStyle2}
            className="absolute inset-0 -z-10 rounded-[30px]"
          />

          <div
            className="
                 bg-[#1F1F1FCC] 
                 rounded-[30px] 
                 shadow-[0_4px_30px_0_rgba(0,0,0,0.2)] 
                 px-6 
                 flex 
                 items-center 
                 justify-between 
                 w-[307px] 
                 h-full
                 relative
                 z-10
               "
          >
            <Image
              src="/images/logo.png"
              alt="logo"
              width={110}
              height={30}
              className="w-[110px] h-[30px]"
            />
            <Image
              src="/images/mobile-nav.png"
              alt="mobile-nav"
              width={36}
              height={36}
              className="w-[36px] h-[36px]"
              onClick={handleClick}
            />
          </div>
          {shouldShowMenu && (
            <div
              className="py-4 px-6 bg-[#1F1F1F]/80 
                     rounded-[12px] 
                     shadow-[0_4px_30px_0_rgba(0,0,0,0.2)] 
                     backdrop-blur-[3px]
                     flex 
                     flex-col 
                     gap-2
                     relative
                     justify-between
                     w-[308px]
                     mx-auto
                     mt-[13px]
                     z-0"
              onClick={(e) => e.stopPropagation()} // 메뉴 클릭 시 이벤트 버블링 방지
            >
              <div className="py-2 text-[16px] text-[#FFFFFF] font-[500] leading-[118%] cursor-pointer transition-colors">
                Company
              </div>
              <div className="py-2 text-[16px] text-[#FFFFFF] font-[500] leading-[118%] cursor-pointer transition-colors">
                Servicies
              </div>
              <div className="pl-4 flex flex-col gap-2 mt-[10px]">
                <div className="py-2 text-[16px] text-[#FFFFFF] font-[400] leading-[118%] cursor-pointer transition-colors">
                  매출/매입 현황 보고서
                </div>
                <div className="py-2 text-[16px] text-[#FFFFFF] font-[400] leading-[118%] cursor-pointer transition-colors">
                  세무 관리
                </div>
                <div className="py-2 text-[16px] text-[#FFFFFF] font-[400] leading-[118%] cursor-pointer transition-colors">
                  AI Chatbot
                </div>
                <div className="py-2 text-[16px] text-[#FFFFFF] font-[400] leading-[118%] cursor-pointer transition-colors">
                  재무 현황 보고서
                </div>
                <div className="py-2 text-[16px] text-[#FFFFFF] font-[400] leading-[118%] cursor-pointer transition-colors">
                  인사/급여 관리
                </div>
              </div>
              <div className="py-2 text-[16px] text-[#FFFFFF] font-[500] leading-[118%] cursor-pointer transition-colors">
                Features
              </div>
              <div className="py-2 text-[16px] text-[#FFFFFF] font-[500] leading-[118%] cursor-pointer transition-colors">
                Resource
              </div>

              <div
                style={pseudoElementStyle2}
                className="absolute inset-0 -z-10 rounded-[12px]"
              />
            </div>
          )}
        </div>

        <Image
          src="/images/AI_Section1_BG_Circles_Mobile.png"
          alt="section1"
          width={1360}
          height={2236}
          className="w-full aspect-[1360/2236] absolute bottom-0 left-1/2 -translate-x-1/2"
        />

        <div className="flex flex-col w-[307px] mx-auto items-center gap-[16px] mt-[72px]">
          <h1 className="text-[#FFFFFF] text-[32px] font-[700] leading-[138%] text-center tracking-[-0.64px]">
            AI Chatbot
          </h1>
          <div className="text-[#FFFFFF] text-[20px] font-[400] leading-[156%] text-center tracking-[-0.4px]">
            재무 현황 파악, 세무•노무 질문 답변,
            <br /> 각종 서류 발급까지 채팅으로,
            <br /> 복잡한 재무 업무를 챗봇으로 더 편하고 신속하게
          </div>
          <div
            className={`px-6 py-3 mt-2 w-[176px] h-[48px] box-border flex gap-[4px] justify-center items-center bg-[#E37617] hover:bg-[#B65E12] rounded-[12px] transition-colors duration-300 ease-in-out`}
          >
            <div className="text-[#FFFFFF] text-[14px] font-[700] leading-[120%] tracking-[-0.168px] ">
              무료 버전 체험하기
            </div>
            <Image
              src="/images/Plus.png"
              alt="section1"
              width={16}
              height={16}
              className="size-4"
            />
          </div>
          <Image
            src="/images/AI_Section1_BG.png"
            alt="section1"
            width={204}
            height={236}
            className="w-[248px] mt-[30px]"
          />
        </div>
        <div className="flex flex-col w-full items-center gap-[32px] absolute top-[728px] left-1/2 -translate-x-1/2">
          <Image
            src="/images/AI_Section1_Card1_Mobile.png"
            alt="재무 현황 파악 요청 및 확인"
            width={308}
            height={196}
            className="w-[308px] h-[196px] z-10"
          />
          <Image
            src="/images/AI_Section1_Card2_Mobile.png"
            alt="세무•노무 질문"
            width={308}
            height={196}
            className="w-[308px] h-[196px] z-10"
          />
          <Image
            src="/images/AI_Section1_Card3_Mobile.png"
            alt="각종 서류 발급"
            width={308}
            height={196}
            className="w-[308px] h-[196px] z-10"
          />
        </div>
      </section>
      <div className="w-full h-[612px] bg-[#2F2F2F] md:hidden"></div>

      {/* Tablet */}
      <section
        className="hidden md:block xl:hidden w-full box-border bg-[#1F1F1F] bg-[url('/images/AI_BG_Stars.png')] bg-cover pt-[30px] h-[1039px] relative"
        onClick={handleDocumentClick}
      >
        <div
          style={gradientBorderStyle}
          className="w-full max-w-[527px] box-border h-[64px] mx-auto border-[1px] border-[#FFFFFF10] border-solid rounded-[30px]"
        >
          <div
            style={pseudoElementStyle}
            className="absolute inset-0 -z-10 rounded-[30px]"
          />

          <div
            className="
          bg-[#1F1F1FCC] 
          rounded-[30px] 
          shadow-[0_4px_30px_0_rgba(0,0,0,0.2)] 
          px-6 
          flex 
          items-center 
          justify-between 
          w-full 
          h-full
          relative
          z-10
        "
          >
            <Image
              src="/images/logo.png"
              alt="logo"
              width={110}
              height={30}
              className="w-[110px] h-[30px]"
            />
            <div>
              <div className="flex items-center gap-8 py-2">
                <div className="text-[#FFFFFF] text-[16px] font-500 leading-[118%]">
                  Services
                </div>
                <div
                  onMouseLeave={handleMouseLeave}
                  onMouseEnter={handleMouseEnter}
                  onClick={handleClick} // 클릭 이벤트 추가
                  className="text-[#FFFFFF] text-[16px] font-500 leading-[118%] flex items-center gap-1 hover:text-[#E37617] cursor-pointer select-none"
                >
                  <span>Features</span>
                  <ChevronUp
                    className={`size-5 text-[#4D4E58] transition-transform duration-200`}
                  />
                </div>
                <div className="text-[#FFFFFF] text-[16px] font-500 leading-[118%]">
                  Resource
                </div>
              </div>
            </div>
          </div>
        </div>

        {shouldShowMenu && (
          <div
            className="py-4 px-6 bg-[#1F1F1F] 
            rounded-[12px] 
            shadow-[0_4px_30px_0_rgba(0,0,0,0.2)] 
            flex 
            flex-col 
            gap-2
            relative
            w-[246px]
            mt-[13px]
            mx-auto
            translate-x-[180px]
            z-10"
            onClick={(e) => e.stopPropagation()} // 메뉴 클릭 시 이벤트 버블링 방지
          >
            <div className="py-2 text-[16px] text-[#FFFFFF] font-[400] leading-[118%] hover:text-[#E37617] cursor-pointer transition-colors">
              AI Chatbot
            </div>
            <div className="py-2 text-[16px] text-[#FFFFFF] font-[400] leading-[118%] hover:text-[#E37617] cursor-pointer transition-colors">
              사업 현황 보고서
            </div>
            <div className="py-2 text-[16px] text-[#FFFFFF] font-[400] leading-[118%] hover:text-[#E37617] cursor-pointer transition-colors">
              매출.매입 관리
            </div>
            <div className="py-2 text-[16px] text-[#FFFFFF] font-[400] leading-[118%] hover:text-[#E37617] cursor-pointer transition-colors">
              인사/급여 관리
            </div>
            <div className="py-2 text-[16px] text-[#FFFFFF] font-[400] leading-[118%] hover:text-[#E37617] cursor-pointer transition-colors">
              세무 관리
            </div>

            <div
              style={pseudoElementStyle2}
              className="absolute inset-0 z-10 rounded-[12px]"
            />
          </div>
        )}
        <Image
          src="/images/AI_Section1_BG_Circles.png"
          alt="section1"
          width={1023}
          height={871}
          className="w-[1023px] h-[871px] absolute bottom-0 left-1/2 -translate-x-1/2"
        />
        <Image
          src="/images/AI_Section1_BG.png"
          alt="section1"
          width={268}
          height={317}
          className="w-[268px] absolute top-[500px] left-1/2 -translate-x-1/2"
        />
        <div className="flex flex-col items-center gap-[16px] absolute top-[170px] z-[0] left-1/2 -translate-x-1/2">
          <h1 className="text-[#FFFFFF] text-[48px] font-[700] leading-[138%] text-center tracking-[-1.28px]">
            AI Chatbot
          </h1>
          <div className="text-[#FFFFFF] text-[20px] font-[400] leading-[156%] text-center tracking-[-0.4px]">
            재무 현황 파악, 세무•노무 질문 답변,
            <br /> 각종 서류 발급까지 채팅으로,
            <br /> 복잡한 재무 업무를 챗봇으로 더 편하고 신속하게
          </div>
          <div
            className={`px-6 py-3 mt-2 w-[176px] h-[48px] box-border flex gap-[4px] justify-center items-center bg-[#E37617] hover:bg-[#B65E12] rounded-[12px] transition-colors duration-300 ease-in-out`}
          >
            <div className="text-[#FFFFFF] text-[14px] font-[700] leading-[120%] tracking-[-0.168px] ">
              무료 버전 체험하기
            </div>
            <Image
              src="/images/Plus.png"
              alt="section1"
              width={16}
              height={16}
              className="size-4"
            />
          </div>
        </div>
        <div className="flex gap-[32px] justify-center absolute top-[920px] left-1/2 -translate-x-1/2">
          <Image
            src="/images/AI_Section1_Card1_Tab.png"
            alt="재무 현황 파악 요청 및 확인"
            width={208}
            height={239}
            className="w-[208px] h-[239px] z-10"
          />
          <Image
            src="/images/AI_Section1_Card2_Tab.png"
            alt="세무•노무 질문"
            width={208}
            height={239}
            className="w-[208px] h-[239px] z-10"
          />
          <Image
            src="/images/AI_Section1_Card3_Tab.png"
            alt="각종 서류 발급"
            width={208}
            height={239}
            className="w-[208px] h-[239px] z-10"
          />
        </div>
      </section>

      {/* Desktop */}
      <section
        className="w-full hidden xl:block box-border bg-[#1F1F1F] bg-[url('/images/AI_BG_Stars.png')] h-[1015px] bg-cover pt-[30px] relative"
        onClick={handleDocumentClick} // 전체 영역 클릭 시 메뉴 닫기
      >
        <div
          style={gradientBorderStyle}
          className="w-full max-w-[527px] box-border h-[64px] mx-auto border-[1px] border-[#FFFFFF10] border-solid rounded-[30px]"
        >
          <div
            style={pseudoElementStyle}
            className="absolute inset-0 -z-10 rounded-[30px]"
          />

          <div
            className="
          bg-[#1F1F1FCC] 
          rounded-[30px] 
          shadow-[0_4px_30px_0_rgba(0,0,0,0.2)] 
          px-6 
          flex 
          items-center 
          justify-between 
          w-full 
          h-full
          relative
          z-100
        "
          >
            <Image
              src="/images/logo.png"
              alt="logo"
              width={110}
              height={30}
              className="w-[110px] h-[30px]"
            />
            <div>
              <div className="flex items-center gap-8 py-2">
                <div className="text-[#FFFFFF] text-[16px] font-500 leading-[118%]">
                  Services
                </div>
                <div
                  onMouseLeave={handleMouseLeave}
                  onMouseEnter={handleMouseEnter}
                  onClick={handleClick} // 클릭 이벤트 추가
                  className="text-[#FFFFFF] text-[16px] font-500 leading-[118%] flex items-center gap-1 hover:text-[#E37617] cursor-pointer select-none"
                >
                  <span>Features</span>
                  <ChevronUp
                    className={`size-5 text-[#4D4E58] transition-transform duration-200`}
                  />
                </div>
                <div className="text-[#FFFFFF] text-[16px] font-500 leading-[118%]">
                  Resource
                </div>
              </div>
            </div>
          </div>
        </div>

        {shouldShowMenu && (
          <div
            className="py-4 px-6 bg-[#1F1F1F] 
            rounded-[12px] 
            shadow-[0_4px_30px_0_rgba(0,0,0,0.2)] 
            flex 
            flex-col 
            gap-2
            relative
            w-[246px]
            mt-[13px]
            mx-auto
            translate-x-[180px]
            z-10"
            onClick={(e) => e.stopPropagation()} // 메뉴 클릭 시 이벤트 버블링 방지
          >
            <div className="py-2 text-[16px] text-[#FFFFFF] font-[400] leading-[118%] hover:text-[#E37617] cursor-pointer transition-colors">
              AI Chatbot
            </div>
            <div className="py-2 text-[16px] text-[#FFFFFF] font-[400] leading-[118%] hover:text-[#E37617] cursor-pointer transition-colors">
              사업 현황 보고서
            </div>
            <div className="py-2 text-[16px] text-[#FFFFFF] font-[400] leading-[118%] hover:text-[#E37617] cursor-pointer transition-colors">
              매출.매입 관리
            </div>
            <div className="py-2 text-[16px] text-[#FFFFFF] font-[400] leading-[118%] hover:text-[#E37617] cursor-pointer transition-colors">
              인사/급여 관리
            </div>
            <div className="py-2 text-[16px] text-[#FFFFFF] font-[400] leading-[118%] hover:text-[#E37617] cursor-pointer transition-colors">
              세무 관리
            </div>

            <div
              style={pseudoElementStyle2}
              className="absolute inset-0 z-10 rounded-[12px]"
            />
          </div>
        )}
        <Image
          src="/images/AI_Section1_BG_Circles.png"
          alt="section1"
          width={1026}
          height={827}
          className="w-[1026px] h-[827px] absolute bottom-0 left-1/2 -translate-x-1/2"
        />
        <Image
          src="/images/AI_Section1_BG.png"
          alt="section1"
          width={318}
          height={376}
          className="w-[318px] absolute top-[500px] left-1/2 -translate-x-1/2"
        />
        <div className="flex flex-col items-center gap-[24px] absolute top-[169px] z-[0] left-1/2 -translate-x-1/2">
          <h1 className="text-[#FFFFFF] text-[64px] font-[700] leading-[138%] text-center tracking-[-1.28px]">
            AI Chatbot
          </h1>
          <div className="text-[#FFFFFF] text-[20px] font-[400] leading-[156%] text-center tracking-[-0.4px]">
            재무 현황 파악, 세무•노무 질문 답변, 각종 서류 발급까지 채팅으로,
            <br />
            복잡한 재무 업무를 챗봇으로 더 편하고 신속하게
          </div>
          <div
            className={`px-6 py-3 w-[176px] h-[48px] box-border flex gap-[4px] justify-center items-center bg-[#E37617] hover:bg-[#B65E12] rounded-[12px] transition-colors duration-300 ease-in-out`}
          >
            <div className="text-[#FFFFFF] text-[14px] font-[700] leading-[120%] tracking-[-0.168px] ">
              무료 버전 체험하기
            </div>
            <Image
              src="/images/Plus.png"
              alt="section1"
              width={16}
              height={16}
              className="size-4"
            />
          </div>
        </div>
        <div className="flex gap-[32px] justify-center absolute top-[936px] left-1/2 -translate-x-1/2">
          <Image
            src="/images/AI_Section1_Card1.png"
            alt="재무 현황 파악 요청 및 확인"
            width={353}
            height={243}
            className="w-[353px] h-[243px] z-10"
          />
          <Image
            src="/images/AI_Section1_Card2.png"
            alt="세무•노무 질문"
            width={353}
            height={243}
            className="w-[353px] h-[243px] z-10"
          />
          <Image
            src="/images/AI_Section1_Card3.png"
            alt="각종 서류 발급"
            width={353}
            height={243}
            className="w-[353px] h-[243px] z-10"
          />
        </div>
      </section>
    </>
  );
}
