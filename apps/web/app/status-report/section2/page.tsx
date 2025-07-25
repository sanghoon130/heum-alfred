'use client'
import Image from "next/image"
import { useState, useEffect } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@workspace/ui/components/carousel";

export default function Section2() {
  const [reportIndex, setReportIndex] = useState(0)
  const [api, setApi] = useState<CarouselApi | null>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setReportIndex((prev) => (prev + 1) % 3)
    }, 3000)
    return () => clearInterval(timer)
  }, [])
  useEffect(() => {
    if (!api) return

    // reportIndex가 변경될 때마다 carousel을 해당 인덱스로 이동
    api.scrollTo(reportIndex)
  }, [api, reportIndex])

  const images = [
    "/images/Section2_BG1.png",
    "/images/Section2_BG2.png", 
    "/images/Section2_BG3.png"
  ]

  return (
    <>
    {/* Mobile */}
     <section className="w-full pt-[64px] md:hidden"> 
        <h2 className="text-[#2F2F2F] text-center text-[24px] font-[700] leading-[148%] tracking-[-0.48px]">지출 내역을 분석해<br />비용 절감을 도와 드려요</h2>
        <div className="w-[308px] h-[176px] mt-[32px] relative mx-auto">
        {images.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`graph ${index + 1}`}
            width={308}
            height={176}
            className={`w-[308px] h-[176px] mx-auto absolute top-0 left-0 transition-opacity duration-500 ease-in-out ${reportIndex === index ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
        </div>

        <Carousel className="mt-[60px] pl-[21px] mb-[57px]" setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }} >
          <CarouselContent>
            <CarouselItem className="w-[240px] basis-[240px] mr-[24px]">
            <div className="flex flex-col w-[240px] flex-shrink-0 gap-[16px] items-start">
              <div className={`h-[4px] w-full bg-[#E37617] rounded-[12px] transition-colors duration-500 ease-in-out ${reportIndex === 0 ? 'bg-[#E37617]' : 'bg-[#EEAD74]'}`}></div>
              <h3 className={`text-[20px] font-[700] leading-[156%] tracking-[-0.4px] transition-colors duration-500 ease-in-out ${reportIndex === 0 ? 'text-[#2F2F2F]' : 'text-[#6D6D6D]'}`}>매출•매입 현황 보고서</h3>
              <div className={`text-[#6D6D6D] text-[16px] font-[400] leading-[156%] tracking-[-0.32px]`}>기간별, 결제 수단별 매출•매입 추이 그래프, 월별 예상 손익 추이와 전년도 비교 그래프를 통해예상 손익, 예상 입금액 등 현금 흐름을 예측하고 준비할 수 있어요.</div>
            </div>
            </CarouselItem>
            <CarouselItem className="w-[240px] basis-[240px] mr-[24px]">
            <div className="flex flex-col w-[240px] flex-shrink-0 gap-[16px] items-start">
              <div className={`h-[4px] w-full bg-[#E37617] rounded-[12px] transition-colors duration-500 ease-in-out ${reportIndex === 1 ? 'bg-[#E37617]' : 'bg-[#EEAD74]'}`}></div>
              <h3 className={`text-[20px] font-[700] leading-[156%] tracking-[-0.4px] transition-colors duration-500 ease-in-out ${reportIndex === 1 ? 'text-[#2F2F2F]' : 'text-[#6D6D6D]'}`}>비용 분석 보고서</h3>
              <div className={`text-[#6D6D6D] text-[16px] font-[400] leading-[156%] tracking-[-0.32px]`}>인건비 대비 복리후생비용은 적절한지, 판매관리비 세부 내역은 어떤지 등비용 현황을 파악해서 비용 절감을 위한 인사이트를 얻을 수 있어요.</div>
            </div>
            </CarouselItem>
            <CarouselItem className="w-[240px] basis-[240px] mr-[24px]">
            <div className="flex flex-col w-[240px] flex-shrink-0 gap-[16px] items-start">
              <div className={`h-[4px] w-full bg-[#E37617] rounded-[12px] transition-colors duration-500 ease-in-out ${reportIndex === 2 ? 'bg-[#E37617]' : 'bg-[#EEAD74]'}`}></div>
              <h3 className={`text-[20px] font-[700] leading-[156%] tracking-[-0.4px] transition-colors duration-500 ease-in-out ${reportIndex === 2 ? 'text-[#2F2F2F]' : 'text-[#6D6D6D]'}`}>인건비 현황 보고서</h3>
              <div className={`text-[#6D6D6D] text-[16px] font-[400] leading-[156%] tracking-[-0.32px]`}>고용형태별 인건비현황 및 재직자 추이 등을 통해 인건비 지출 현황을 쉽게 확인해요. 채용, 연봉협상 등 인건비 관련 의사결정에 참고할 수 있어요.</div>
            </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </section>



      
      {/* Tablet */}
      <section className="hidden md:block xl:hidden w-full pt-[104px]">
        <h2 className="text-[#2F2F2F] text-[40px] text-center font-[700] leading-[138%] tracking-[-0.8px]">
          지출 내역을 분석해 <br/>비용 절감을 도와드려요
        </h2>
        <div className="w-[720px] h-[415px] relative mx-auto mt-[56px] mb-[40px]">
          {images.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`graph ${index + 1}`}
            width={720}
            height={415}
            className={`w-[720px] h-[415px] mx-auto absolute top-0 left-0 transition-opacity duration-500 ease-in-out ${reportIndex === index ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
        </div>
        <div className="flex justify-center gap-[24px] mb-[56px] mx-auto">
          <div className="flex flex-col w-[224px] gap-[16px] items-start">
            <div className={`h-[4px] w-full bg-[#E37617] rounded-[12px] transition-colors duration-500 ease-in-out ${reportIndex === 0 ? 'bg-[#E37617]' : 'bg-[#EEAD74]'}`}></div>
            <h3 className={`text-[20px] font-[700] leading-[156%] tracking-[-0.4px] transition-colors duration-500 ease-in-out ${reportIndex === 0 ? 'text-[#2F2F2F]' : 'text-[#6D6D6D]'}`}>매출•매입 현황 보고서</h3>
            <div className={`text-[#6D6D6D] text-[16px] font-[400] leading-[156%] tracking-[-0.32px]`}>기간별, 결제 수단별 매출•매입 추이 그래프, 월별 예상 손익 추이와 전년도 비교 그래프를 통해예상 손익, 예상 입금액 등 현금 흐름을 예측하고 준비할 수 있어요.</div>
          </div>
          <div className="flex flex-col w-[224px] gap-[16px] items-start">
            <div className={`h-[4px] w-full bg-[#E37617] rounded-[12px] transition-colors duration-500 ease-in-out ${reportIndex === 1 ? 'bg-[#E37617]' : 'bg-[#EEAD74]'}`}></div>
            <h3 className={`text-[20px] font-[700] leading-[156%] tracking-[-0.4px] transition-colors duration-500 ease-in-out ${reportIndex === 1 ? 'text-[#2F2F2F]' : 'text-[#6D6D6D]'}`}>비용 분석 보고서</h3>
            <div className={`text-[#6D6D6D] text-[16px] font-[400] leading-[156%] tracking-[-0.32px]`}>인건비 대비 복리후생비용은 적절한지, 판매관리비 세부 내역은 어떤지 등비용 현황을 파악해서 비용 절감을 위한 인사이트를 얻을 수 있어요.</div>
          </div>
          <div className="flex flex-col w-[224px] gap-[16px] items-start">
            <div className={`h-[4px] w-full bg-[#E37617] rounded-[12px] transition-colors duration-500 ease-in-out ${reportIndex === 2 ? 'bg-[#E37617]' : 'bg-[#EEAD74]'}`}></div>
            <h3 className={`text-[20px] font-[700] leading-[156%] tracking-[-0.4px] transition-colors duration-500 ease-in-out ${reportIndex === 2 ? 'text-[#2F2F2F]' : 'text-[#6D6D6D]'}`}>인건비 현황 보고서</h3>
            <div className={`text-[#6D6D6D] text-[16px] font-[400] leading-[156%] tracking-[-0.32px]`}>고용형태별 인건비현황 및 재직자 추이 등을 통해 인건비 지출 현황을 쉽게 확인해요. 채용, 연봉협상 등 인건비 관련 의사결정에 참고할 수 있어요.</div>
          </div>
        </div>
      </section>

      {/* Desktop */}
      <section className="w-full hidden xl:block box-border pt-[120px] pb-[60px] relative">
        <h2 className="text-[#2F2F2F] text-[48px] text-center font-[700] leading-[138%] tracking-[-0.96px]">
        지출 내역을 분석해 <br/>비용 절감을 도와드려요
      </h2>
      <div className="mt-[60px] flex gap-[32px] justify-center items-center">
        <div className="flex flex-col items-start gap-[40px]">
          <div className="flex items-stretch gap-[24px]">
            <div className={`w-[4px] ${reportIndex === 0 ? 'bg-[#E37617]' : 'bg-[#EEAD74]'} rounded-[12px] transition-colors duration-500 ease-in-out`}></div>
            <div className="flex flex-col items-start gap-[24px] w-[327px]">
              <h3 className="text-[#2F2F2F] text-[24px] font-[500] leading-[148%] tracking-[-0.48px]">
                매출•매입 현황 보고서
              </h3>
              {reportIndex === 0 && (
                <div className="text-[#6D6D6D] text-[16px] font-[400] leading-[156%] tracking-[-0.32px]">
                  기간별, 결제 수단별 매출•매입 추이 그래프, 월별 예상 손익 추이와 전년도 비교 그래프를 통해예상 손익, 예상 입금액 등 현금 흐름을 예측하고 준비할 수 있어요.
                </div>
              )}
            </div>
          </div>
          <div className="flex items-stretch gap-[24px]">
            <div className={`w-[4px] ${reportIndex === 1 ? 'bg-[#E37617]' : 'bg-[#EEAD74]'} rounded-[12px] transition-colors duration-500 ease-in-out`}></div>
            <div className="flex flex-col items-start gap-[24px] w-[327px]">
              <h3 className="text-[#2F2F2F] text-[24px] font-[500] leading-[148%] tracking-[-0.48px]">
                비용 분석 보고서
              </h3>
              {reportIndex === 1 && (
                <div className="text-[#6D6D6D] text-[16px] font-[400] leading-[156%] tracking-[-0.32px]">
                  인건비 대비 복리후생비용은 적절한지, 판매관리비 세부 내역은 어떤지 등비용 현황을 파악해서 비용 절감을 위한 인사이트를 얻을 수 있어요.
                </div>
              )}
            </div>
          </div>
          <div className="flex items-stretch gap-[24px]">
            <div className={`w-[4px] ${reportIndex === 2 ? 'bg-[#E37617]' : 'bg-[#EEAD74]'} rounded-[12px] transition-all duration-500 ease-in-out`}></div>
            <div className="flex flex-col items-start gap-[24px] w-[327px]">
              <h3 className="text-[#2F2F2F] text-[24px] font-[500] leading-[148%] tracking-[-0.48px]">
                인건비 현황 보고서
              </h3>
              {reportIndex === 2 && (
                <div className="text-[#6D6D6D] text-[16px] font-[400] leading-[156%] tracking-[-0.32px]">
                  고용형태별 인건비현황 및 재직자 추이 등을 통해 인건비 지출 현황을 쉽게 확인해요. 채용, 연봉협상 등 인건비 관련 의사결정에 참고할 수 있어요
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="relative w-[736px] h-[415px]">
          {images.map((src, index) => (
            <Image 
              key={index}
              src={src} 
              alt={`graph ${index + 1}`}
              width={736} 
              height={415} 
              className={`absolute top-0 left-0 w-[736px] h-[415px] transition-opacity duration-500 ease-in-out ${
                reportIndex === index ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
    </>
  )
}