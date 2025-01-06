import * as S from "./StyledUsersTable";
import { ClientData } from "@/app/types/types";
import { useEffect, useState } from "react";

interface TableProps {
  data: ClientData[];
  isLoading?: boolean;
}

export default function Table({ data, isLoading = false }: TableProps) {
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (isLoading) {
      setShowLoading(true);
    } else {
      timer = setTimeout(() => {
        setShowLoading(false);
      }, 1000);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isLoading]);

  const [sortConfig, setSortConfig] = useState<{
    key: "Nome" | "Disponivel" | null;
    direction: "asc" | "desc";
  }>({
    key: "Nome",
    direction: "asc",
  });

  const sortedData = [...data].sort((a, b) => {
    if (!sortConfig.key) return 0;

    if (sortConfig.key === "Nome") {
      const compareResult = a.Nome.localeCompare(b.Nome);
      return sortConfig.direction === "asc" ? compareResult : -compareResult;
    }

    if (sortConfig.key === "Disponivel") {
      const compareResult = Number(a.Disponivel) - Number(b.Disponivel);
      return sortConfig.direction === "asc" ? compareResult : -compareResult;
    }

    return 0;
  });

  const handleSort = (key: "Nome" | "Disponivel") => {
    setSortConfig({
      key,
      direction:
        sortConfig.key === key && sortConfig.direction === "asc"
          ? "desc"
          : "asc",
    });
  };

  return (
    <S.TableContainer>
      {showLoading && (
        <S.LoadingDiv>
          <S.LoadingBar />
        </S.LoadingDiv>
      )}
      <S.TableWrapper>
        <S.Table>
          <S.Thead>
            <S.Tr>
              <S.Th
                $width="70%"
                onClick={() => handleSort("Nome")}
                style={{ cursor: "pointer" }}
              >
                Nome{" "}
                {sortConfig.key === "Nome"
                  ? sortConfig.direction === "asc"
                    ? "▲"
                    : "▼"
                  : ""}
              </S.Th>
              <S.Th
                $width="30%"
                onClick={() => handleSort("Disponivel")}
                style={{ cursor: "pointer" }}
              >
                Status{" "}
                {sortConfig.key === "Disponivel"
                  ? sortConfig.direction === "asc"
                    ? "▼"
                    : "▲"
                  : ""}
              </S.Th>
            </S.Tr>
          </S.Thead>
          <S.Tbody>
            {!data || data.length === 0 ? (
              <S.Tr>
                <S.EmptyMessageTd colSpan={2}>
                  Nenhum dado encontrado.
                </S.EmptyMessageTd>
              </S.Tr>
            ) : (
              sortedData.map((item, index) => (
                <S.Tr key={index}>
                  <S.Td>{item.Nome}</S.Td>
                  <S.Td>
                    {item.Disponivel ? "Ativo" : "Desativado"}
                  </S.Td>
                </S.Tr>
              ))
            )}
          </S.Tbody>
        </S.Table>
      </S.TableWrapper>
    </S.TableContainer>
  );
}
