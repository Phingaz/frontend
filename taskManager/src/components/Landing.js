import { useContext, useState } from 'react'
import styled from "./Landing.module.css"
import Main from '../store/ctx'
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';

export const Landing = () => {

    const [input, setinput] = useState({ value: "" })
    const [error, setError] = useState({
        success: Boolean, errMsg: ""
    })

    const lists = useContext(Main)

    const handleInput = (e) => {
        setError({ success: false, errMsg: "" })
        const { name, value } = e.target
        setinput(p => ({
            ...p,
            [name]: value
        }))
    }

    const handleDelete = (id) => {
        if (id === 1 || id === 2) {
            lists.delItem(id)
        } else {
            fetch('https://taskmanager-kf05.onrender.com/api/v1/tasks/' + id, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data.message)
                    setError({ success: data.success, errMsg: data.message })
                    lists.delItem(id)
                })
        }
    }

    const handleEdit = (list) => {
        lists.setEditState(list)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (input.value.trim().length === 0) {
            setError({ success: false, errMsg: `Can't add empty task` })
        } else {
            fetch('https://taskmanager-kf05.onrender.com/api/v1/tasks/', {
                method: "POST",
                body: JSON.stringify(input),
                headers: {
                    "Content-type": "application/json"
                }
            })
                .then(res => res.json())
                .then(data => {
                    setError({ success: data.success, errMsg: `${data.message.value} added successfully` })
                    lists.setList(data.message)
                })
            setinput({ value: "" })
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className={styled.form}>
                <h1>Task manager</h1>
                <div className={styled.input}>
                    <input
                        name="value"
                        value={input.value}
                        placeholder="e.g wash dishes"
                        onChange={handleInput}
                        autoComplete='off'

                    />
                    <button type='submit'>Add</button>
                </div>
                {error.errMsg && <p className={`${!error.success && styled.errMsg} ${error.success && styled.successMsg}`}>{error.errMsg}</p>}
            </form>


            <section className={styled.section}>
                <div>
                    {lists.lists.map(el => {
                        return <div className={styled.list} id={el._id} key={el._id}>
                            <p className={`${styled.p} ${el.checked && styled.strikeThrough}`}>{el.value}</p>

                            <div className={styled.icons}>
                                <DeleteForeverRoundedIcon
                                    className={styled.delete}
                                    onClick={() => handleDelete(el._id)}
                                />

                                {<CheckCircleOutlinedIcon
                                    onClick={() => handleEdit(el)}
                                    className={`${el.checked && styled.checked}`}
                                />}

                                <EditNoteRoundedIcon
                                    className={styled.edit}
                                    onClick={() => handleEdit(el)}
                                />
                            </div>
                        </div>
                    })}
                </div>
            </section>
        </div>
    )
}