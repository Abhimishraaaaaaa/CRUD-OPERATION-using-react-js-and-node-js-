import React, { useState } from 'react'
import Table from '../components/Table'
import { AddUser } from '../components/AddUser'
import { UpdateUser } from '../components/UpdateUser'
import axios from 'axios'

import toast from 'react-hot-toast';
import DeletUser from '../components/DeletUser'


export const UserTable = () => {
    const [updatedUserId, setUpdatedUserId] = useState()
    const [UserId, setUserId] = useState()
    console.log(updatedUserId)
    const [value, Setvalue] = useState({
        name: "",
        fathername: "",
        email: "",
        phone: ""
    })

    const DeletuserData = (delateid) => {
        setUserId(delateid)
    }
    const handleUserDelet = async (e) => {
        e.preventDefault();
        try {
            const delateuser = await axios.delete(`http://localhost:4000/api/delete${UserId}`)
            const response = delateuser.data
            if (response.
                success
            ) {
                toast.success(response.Message)
                // CloseRef.current.click()

            }
            console.log(response)

        } catch (error) {
            console.log(error)

        }
    }
    const handleonchange = (e) => {
        Setvalue({
            ...value, [e.target.name]: e.target.value
        })

    }

    const UpadteUserData = (Updatedid) => {
        setUpdatedUserId(Updatedid)
        console.log(Updatedid)
    }
    const handlesubmit = async (e) => {
        e.preventDefault();
        try {
            const Updateuser = await axios.put(`http://localhost:4000/api/update${updatedUserId}`, value)
            const response = Updateuser.data
            if (response.
                success
            ) {
                toast.success(response.Message)
                // CloseRef.current.click()

            }
            console.log(response)

        } catch (error) {
            console.log(error)

        }
    }
    return (
        <>
            <Table Deletuser={DeletuserData} UpdatedUser={UpadteUserData} />
            <AddUser />
            <UpdateUser value={value} handlesubmit={handlesubmit} handleonchange={handleonchange} />
            <DeletUser handleUserDelet={handleUserDelet} />
        </>
    )
}
