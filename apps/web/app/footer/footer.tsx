import Image from "next/image";

export default function Footer() {
  const gradientTextStyle = {
    background:
      "radial-gradient(ellipse 400px 190px at center 45%, #F4C8A2 0%, #F4C8A2 75%, #2F2F2F 90%)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
  };
  const gradientTextStyleForTablet = {
    background:
      "radial-gradient(ellipse 400px 190px at center 45%, #F4C8A2 0%, #F4C8A2 75%, #2F2F2F 90%)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
  };
  const gradientTextStyleForMobile = {
    background:
      "radial-gradient(ellipse 150px 80px at center 45%, #F4C8A2 0%, #F4C8A2 75%, #2F2F2F 90%)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
  };
  return (
    <>
      {/* Mobile */}
      <div className="md:hidden w-full bg-[#2F2F2F] box-border pt-[64px] pb-[15px]">
        <div
          className="text-center text-[24px] font-[700] leading-[148%] tracking-[-0.48px]"
          style={gradientTextStyleForMobile}
        >
          전자세금계산서 발행
          <br /> 무제한, 알프레드 가입하고
          <br /> 무료로 사용하세요.
        </div>
        <div className="mt-[40px] mx-auto px-6 py-3 w-[176px] h-[48px] box-border bg-[#2F2F2F] flex gap-[4px] justify-center items-center bg-[#E37617] rounded-[12px]">
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
        <div className="mt-[14px] mx-auto text-white text-[14px] font-[500] leading-[156%] w-[308px] text-center">
          ※ 무료 버전에서는 세금계산서 발급,
          <br /> 매출•매입 현황 보고서, 세금 조회 및 납부 등<br /> 일부 기능을
          체험하실 수 있습니다.
        </div>
        <div className="flex flex-col items-center w-full gap-[23px] mt-[64px] mb-[90px]">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={194}
            height={56}
            className="w-[194px] h-[56px]"
          ></Image>
          <div className="text-[#FFFFFF] text-[20px] font-[400] leading-[156%] tracking-[-0.4px] text-center">
            사업자를 재무에서 자유롭게
            <br />
            AI 재무 비서 알프레드
          </div>
        </div>
        <div className="w-full px-[16px]">
          <div className="flex border-b-[1px] pb-[32px] border-[#8D8D8D]">
            <div className="flex flex-col gap-[8px] flex-1">
              <div className="text-[14px] text-center font-[500] leading-[156%] text-[#8D8D8D]">
                서비스
              </div>
              <div className="py-2 mt-2 text-center text-[16px] text-white font-[500] leading-[118%]">
                알프레드
              </div>
              <div className="text-[14px] mt-[25px] text-center font-[500] leading-[156%] text-[#8D8D8D]">
                주요 기능
              </div>
              <div className="py-2 mt-2 text-center text-[16px] text-white font-[500] leading-[118%]">
                사업 현황 보고서
              </div>
              <div className="py-2 text-center text-[16px] text-white font-[500] leading-[118%]">
                매출•매입 관리
              </div>
              <div className="py-2 text-center text-[16px] text-white font-[500] leading-[118%]">
                세무 관리
              </div>
              <div className="py-2 text-center text-[16px] text-white font-[500] leading-[118%]">
                인사•급여 관리
              </div>
              <div className="py-2 text-center text-[16px] text-white font-[500] leading-[118%]">
                AI Chatbot
              </div>
            </div>
            <div className="flex flex-col gap-[8px] flex-1">
              <div className="text-[14px] text-center font-[500] leading-[156%] text-[#8D8D8D]">
                리소스
              </div>
              <div className="py-2 mt-2 text-center text-[16px] text-white font-[500] leading-[118%]">
                Tech
              </div>
              <div className="py-2 text-center text-[16px] text-white font-[500] leading-[118%]">
                Culture
              </div>
              <div className="py-2 text-center text-[16px] text-white font-[500] leading-[118%]">
                채용
              </div>
              <div className="py-2 text-center text-[16px] text-white font-[500] leading-[118%]">
                FAQ
              </div>
            </div>
          </div>
        </div>

        <div className="w-full pt-[16px] text-[#8D8D8D] text-[14px] font-[500] leading-[156%] text-center">
          © 2025 alfred.kr. All rights reserved.
        </div>
        <div className="w-full pt-[32px] pb-[16px] text-[#8D8D8D] text-[14px] font-[500] leading-[156%] text-center">
          상호명 주식회사 혜움 | 대표 옥형석 <br /> 연락 : team-hr@heaumlabs.io<br /> 사업자등록번호 : 807-81-00564 <br /> 주소 : 강남구 테헤란로 86길 13(2F ~ 7F)
        </div>
      </div>

      {/* Tablet */}
      <div className="hidden md:block xl:hidden w-full bg-[#2F2F2F] box-border pt-[112px] pb-[18px]">
        <div
          className="text-center text-[64px] font-[700] leading-[138%] tracking-[-1.28px]"
          style={gradientTextStyleForTablet}
        >
          전자세금계산서 발행
          <br /> 무제한, 알프레드 가입하고
          <br /> 무료로 사용하세요.
        </div>
        <div className="mt-[40px] mx-auto px-6 py-3 w-[176px] h-[48px] box-border bg-[#2F2F2F] flex gap-[4px] justify-center items-center bg-[#E37617] rounded-[12px]">
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
        <div className="mt-[16px] mx-auto text-white text-[14px] font-[500] leading-[156%] w-[350px] text-center">
          ※ 무료 버전에서는 세금계산서 발급, 매출•매입 현황 보고서,
          <br /> 세금 조회 및 납부 등 일부 기능을 체험하실 수 있습니다.
        </div>
        <div className="mt-[107px] mx-[34px] flex justify-between pb-[65px] border-b-[1px] border-[#8D8D8D]">
          <div className="flex flex-col gap-[23px]">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={249}
              height={68}
              className="w-[249px] h-[67.5px]"
            ></Image>
            <div className="text-[#FFFFFF] text-[24px] font-[500] leading-[148%] tracking-[-0.48px]">
              사업자를 재무에서 자유롭게
              <br />
              AI 재무 비서 알프레드
            </div>
          </div>
          <div className="flex gap-[64px]">
            <div className="flex flex-col gap-4">
              <div className="text-[14px] font-[500] leading-[156%] text-[#8D8D8D]">
                서비스
              </div>
              <div className="py-2 text-white font-[500] leading-[118%]">
                알프레드
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-[14px] font-[500] leading-[156%] text-[#8D8D8D]">
                주요 기능
              </div>
              <div className="py-2 text-white font-[500] leading-[118%]">
                사업 현황 보고서
              </div>
              <div className="py-2 text-white font-[500] leading-[118%]">
                매출•매입 관리
              </div>
              <div className="py-2 text-white font-[500] leading-[118%]">
                세무 관리
              </div>
              <div className="py-2 text-white font-[500] leading-[118%]">
                인사•급여 관리
              </div>
              <div className="py-2 text-white font-[500] leading-[118%]">
                AI Chatbot
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-[14px] font-[500] leading-[156%] text-[#8D8D8D]">
                리소스
              </div>
              <div className="py-2 text-white font-[500] leading-[118%]">
                Tech
              </div>
              <div className="py-2 text-white font-[500] leading-[118%]">
                Culture
              </div>
              <div className="py-2 text-white font-[500] leading-[118%]">
                채용
              </div>
              <div className="py-2 text-white font-[500] leading-[118%]">
                FAQ
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-[14px] px-[34px]">
          <div className="text-[14px] font-[500] leading-[156%] text-[#8D8D8D]">
            © 2025 alfred.kr. All rights reserved.
          </div>
          <div className="text-[14px] font-[500] leading-[156%] text-[#8D8D8D]">
            상호명 주식회사 혜움 | 대표 옥형석
            <br />
            연락 : team-hr@heaumlabs.io
            <br />
            사업자등록번호 : 807-81-00564
            <br />
            주소 : 강남구 테헤란로 86길 13(2F ~ 7F)
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="w-full hidden xl:block bg-[#2F2F2F] pt-[100px]">
        <div
          className="text-center text-[64px] font-[700] leading-[138%] tracking-[-1.28px]"
          style={gradientTextStyle}
        >
          전자세금계산서 발행
          <br /> 무제한, 알프레드 가입하고
          <br /> 무료로 사용하세요.
        </div>
        <div className="mt-[52px] mx-auto px-6 py-3 w-[176px] h-[48px] box-border bg-[#2F2F2F] flex gap-[4px] justify-center items-center bg-[#E37617] rounded-[12px]">
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
        <div className="mt-[16px] mx-auto text-white text-[14px] font-[500] leading-[156%] w-[350px] text-center">
          ※ 무료 버전에서는 세금계산서 발급, 매출•매입 현황 보고서,
          <br /> 세금 조회 및 납부 등 일부 기능을 체험하실 수 있습니다.
        </div>
        <div className="mt-[107px] mx-[159px] flex justify-between pb-[65px] border-b-[1px] border-[#8D8D8D]">
          <div className="flex flex-col gap-[23px]">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={249}
              height={68}
              className="w-[249px] h-[67.5px]"
            ></Image>
            <div className="text-[#FFFFFF] text-[24px] font-[500] leading-[148%] tracking-[-0.48px]">
              사업자를 재무에서 자유롭게
              <br />
              AI 재무 비서 알프레드
            </div>
          </div>
          <div className="flex gap-[64px]">
            <div className="flex flex-col gap-4">
              <div className="text-[14px] font-[500] leading-[156%] text-[#8D8D8D]">
                서비스
              </div>
              <div className="py-2 text-white font-[500] leading-[118%]">
                알프레드
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-[14px] font-[500] leading-[156%] text-[#8D8D8D]">
                주요 기능
              </div>
              <div className="py-2 text-white font-[500] leading-[118%]">
                사업 현황 보고서
              </div>
              <div className="py-2 text-white font-[500] leading-[118%]">
                매출•매입 관리
              </div>
              <div className="py-2 text-white font-[500] leading-[118%]">
                세무 관리
              </div>
              <div className="py-2 text-white font-[500] leading-[118%]">
                인사•급여 관리
              </div>
              <div className="py-2 text-white font-[500] leading-[118%]">
                AI Chatbot
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-[14px] font-[500] leading-[156%] text-[#8D8D8D]">
                리소스
              </div>
              <div className="py-2 text-white font-[500] leading-[118%]">
                Tech
              </div>
              <div className="py-2 text-white font-[500] leading-[118%]">
                Culture
              </div>
              <div className="py-2 text-white font-[500] leading-[118%]">
                채용
              </div>
              <div className="py-2 text-white font-[500] leading-[118%]">
                FAQ
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-[14px] px-[159px] pb-[64px]">
          <div className="text-[14px] font-[500] leading-[156%] text-[#8D8D8D]">
            © 2025 alfred.kr. All rights reserved.
          </div>
          <div className="text-[14px] font-[500] leading-[156%] text-[#8D8D8D]">
            상호명 주식회사 혜움 | 대표 옥형석
            <br />
            연락 : team-hr@heaumlabs.io
            <br />
            사업자등록번호 : 807-81-00564
            <br />
            주소 : 강남구 테헤란로 86길 13(2F ~ 7F)
          </div>
        </div>
      </div>
    </>
  );
}
