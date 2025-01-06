import Image from "next/image";
import * as S from "./StyledHeader";
import logoCalpar from "@/assets/images/logoCalpar.png";

export default function Header() {
  return (
    <S.HeaderContainer>
      <S.Logo>
        <Image src={logoCalpar} alt="Logo" width={150} height={150} />
      </S.Logo>
      <S.TitlePage>Listagem de usuários</S.TitlePage>
    </S.HeaderContainer>
  );
}
