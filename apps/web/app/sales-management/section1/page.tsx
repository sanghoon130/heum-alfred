"use client";
import Image from "next/image";
import { ChevronUp, Plus, PlusIcon } from "lucide-react";
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
    zIndex: -1,
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

  const containerStyle = {
    "--container-height": "calc(55.49vw * (619 / 799) + 164px + 67px)",
    "--max-container-height": "calc(900px * (619 / 799) + 164px + 67px)",
    height: "var(--container-height)",
    maxHeight: "var(--max-container-height)",
  } as React.CSSProperties;

  const textPositionStyle = {
    top: "calc(min(var(--container-height), var(--max-container-height)) * 0.384)",
    right: "calc(55.49% + 34px)",
  } as React.CSSProperties;

  return (
    <>
      {/* Mobile */}
         <section className="md:hidden w-full box-border bg-[#2F2F2F] pt-[24px] relative h-auto">
         <div 
             style={gradientBorderStyle}
             className="w-[307px] box-border h-[64px] mx-auto border-[1px] border-[#FFFFFF10] border-solid rounded-[30px]" 
           >
             <div 
               style={pseudoElementStyle2}
               className="absolute inset-0 -z-10 rounded-[30px]"
             />
             
             <div className="
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
             ">
               <Image src="/images/logo.png" alt="logo" width={110} height={30} className="w-[110px] h-[30px]"/>
               <Image src="/images/mobile-nav.png" alt="mobile-nav" width={36} height={36} className="w-[36px] h-[36px]" onClick={handleClick}/>
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
                 <div className="py-2 text-[16px] text-[#FFFFFF] font-[500] leading-[118%] cursor-pointer transition-colors">Company</div>
                 <div className="py-2 text-[16px] text-[#FFFFFF] font-[500] leading-[118%] cursor-pointer transition-colors">Servicies</div>
                 <div className="pl-4 flex flex-col gap-2 mt-[10px]">
                   <div className="py-2 text-[16px] text-[#FFFFFF] font-[400] leading-[118%] cursor-pointer transition-colors">매출/매입 현황 보고서</div>
                   <div className="py-2 text-[16px] text-[#FFFFFF] font-[400] leading-[118%] cursor-pointer transition-colors">세무 관리</div>
                   <div className="py-2 text-[16px] text-[#FFFFFF] font-[400] leading-[118%] cursor-pointer transition-colors">AI Chatbot</div>
                   <div className="py-2 text-[16px] text-[#FFFFFF] font-[400] leading-[118%] cursor-pointer transition-colors">재무 현황 보고서</div>
                   <div className="py-2 text-[16px] text-[#FFFFFF] font-[400] leading-[118%] cursor-pointer transition-colors">인사/급여 관리</div>
     
                 </div>
                 <div className="py-2 text-[16px] text-[#FFFFFF] font-[500] leading-[118%] cursor-pointer transition-colors">Features</div>
                 <div className="py-2 text-[16px] text-[#FFFFFF] font-[500] leading-[118%] cursor-pointer transition-colors">Resource</div>
     
                 <div 
                   style={pseudoElementStyle2}
                   className="absolute inset-0 -z-10 rounded-[12px]"
                 />
               </div>
             )}
           </div>
           <div className="box-border mx-auto w-[307px] mt-[62px] flex flex-col items-center gap-[16px]">
             <div className="text-[#FFFFFF] text-[16px] font-normal font-500 leading-[118%] h-[35px] box-border">
               <div className="p-[1px] h-[35px] box-border rounded-[100px]" style={{
                     background: 'linear-gradient(90deg, #E37617 0%, #138FA8 100%)',
                     padding: '1px',
                   }}>
                 <div className="px-[19px] py-[7px] z-0 bg-[#2F2F2F] rounded-[100px] font-[400] h-full leading-[118%]">AI 재무 비서 알프레드</div>
               </div>
             </div>
             <h1 className="text-[#FFFFFF] text-[32px] font-[700] leading-[138%] tracking-[-0.64spx]">매출•매입 관리</h1>
             <div className="text-[#FFFFFF] text-center text-[20px] font-[400] leading-[156%] tracking-[-0.4px]">카드, PG, 온라인 등 실시간 매출, 매입 보고부터, 은행별 계좌 입출금 내역 보고까지 한 눈에</div>
             <div className={`mt-2 px-6 py-3 w-[176px] h-[48px] box-border flex gap-[4px] justify-center items-center bg-[#138FA8] hover:bg-[#0F7286] rounded-[12px] transition-colors duration-300 ease-in-out`}>
               <div className="text-[#FFFFFF] text-[14px] font-[700] leading-[120%] tracking-[-0.168px] ">무료 버전 체험하기</div>
               <Image src="/images/Plus.png" alt="section1" width={16} height={16} className="size-4" />
             </div>
           </div>
           <Image src="/images/SALMAN_Section1_BG.png" alt="section1" width={319} height={292} className="w-full pl-[21px] pb-[26px] aspect-[319/292] box-border mt-[56px]"/>
     
         </section>
      {/* Tablet */}
      <section
        className="hidden md:block xl:hidden w-full box-border bg-[#2F2F2F] pt-[30px] h-[1024px] relative"
        onClick={handleDocumentClick}
      >
        <div
          style={gradientBorderStyle}
          className="w-[575px] box-border h-[64px] mx-auto border-[1px] border-[#FFFFFF10] border-solid rounded-[30px]"
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
              w-[575px] 
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
                  mx-auto
                  translate-x-[180px]
                  z-0"
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
                className="absolute inset-0 -z-10 rounded-[12px]"
              />
            </div>
          )}
        </div>
        <div className="w-[448px] box-border mx-auto mt-[122px] flex flex-col items-center gap-[16px]">
          <div className="text-[#FFFFFF] text-[16px] font-normal font-500 leading-[118%] h-[35px] box-border">
            <div
              className="p-[1px] h-[35px] box-border rounded-[100px]"
              style={{
                background: "linear-gradient(90deg, #E37617 0%, #138FA8 100%)",
                padding: "1px",
              }}
            >
              <div className="px-[19px] py-[7px] z-0 bg-[#2F2F2F] rounded-[100px] font-[400] h-full leading-[118%]">
                AI 재무 비서 알프레드
              </div>
            </div>
          </div>
          <h1 className="text-[#FFFFFF] text-[48px] font-[700] leading-[138%] text-center tracking-[-0.96px]">
            매출•매입 관리
          </h1>
          <div className="text-[#FFFFFF] text-[20px] font-[400] leading-[156%] text-center tracking-[-0.4px]">
            카드, PG, 온라인 등 실시간 매출, 매입 보고부터,
            <br />
            은행별 계좌 입출금 내역 보고까지 한 눈에
          </div>
          <div
            className={`mt-2 px-6 py-3 w-[176px] h-[48px] box-border flex gap-[4px] justify-center items-center bg-[#138FA8] hover:bg-[#0F7286] rounded-[12px] transition-colors duration-300 ease-in-out`}
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
        <Image
          src="/images/SALMAN_Section1_BG_Tab.png"
          alt="section1"
          width={712}
          height={433}
          className="w-[712px] h-[433px] absolute bottom-0 left-1/2 -translate-x-1/2"
        />
      </section>

      {/* Desktop */}
      <section
        className="w-full hidden xl:block box-border bg-[#2F2F2F] pt-[30px] relative"
        style={containerStyle}
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

        <Image
          src="/images/SALMAN_Section1_BG.png"
          alt="section1"
          width={799}
          height={619}
          className="w-[55.49%] aspect-[799/619] max-w-[900px] top-[164px] right-[0px] absolute"
        />

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
            z-0"
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
              className="absolute inset-0 -z-10 rounded-[12px]"
            />
          </div>
        )}

        <div
          style={textPositionStyle}
          className="w-[448px] box-border absolute flex flex-col items-start gap-[24px]"
        >
          <div className="text-[#FFFFFF] text-[16px] font-normal font-500 leading-[118%] h-[35px] box-border">
            <div
              className="p-[1px] h-[35px] box-border rounded-[100px]"
              style={{
                background: "linear-gradient(90deg, #E37617 0%, #138FA8 100%)",
                padding: "1px",
              }}
            >
              <div className="px-[19px] py-[7px] z-0 bg-[#2F2F2F] rounded-[100px] h-full leading-[118%]">
                AI 재무 비서 알프레드
              </div>
            </div>
          </div>
          <h1 className="text-[#FFFFFF] text-[64px] font-[700] leading-[138%] tracking-[-1.28px]">
            매출•매입 관리
          </h1>
          <div className="text-[#FFFFFF] text-[20px] font-[400] leading-[156%] tracking-[-0.4px]">
            카드, PG, 온라인 등 실시간 매출, 매입 보고부터, 은행별 계좌 입출금
            내역 보고까지 한 눈에
          </div>
          <div
            className={`mt-8 px-6 py-3 w-[176px] h-[48px] box-border flex gap-[4px] justify-center items-center bg-[#138FA8] hover:bg-[#0F7286] rounded-[12px] transition-colors duration-300 ease-in-out`}
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
      </section>
    </>
  );
}
