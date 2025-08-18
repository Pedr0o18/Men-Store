import { useState, useEffect, useRef } from "react"
import { createUserWithEmailAndPassword , updateProfile, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase/config"

export const useAuthenticated = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const [cancel, setCancel] = useState(false)

    const checkIsCancel = () => {
        if (cancel) {
            throw new Error("Operação cancelada")
        }
    }

    /* Registro */
    const createUser = async (data) => {
        checkIsCancel()

        setLoading(true)

        try {
            
        const {user} = await createUserWithEmailAndPassword(
            auth,
            data.email,
            data.password
        )

        await updateProfile(user, {
            displayName: data.username
        })

        setLoading(false)

        return user

        } catch (error) {
            
            console.log(error.message)
            console.log(typeof error.message)

            let systemErrorMessage

            if (error.message.includes("Password")) {
                systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres"
            } else if (error.message.includes("email-already")) {
                systemErrorMessage = "E-mail ja cadastrado"
            } else {
                systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde"
            }

            setError(systemErrorMessage)

            return null
        }

    }

    /* Login */
    const [user, setUser] = useState(null)
    const [authLoading, setAuthLoading] = useState(true)
    const [loginError, setLoginError] = useState(null)

    const login = async (email, password) => {

        try {
            console.log("Tentando Logar com:", email, password)
            await signInWithEmailAndPassword(auth, email, password)

        } catch (err) {
            
            setLoginError("Email ou Senha inválidos")

        }

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            setAuthLoading(false)
        })

        return () => unsubscribe()

    }, [])

    // Logout 
    const logout = () => {

        signOut(auth)
        
    }

    return {
        auth,
        createUser,
        error,
        loading,
        user,
        login,
        loginError,
        authLoading,
        logout
    }
}
