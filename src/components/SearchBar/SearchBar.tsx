'use client'

import { useState } from 'react';
import * as S from "./StyledSearchBar";
import { ClientData, StatusFilter } from '@/app/types/types';

interface SearchBarProps {
  data: ClientData[];
  onSearch: (searchTerm: string, status: StatusFilter) => void
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
