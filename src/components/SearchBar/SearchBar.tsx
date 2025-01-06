'use client'

import { useState } from 'react';

import * as S from "./StyledSearchBar";

import { ClientData, StatusFilter } from '@/app/types/types';
import { jsPDF } from "jspdf";
import "jspdf-autotable";

import { FaFileDownload } from "react-icons/fa";


interface SearchBarProps {
  data: ClientData[];
  onSearch: (searchTerm: string, status: StatusFilter) => void;
}

export default function SearchBar({ onSearch, data }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>(StatusFilter.ALL);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm, statusFilter);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatusFilter(e.target.value as StatusFilter);
  };

  const handleDownload = () => {
    const doc = new jsPDF();

    doc.text("Tabela de Clientes", 10, 10);

    const tableHeaders = ["Nome", "Status"];

    const sortedData = [...data].sort((a, b) => (b.Disponivel ? 1 : 0) - (a.Disponivel ? 1 : 0));

    const tableData = sortedData.map(client => [
      client.Nome,
      client.Disponivel ? "Disponível" : "Indisponível"
    ]);

    doc.autoTable({
      head: [tableHeaders],
      body: tableData,
      startY: 20,
    });

    doc.save("tabela_clientes.pdf");
  };


  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <S.MainContainer>
        <S.InputContainer>
          <S.SearchBar
            type="text"
            name="search"
            disabled={data.length == 0}
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Buscar por nome..."
          />
          <S.DownloadButton
            type="button"
            onClick={handleDownload}
            disabled={data.length == 0}
          >
            <FaFileDownload color={data.length === 0 ? 'gray' : 'black'} />
          </S.DownloadButton>

        </S.InputContainer>
        <S.ButtonContainer>
          <S.FilterSelect
            disabled={data.length == 0}
            value={statusFilter}
            onChange={handleStatusChange}
          >
            <option value={StatusFilter.ALL}>Todos</option>
            <option value={StatusFilter.ACTIVE}>Ativos</option>
            <option value={StatusFilter.INACTIVE}>Inativos</option>
          </S.FilterSelect>
          <S.SearchButton type="submit">
            Buscar
          </S.SearchButton>
        </S.ButtonContainer>
      </S.MainContainer>
    </form>
  );
}
