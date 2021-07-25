import React, { useState, useEffect } from 'react'
import * as S from './styled'

const tdStyle = {
    textAlign: 'center',
}

export default function ProductScreen() {
    const [type, setType] = useState('')
    const [price, setPrice] = useState()
    const [category, setCategory] = useState('')
    const [stock, setStock] = useState(1)
    const [store, setStore] = useState([])



    useEffect(() => {
        const products = JSON.parse(localStorage.getItem('products'))
        if (products) {
            setStore(products)
        }
    }, [])

    function formatCurrency(value) {
        const signal = Number(value) < 0 ? "-" : ""
        value = String(value).replace(/\D/g, "") // /\D/g substitui tudo que nao for número
        value = Number(value)
        value = value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })

        return signal + value
    }


    function handleSubmit(e) {
        e.preventDefault()

        let data = {
            type,
            price: formatCurrency(price),
            category,
            stock

        }

        let newProducts = JSON.stringify([...store || [], data])

        localStorage.setItem('products', newProducts)

        setStore(JSON.parse(newProducts))


    }
    return (
        <S.Container>
            <div className="header-text">
                <h1>Produtos</h1>
            </div>
            <S.FormContainer>
                <form onSubmit={handleSubmit}>
                    <label>
                        Categoria:
                        <select id="category" value={category} onChange={e => setCategory(e.target.value)} required>
                            <option value="">Selecione</option>
                            <option value="Instrumentos">Consoles</option>
                            <option value="Amplificadores">Jogos</option>
                            <option value="Acessórios">Acessórios</option>
                        </select>
                    </label>
                    <label>
                        Produto:<input type="text" value={type} onChange={e => setType(e.target.value)} required minLength={2} />
                    </label>
                    <label>
                        Preço:<input type="number" value={price} onChange={e => setPrice(e.target.value)} required min={1} />

                    </label>
                    <label>
                        Quantidade:<input type="number" value={stock} onChange={e => setStock(e.target.value)} required />
                    </label>
                    <button className="btn-add" type="submit">Adicionar Produto</button>
                </form>
            </S.FormContainer>
            <div className="table-container">
                <table id="data-table">
                    <thead>
                        <tr>
                            <th>Categoria</th>
                            <th>Produto</th>
                            <th>Preço</th>
                            <th>Quantidade em Estoque</th>

                        </tr>
                    </thead>
                    <tbody>
                        {store.map((product, idx) => (
                            <tr key={idx}>
                                <td style={tdStyle}>{product.category}</td>
                                <td style={tdStyle}>{product.type}</td>
                                <td style={tdStyle}>{product.price}</td>
                                <td style={tdStyle}>{product.stock}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </S.Container >
    )
}