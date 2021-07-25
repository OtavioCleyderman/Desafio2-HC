import React, { useState, useEffect } from 'react'
import * as S from './styled'

const tdStyle = {
    textAlign: 'center',
}
const thStyle = {
    padding: '5px',
}


export default function ClientScreen() {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const [contact, setContact] = useState('')
    const [store, setStore] = useState([])

    useEffect(() => {
        const clients = JSON.parse(localStorage.getItem('clients'))
        if (clients) {
            setStore(clients)
        }
    }, [])

    function handleSubmit(e) {
        e.preventDefault()

        let data = {
            name,
            age,
            email,
            contact
        }

        let newClients = JSON.stringify([...store || [], data])

        localStorage.setItem('clients', newClients)

        setStore(JSON.parse(newClients))

    }
    return (
        <S.Container>
            <div className="header-text">
                <h1>Clientes</h1>
            </div>
            <S.FormContainer>
                <form onSubmit={handleSubmit}>
                    <label>
                        Nome:<input type="text" value={name} onChange={e => setName(e.target.value)} required minLength={2} />
                    </label>
                    <label>
                        Idade:<input type="number" value={age} onChange={e => setAge(e.target.value)} required min={1} max={120} />
                    </label>
                    <label htmlFor="email">
                        E-mail:<input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
                    </label>
                    <label>
                        Contato:<input type="tel" format="###.###.###.##" placeholder="(XX)9XXXX-XXXX" value={contact} onChange={e => setContact(e.target.value)} required />
                    </label>

                    <button className="btn-add" type="submit">Adicionar Cliente</button>
                </form>
            </S.FormContainer>
            <div className="table-container">
                <table id="data-table">
                    <thead>
                        <tr>
                            <th style={thStyle}>Nome</th>
                            <th style={thStyle}>Idade</th>
                            <th style={thStyle}>E-mail</th>
                            <th style={thStyle}>Contato</th>
                        </tr>
                    </thead>
                    <tbody>
                        {store.map((client, idx) => (
                            <tr key={idx}>
                                <td style={tdStyle}>{client.name}</td>
                                <td style={tdStyle}>{client.age}</td>
                                <td style={tdStyle}>{client.email}</td>
                                <td style={tdStyle}>{client.contact}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </S.Container>
    )
}