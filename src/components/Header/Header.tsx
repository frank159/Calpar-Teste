import React, { useState, useEffect } from "react";
import * as S from "./StyledHeader";

import Image from "next/image";
import logoCalpar from "@/assets/images/logoCalpar.png";

export default function Header() {
  const [currentDate, setCurrentDate] = useState("");

  const formatDate = () => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("pt-BR", options);
  };

  useEffect(() => {
    setCurrentDate(formatDate());
  }, []);

  return (
    <S.HeaderContainer>
      <S.Logo>
        <Image src={logoCalpar} alt="Logo" width={150} height={150} />
      </S.Logo>
      <S.TitlePage>Listagem de usuários</S.TitlePage>
      <S.DateContainer>{currentDate}</S.DateContainer>
    </S.HeaderContainer>
  );
}
