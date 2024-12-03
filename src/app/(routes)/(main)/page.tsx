"use client";

import React, { useState } from "react";
import { useMainInfo } from "@/features/hooks/useMainInfo";
import { MainImage } from "@/features/main/components/MainImage";
import { AboutSection } from "@/features/main/components/AboutSection";
import {LoadingSpinner} from '@/shared/components/ui/LoadingSpinner';

// 메인화면
const Main = () => {
  const { data: mainInfo, isLoading, error } = useMainInfo(); // 메인화면 데이터 조회
    
  if (isLoading) return <LoadingSpinner src="/images/img/main/logo.png" />;

  return (
    <div className="w-full h-full">
      <MainImage
        mainImgUrl={mainInfo?.mainImgUrl}
      />
      <AboutSection
        showText={true} //{showText}
      />
      </div>
  );
};

export default Main;