"use client";
import React, { useState } from "react";
import { useMainInfo } from "@/features/hooks/useMainInfo";
import { MainImage } from "@/features/main/components/MainImage";
import { AboutSection } from "@/features/main/components/AboutSection";
import {LoadingSpinner} from '@/shared/components/ui/LoadingSpinner';

// 메인화면
const Main = () => {
  const [showText, setShowText ] = useState(false); // 최초 진입 시 텍스트 노출/비노출
  const { data: mainInfo, isLoading, error } = useMainInfo(); // 메인화면 데이터 조회
    if (isLoading) return <LoadingSpinner src="/images/img/main/logo.png" />;

  return (
    <div>
      <MainImage
        mainImgUrl={mainInfo?.mainImgUrl}
      />
      <AboutSection
        showText={showText}
      />
    </div>
  );
};

export default Main;