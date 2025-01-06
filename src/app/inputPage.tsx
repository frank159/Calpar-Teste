'use client'

import * as S from "./StyledInputPage";
import Header from "@/components/Header/Header"
import SearchField from "@/components/SearchBar/SearchBar"
import Footer from "@/components/Footer/Footer"
import UsersTable from "@/components/UsersTable/UsersTable"
import { ClientData, StatusFilter } from "@/app/types/types"
import { useState } from "react"
import MsgNotif from "@/components/MsgNotif/MsgNotif"

export default function InputPage() {
    const [filteredData, setFilteredData] = useState<ClientData[]>([])
    const [data, setData] = useState<ClientData[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    const [msg, setMsg] = useState('')
    const [isApiOn, setIsApiOn] = useState(true) // Novo estado para simular o status da API

    const fetchData = async (searchTerm: string, status: StatusFilter) => {
        try {
            setData([])
            setFilteredData([])
            setIsLoading(true)

            // Simulação de falha na API
            if (!isApiOn) {
                throw new Error('Erro simulado.')
            }

            const response = await fetch('https://09441c3d-9208-4fa9-a576-ba237af6b17c.mock.pstmn.io/')
            const responseJson = await response.json()
            const data = responseJson.Dados
            const msg = responseJson.Msg

            setData(data)
            if (msg) {
                setError(false)
                setMsg(msg)
            } else {
                setError(true)
                setMsg('Erro ao buscar dados')
            }

            let filtered = data
            if (searchTerm.trim()) {
                filtered = filtered.filter((client: ClientData) => 
                    client.Nome.toLowerCase().includes(searchTerm.toLowerCase())
                )
            }

            if (status !== StatusFilter.ALL) {
                filtered = filtered.filter((client: ClientData) => 
                    status === StatusFilter.ACTIVE ? client.Disponivel : !client.Disponivel
                )
            }

            setFilteredData(filtered)
        } catch (error) {
            setError(true)
            setMsg(error instanceof Error ? error.message : 'Erro ao buscar dados')
        } finally {
            setIsLoading(false)
        }
    }

    const handleSearch = (term: string, status: StatusFilter) => {
        fetchData(term, status)
    }

    // Função para alternar o estado da API
    const toggleApiStatus = () => {
        setIsApiOn(prev => !prev)
    }

    return (
        <S.PageContainer>
            <Header />
            <S.MainContent>
                
                <SearchField onSearch={handleSearch} data={data} />
                <UsersTable 
                    data={filteredData} 
                    isLoading={isLoading}
                />
            </S.MainContent>

                <MsgNotif msg={msg} error={error}/>
            <Footer isApiOn={isApiOn} toggleApiStatus={toggleApiStatus} />
        </S.PageContainer>
    )
}
