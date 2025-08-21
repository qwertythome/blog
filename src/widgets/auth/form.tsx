import {Input} from "@/shared/ui/input";
import {useAuth} from "@/shared/stores/auth/useAuth";

type AuthPageProps = {
    state: "register"|"login"
}

export const AuthForm = ({state}:AuthPageProps) => {
    const {setEmail, setPassword, setUsername, emailError, usernameError, passwordError, emailValid, usernameValid, passwordValid}=useAuth()

    if(state === "register")
    return(
        <div className="flex flex-col gap-5">
            <Input type="text" placeholder="Email" onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {
                setEmail(e.target.value)
                emailValid(e.target.value)
            }}/>
            {emailError && <p>{emailError}</p>}
            <Input type="text" placeholder="Username" onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {
                setUsername(e.target.value)
                usernameValid(e.target.value)
            }}/>
            {usernameError && <p>{usernameError}</p>}
            <Input type="password" placeholder="Password" onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {
                setPassword(e.target.value)
                passwordValid(e.target.value)
            }}/>
            {passwordError && <p>{passwordError}</p>}
        </div>
    )
    if(state === "login"){
        return (
            <div className="flex flex-col gap-5">
                <Input onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {
                    emailValid(e.target.value)
                    setEmail(e.target.value)
                }} type="text" placeholder="Email"/>
                {emailError && <p>{emailError}</p>}
                <Input  onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {
                    setPassword(e.target.value)
                    passwordValid(e.target.value)
                }} type="password" placeholder="Password"/>
                {passwordError && <p>{passwordError}</p>}
            </div>
        )
    }
}