import { useState } from "react"

export default function ListaDeTarefas() {

    const [texto, setTexto] = useState("")
    const [tarefas, setTarefas] = useState([])

    function adicionarLista() {
        if (texto.trim() === '') return;
        setTarefas([...tarefas, texto]);
        setTexto('')
    }

    return (
        <div>
            <input type="text" value={texto} onChange={(e) => { setTexto(e.target.value) }} />
            <button onClick={adicionarLista}>Enviar</button>
            <button onClick={() => { setTarefas([]) }}>Limpar</button>
            <div>
                {tarefas.length === 0 ? (
                    <p>Lista vazia</p>
                ) : (
                    <ul>
                        {tarefas.map((tarefa, index) => (
                            <li key={index}>{tarefa}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}